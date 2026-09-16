import type { ArtName } from "@/components/art/Art";

export type PlanStep = {
  month: string;
  kind: "study" | "run";
  title: string;
  text: string;
};

/**
 * Seis meses. O site é construído nas primeiras seis semanas, em paralelo
 * com o estudo de mercado do Reach. A partir do mês 2, o site está no ar,
 * o motor de conteúdo publica e as campanhas correm.
 */
export const plan: PlanStep[] = [
  {
    month: "Mês 01",
    kind: "study",
    title: "Site em construção, mercado em estudo",
    text: "Arranque do site novo (estrutura, conteúdo, catálogo indexável). Estudo de mercado nos dois países, auditoria de IA e lista de empresas-alvo. Base de conhecimento carregada com fichas e certificações.",
  },
  {
    month: "Mês 02",
    kind: "run",
    title: "Site no ar, campanhas no ar",
    text: "Publicação do site no domínio exaktus.pt. Primeiros artigos técnicos e primeiras cadências nos dois países. Primeiras respostas entregues à equipa comercial.",
  },
  {
    month: "Mês 03",
    kind: "run",
    title: "Ajuste fino",
    text: "O que respondeu melhor ganha volume; o que não respondeu é reescrito. Primeiras leituras do Google e das IAs sobre o site novo.",
  },
  {
    month: "Mês 04",
    kind: "run",
    title: "Escala",
    text: "Novas listas todas as semanas; reuniões com ritmo previsível. Páginas por sistema compatível e por país a entrar no índice.",
  },
  {
    month: "Mês 05",
    kind: "run",
    title: "Profundidade",
    text: "Segundas abordagens, reativação de conversas paradas, referências dos primeiros contactos. Conteúdo alimentado pelo que a prospeção aprende.",
  },
  {
    month: "Mês 06",
    kind: "run",
    title: "Balanço e decisão",
    text: "O que cada país e cada canal rendeu, o que fica com a Exaktus (site, base de conhecimento, listas) e a recomendação para o período seguinte.",
  },
];

export const marketStudy = [
  {
    title: "Dimensão e segmentos",
    text: "Quantas clínicas, cadeias de clínicas, laboratórios de prótese e distribuidores existem por país, e onde está o ticket mais alto (laboratórios com fluxo digital, grupos de clínicas, distribuidores regionais).",
  },
  {
    title: "Concorrência e requisitos",
    text: "Quem já vende componentes compatíveis no país, a que preço e com que argumentos; o que é exigido para entrar (marcação CE, MDR, registo de dispositivos, distribuição local).",
  },
  {
    title: "Lista de empresas e decisores",
    text: "Investigada e filtrada, com compras, direção técnica e responsáveis de laboratório identificados, pronta para o mês 2.",
  },
  {
    title: "Auditoria de IA na área comercial",
    text: "Onde a IA pode entrar no processo comercial da Exaktus, do pedido de compatibilidade ao orçamento, com prioridades e estimativa de esforço.",
  },
];

export const countryCandidates = [
  { flag: "🇫🇷", name: "França", why: "Grande mercado de implantologia ao lado de Espanha, com laboratórios de prótese em consolidação e pressão de preço sobre os sistemas originais." },
  { flag: "🇮🇹", name: "Itália", why: "Um dos maiores mercados dentários da Europa, com milhares de laboratórios independentes habituados a comprar componentes compatíveis." },
  { flag: "🇩🇪", name: "Alemanha", why: "Ticket alto e cultura de fluxo digital (exocad nasceu aí); compradores que valorizam fabricante europeu certificado." },
  { flag: "🇬🇧", name: "Reino Unido", why: "Cadeias de clínicas e laboratórios de dimensão, com procura por fornecedores alternativos aos grandes sistemas." },
  { flag: "🇵🇱", name: "Polónia", why: "Mercado dentário em crescimento, com turismo dentário e laboratórios que exportam para o resto da Europa." },
];

export type PricingOption = {
  name: string;
  amount: string;
  per: string;
  items: string[];
  note: string;
  hero: boolean;
};

/**
 * Âmbito dos valores. Uma unidade de negócio por contrato de Reach: o
 * estudo, as listas e as mensagens são construídos para um comprador-alvo.
 * Para a Exaktus, a leitura natural é a linha de componentes protéticos
 * compatíveis, que é a que o projeto de internacionalização quer levar fora.
 */
export const scopeNote =
  "* Valores mensais por unidade de negócio: uma linha de produto da Exaktus, com um comprador-alvo definido. O estudo de mercado, as listas e as mensagens são construídos para esse comprador e não se reaproveitam entre linhas diferentes. Alargar a outra linha (por exemplo, equipamentos) é um âmbito à parte, com estudo e valor próprios. O site novo cobre a empresa inteira.";

export const scopeShort =
  "O site cobre a Exaktus inteira. O Reach trabalha uma linha de produto por contrato: a nossa leitura é que os componentes protéticos compatíveis são o ponto de partida, por serem a origem da empresa e o objeto do projeto de internacionalização; confirmamos convosco na reunião de arranque.";

/** Setup do projeto: o site novo, valor único. */
export const setup = {
  name: "Site novo · projeto",
  amount: "€7.000",
  per: "valor único · setup do projeto",
  items: [
    "Site novo em Next.js e React, publicado na Vercel",
    "Estrutura por linha de produto e por sistema compatível",
    "Catálogo indexável ligado à loja online",
    "Formulários ligados ao CRM Draivv, com origem",
    "Blog técnico ligado ao motor de conteúdo",
    "Medição, SEO técnico, desempenho e acessibilidade",
  ],
  note: "Faturado em duas partes: 50% na assinatura, 50% na publicação. O código e o domínio ficam da Exaktus.",
  payment: "50% na assinatura · 50% na publicação",
};

