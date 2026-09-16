# AGENTS.md · Diretrizes para Agentes de IA

## Git

- Commits atómicos, em Conventional Commits: `feat(site): …`,
  `feat(proposta): …`, `feat(esboco): …`, `fix(ui): …`, `docs: …`, `chore: …`.
- Se a mensagem precisa de "e", são dois commits.
- Nunca reescrever histórico em branch partilhada.

## Marca

- A vitrine e a proposta aplicam a **marca Draivv**. Ler a secção "Direção
  visual" do `CLAUDE.md` antes de tocar em cor, fonte ou botão.
- O esboço do site (`apps/web/public/esboco/`) aplica a **marca Exaktus**
  (teal `#11898C`, Plus Jakarta Sans + DM Sans). É um ficheiro estático;
  mexe-se nele à mão, sem Tailwind.
- Tokens Draivv vivem em `apps/web/src/app/globals.css`. Nada de hex solto em TSX.

## Conteúdo

- Português de Portugal, sem travessões no texto. Factos sobre a Exaktus só
  com fonte (site, esboço, CRM); ver `docs/research/`.
- Preços e condições têm uma única origem: `apps/web/src/app/proposta/data.ts`.
  O `docs/proposta/02-proposta-exaktus.md` deve refletir o mesmo.
- Nada de promessas clínicas nos textos do esboço: dispositivos médicos, uso
  exclusivo por profissionais de saúde.

## Qualidade

- TypeScript strict, sem `any` gratuito.
- Client Components só quando há animação ou interação.
- Animações respeitam `prefers-reduced-motion`.
- `pnpm lint && pnpm build` antes do push.
