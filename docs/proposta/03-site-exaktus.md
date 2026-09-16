# O site novo da Exaktus · esboço e projeto

> Esboço navegável em `/esboco` (`apps/web/public/esboco/index.html`).
> Versão 0.1, para discussão com a equipa da Exaktus.

## O esboço

Página única em HTML estático com a marca Exaktus (teal `#11898C`, Plus
Jakarta Sans e DM Sans), animações leves (desenho técnico que se traça,
contadores, scroll reveal) e `prefers-reduced-motion` respeitado. Secções:

1. Hero: "Componentes protéticos compatíveis com o sistema de implantes que
   já usa", desenho de pilar e implante à escala, CTAs para o catálogo e para
   a compatibilidade.
2. Factos: 2007, 13 certificados, 3 linhas, Academy desde 2012.
3. Precisão (imagem de titânio) com tolerância e grau do titânio.
4. Três linhas de produto: componentes, implantes, equipamentos.
5. Fluxo digital: digitalização, CAD, fresagem, prótese final.
6. Compatibilidade por sistema (8 sistemas).
7. História (2007 a 2026), Academy e Innova.
8. Testemunho, contacto com formulário por assunto, rodapé legal.

O formulário do esboço não envia nada (só mostra a confirmação). No
projeto, entrega no CRM Draivv.

## O projeto (setup, €7.000)

| Entrega | O que inclui |
|---|---|
| Estrutura e conteúdo | Arquitetura por linha e por sistema compatível; textos revistos com a equipa técnica |
| Catálogo indexável | Página por família e por sistema, dados estruturados, ligação à loja |
| Captura ligada ao CRM | Formulários por assunto, WhatsApp e demonstrações com origem, página e campanha |
| Blog técnico | Ligado ao SDCMS: artigos do Rank publicam-se sem intervenção |
| Multilíngue | PT e ES de raiz; línguas dos países do Reach com as páginas de destino |
| Medição e desempenho | Analytics, Search Console, Core Web Vitals, acessibilidade, SEO técnico |

Calendário: semana 1 arranque; semanas 2 e 3 conteúdo e páginas; semanas 4
e 5 revisão e afinação; semana 6 publicação. O site fica no ar no mês 2 do
contrato, quando as campanhas do Reach começam.

## Stack (a mesma dos produtos Draivv)

| Camada | Tecnologia | O que entrega à Exaktus |
|---|---|---|
| Site | Next.js 15 + React 19 | Páginas geradas no servidor, lidas pelo Google e pelas IAs; carga rápida em telemóvel; componentes reutilizáveis |
| Alojamento | Vercel | Publicação em segundos com pré-visualização; rede global; certificado e proteção incluídos |
| Dados | Supabase (PostgreSQL) | Pedidos, inscrições e consentimentos com registo; cópias automáticas; autenticação para áreas reservadas |
| Conteúdo | SDCMS | Blog, sitemap, feeds e dados estruturados atualizados; base de conhecimento; multilíngue |
| Comercial | CRM Draivv | Cada pedido vira contacto com origem; mesmo pipeline do Reach; operável por MCP |

No fim, código, domínio, alojamento, base de dados, base de conhecimento e
dados do CRM ficam da Exaktus.
