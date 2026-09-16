import type { IconName } from "@/components/ui/Icon";

/**
 * A stack do site novo é a mesma dos produtos Draivv (SDCMS e CRM):
 * Next.js e React, Vercel, Supabase. O slide não explica a tecnologia:
 * mostra quem mais a usa, quanto tráfego aguenta e o que isso significa
 * para a Exaktus, em números que se percebem sem ser engenheiro.
 *
 * Fontes (setembro de 2026): nextjs.org/showcase e vercel.com/customers
 * (quem usa), vercel.com/docs/regions (rede), planos Pro da Vercel e do
 * Supabase (o que está incluído por mês).
 */
export type StackLayer = {
  icon: IconName;
  name: string;
  role: string;
  /** O que faz, numa frase sem jargão. */
  what: string;
  /** Empresas conhecidas que correm sobre a mesma tecnologia. */
  usedBy: string[];
  /** O que isso significa para a Exaktus, em concreto. */
  forExaktus: string;
};

export const stackLayers: StackLayer[] = [
  {
    icon: "platform",
    name: "Next.js e React",
    role: "O site",
    what:
      "As páginas saem prontas do servidor: o Google e as IAs leem o conteúdo inteiro, e o telemóvel abre a página em menos de um segundo.",
    usedBy: ["ChatGPT", "Claude", "Nike", "Notion", "TikTok", "Sonos"],
    forExaktus:
      "Uma página por sistema compatível (Straumann, Nobel, Zimmer, Osstem…) sai do mesmo molde. Acrescentar um sistema custa minutos, não um projeto.",
  },
  {
    icon: "chart",
    name: "Vercel",
    role: "Onde vive",
    what:
      "Rede com 126 pontos de presença em 51 países: o site é servido a partir do ponto mais próximo de quem visita, no Porto, em Madrid ou em Milão. Sem servidor para manter.",
    usedBy: ["Johnson & Johnson", "Under Armour", "eBay", "The Washington Post", "Stripe"],
    forExaktus:
      "Um pico de visitas, seja uma feira, uma campanha do Reach ou um artigo que corre no LinkedIn, não deita o site abaixo nem obriga a mexer em nada.",
  },
  {
    icon: "module",
    name: "Supabase",
    role: "Os dados",
    what:
      "Base de dados PostgreSQL gerida, com cópias de segurança diárias e autenticação pronta para áreas reservadas: distribuidores, laboratórios, formandos da Academy.",
    usedBy: ["Mozilla", "1Password", "PwC", "GitHub"],
    forExaktus:
      "Cada pedido de orçamento, de compatibilidade ou de demonstração fica guardado com data, origem e consentimento, e entra no CRM.",
  },
];

export type StackStat = { value: string; label: string; neutral?: boolean };

/** Capacidade incluída nos planos, traduzida em visitas e pedidos. */
export const stackStats: StackStat[] = [
  {
    value: "10 M",
    label: "pedidos por mês incluídos na Vercel. Uma visita a uma página são 20 a 40 pedidos: chega para centenas de milhares de visitas por mês",
  },
  {
    value: "1 TB",
    label: "de transferência por mês incluída. Com páginas otimizadas de 1 a 2 MB, são mais de 500 mil páginas vistas antes de pagar um cêntimo a mais",
    neutral: true,
  },
  {
    value: "8 GB",
    label: "de base de dados incluídos no Supabase. O catálogo inteiro e anos de pedidos ocupam menos de 1% disso",
  },
  {
    value: "< 1 s",
    label: "para abrir uma página no telemóvel, o que o Google usa para ordenar resultados e o que o técnico espera antes de desistir",
    neutral: true,
  },
];

/** O que já corre nesta stack: prova antes de qualquer promessa. */
export const stackProof: string[] = [
  "Esta proposta e o esboço que navegou no slide 05",
  "O SDCMS, o nosso motor de conteúdo: mais de 640 artigos em 35 marcas",
  "O CRM Draivv, onde os pedidos do site e as respostas do Reach vão chegar",
];

/** O que fica da Exaktus no fim, seja qual for a decisão sobre o serviço. */
export const stackOwnership = [
  "O código do site, num repositório da Exaktus",
  "O domínio, o alojamento e a base de dados, nas contas da Exaktus",
  "A base de conhecimento e todos os artigos publicados",
  "Os dados do CRM, exportáveis a qualquer momento",
];

export const stackSource =
  "Quem usa: nextjs.org/showcase e vercel.com/customers; Supabase, página de clientes. Capacidade: planos Pro da Vercel e do Supabase, setembro de 2026. Os valores incluídos podem mudar; o que não muda é pagar-se consumo, não servidores.";
