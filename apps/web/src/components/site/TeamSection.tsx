import { Reveal } from "@/components/ui/Reveal";
import { Team } from "./Team";
import { RevealMedia } from "@/components/ui/RevealMedia";

export function TeamSection() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Quem somos</span>
          <h2 className="display-2">
            Tecnologia e comercial <strong>na mesma mesa.</strong>
          </h2>
          <p className="lede">
            Uma equipa pequena, sénior, entre o Brasil e Portugal. Quem desenha
            a estratégia é quem executa; quem constrói a plataforma é quem a
            adapta ao cliente.
          </p>
        </Reveal>
        <Reveal>
          <RevealMedia
            className="band mb-6"
            dormant="/brand/team-dormant.jpg"
            still="/brand/team-still.jpg"
            video="/brand/team-alive-loop.mp4"
            alt="Equipa Draivv em sala escura diante de um painel"
            radius={280}
          />
        </Reveal>
        <Team />
      </div>
    </section>
  );
}
