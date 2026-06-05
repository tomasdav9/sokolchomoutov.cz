import { clubEmail } from "../data";
import { SectionHeader } from "./SectionHeader";

export function VenueSection() {
  return (
    <section id="hriste">
      <img className="crest-wm" src="/assets/logo.jpg" alt="" />
      <div className="wrap">
        <SectionHeader
          kicker="Kde hrajeme"
          title="Naše"
          highlightedTitle="hřiště"
          description="Fotbalové hřiště TJ Sokol Olomouc - Chomoutov najdete na ulici Horecká v městské části Chomoutov."
          light
        />
        <div className="venue-layout">
          <div className="venue-card">
            <h3>Fotbalový areál</h3>
            <div className="vrow">
              <div className="ic">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 21s-7-6.3-7-11a7 7 0 0114 0c0 4.7-7 11-7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </div>
              <div>
                <div className="vl">Adresa</div>
                <div className="vv">
                  Horecká
                  <br />
                  Olomouc - Chomoutov, 783 35
                </div>
              </div>
            </div>
            <div className="vrow">
              <div className="ic">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.6A2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.3-1.2a2 2 0 012.1-.5c.9.3 1.8.6 2.8.7a2 2 0 011.8 2z" />
                </svg>
              </div>
              <div>
                <div className="vl">Telefon</div>
                <div className="vv">
                  <a href="tel:+420773098048">+420 773 098 048</a>
                </div>
              </div>
            </div>
            <div className="vrow">
              <div className="ic">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="1" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              </div>
              <div>
                <div className="vl">E-mail</div>
                <div className="vv">
                  <a href={`mailto:${clubEmail}`}>{clubEmail}</a>
                </div>
              </div>
            </div>
            <div className="dir">
              <a
                className="btn btn-light"
                href="https://www.google.com/maps/dir/?api=1&destination=Horeck%C3%A1,+Olomouc-Chomoutov"
                target="_blank"
                rel="noopener"
              >
                Navigovat na hřiště →
              </a>
            </div>
          </div>
          <div className="map-frame">
            <iframe
              title="Mapa - hřiště Chomoutov"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Horeck%C3%A1,+Olomouc-Chomoutov,+783+35&z=15&output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
