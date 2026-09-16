import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Slide } from "@/components/ui/Slide";
import { OfferSlide } from "@/components/ui/OfferSlide";
import { Reveal } from "@/components/ui/Reveal";
import { Lockup } from "@/components/ui/Lockup";
import { Icon } from "@/components/ui/Icon";
import { Team } from "@/components/site/Team";
import { RevealMedia } from "@/components/ui/RevealMedia";
import { Frame } from "@/components/mock/Frame";
import { ProposalMock } from "@/components/mock/ProposalMock";
import { ChatMock } from "@/components/mock/ChatMock";
import { ArticleMock } from "@/components/mock/ArticleMock";
import { Art } from "@/components/art/Art";
import {
  pricing,
  setup,
  plan,
  marketStudy,
  countryCandidates,
  scopeNote,
  scopeShort,
  platformAtSignature,
  platformCustom,
  contentEngine,
} from "./data";
import { offers } from "./offers";
import { cases, casesNote, headlineStats } from "./cases";
import { stack, stackOwnership } from "./stack";
import { ESBOCO_URL, siteSections, siteShift, siteDeliverables, siteTimeline, siteNeeds } from "./site";
import { COLLAGE_TITANIO, COLLAGE_MERCADOS, COLLAGE_ACADEMY, ESBOCO_SHOT } from "./collages";

export const metadata: Metadata = {
  title: "Proposta · Draivv × Exaktus",
  description:
    "Site novo, motor de conteúdo técnico e prospeção internacional em dois países para a Exaktus, durante seis meses, com a plataforma Draivv desde a assinatura.",
};

/* O que sabemos da Exaktus, em três pontos. */
const heard = [
  {
    title: "A origem é a compatibilidade",
    text: "A Exaktus nasceu em 2007 para resolver a falta de componentes protéticos compatíveis em Portugal. É a pergunta que o técnico de prótese faz todos os dias, e é a pergunta que o site novo responde primeiro.",
  },
  {
    title: "A expansão internacional já está decidida",
    text: "O projeto Exaktus Global Smile, aprovado no COMPETE 2030, tem a internacionalização dos componentes protéticos como objetivo. Falta a máquina que abre os mercados e o site onde eles aterram.",
  },
  {
    title: "Três linhas, três compradores",
    text: "Componentes, implantes e equipamentos vendem-se a laboratórios, clínicas e distribuidores com perguntas diferentes. O site cobre as três; o Reach trabalha uma linha de cada vez, com estudo e mensagens próprios.",
  },
];

/**
 * Telemetria de leitura da proposta (abertura, tempo, scroll, secção) no CRM
 * Draivv. Proposta cmu45uz2w002qgewyb15z55sr, ligada à oportunidade da Exaktus.
 */
const TRACKING_PUBLIC_ID = "vhHedQ1DYdC_";

