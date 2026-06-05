import { contactPeople, generalContacts } from "../data";
import { SectionHeader } from "./SectionHeader";

export function ContactSection() {
  return (
    <section id="kontakt">
      <div className="wrap">
        <SectionHeader
          kicker="Kontakt"
          title="Spojte se"
          highlightedTitle="s námi"
          description="Vážení fanoušci, pro případné další informace, otázky nebo odpovědi nás neváhejte kontaktovat."
        />

        <div className="gen-contact">
          {generalContacts.map((contact) => (
            <div className="gen-item" key={contact.label}>
              <div className="vl">{contact.label}</div>
              <div className="vv">
                {contact.href ? <a href={contact.href}>{contact.value}</a> : contact.value}
              </div>
            </div>
          ))}
        </div>

        <h4 className="people-title">Kontaktní osoby</h4>
        <div className="people">
          {contactPeople.map((person) => (
            <div className="person" key={person.name}>
              <div className="av">{person.initials}</div>
              <div className="pinfo">
                <div className="pn">{person.name}</div>
                <div className="pr">{person.role}</div>
                <div className="pc">
                  <a href={`mailto:${person.email}`}>{person.email}</a> ·{" "}
                  <a href={person.phoneHref}>{person.phone}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
