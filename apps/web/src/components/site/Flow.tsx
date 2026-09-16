import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

const steps = [
  {
    icon: "platform" as const,
    k: "Porta de entrada",
    title: "O site",
    text: "A vitrine. Quem chega por pesquisa, por indicação ou depois de um e-mail nosso encontra uma jornada clara até ao contacto.",
    tone: "tech",
  },
  {
    icon: "outbound" as const,
    k: "Motor",
    title: "Captação",
    text: "Inbound e outbound a trazer conversas novas todos os meses. Cada oportunidade entra com contexto: quem é, o que procura, de onde veio.",
    tone: "brand",
  },
  {
    icon: "bot" as const,
    k: "Por trás",
    title: "Plataforma",
    text: "A ferramenta personalizada onde a equipa acompanha, cota, propõe e fecha, com assistentes de IA por tarefa e módulos ligados sob demanda.",
    tone: "tech",
  },
];

export function Flow() {
  return (
    <section id="como-se-liga" className="section">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: "url(/brand/bg-section.jpg)" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, var(--bg) 0%, transparent 30%, transparent 70%, var(--bg) 100%)" }} aria-hidden="true" />
      <div className="container">
        <Reveal>
          <span className="eyebrow">Como se liga</span>
          <h2 className="display-2">
            Da primeira visita ao contrato assinado, <strong>sem mudar de sistema.</strong>
          </h2>
          <p className="lede">
            Começa-se pelo que faz falta hoje. O site e a captação podem
            existir sozinhos; a plataforma pode entrar mais tarde. Mas o
            desenho é um só, e é por isso que nada se perde pelo caminho.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flow">
            {steps.map((s, i) => (
              <div key={s.title} className="contents">
                <div className={`card ${s.tone} h-full`}>
                  <div className="icon">
                    <Icon name={s.icon} />
                  </div>
                  <span className="idx">{s.k}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
                {i < steps.length - 1 ? (
                  <div className="arrow" aria-hidden="true">
                    →
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="shift mt-12">
            {[
              ["Site bonito que ninguém mede", "Site que capta e entrega o lead ao CRM com origem"],
              ["Prospeção quando sobra tempo", "Cadências a correr todos os dias, com relatório semanal"],
              ["Cotação feita à mão no Excel", "Cotação gerada na plataforma e rastreada até à resposta"],
              ["Ferramenta genérica com chat ao lado", "Assistente por tarefa que conhece o processo da empresa"],
            ].map(([from, to]) => (
              <div key={to} className="shift-row">
                <span className="from">{from}</span>
                <span className="arr">→</span>
                <span className="to">{to}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
