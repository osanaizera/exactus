/**
 * Diagnóstico de procura e plano de artigos técnicos.
 * Volumes: média mensal de pesquisas no Google, DataForSEO, setembro de 2026,
 * Portugal (pt) e Espanha (es). Termos de cauda longa (por exemplo,
 * "ti-base compatível straumann") não devolvem volume nos mercados pequenos:
 * são exatamente as pesquisas em que um artigo técnico com página de catálogo
 * ganha sem concorrência. O mês 1 confirma tudo com o Search Console.
 */
export type KeywordRow = {
  term: string;
  pt: number | null;
  es: number | null;
  intent: "compra" | "comparação" | "informação";
  note?: string;
};

export const keywordRows: KeywordRow[] = [
  { term: "scanbody / scan body", pt: 340, es: 1440, intent: "compra", note: "componente por sistema e plataforma" },
  { term: "scanner intraoral", pt: 260, es: 170, intent: "compra", note: "CPC €7,55 em Espanha" },
  { term: "exocad · 3shape", pt: 350, es: 2000, intent: "comparação", note: "bibliotecas CAD Exaktus" },
  { term: "abutment / pilar", pt: 70, es: 170, intent: "compra" },
  { term: "análogo digital", pt: null, es: 140, intent: "compra" },
  { term: "medit i900 · preço", pt: 50, es: 150, intent: "compra" },
  { term: "ti-base", pt: null, es: 70, intent: "compra" },
  { term: "pilar multi-unit", pt: null, es: 70, intent: "compra" },
  { term: "cad cam dental · fresadora", pt: 20, es: 470, intent: "comparação" },
  { term: "aditamentos (ES) · componentes (PT)", pt: 10, es: 910, intent: "informação" },
  { term: "depósito / loja de material dentário", pt: 40, es: 1000, intent: "compra" },
  { term: "curso de implantologia", pt: 20, es: 30, intent: "compra", note: "CPC €31 em Espanha" },
];

export const keywordTotals = {
  pt: "1.160",
  es: "6.620",
  note: "Pesquisas por mês, só nos termos acima, sem contar marcas genéricas nem termos ambíguos.",
};

/** O que medimos desde o primeiro dia, e o que a Exaktus não vê hoje. */
export const measures = [
  {
    title: "Tráfego e origem",
    text: "Quantas visitas, de onde (Google, IAs, LinkedIn, e-mail, direto) e o que fazem: catálogo, compatibilidade, pedido.",
  },
  {
    title: "Termos que trazem visitas",
    text: "Que pesquisas levam ao site, em que posição, com que taxa de clique. Search Console ligado e lido todas as semanas.",
  },
  {
    title: "Presença nas IAs",
    text: "Se o ChatGPT, o Gemini e o Perplexity citam a Exaktus quando alguém pergunta por um componente compatível. Medido por pergunta.",
  },
  {
    title: "Aptidão do canal",
    text: "Se o site está construído para aparecer: páginas indexáveis por produto, dados estruturados, velocidade, sitemap, uma língua por mercado.",
  },
];

export type ArticleRow = {
  search: string;
  article: string;
  page: string;
  line: "Componentes" | "Implantes" | "Equipamentos" | "Academy";
};

/** Artigos técnicos ligados a pesquisas de alta intenção de compra. */
export const articles: ArticleRow[] = [
  {
    search: "scanbody compatível · por sistema",
    article: "Scanbody compatível: como escolher por sistema e plataforma (Nobel, Straumann, Zimmer, Osstem)",
    page: "Catálogo · scanbodies",
    line: "Componentes",
  },
  {
    search: "ti-base straumann · aditamento compatible",
    article: "Ti-base compatível com Straumann Bone Level: ajuste passivo, torque e biblioteca exocad e 3Shape",
    page: "Catálogo · Ti-base por plataforma",
    line: "Componentes",
  },
  {
    search: "pilar angulado · abutment",
    article: "Pilar reto ou pilar angulado 17°: quando usar cada um e como confirmar a plataforma",
    page: "Catálogo · pilares",
    line: "Componentes",
  },
  {
    search: "análogo digital",
    article: "Análogo digital para modelos impressos: compatibilidade com bibliotecas CAD e tolerâncias",
    page: "Catálogo · análogos",
    line: "Componentes",
  },
  {
    search: "pilar multi-unit",
    article: "Multi-unit compatível: componentes para prótese aparafusada sobre implantes",
    page: "Catálogo · multi-unit",
    line: "Componentes",
  },
  {
    search: "cone morse · hexágono interno",
    article: "Hexágono interno ou cone morse: o que muda para a clínica e para o laboratório",
    page: "Implantes · sistema Exaktus",
    line: "Implantes",
  },
  {
    search: "scanner intraoral · medit i900 preço",
    article: "Scanner intraoral: o que comparar antes de comprar e o que muda com o Medit i900",
    page: "Equipamentos · pedir demonstração",
    line: "Equipamentos",
  },
  {
    search: "exocad · 3shape · cad cam dental",
    article: "Fluxo digital de ponta a ponta: da digitalização à Ti-base fresada com bibliotecas Exaktus",
    page: "Fluxo digital · bibliotecas",
    line: "Componentes",
  },
  {
    search: "curso de implantologia",
    article: "Como escolher um curso de implantologia com prática em paciente",
    page: "Academy · calendário",
    line: "Academy",
  },
  {
    search: "marcação CE · UDI · rastreabilidade",
    article: "Marcação CE, UDI e rastreabilidade em componentes compatíveis: o que o distribuidor deve exigir",
    page: "Compatibilidade · certificados",
    line: "Componentes",
  },
];
