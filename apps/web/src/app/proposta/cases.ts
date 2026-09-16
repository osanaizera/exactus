/**
 * Casos com números. Fontes internas, setembro de 2026:
 * Tiajo (Reach): "Consolidação do estudo de mercado e prospecção", 03/09/2026.
 * Casa Flora (Rank): telemetria do site nos últimos 30 dias, 15/09/2026.
 * Plataforma: painel do SDCMS, 15/09/2026.
 */
export type CaseStat = { value: string; label: string; neutral?: boolean };

export type Case = {
  key: string;
  method: string;
  client: string;
  sector: string;
  headline: string;
  text: string;
  stats: CaseStat[];
};

export const headlineStats: CaseStat[] = [
  { value: "588", label: "empresas mapeadas em dois países para uma fabricante portuguesa", neutral: true },
  { value: "280", label: "decisores de compra identificados, com nome, cargo e canal" },
  { value: "3,4×", label: "mais empresas-alvo na Suécia do que a lista que o cliente tinha", neutral: true },
  { value: "640+", label: "artigos publicados pelo nosso motor de conteúdo, em 35 marcas" },
];

export const cases: Case[] = [
  {
    key: "tiajo",
    method: "Reach",
    client: "Tiajo Workwear",
    sector: "Tecidos técnicos para vestuário profissional · Portugal",
    headline: "Alemanha e Suécia, do estudo à lista pronta em seis semanas.",
    text: "A Tiajo tinha uma lista com 530 empresas e quase nenhum contacto: nas 111 contas prioritárias, zero nomes. Em seis semanas mapeámos 588 empresas, retirámos as que revendem ou já são clientes e ficámos com 233 fabricantes qualificados. Encontrámos 500 pessoas e 280 decisores de compra, 240 deles com e-mail ou LinkedIn confirmado. As campanhas arrancaram em setembro.",
    stats: [
      { value: "233", label: "fabricantes qualificados" },
      { value: "280", label: "decisores identificados" },
      { value: "21 → 72", label: "empresas-alvo conhecidas na Suécia" },
    ],
  },
  {
    key: "casaflora",
    method: "Rank",
    client: "Casa Flora",
    sector: "Consultoria de marca · Brasil",
    headline: "Um site que as IAs já citam.",
    text: "Site construído na mesma stack que propomos à Exaktus (Next.js na Vercel, conteúdo do SDCMS). Com o motor de conteúdo a publicar artigos a partir do que a empresa sabe, o site passou a ser encontrado onde o comprador pesquisa. Nos últimos 30 dias, 36% das visitas vieram do Google e 12% chegaram a partir do ChatGPT, do Perplexity e do Gemini, com leitura média acima de um minuto.",
    stats: [
      { value: "36%", label: "das visitas vindas do Google" },
      { value: "12%", label: "vindas de respostas de IA" },
      { value: "88 s", label: "de leitura média por visita" },
    ],
  },
];

export const casesNote =
  "Números de setembro de 2026, retirados dos nossos sistemas. Reuniões e encomendas dependem de cada mercado; o que garantimos é o método, o volume e a transparência semanal.";
