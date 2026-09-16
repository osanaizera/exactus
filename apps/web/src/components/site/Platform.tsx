import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/Icon";

const modules: { icon: IconName; title: string; text: string; assistant: string }[] = [
  {
    icon: "nurture",
    title: "Relacionamento e nutrição",
    text: "Cada contacto com histórico, temperatura e próximo passo. Sequências de e-mail que mantêm a conversa viva sem ocupar a equipa.",
    assistant: "Assistente de follow-up",
  },
  {
    icon: "quote",
    title: "Cotações",
    text: "Pedidos de orçamento estruturados, produtos e preços na plataforma, cotação gerada e enviada com rastreio de abertura.",
    assistant: "Assistente de cotação",
  },
  {
    icon: "doc",
    title: "Propostas e contratos",
    text: "Propostas a partir de modelos da empresa, cláusulas revistas por IA, assinatura eletrónica e faturação ligada ao negócio.",
    assistant: "Assistente de proposta",
  },
  {
    icon: "chart",
    title: "Pipeline e previsão",
    text: "Funil visível todos os dias: o que entrou, o que está parado, o que fecha este mês. Briefing diário para quem gere a equipa.",
    assistant: "Assistente de análise",
  },
  {
    icon: "bot",
    title: "Base de conhecimento",
    text: "Catálogos, normas e argumentos comerciais indexados. Os assistentes respondem com o que a empresa sabe, não com o que a internet acha.",
    assistant: "Assistente de conhecimento",
  },
  {
    icon: "module",
    title: "Módulos sob demanda",
    text: "Tarefas, metas, faturação, integrações com ERP e e-mail. Liga-se o que faz falta, quando faz falta. Nada de licença por lugar.",
    assistant: "Assistentes por tarefa",
  },
];

export function Platform() {
  return (
    <section id="plataforma" className="section">
      <div className="container">
        <Reveal>
          <span className="eyebrow tech">Produto 02 · Plataforma de relacionamento</span>
          <h2 className="display-2">
            Depois de abrir a porta, <strong>a relação fica organizada.</strong>
          </h2>
          <p className="lede">
            Uma plataforma própria da Draivv, adaptada a cada cliente, onde a
            equipa comercial gere contactos, cotações e propostas com um
            assistente de IA especializado em cada tarefa. Não é um CRM
            genérico com um chat ao lado: cada assistente conhece o processo,
            os produtos e os documentos da empresa.
          </p>
        </Reveal>

        <div className="cardgrid">
          {modules.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.06}>
              <div className="card tech h-full">
                <div className="icon">
                  <Icon name={m.icon} />
                </div>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
                <span className="tag tag-tech mt-4">{m.assistant}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="statband mt-14">
            <div className="stat">
              <div className="big neutral">1</div>
              <div className="cap">plataforma, personalizada por cliente, sem licença por utilizador</div>
            </div>
            <div className="stat">
              <div className="big">6+</div>
              <div className="cap">módulos ligáveis sob demanda, à medida que a operação cresce</div>
            </div>
            <div className="stat">
              <div className="big neutral">1 : 1</div>
              <div className="cap">um assistente de IA por tarefa, treinado no processo da empresa</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
