import type { IconName } from "@/components/ui/Icon";

/**
 * A stack do site novo é a mesma dos produtos Draivv (SDCMS e CRM):
 * Next.js e React, Vercel, Supabase. O argumento é o que ela entrega ao
 * cliente, não a tecnologia em si.
 */
export type StackItem = { icon: IconName; name: string; role: string; delivers: string[] };

export const stack: StackItem[] = [
  {
    icon: "platform",
    name: "Next.js e React",
    role: "O site",
    delivers: [
      "Páginas geradas no servidor: o Google e as IAs leem o conteúdo inteiro, não um ecrã em branco",
      "Carrega em menos de um segundo em telemóvel, com imagens e fontes otimizadas",
      "Componentes reutilizáveis: uma página por sistema compatível custa minutos, não dias",
    ],
  },
  {
    icon: "chart",
    name: "Vercel",
    role: "Onde vive",
    delivers: [
      "Publicação em segundos, com pré-visualização de cada alteração antes de ir para o ar",
      "Servido a partir da rede mais próxima de quem visita: Porto, Madrid ou Milão",
      "Certificado, cache e proteção incluídos; sem servidor para manter",
    ],
  },
  {
    icon: "module",
    name: "Supabase",
    role: "Os dados",
    delivers: [
      "Base de dados PostgreSQL gerida, com cópias de segurança automáticas",
      "Guarda pedidos, inscrições na Academy e pedidos de compatibilidade com registo e consentimento",
      "Autenticação pronta para áreas reservadas: distribuidores, laboratórios, formandos",
    ],
  },
  {
    icon: "doc",
    name: "SDCMS · motor de conteúdo",
    role: "O que publica",
    delivers: [
      "Os artigos do Rank entram no site sem intervenção: sitemap, feeds e dados estruturados atualizados",
      "Base de conhecimento com fichas e certificados; cada artigo cita a fonte",
      "Multilíngue de raiz e páginas de destino por país",
    ],
  },
  {
    icon: "nurture",
    name: "CRM Draivv",
    role: "Onde chega",
    delivers: [
      "Cada formulário e pedido de demonstração vira um contacto com origem, página e campanha",
      "As respostas do Reach e os pedidos do site no mesmo pipeline",
      "Operável em conversa pelo Claude ou pelo ChatGPT, sem licença por utilizador",
    ],
  },
];

/** O que fica da Exaktus no fim, seja qual for a decisão sobre o serviço. */
export const stackOwnership = [
  "O código do site, num repositório da Exaktus",
  "O domínio, o alojamento e a base de dados, nas contas da Exaktus",
  "A base de conhecimento e todos os artigos publicados",
  "Os dados do CRM, exportáveis a qualquer momento",
];