export const pricing: PricingOption[] = [
  {
    name: "Só Rank (inbound)",
    amount: "€1.800",
    per: "por mês · 6 meses",
    items: [
      "Artigos técnicos a partir das fichas da Exaktus",
      "Base de conhecimento e tom de voz",
      "Palavras-chave por mercado e idioma",
      "SEO e GEO sobre o site novo",
      "Relatório semanal Google e IAs",
      "Publicações prontas para o LinkedIn",
    ],
    note: "Para ser encontrado por quem já procura um componente compatível. Com o site novo, é o que o faz crescer.",
    hero: false,
  },
  {
    name: "Só Reach (outbound)",
    amount: "€2.900",
    per: "por mês* · 6 meses",
    items: [
      "Estudo de mercado em 2 países (mês 1)",
      "Oferta adicional: auditoria de IA (ver abaixo)",
      "Listas investigadas, decisor a decisor",
      "Campanhas multicanal a partir do mês 2",
      "Reuniões entregues à equipa comercial",
      "CRM e propostas rastreadas ao assinar",
    ],
    note: "Para abrir os dois países novos. As portas abertas ficam registadas na plataforma desde o primeiro dia.",
    hero: false,
  },
  {
    name: "Reach + Rank",
    amount: "€4.200",
    per: "por mês* · 6 meses",
    items: [
      "Tudo o que está nas duas colunas",
      "Conteúdo alimentado pelo que a prospeção aprende",
      "Páginas de destino por país e por sistema",
      "Oferta adicional: auditoria de IA (ver abaixo)",
      "€500/mês mais barato do que em separado",
    ],
    note: "O que propomos: o site traz o mercado, o Rank faz o site ser encontrado, o Reach vai buscar quem ainda não procura.",
    hero: true,
  },
];

/* ---------- Argumento de plataforma ---------- */

export type Feature = { title: string; text: string; tag: string; art: ArtName };

/** Ao assinar: o que a equipa já tem na plataforma Draivv. */
export const platformAtSignature: Feature[] = [
  {
    art: "crm",
    title: "Acesso ao CRM Draivv",
    text: "Cada clínica, laboratório ou distribuidor abordado, cada resposta e cada reunião ficam registados com origem, temperatura e próximo passo. Os pedidos do site novo entram aqui, com a página de onde vieram.",
    tag: "Incluído",
  },
  {
    art: "proposal",
    title: "Módulo de propostas rastreadas",
    text: "O orçamento sai como página privada. A plataforma regista quando foi aberto, que secções foram lidas e por quanto tempo. O comercial sabe quando ligar.",
    tag: "Incluído",
  },
];

/** Sob medida: a infraestrutura permite automatizar qualquer parte do processo. */
export const platformCustom: Feature[] = [
  {
    art: "automation",
    title: "Automatizar qualquer parte do processo",
    text: "Pedido de compatibilidade, orçamento por referência, encomenda recorrente de laboratório, inscrição na Academy, follow-up: o que for gargalo pode ser automatizado sobre a mesma base.",
    tag: "Sob medida",
  },
  {
    art: "agents",
    title: "Agentes que ajudam a operar o sistema",
    text: "Assistentes por função: respondem a perguntas de compatibilidade a partir do catálogo, preparam o orçamento a partir do histórico, avisam que laboratório parou de encomendar.",
    tag: "Sob medida",
  },
  {
    art: "mcp",
    title: "Operável em conversa",
    text: "Quem tiver acesso liga o Claude ou o ChatGPT à plataforma e pergunta, pede e extrai, sem abrir relatório. Sem licença por utilizador.",
    tag: "Infraestrutura",
  },
];

/** O motor de conteúdo (inbound): presença digital com o SDCMS. */
export const contentEngine: Feature[] = [
  {
    art: "rag",
    title: "Memória da empresa (RAG)",
    text: "Fichas técnicas, tabelas de compatibilidade, certificados e argumentos entram numa base de conhecimento aprovada por vós. Cada artigo cita a fonte.",
    tag: "Base de conhecimento",
  },
  {
    art: "voice",
    title: "Tom de voz que aprende",
    text: "Estilo, glossário, factos e erros a evitar, alimentados por quem assina. O texto sai com a voz da Exaktus, técnica e direta, sem promessas clínicas.",
    tag: "Voz da marca",
  },
  {
    art: "keywords",
    title: "Pesquisa de palavras-chave",
    text: "Oportunidades por mercado e idioma, cruzando o volume de pesquisa por sistema de implantes e componente com o que o Search Console já mostra.",
    tag: "SEO",
  },
  {
    art: "geo",
    title: "Aparecer nas IAs (GEO)",
    text: "Conteúdo estruturado para ser citado pelo ChatGPT, Gemini e Perplexity quando um dentista ou um laboratório pergunta por um componente compatível.",
    tag: "GEO",
  },
  {
    art: "reports",
    title: "Relatórios de performance",
    text: "Leitura semanal do Google e das IAs, com sinais automáticos: página que aparece e não converte, conteúdo a decair, oportunidades a um passo da primeira página.",
    tag: "Google · IAs",
  },
  {
    art: "linkedin",
    title: "Publicações prontas para o LinkedIn",
    text: "Cada artigo vem com a publicação escrita para a página da Exaktus, no tom da marca. A equipa publica quando quiser.",
    tag: "Redes",
  },
];
