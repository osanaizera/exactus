/**
 * O site novo: o que o esboço já mostra, o que entra no projeto e o que
 * muda em relação ao site atual. O esboço navegável está em /esboco.
 */
export const ESBOCO_URL = "/esboco";

export type SiteSection = { title: string; text: string };

/** As secções do esboço, pela ordem em que aparecem. */
export const siteSections: SiteSection[] = [
  { title: "Hero com desenho técnico", text: "A promessa em uma frase (componentes compatíveis com o sistema que já usa), o desenho de um pilar e implante à escala, e dois caminhos: ver catálogo ou verificar compatibilidade." },
  { title: "Três linhas de produto", text: "Componentes protéticos, implantes (sistema próprio e JD Dental) e equipamentos, cada uma com a sua ficha, os seus chips e o seu visual." },
  { title: "Fluxo digital", text: "Digitalização, planeamento CAD, fresagem e prótese final, com as bibliotecas Exaktus em exocad e 3Shape. Uma secção que explica ao laboratório como a Exaktus entra no seu dia." },
  { title: "Compatibilidade por sistema", text: "Nobel Biocare, Straumann, Zimmer Biomet, Dentsply Sirona, BioHorizons, MIS, Osstem e o sistema Exaktus. É a página que o técnico pesquisa; no projeto, cada sistema ganha uma página própria." },
  { title: "História, Academy e Innova", text: "Quase vinte anos em seis marcos, a Academy com o calendário de cursos e a Innova para a medicina estética." },
  { title: "Contacto que entra no CRM", text: "Formulário com assunto (orçamento, compatibilidade, demonstração, Academy), WhatsApp e loja online. Cada pedido entra no CRM Draivv com a página de origem." },
];

/** De → Para: o que muda em relação ao site atual. */
export const siteShift: Array<[string, string]> = [
  ["Site institucional que apresenta a empresa", "Site que responde à pergunta do técnico: é compatível com o meu sistema?"],
  ["Catálogo só dentro da loja", "Catálogo indexável no site, com cada referência a apontar para a loja"],
  ["Contacto genérico por e-mail", "Pedido estruturado (orçamento, compatibilidade, demo, Academy) direto no CRM, com origem"],
  ["Uma língua, um mercado", "Português, espanhol e as línguas dos dois países do Reach, com páginas por país"],
  ["Notícias esporádicas", "Blog técnico alimentado pelo motor de conteúdo, com fonte citada e publicação LinkedIn pronta"],
];

/** O que entra no projeto do site (setup). */
export const siteDeliverables: SiteSection[] = [
  { title: "Estrutura e conteúdo", text: "Arquitetura por linha de produto e por sistema compatível, textos revistos com a equipa técnica, fotografia e desenhos técnicos como no esboço." },
  { title: "Catálogo indexável", text: "Cada família e cada sistema compatível com página própria, dados estruturados para o Google e ligação à loja online para encomendar." },
  { title: "Captura ligada ao CRM", text: "Formulários por assunto, WhatsApp e pedidos de demonstração a entrar no CRM Draivv com origem, página e campanha." },
  { title: "Blog técnico", text: "Ligado ao motor de conteúdo da Draivv: os artigos do Rank publicam-se no site sem intervenção, com sitemap e feeds atualizados." },
  { title: "Multilíngue", text: "Português e espanhol de raiz; as línguas dos dois países do Reach entram com as páginas de destino por país." },
  { title: "Medição e desempenho", text: "Analytics, Search Console, Core Web Vitals verdes, acessibilidade e SEO técnico (metadados, dados estruturados, sitemap, robots) tratados no projeto." },
];

/** Calendário do projeto do site, em semanas, dentro do mês 1 e início do mês 2. */
export const siteTimeline: Array<{ week: string; title: string; text: string }> = [
  { week: "Semana 1", title: "Arranque", text: "Reunião de arranque, acessos, materiais técnicos (fichas, fotografias, tabelas de compatibilidade, certificados). Fecho da estrutura." },
  { week: "Semanas 2 e 3", title: "Conteúdo e páginas", text: "Textos revistos com a equipa técnica, páginas por linha e por sistema, catálogo, formulários ligados ao CRM." },
  { week: "Semanas 4 e 5", title: "Revisão e afinação", text: "Revisão pela Exaktus em ambiente de pré-visualização, ajustes, testes em telemóvel, desempenho e acessibilidade." },
  { week: "Semana 6", title: "Publicação", text: "Domínio exaktus.pt apontado, redirecionamentos do site antigo, Search Console, primeiro artigo publicado." },
];

/** O que a Exaktus precisa de dar para o projeto correr. */
export const siteNeeds = [
  "Fichas técnicas e tabelas de compatibilidade por sistema",
  "Fotografias de produto e da equipa (ou sessão a combinar)",
  "Certificados e textos legais em vigor",
  "Acesso ao domínio e à loja online",
  "Uma pessoa da equipa técnica para rever o conteúdo",
];
