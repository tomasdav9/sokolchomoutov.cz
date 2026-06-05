import { sponsors } from "../data";
import { SectionHeader } from "./SectionHeader";

export function SponsorsSection() {
  return (
    <section id="sponzori">
      <div className="wrap">
        <SectionHeader
          kicker="Partneři klubu"
          title="Naši"
          highlightedTitle="sponzoři"
          description="Velké poděkování patří našim dlouholetým partnerům, kteří nás podporují v rozvoji chomoutovského fotbalu."
        />
        <div className="sponsor-grid">
          {sponsors.map((sponsor) => (
            <div className="sponsor" key={sponsor.src}>
              <img src={sponsor.src} alt={sponsor.alt} />
            </div>
          ))}
        </div>
        <p className="sponsor-note">
          Chcete podpořit chomoutovský fotbal?{" "}
          <a className="btn btn-primary" href="#kontakt">
            Staňte se partnerem
          </a>
        </p>
      </div>
    </section>
  );
}