export default function PropostaPage() {
  return (
    <main>
      {TRACKING_PUBLIC_ID ? (
        <Script
          src={`https://app.salesdrive.com.br/pr/track.js?p=${TRACKING_PUBLIC_ID}`}
          data-proposal={TRACKING_PUBLIC_ID}
          strategy="afterInteractive"
        />
      ) : null}

      {/* 01 · Capa */}
      <Slide num="01" label="Proposta" variant="glow" watermark>
        <Reveal>
          <div className="brandrow">
            <Lockup />
            <span className="docref">Exaktus · Setembro 2026</span>
          </div>
          <span className="eyebrow">Draivv × Exaktus</span>
          <h1 className="display-1">
            Um site que responde, <strong>e dois mercados novos.</strong>
          </h1>
          <p className="lede">
            Um site novo construído para converter, com catálogo indexável e
            cada pedido a entrar no CRM. Um motor de conteúdo técnico para a
            Exaktus aparecer no Google e nas respostas de IA quando o
            laboratório pesquisa um componente compatível. E seis meses de
            prospeção internacional em dois países à vossa escolha, a abrir
            portas para a equipa comercial.
          </p>
          <div className="facts">
            <div className="fact"><p className="k">Formato</p><p className="v">Site novo + Rank + Reach</p></div>
            <div className="fact"><p className="k">Duração</p><p className="v">6 meses · site no ar no mês 2</p></div>
            <div className="fact"><p className="k">Âmbito</p><p className="v">Site inteiro · Reach: 1 linha, 2 países</p></div>
            <div className="fact"><p className="k">Investimento</p><p className="v">€7.000 setup + €4.200 / mês*</p></div>
          </div>
          <p className="scrollhint">Deslize para continuar ↓</p>
        </Reveal>
      </Slide>

      {/* 02 · O que sabemos */}
      <Slide num="02" label="O que sabemos" variant="open" collage={COLLAGE_TITANIO}>
        <Reveal>
          <span className="eyebrow">O que sabemos</span>
          <h2 className="display-2">
            Quase vinte anos a fabricar. <strong>Um mercado que pesquisa antes de encomendar.</strong>
          </h2>
        </Reveal>
        <div className="cardgrid">
          {heard.map((h, i) => (
            <Reveal key={h.title} delay={i * 0.07}>
              <div className="card brand h-full">
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.25}>
          <div className="statband mt-12">
            <div className="stat"><div className="big neutral">2007</div><div className="cap">fundação em Vila Nova de Gaia, capital 100% português</div></div>
            <div className="stat"><div className="big">13</div><div className="cap">certificados de qualidade e conformidade de dispositivos médicos</div></div>
            <div className="stat"><div className="big neutral">8</div><div className="cap">sistemas de implantes com componentes compatíveis, incluindo o próprio</div></div>
            <div className="stat"><div className="big">2012</div><div className="cap">Exaktus Academy: formação clínica contínua em Gaia e Lisboa</div></div>
          </div>
        </Reveal>
      </Slide>

      {/* 03 · Os três métodos */}
      <Slide num="03" label="Os três métodos" variant="glow" ghost="03">
        <Reveal>
          <span className="eyebrow">Os nossos métodos</span>
          <h2 className="display-2">
            Três métodos. <strong>Cada um resolve uma parte do processo comercial.</strong>
          </h2>
          <p className="lede">
            Contratam-se em separado ou em conjunto. Esta proposta assenta nos
            dois primeiros, com o site novo como ponto de partida; o terceiro
            entra em parte ao assinar e cresce quando a Exaktus quiser.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="methods">
            {offers.map((o) => (
              <div key={o.key} className="method">
                <span className="num">{o.num}</span>
                <h3>{o.name} <strong>{o.nameStrong}</strong></h3>
                <p className="strap">{o.strap}</p>
                <p>{o.short}</p>
                <span className="tag tag-brand">{o.tag}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </Slide>

      {/* 04, 05, 06 · Uma capa por oferta */}
      {offers.map((o, i) => (
        <OfferSlide key={o.key} num={`0${4 + i}`} offer={o} />
      ))}

      {/* 07 · A proposta */}
      <Slide num="07" label="A proposta" variant="glow-green" ghost="07">
        <Reveal>
          <span className="eyebrow">A proposta</span>
          <h2 className="display-2">
            Site novo, conteúdo técnico e prospeção em dois países, <strong>com a plataforma incluída.</strong>
          </h2>
          <p className="lede">
            A Exaktus já tem produto, certificação, loja online e a decisão de
            crescer fora. Falta um site que responda à pergunta do técnico,
            conteúdo que o faça ser encontrado e uma máquina de prospeção a
            trabalhar todos os dias em mercados escolhidos com critério.
          </p>
          <p className="body-s -mt-6 mb-10 max-w-[60ch]">{scopeShort}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <ol className="deliv">
            <li><span><b>Site novo em seis semanas.</b> Construído a partir do esboço que acompanha esta proposta, em Next.js na Vercel, com catálogo indexável, páginas por sistema compatível e formulários ligados ao CRM. Setup do projeto, valor único.</span></li>
            <li><span><b>Motor de conteúdo a partir do mês 2.</b> Artigos técnicos escritos a partir das fichas da Exaktus, com fonte citada, SEO e GEO por mercado e idioma, relatório semanal do Google e das IAs.</span></li>
            <li><span><b>Estudo de mercado em 2 países.</b> Dimensão, segmentos com ticket mais alto, concorrentes, requisitos de entrada e lista de empresas-alvo. Entregue no fim do mês 1.</span></li>
            <li><span><b>Auditoria de IA da área comercial.</b> Mapa de oportunidades e matriz de impacto, do pedido de compatibilidade ao orçamento. Incluída no Reach (ver abaixo).</span></li>
            <li><span><b>Campanhas a partir do mês 2.</b> E-mail, LinkedIn e telefone, com mensagens escritas para cada laboratório, clínica ou distribuidor, e domínios dedicados.</span></li>
            <li><span><b>Reuniões entregues à equipa comercial.</b> Decisores interessados, com contexto, prontos para a conversa técnica.</span></li>
            <li><span><b>Plataforma Draivv desde a assinatura.</b> CRM e módulo de orçamentos rastreados, com relatório semanal e pipeline visível. O resto automatiza-se à medida, sob proposta.</span></li>
          </ol>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="audit mt-10">
            <div className="audit-body">
              <span className="tag tag-solid">Incluído no Reach</span>
              <h3>Auditoria de IA da área comercial</h3>
              <p>
                No primeiro mês, olhamos para o processo comercial da Exaktus,
                do pedido de compatibilidade ao orçamento e à encomenda, e
                entregamos um relatório com o que a IA pode fazer por ele.
              </p>
              <ul>
                <li>Mapa de oportunidades de IA no processo comercial</li>
                <li>Matriz de impacto e esforço para decidir por onde começar</li>
                <li>Roteiro de automação, com o que fazer nos primeiros 90 dias</li>
              </ul>
            </div>
            <div className="audit-art"><Art name="audit" /></div>
          </div>
        </Reveal>
      </Slide>

      {/* 08 · O site novo: o esboço */}
      <Slide num="08" label="O site novo" variant="open">
        <Reveal>
          <span className="eyebrow">O site novo</span>
          <h2 className="display-2">
            Já há um esboço. <strong>Navegue-o antes de decidir.</strong>
          </h2>
          <p className="lede">
            Construímos um esboço navegável do site novo a partir do que a
            Exaktus mostra hoje: as três linhas de produto, o fluxo digital, a
            compatibilidade por sistema, a Academy e a Innova. Não é o site
            final; é a conversa que queremos ter convosco sobre ele.
          </p>
          <div className="mb-10 flex flex-wrap items-center gap-3">
            <a href={ESBOCO_URL} target="_blank" rel="noopener" className="btn btn-primary">Abrir o esboço do site</a>
            <span className="body-s !text-[13px]">Abre numa página nova. Versão 0.1, para discussão.</span>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <a href={ESBOCO_URL} target="_blank" rel="noopener" className="site-shot" aria-label="Abrir o esboço do site novo">
            <Frame title="exaktus.pt · esboço v0.1 · desktop" className="mock-light">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ESBOCO_SHOT} alt="Esboço do site novo da Exaktus: hero com desenho técnico de um pilar e implante, três linhas de produto e fluxo digital" />
            </Frame>
          </a>
        </Reveal>
        <div className="featgrid mt-10">
          {siteSections.map((s, i) => (
            <Reveal key={s.title} delay={0.05 + i * 0.05}>
              <div className="feat h-full">
                <span className="tag tag-tech">Secção {String(i + 1).padStart(2, "0")}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div className="shift mt-12">
            {siteShift.map(([from, to]) => (
              <div key={to} className="shift-row">
                <span className="from">{from}</span>
                <span className="arr">→</span>
                <span className="to">{to}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </Slide>

      {/* 09 · O projeto do site */}
      <Slide num="09" label="O projeto do site" variant="open" ghost="6 sem.">
        <Reveal>
          <span className="eyebrow">O projeto do site</span>
          <h2 className="display-2">
            Seis semanas do esboço ao ar, <strong>com o catálogo a entrar no Google.</strong>
          </h2>
          <p className="lede">
            O site é o setup do projeto: um valor único, um calendário fechado
            e um resultado que fica da Exaktus. Corre em paralelo com o estudo
            de mercado, para que no mês 2 as campanhas tenham onde aterrar.
          </p>
        </Reveal>
        <div className="featgrid">
          {siteDeliverables.map((d, i) => (
            <Reveal key={d.title} delay={0.05 + i * 0.05}>
              <div className="feat h-full">
                <span className="tag tag-brand">Incluído no setup</span>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="split mt-10">
          <Reveal delay={0.1}>
            <div className="m-elevated p-6 sm:p-7 h-full">
              <span className="mono-label">Calendário</span>
              <div className="mt-4 grid gap-3">
                {siteTimeline.map((t) => (
                  <div key={t.week} className="border-t border-[var(--border)] pt-3">
                    <p className="m-0 text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--brand-text)]">{t.week}</p>
                    <p className="m-0 text-[15px] font-semibold">{t.title}</p>
                    <p className="body-s m-0">{t.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="m-elevated p-6 sm:p-7 h-full">
              <span className="mono-label">O que precisamos da Exaktus</span>
              <ul className="deliv mt-4">
                {siteNeeds.map((n) => (
                  <li key={n}><span>{n}</span></li>
                ))}
              </ul>
              <p className="body-s mt-6 !text-[13px]">
                Tudo o que faltar, resolvemos convosco na primeira semana: sessão
                fotográfica, revisão dos textos legais, exportação da loja.
              </p>
            </div>
          </Reveal>
        </div>
      </Slide>

      {/* 10 · A stack */}
      <Slide num="10" label="A tecnologia" variant="glow" ghost="10">
        <Reveal>
          <span className="eyebrow tech">A tecnologia por trás</span>
          <h2 className="display-2">
            A mesma stack dos nossos produtos. <strong>O que ela entrega à Exaktus.</strong>
          </h2>
          <p className="lede">
            O site novo é construído com a mesma tecnologia do nosso gestor de
            conteúdo e do nosso CRM: Next.js e React, alojado na Vercel, com
            dados no Supabase. Não é uma escolha de gosto; é o que permite ao
            site ser rápido, ser lido pelas IAs e falar com o resto do sistema.
          </p>
        </Reveal>
        <div className="featgrid">
          {stack.map((s, i) => (
            <Reveal key={s.name} delay={0.05 + i * 0.05}>
              <div className="card tech h-full stackcard">
                <div className="icon"><Icon name={s.icon} /></div>
                <span className="idx">{s.role}</span>
                <h3>{s.name}</h3>
                <ul>
                  {s.delivers.map((d) => <li key={d}>{d}</li>)}
                </ul>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.3}>
            <div className="card brand h-full stackcard">
              <div className="icon"><Icon name="target" /></div>
              <span className="idx">No fim</span>
              <h3>O que fica da Exaktus</h3>
              <ul>
                {stackOwnership.map((d) => <li key={d}>{d}</li>)}
              </ul>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <div className="split mt-10">
            <div className="feat illustrated">
              <Art name="site" />
              <div className="feat-body">
                <span className="tag tag-tech">Site → CRM</span>
                <h3>Cada pedido chega com origem</h3>
                <p>O formulário de compatibilidade, o pedido de demonstração e a inscrição na Academy entram no CRM Draivv como contactos, com a página e a campanha de onde vieram.</p>
              </div>
            </div>
            <div className="feat illustrated">
              <Art name="stack" />
              <div className="feat-body">
                <span className="tag tag-tech">Três camadas</span>
                <h3>Sem servidor para manter</h3>
                <p>Vercel serve o site, Supabase guarda os dados, o SDCMS publica o conteúdo. Cada camada é gerida pelo fornecedor; a Exaktus paga o consumo, não a manutenção.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </Slide>

      {/* 11 · Plano de 6 meses */}
      <Slide num="11" label="Plano de 6 meses" variant="open" ghost="M1→M6">
        <Reveal>
          <span className="eyebrow">Plano de 6 meses</span>
          <h2 className="display-2">
            Um mês a construir e a estudar. <strong>Cinco a publicar e a abrir portas.</strong>
          </h2>
          <p className="lede">
            O site e o estudo de mercado correm em paralelo no primeiro mês. A
            partir do segundo, o site está no ar, o conteúdo publica-se e as
            campanhas correm e ajustam-se todas as semanas.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="timeline">
            {plan.map((p) => (
              <div key={p.month} className={`tl ${p.kind}`}>
                <div className="m">{p.month}</div>
                <h4>{p.title}</h4>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Slide>

      {/* 12 · Os dois países */}
      <Slide num="12" label="Os dois países" variant="open" collage={COLLAGE_MERCADOS}>
        <Reveal>
          <span className="eyebrow">Os dois países</span>
          <h2 className="display-2">
            A Exaktus escolhe os países. <strong>Nós dizemos o que existe lá.</strong>
          </h2>
          <p className="lede">
            Espanha já é mercado da Exaktus. A escolha dos dois países novos
            fecha-se na reunião de arranque. Trazemos sugestões de partida; o
            estudo do mês 1 confirma ou corrige.
          </p>
        </Reveal>
        <div className="split">
          <Reveal delay={0.05}>
            <div className="m-elevated p-6 sm:p-7 h-full">
              <span className="mono-label">O mês 1 entrega</span>
              <ul className="deliv mt-4">
                {marketStudy.map((item) => (
                  <li key={item.title}><span><b>{item.title}.</b> {item.text}</span></li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="m-elevated p-6 sm:p-7 h-full">
              <span className="mono-label">Sugestões de partida</span>
              <div className="mt-4 grid gap-3">
                {countryCandidates.map((c) => (
                  <div key={c.name} className="flex items-start gap-3 border-t border-[var(--border)] pt-3">
                    <span className="text-xl leading-none" aria-hidden="true">{c.flag}</span>
                    <div>
                      <p className="m-0 text-[15px] font-semibold">{c.name}</p>
                      <p className="body-s m-0">{c.why}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Slide>

      {/* 13 · A plataforma */}
      <Slide num="13" label="A plataforma" variant="glow" ghost="13">
        <Reveal>
          <span className="eyebrow tech">A plataforma</span>
          <h2 className="display-2">
            Ao assinar, já têm o CRM. <strong>O resto desenha-se convosco.</strong>
          </h2>
          <p className="lede">
            Os pedidos do site e as portas abertas pelo Reach ficam registados
            na plataforma Draivv desde o primeiro dia. Como a plataforma é
            nossa, qualquer parte do processo pode ser automatizada e cada
            função pode ter o seu assistente. A plataforma vem com o serviço,
            sem licença por utilizador.
          </p>
        </Reveal>
        <div className="split-mock">
          <div className="mock-stack">
            <Reveal delay={0.05}>
              <span className="mono-label">Incluído ao assinar</span>
              <div className="mt-3 grid gap-3">
                {platformAtSignature.map((f) => (
                  <div key={f.title} className="feat illustrated">
                    <Art name={f.art} />
                    <div className="feat-body">
                      <span className="tag tag-brand">{f.tag}</span>
                      <h3>{f.title}</h3>
                      <p>{f.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <div className="mock-stack">
            <Reveal delay={0.1}><ProposalMock /></Reveal>
            <Reveal delay={0.18}><ChatMock /></Reveal>
            <Reveal delay={0.22}>
              <p className="body-s !text-[12px]">
                Ecrãs ilustrativos: orçamento rastreado com leitura por secção e o
                Claude ligado à plataforma a responder com dados do pipeline.
              </p>
            </Reveal>
          </div>
        </div>
        <Reveal delay={0.12}>
          <span className="mono-label mt-8 block">Sob medida, especificado convosco</span>
          <div className="featgrid mt-3">
            {platformCustom.map((f) => (
              <div key={f.title} className="feat illustrated">
                <Art name={f.art} />
                <div className="feat-body">
                  <span className="tag tag-tech">{f.tag}</span>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Slide>

      {/* 14 · O motor de conteúdo (Rank) */}
      <Slide num="14" label="O motor de conteúdo" variant="open" collage={COLLAGE_ACADEMY}>
        <Reveal>
          <span className="eyebrow">O motor de conteúdo</span>
          <h2 className="display-2">
            Conteúdo técnico <strong>com a memória da Exaktus.</strong>
          </h2>
          <p className="lede">
            O Rank escreve a partir do que a Exaktus sabe. Fichas técnicas,
            tabelas de compatibilidade e certificados entram numa base de
            conhecimento, o tom de voz é aprendido, e cada artigo sai citado,
            medido, publicado no site novo e com a publicação para o LinkedIn
            pronta.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <ArticleMock />
          <p className="body-s mt-3 mb-8 !text-[12px]">
            Ecrã ilustrativo: artigo técnico gerado a partir das fichas da Exaktus,
            com a fonte citada, e a ficha de produto do catálogo indexável.
          </p>
        </Reveal>
        <div className="featgrid">
          {contentEngine.map((f, i) => (
            <Reveal key={f.title} delay={0.05 + i * 0.05}>
              <div className="feat illustrated">
                <Art name={f.art} />
                <div className="feat-body">
                  <span className="tag tag-brand">{f.tag}</span>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Slide>

      {/* 15 · Resultados */}
      <Slide num="15" label="Resultados" ghost="15">
        <Reveal>
          <span className="eyebrow">Casos e números</span>
          <h2 className="display-2">
            O mesmo método, <strong>em números reais.</strong>
          </h2>
          <p className="lede">
            Dois casos em curso, um por método, com os números dos nossos
            sistemas em setembro de 2026.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="statband mb-8">
            {headlineStats.map((s) => (
              <div key={s.label} className="stat">
                <div className={`big ${s.neutral ? "neutral" : ""}`}>{s.value}</div>
                <div className="cap">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
        <div className="cases">
          {cases.map((c, i) => (
            <Reveal key={c.key} delay={0.12 + i * 0.06}>
              <article className="case">
                <div className="case-head">
                  <span className="tag tag-brand">{c.method}</span>
                  <span className="mono-label">{c.client}</span>
                </div>
                <h3>{c.headline}</h3>
                <p className="sector">{c.sector}</p>
                <p>{c.text}</p>
                <div className="case-stats">
                  {c.stats.map((s) => (
                    <div key={s.label}>
                      <span className="v">{s.value}</span>
                      <span className="l">{s.label}</span>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3}>
          <p className="body-s mt-6 max-w-[80ch] !text-[13px]">{casesNote}</p>
        </Reveal>
      </Slide>

      {/* 16 · Investimento */}
      <Slide num="16" label="Investimento" variant="light" ghost="€">
        <Reveal>
          <span className="eyebrow">Investimento</span>
          <h2 className="display-2">
            Um setup e uma mensalidade. <strong>Uma combinação recomendada.</strong>
          </h2>
          <p className="lede">
            O site novo é o setup do projeto, com valor único. O serviço é um
            contrato de 6 meses com três formas de contratar: o Rank faz o site
            ser encontrado, o Reach abre os dois países, e os dois juntos são o
            canal inteiro. O primeiro pagamento é feito na assinatura; os cinco
            seguintes, no início de cada mês.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="price setup">
            <div className="setup-main">
              <span className="tag tag-solid">Setup do projeto</span>
              <div className="name">{setup.name}</div>
              <div className="amount">{setup.amount}</div>
              <div className="per">{setup.per}</div>
              <p className="note">{setup.note}</p>
            </div>
            <ul>{setup.items.map((it) => <li key={it}>{it}</li>)}</ul>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <span className="mono-label mt-8 mb-3 block">Serviço mensal · 6 meses</span>
          <div className="pricegrid">
            {pricing.map((p) => (
              <div key={p.name} className={`price ${p.hero ? "hero" : ""}`}>
                {p.hero ? <span className="tag tag-solid absolute right-5 top-5">Recomendado</span> : null}
                <div className="name">{p.name}</div>
                <div className="amount">{p.amount}</div>
                <div className="per">{p.per}</div>
                <ul>{p.items.map((it) => <li key={it}>{it}</li>)}</ul>
                <p className="note">{p.note}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.13}>
          <div className="bonus">
            <div className="bonus-body">
              <span className="bonus-ribbon">Oferta adicional · incluída em Só Reach e em Reach + Rank</span>
              <h3>Auditoria de IA da área comercial</h3>
              <p>
                Fora do pacote, por cima dele: no primeiro mês analisamos o
                processo comercial da Exaktus e entregamos onde a IA entra,
                com que impacto e por que ordem.
              </p>
              <ul>
                <li>Mapa de oportunidades</li>
                <li>Matriz de impacto e esforço</li>
                <li>Roteiro dos primeiros 90 dias</li>
              </ul>
              <div className="bonus-applies">
                <span className="yes">Só Reach · incluída</span>
                <span className="yes">Reach + Rank · incluída</span>
                <span className="no">Só Rank · não incluída</span>
              </div>
            </div>
            <div className="bonus-art"><Art name="audit" /></div>
          </div>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="body-s mt-5 max-w-[80ch] !text-[13px]">{scopeNote}</p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-8 overflow-x-auto">
            <table className="doc-table">
              <thead><tr><th>Condições</th><th>Detalhe</th></tr></thead>
              <tbody>
                <tr><td>Setup</td><td>Site novo: €7.000, valor único. {setup.payment}. Código, domínio e contas ficam da Exaktus.</td></tr>
                <tr><td>Serviço</td><td>6 meses a partir da reunião de arranque, renovável por períodos iguais. Seis pagamentos mensais: o primeiro na assinatura, os seguintes no início de cada mês. Sem custo de saída.</td></tr>
                <tr><td>Total a 6 meses</td><td>Só Rank: €7.000 + €10.800 = €17.800 · Só Reach: €7.000 + €17.400 = €24.400 · Reach + Rank (recomendado): €7.000 + €25.200 = €32.200.</td></tr>
                <tr><td>Âmbito</td><td>O site cobre a Exaktus inteira. O Reach trabalha uma linha de produto (a nossa leitura: componentes protéticos compatíveis) em dois países. Outra linha tem estudo, listas e proposta próprios.</td></tr>
                <tr><td>Inclui</td><td>Equipa Draivv, ferramentas de prospeção, domínios dedicados, auditoria de IA da área comercial (no Reach) e plataforma com acesso para a vossa equipa.</td></tr>
                <tr><td>Sob medida</td><td>Automações e agentes para o processo da Exaktus: especificados convosco, com proposta própria.</td></tr>
              </tbody>
            </table>
          </div>
        </Reveal>
      </Slide>

      {/* 17 · Equipa */}
      <Slide num="17" label="Equipa" ghost="17">
        <Reveal>
          <span className="eyebrow">Quem trabalha nisto</span>
          <h2 className="display-2">
            Tecnologia e comercial, <strong>na mesma mesa.</strong>
          </h2>
          <p className="lede">
            O Luís acompanha a Exaktus em Portugal; o Felippe desenha o estudo,
            o conteúdo e as cadências; o Filipe constrói o site, a plataforma
            e os assistentes. Quem propõe é quem executa.
          </p>
        </Reveal>
        <Reveal>
          <RevealMedia
            className="band mb-6"
            dormant="/brand/team-dormant.jpg"
            still="/brand/team-still.jpg"
            video="/brand/team-alive-loop.mp4"
            alt="Equipa Draivv em sala escura diante de um painel"
            radius={280}
          />
        </Reveal>
        <Team id="equipa-proposta" />
      </Slide>

      {/* 18 · Próximos passos */}
      <Slide num="18" label="Próximos passos" variant="glow" ghost="→">
        <Reveal>
          <span className="eyebrow">Próximos passos</span>
          <h2 className="closing">Três decisões e a semana 1 começa.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <ol className="deliv max-w-3xl">
            <li><span><b>Rever o esboço e esclarecer dúvidas.</b> O Luís Caturna percorre a proposta e o esboço do site com a equipa da Exaktus nos próximos dias.</span></li>
            <li><span><b>Confirmar a linha de produto e escolher os dois países.</b> Na reunião de arranque, com as sugestões do slide 12 como ponto de partida.</span></li>
            <li><span><b>Assinar e arrancar.</b> Assinatura, primeiro pagamento e 50% do setup; acessos e materiais técnicos partilhados; o site e o estudo começam na semana seguinte.</span></li>
          </ol>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="mailto:luis.caturna@draivv.com" className="btn btn-primary">Falar com o Luís Caturna</a>
            <a href={ESBOCO_URL} target="_blank" rel="noopener" className="btn btn-outline">Abrir o esboço do site</a>
            <Link href="/" className="btn btn-outline">Conhecer a Draivv</Link>
          </div>
        </Reveal>
      </Slide>
    </main>
  );
}
