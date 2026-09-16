import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/Icon";

type Item = { icon: IconName; title: string; text: string };

const inbound: Item[] = [
  {
    icon: "platform",
    title: "Site que converte",
    text: "A porta de entrada. Construído em Next.js na Vercel, com narrativa clara, catálogo indexável, jornada até ao contacto e captura estruturada de cada pedido, ligada ao CRM desde o primeiro dia.",
  },
  {
    icon: "search",
    title: "SEO e GEO",
    text: "Aparecer no Google e nas respostas de IA (ChatGPT, Gemini, Perplexity) quando o comprador pesquisa o que a empresa vende, por mercado e por produto.",
  },
  {
    icon: "doc",
    title: "Conteúdo com intenção comercial",
    text: "Páginas e artigos escritos para as pesquisas que antecedem uma compra. Não para volume: para pipeline.",
  },
];

const outbound: Item[] = [
  {
    icon: "target",
    title: "Estudo de mercado e listas",
    text: "Mapeamos as empresas-alvo por país, setor e dimensão, investigamos uma a uma e filtramos à mão e com IA. Só entra na cadência quem vale a pena.",
  },
  {
    icon: "mail",
    title: "Prospeção multicanal",
    text: "E-mail, LinkedIn e telefone com mensagens escritas para cada empresa. Domínios dedicados e entregabilidade monitorizada.",
  },
  {
    icon: "chart",
    title: "Reuniões para a equipa comercial",
    text: "O resultado é uma agenda: decisores interessados, com contexto, entregues à equipa que já sabe vender.",
  },
];

function Column({
  eyebrow,
  title,
  text,
  items,
  tone,
}: {
  eyebrow: string;
  title: string;
  text: string;
  items: Item[];
  tone: "brand" | "tech";
}) {
  return (
    <div className="m-elevated p-6 sm:p-8">
      <span className={`eyebrow ${tone === "tech" ? "tech" : ""}`}>{eyebrow}</span>
      <h3 className="display-2 !mb-4 !text-[clamp(26px,3vw,34px)]">{title}</h3>
      <p className="body-s mb-8 max-w-[52ch]">{text}</p>
      <div className="grid gap-3">
        {items.map((item) => (
          <div key={item.title} className={`card ${tone}`}>
            <div className="icon">
              <Icon name={item.icon} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Products() {
  return (
    <section id="captacao" className="section theme-open">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Produto 01 · Captação de novos clientes</span>
          <h2 className="display-2">
            Duas formas de chegar ao cliente. <strong>Uma só máquina.</strong>
          </h2>
          <p className="lede">
            Inbound traz quem já procura. Outbound vai buscar quem ainda não
            sabe que precisa. Podem ser contratados separadamente, mas juntos
            custam menos do que a soma e alimentam-se um ao outro: o conteúdo
            aquece a prospeção, a prospeção diz ao conteúdo o que o mercado
            pergunta.
          </p>
        </Reveal>

        <div className="split">
          <Reveal>
            <Column
              eyebrow="Inbound"
              title="Ser encontrado"
              text="Para quem precisa de recomeçar: site novo, construído para converter, na mesma stack dos nossos produtos. Depois, SEO/GEO e conteúdo técnico que o fazem ser encontrado."
              items={inbound}
              tone="tech"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Column
              eyebrow="Outbound"
              title="Ir buscar"
              text="Prospeção ativa com listas investigadas, mensagens personalizadas e cadências multicanal. O produto certo para abrir mercados novos."
              items={outbound}
              tone="brand"
            />
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="tag tag-brand">Só outbound</span>
            <span className="tag tag-tech">Só inbound</span>
            <span className="tag tag-solid">Inbound + outbound · custa menos que a soma</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
