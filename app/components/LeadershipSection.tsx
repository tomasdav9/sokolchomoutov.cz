import { boardMembers, menStaff, youthStaff } from "../data";
import { SectionHeader } from "./SectionHeader";

type LeadershipMember = {
  name: string;
  role: string;
  lead?: boolean;
};

function MemberList({ members }: { members: LeadershipMember[] }) {
  return (
    <ul className="vlist">
      {members.map((member) => (
        <li className={member.lead ? "lead" : undefined} key={`${member.name}-${member.role}`}>
          <span className="name">{member.name}</span>
          <span className="role">{member.role}</span>
        </li>
      ))}
    </ul>
  );
}

export function LeadershipSection() {
  return (
    <section id="vedeni">
      <div className="wrap">
        <SectionHeader
          kicker="Vedení klubu"
          title="Lidé za klubem"
          description="7-členný výkonný výbor volený valnou hromadou se stará o chod TJ Sokol Olomouc - Chomoutov."
        />

        <h3 className="subhead">Výkonný výbor</h3>
        <MemberList members={boardMembers} />

        <h3 className="subhead">Realizační tým - muži</h3>
        <MemberList members={menStaff} />

        <h3 className="subhead">Realizační tým - mládež</h3>
        <MemberList members={youthStaff} />
      </div>
    </section>
  );
}
