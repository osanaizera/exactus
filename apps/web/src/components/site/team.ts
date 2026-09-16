export type Member = {
  name: string;
  photo: string;
  flag: string;
  role: string;
  bio: string;
  key: boolean;
};

export const team: Member[] = [
  {
    name: "Luís Henrique Caturna",
    photo: "/team/caturna-v2.jpg",
    flag: "🇵🇹 Portugal",
    role: "Diretor Regional · Draivv Portugal",
    bio: "20 anos de experiência a impulsionar o crescimento e a inovação entre tecnologia, negócios B2B e mudança organizacional. Especializado em traduzir tecnologia em valor para as organizações, combinando IA, eficiência operacional, formação e transformação cultural. Trabalhou com 10+ países da Europa, África e EUA. É o ponto de contacto da Exaktus.",
    key: true,
  },
  {
    name: "Felippe Cassiano",
    photo: "/team/felippe.jpg",
    flag: "🇧🇷 Brasil",
    role: "Fundador · Growth & Comercial",
    bio: "Estrategista de crescimento com trajetória em escalar negócios B2B em energia e SaaS. Desenha o estudo de mercado, a estratégia de abordagem e as cadências de prospeção.",
    key: false,
  },
  {
    name: "Filipe Osanai",
    photo: "/team/osanai.jpg",
    flag: "🇧🇷 Brasil",
    role: "Fundador · Tecnologia & IA",
    bio: "Engenheiro eletrónico, especialista em desenvolvimento de software, com mais de 10 anos em negócios B2B em multinacionais. Constrói a plataforma, as integrações e os assistentes de IA que sustentam a operação comercial dos clientes.",
    key: false,
  },
];
