import { Reveal } from "@/components/ui/Reveal";
import { team } from "./team";

export function Team({ id = "equipa" }: { id?: string }) {
  return (
    <div id={id}>
      <div className="team">
        {team.map((person, i) => (
          <Reveal key={person.name} delay={i * 0.08}>
            <div className={`member h-full ${person.key ? "key" : ""}`}>
              <span className="tag flag">{person.flag}</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="photo" src={person.photo} alt={person.name} />
              <h3>{person.name}</h3>
              <p className="role">{person.role}</p>
              <p>{person.bio}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
