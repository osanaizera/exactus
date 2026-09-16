# Exaktus × Draivv · Site novo, proposta comercial e vitrine de produtos

## Visão geral

Proposta da Draivv para a **Exaktus · Material de Reabilitação Oral, S.A.**
(Vila Nova de Gaia), em Next.js + React, com três páginas:

- `/`: a vitrine da Draivv, explicada em dois produtos (Captação de novos
  clientes e Plataforma de relacionamento) e como se ligam.
- `/proposta`: o deck da proposta, na linha da proposta Monteiro, Ribas
  (argumento de plataforma), mas com o **site novo em destaque**: setup do
  projeto (site), Rank mensal (artigos técnicos, SEO e GEO) e Reach
  (prospeção internacional em dois países), seis meses, com a plataforma
  Draivv desde a assinatura.
- `/esboco`: o **esboço navegável do site novo** da Exaktus, um ficheiro
  estático (`apps/web/public/esboco/index.html`) servido por rewrite. É a
  peça que a proposta manda abrir. Marca aplicada: a da Exaktus (teal).

Nasceu do projeto irmão `mri` (mesmos primitivos, mesmo design system
Draivv). O que muda é o conteúdo: factos da Exaktus, o esboço do site, o
argumento da stack, o setup no investimento, mockups e vinhetas com
componentes protéticos em vez de embalagem.

## Sobre a Exaktus

Fabricante e fornecedor de dispositivos médicos para medicina dentária,
fundado em 2007 em Vila Nova de Gaia, capital 100% português. Três linhas:
componentes protéticos compatíveis com os principais sistemas de implantes
(a origem), sistema de implantes próprio desde 2011 (e distribuição JD
Dental) e equipamentos (Medit i900, radiologia, motores). Exaktus Academy
desde 2012; marca Innova para medicina estética; loja online em
store.exaktus.pt; 13 certificados; Explorer Investments no capital desde
2023. Projeto "Exaktus Global Smile" (internacionalização) aprovado no
COMPETE 2030. Dossiê em `docs/research/01-contexto-exaktus.md`.

Não há ata de reunião registada no CRM: o slide "O que sabemos" usa factos
públicos (site, esboço) e a nota do CRM. Confirmar antes de enviar.

## A proposta (resumo)

| Item | Valor |
|---|---|
| Formato | Site novo (setup) + Rank (inbound) + Reach (outbound), com a plataforma Draivv incluída |
| Setup | **€7.000**, valor único: site novo em Next.js na Vercel, com Supabase, 6 semanas, 50% na assinatura e 50% na publicação |
| Serviço | 6 meses; primeiro pagamento na assinatura, os seguintes no início de cada mês |
| Rank | €1.800 / mês: artigos técnicos, base de conhecimento, SEO e GEO, relatório semanal, LinkedIn |
| Reach | €2.900 / mês por linha de produto: estudo em 2 países no mês 1, campanhas do mês 2 ao 6, auditoria de IA incluída |
| Reach + Rank | **€4.200 / mês** (recomendado), €500 abaixo da soma |
| Total a 6 meses | Recomendado: €7.000 + 6 × €4.200 = €32.200 |
| Plataforma | Ao assinar: CRM e módulo de orçamentos rastreados. O resto sob medida, sob proposta |

Valores em `apps/web/src/app/proposta/data.ts` e em
`docs/proposta/02-proposta-exaktus.md`. Publicado em
https://exaktus-draivv.vercel.app (projeto Vercel `exaktus-draivv`, deploy
automático a partir do branch de produção). No CRM Draivv: oportunidade
"Exaktus — Site novo + Rank + Reach (Portugal)" e proposta rastreada
`vhHedQ1DYdC_` (link para o cliente: https://app.salesdrive.com.br/pr/vhHedQ1DYdC_);
o `TRACKING_PUBLIC_ID` em `proposta/page.tsx` liga o deck a essa proposta.

## Stack e estrutura

Next.js 15 (App Router) + React 19, Tailwind CSS 4 com tokens Draivv em
`globals.css`, Motion, Vercel. O site novo da Exaktus seguirá a mesma stack
dos produtos Draivv (SDCMS e CRM): Next.js e React, Vercel, Supabase; é o
argumento do slide 10.

```
apps/web/
├── public/esboco/               # Esboço estático do site novo (index.html + assets)
├── public/brand/                # Marca Draivv + imagens do esboço + captura do esboço
└── src/
    ├── app/page.tsx             # Vitrine Draivv
    ├── app/proposta/page.tsx    # Deck da proposta (18 slides)
    ├── app/proposta/data.ts     # Plano, estudo, países, setup, preços, funcionalidades
    ├── app/proposta/site.ts     # O site novo: secções do esboço, De → Para, entregas, calendário
    ├── app/proposta/stack.ts    # O que a stack (Next.js, Vercel, Supabase, SDCMS, CRM) entrega
    ├── app/proposta/offers.ts   # Os três métodos (Rank, Reach, Run): texto das capas
    ├── app/proposta/cases.ts    # Casos com números (fonte e data no cabeçalho)
    ├── app/proposta/collages.ts # Imagens do deck (CDN Higgsfield, provisório) e do esboço
    ├── components/site/         # Hero, Products, Platform, Flow, Team, FinalCTA
    ├── components/ui/           # Mark, Lockup, Slide, OfferSlide, Reveal, Icon, RevealMedia
    ├── components/mock/         # ProposalMock, ChatMock, ArticleMock (ecrãs ilustrativos)
    └── components/art/Art.tsx   # Vinhetas SVG/CSS, uma por conceito (inclui site e stack)
```

## Direção visual: Draivv Design System v1.1

Regra dos três (verde entrega, azul sistema, branco leitura), escuro por
defeito, tema `open` (claro, facetas) em secções escolhidas, um foco de luz
por tela, gradiente sempre azul → verde, Manrope 200 nos títulos, botão pill,
card 16 px, símbolo sempre azul. Sem travessões no texto; português de
Portugal. O esboço em `/esboco` é a exceção: aplica a marca da Exaktus.

## Convenções

- TypeScript strict; Server Components por defeito, Client só para animação.
- Commits em Conventional Commits.
- `pnpm lint` e `pnpm build` verdes antes do push.
- Para atualizar a captura do esboço no deck (`/brand/esboco-desktop.jpg`),
  gerar com o Chromium a 1440×900 a partir de `public/esboco/index.html`.
