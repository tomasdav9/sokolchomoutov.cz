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
  const date = dateFormat.format(new Date(`${match.date}T00:00:00Z`));
  return match.time ? `${date} ${match.time}` : date;
}

function Team({ id }: { id: string }) {
  const club = clubs[id];
  return (
    <span className={`mc-team${id === matchData.club ? " us" : ""}`}>
      <img src={club.logo} alt="" width={46} height={46} />
      {club.name}
    </span>
  );
}

function MatchCard({ label, match }: { label: string; match: Match }) {
  const played = isPlayed(match);
  const body = (
    <>
      <span className="mc-label">
        {label} · {match.round}. kolo
      </span>
      <div className="mc-teams">
        <Team id={match.home} />
        <span className={played ? "mc-score" : "mc-vs"}>
          {played ? `${match.homeScore}:${match.awayScore}` : "vs"}
        </span>
        <Team id={match.away} />
      </div>
      <span className="mc-meta">
        {formatDate(match)}
        {match.venue ? ` · ${match.venue}` : ""}
      </span>
    </>
  );

  return match.url ? (
    <a className="match-card" href={match.url} target="_blank" rel="noopener noreferrer">
      {body}
    </a>
  ) : (
    <div className="match-card">{body}</div>
  );
}

export function HeroMatches() {
  const today = pragueToday();
  const last = matches.filter(isPlayed).at(-1);
  const next = matches.find((match) => !isPlayed(match) && match.date >= today);

  if (!last && !next) {
    return null;
  }

  return (
    <div className="hero-matches">
      {last ? <MatchCard label="Poslední zápas" match={last} /> : null}
      {next ? <MatchCard label="Příští zápas" match={next} /> : null}
    </div>
  );
}
