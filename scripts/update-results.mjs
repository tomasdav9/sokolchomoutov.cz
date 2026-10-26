// Fills in scores for played matches in app/matches.json that don't have one yet.
// fotbal.cz is behind a Cloudflare challenge, so results come from fotbalunas.cz.
import { readFile, writeFile } from "node:fs/promises";

const SOURCE = "https://fotbalunas.cz/tym/2721";
const DATA = new URL("../app/matches.json", import.meta.url);

const data = JSON.parse(await readFile(DATA, "utf8"));
const today = new Intl.DateTimeFormat("sv-SE", { timeZone: "Europe/Prague" }).format(new Date());
const pending = data.matches.filter((m) => m.homeScore === null && m.date <= today);

if (pending.length === 0) {
  console.log("No played matches without a result.");
  process.exit(0);
}

const response = await fetch(SOURCE, { headers: { "User-Agent": "sokolchomoutov.cz results updater" } });
if (!response.ok) {
  throw new Error(`${SOURCE} returned ${response.status}`);
}
const html = await response.text();

const text = (fragment) =>
  fragment.replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();

const rows = new Map();
for (const item of html.split('<li class="list-group-item match-item').slice(1)) {
  const id = item.match(/\/zapas\/(\d+)\//)?.[1];
  const teams = item.match(/zapas-item-utkani[^>]*>\s*<a[^>]*>([\s\S]*?)<\/a>/)?.[1];
  const result = item.match(/zapas-item-vysledek[^>]*>([\s\S]*?)<small/)?.[1];
  const when = item.match(/(\d{2})\.(\d{2})\.\s*(\d{2}:\d{2})/);
  if (!id || !teams || !when || rows.has(id)) continue;

  const [home, away] = text(teams).split(" - ");
  const score = result ? text(result).match(/^(\d+):(\d+)/) : null;
  rows.set(id, {
    home,
    away,
    day: `${when[2]}-${when[1]}`,
    time: when[3],
    homeScore: score ? Number(score[1]) : null,
    awayScore: score ? Number(score[2]) : null,
  });
}

if (rows.size === 0) {
  throw new Error("No matches parsed from fotbalunas.cz, the page layout probably changed.");
}

let updated = 0;
for (const match of pending) {
  const weAreHome = match.home === data.club;
  const row = [...rows.values()].find(
    (r) =>
      r.day === match.date.slice(5) &&
      (!match.time || r.time === match.time) &&
      /chomoutov/i.test(weAreHome ? r.home : r.away),
  );
  const name = `${data.clubs[match.home].name} - ${data.clubs[match.away].name} (${match.date})`;

  if (!row || row.homeScore === null) {
    console.log(`No result yet: ${name}`);
    continue;
  }

  match.homeScore = row.homeScore;
  match.awayScore = row.awayScore;
  updated++;
  console.log(`Updated: ${name} ${row.homeScore}:${row.awayScore}`);
}

if (updated > 0) {
  await writeFile(DATA, `${JSON.stringify(data, null, 2)}\n`);
}
