import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTA() {
  return (
    <section className="section relative m-signature m-grain overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity"
        style={{ backgroundImage: "url(/brand/detail-hands.jpg)" }}
        aria-hidden="true"
      />
      <div className="container on-signature relative z-10">
        <Reveal>
          <span className="eyebrow">Para a Exaktus</span>
          <h2 className="closing max-w-4xl">
            Um site novo construído para converter, conteúdo técnico que o faz
            ser encontrado e dois países novos abertos com método.
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/proposta" className="btn btn-inverse">
              Ler a proposta completa
            </Link>
            <Link href="/esboco" className="btn btn-inverse-outline">
              Abrir o esboço do site
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
