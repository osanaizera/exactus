import { KV_REACH, KV_RANK, KV_RUN } from "./collages";

/**
 * Os três métodos da Draivv, escritos para quem lê a proposta sem
 * acompanhamento: uma frase para dizer o que é, três blocos curtos para
 * dizer como funciona e o que a empresa recebe. Linguagem simples, sem
 * jargão. Nesta proposta o Rank entra primeiro, porque traz o site novo.
 */
export type OfferCard = { label: string; text: string };

export type Offer = {
  key: "rank" | "reach" | "run";
  num: string;
  /** Nome comercial, com a parte destacada a azul. */
  name: string;
  nameStrong: string;
  strap: string;
  /** Título do slide, com a parte destacada a azul. */
  title: string;
  titleStrong: string;
  /** Uma frase para o slide-resumo dos três métodos. */
  short: string;
  /** Etiqueta curta: como entra nesta proposta. */
  tag: string;
  summary: string;
  cards: OfferCard[];
  /** Como esta oferta entra na proposta da Exaktus. */
  role: string;
  image: string;
  alt: string;
  /** Capa ilustrada (fundo branco): mostra-se inteira, sem recorte nem véu. */
  art?: boolean;
};

export const offers: Offer[] = [
  {
    key: "rank",
    num: "Oferta 01",
    name: "Draivv",
    nameStrong: "Rank",
    strap: "Um site novo e ser encontrado por quem procura",
    short:
      "Site novo, artigos técnicos escritos a partir do que a Exaktus sabe e presença no Google e nas respostas de IA, para que o dentista e o laboratório encontrem a Exaktus quando procuram um componente compatível.",
    tag: "Base desta proposta: site + conteúdo",
    title: "Quando o laboratório pesquisa,",
    titleStrong: "a resposta é a Exaktus.",
    summary:
      "Antes de encomendar um componente, o técnico de prótese pesquisa a referência no Google e pergunta a uma IA se existe compatível. O Rank começa por um site novo, construído para converter, e depois produz conteúdo técnico a partir das fichas da Exaktus, publica-o e mede todas as semanas onde a Exaktus aparece.",
    cards: [
      {
        label: "O que é",
        text: "Site novo (projeto, valor único) e um serviço mensal de conteúdo técnico, SEO e presença nas respostas de IA (ChatGPT, Gemini, Perplexity), por mercado e idioma.",
      },
      {
        label: "Como funciona",
        text: "Fichas técnicas, tabelas de compatibilidade e certificados entram numa base de conhecimento. Cada artigo sai com as fontes citadas, no tom da Exaktus e pronto para o LinkedIn.",
      },
      {
        label: "O que recebem",
        text: "Um site com catálogo indexável e formulários ligados ao CRM, artigos para as pesquisas que antecedem uma encomenda e um relatório semanal.",
      },
    ],
    role: "É a base desta proposta: o site novo como setup do projeto e o Rank como serviço mensal a partir do mês 2.",
    image: KV_RANK,
    alt: "Ilustração: o assistente Draivv aponta para uma resposta de IA em que a empresa aparece recomendada, com gráficos a subir",
    art: true,
  },
  {
    key: "reach",
    num: "Oferta 02",
    name: "Draivv",
    nameStrong: "Reach",
    strap: "Ir buscar clientes em mercados novos",
    short:
      "Prospeção internacional feita pela nossa equipa: estudo de mercado, laboratórios, clínicas e distribuidores investigados um a um, mensagens e reuniões marcadas para os vossos comerciais.",
    tag: "Nesta proposta: 2 países, 6 meses",
    title: "Uma equipa a prospetar por vós,",
    titleStrong: "todos os dias.",
    summary:
      "A Exaktus escolhe os países. Nós estudamos o mercado, encontramos os laboratórios, as clínicas e os distribuidores certos, escrevemos as mensagens e falamos com os decisores. À vossa equipa comercial chega uma reunião marcada, com contexto.",
    cards: [
      {
        label: "O que é",
        text: "Prospeção feita pela equipa da Draivv, com ferramentas próprias e relatório semanal.",
      },
      {
        label: "Como funciona",
        text: "Mês 1: estudo de mercado, auditoria de IA e lista de empresas. Do mês 2 em diante: campanhas por e-mail, LinkedIn e telefone.",
      },
      {
        label: "O que recebem",
        text: "Reuniões com decisores interessados e todas as oportunidades registadas na plataforma Draivv, com acesso para a vossa equipa.",
      },
    ],
    role: "Entra nesta proposta para os dois países novos, com a auditoria de IA incluída. O site novo dá-lhe onde aterrar.",
    image: KV_REACH,
    alt: "Luís Caturna, de blazer claro, ao telefone, e Felippe Cassiano a rever uma lista de empresas europeias, num escritório com luz natural",
  },
  {
    key: "run",
    num: "Oferta 03",
    name: "Draivv",
    nameStrong: "Run",
    strap: "Agentes e automações construídos para o vosso processo",
    short:
      "Software e assistentes de IA construídos para o vosso processo: automatizam tarefas repetitivas e ajudam a equipa a operar o sistema no dia a dia.",
    tag: "CRM incluído ao assinar; agentes sob proposta",
    title: "Agentes sob medida,",
    titleStrong: "feitos para a forma como trabalham.",
    summary:
      "Software e assistentes de IA à medida. O CRM, o gestor de conteúdo, o motor de comunicação e a camada de IA são nossos, por isso conseguimos automatizar qualquer passo do vosso processo comercial e criar um assistente que ajude a equipa a operá-lo. O que fazer primeiro define-se convosco.",
    cards: [
      {
        label: "O que é",
        text: "Projetos de software com IA, construídos sobre a plataforma Draivv e ligados aos sistemas que já usam, como a loja online.",
      },
      {
        label: "Exemplos",
        text: "Responder a pedidos de compatibilidade a partir do catálogo, preparar orçamentos por referência, avisar que laboratório parou de encomendar, resumir o pipeline para a direção.",
      },
      {
        label: "Como se contrata",
        text: "Ao assinar já têm o CRM e o módulo de propostas. Cada agente ou automação é especificado convosco, com prazo e valor próprios.",
      },
    ],
    role: "Incluído em parte desde a assinatura (CRM e propostas); o resto sob medida, sob proposta.",
    image: KV_RUN,
    alt: "Filipe Osanai e Felippe Cassiano diante de um monitor com um painel, com o assistente Draivv em cima da secretária, num escritório em open space com plantas",
  },
];
