import matchData from "../matches.json";

type Club = { name: string; logo: string };

type Match = {
  round: number;
  date: string;
  time: string | null;
  home: string;
  away: string;
  homeScore: number | null;
  awayScore: number | null;
  venue: string | null;
  url: string | null;
};

const clubs: Record<string, Club> = matchData.clubs;

const matches = [...(matchData.matches as Match[])].sort((a, b) =>
  `${a.date} ${a.time ?? ""}`.localeCompare(`${b.date} ${b.time ?? ""}`),
);

const dateFormat = new Intl.DateTimeFormat("cs-CZ", {
  weekday: "short",
  day: "numeric",
  month: "numeric",
  timeZone: "UTC",
});

function pragueToday() {
  return new Intl.DateTimeFormat("sv-SE", { timeZone: "Europe/Prague" }).format(new Date());
}

function isPlayed(match: Match) {
  return match.homeScore !== null && match.awayScore !== null;
}

function formatDate(match: Match) {
  return dateFormat.format(new Date(`${match.date}T00:00:00Z`));
}

function outcome(match: Match) {
  const home = match.homeScore ?? 0;
  const away = match.awayScore ?? 0;
  const diff = match.home === matchData.club ? home - away : away - home;
  if (diff > 0) return { key: "win", label: "Výhra" };
  if (diff < 0) return { key: "loss", label: "Prohra" };
  return { key: "draw", label: "Remíza" };
}

function TeamRow({ id, goals, won }: { id: string; goals: number | null; won: boolean }) {
  const club = clubs[id];
  return (
    <li className={`fx-team${won ? " won" : ""}`}>
      <img src={club.logo} alt="" width={36} height={36} />
      <span className="fx-name">{club.name}</span>
      {goals !== null ? <span className="fx-goals">{goals}</span> : null}
    </li>
  );
}

function Fixture({ label, match }: { label: string; match: Match }) {
  const played = isPlayed(match);
  const result = played ? outcome(match) : null;
  const homeScore = match.homeScore ?? 0;
  const awayScore = match.awayScore ?? 0;

  return (
    <a
      className={`fixture${played ? "" : " is-next"}`}
      href={match.url ?? matchData.source}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="fx-head">
        <span className="fx-tag">{label}</span>
        <span>{match.round}. kolo</span>
      </div>
      <div className="fx-board">
        <ul className="fx-teams">
          <TeamRow id={match.home} goals={match.homeScore} won={played && homeScore > awayScore} />
          <TeamRow id={match.away} goals={match.awayScore} won={played && awayScore > homeScore} />
        </ul>
        {played ? null : (
          <div className="fx-kickoff">
            <span>{formatDate(match)}</span>
            <strong>{match.time ?? "--:--"}</strong>
          </div>
        )}
      </div>
      <div className="fx-foot">
        {result ? <span className={`fx-result ${result.key}`}>{result.label}</span> : null}
        <span>
          {played ? `${formatDate(match)}, ` : ""}
          {match.venue}
        </span>
      </div>
    </a>
  );
}

export function MatchesSection() {
  const today = pragueToday();
  const played = matches.filter(isPlayed);
  const next = matches.find((match) => !isPlayed(match) && match.date >= today);
  const recent = played.slice(next ? -2 : -3);

  if (recent.length === 0 && !next) {
    return null;
  }

  return (
    <section id="zapasy">
      <div className="wrap">
        <div className="matches-head">
          <h2>Zápasy</h2>
          <p>Muži hrají 7. ligu sk. B Olomouckého kraje.</p>
        </div>
        <div className="fixtures">
          {recent.map((match, index) => (
            <Fixture
              key={match.url ?? match.date}
              label={index === recent.length - 1 ? "Poslední zápas" : "Odehráno"}
              match={match}
            />
          ))}
          {next ? <Fixture label="Příští zápas" match={next} /> : null}
        </div>
        <a className="fixtures-all" href={matchData.source} target="_blank" rel="noopener noreferrer">
          Celý rozpis a výsledky na fotbal.cz
        </a>
      </div>
    </section>
  );
}
