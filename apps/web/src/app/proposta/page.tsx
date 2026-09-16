import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Slide } from "@/components/ui/Slide";
import { Reveal } from "@/components/ui/Reveal";
import { Lockup } from "@/components/ui/Lockup";
import { Icon } from "@/components/ui/Icon";
import { Team } from "@/components/site/Team";
import { Frame } from "@/components/mock/Frame";
import { ProposalMock } from "@/components/mock/ProposalMock";
import { ChatMock } from "@/components/mock/ChatMock";
import { Art } from "@/components/art/Art";
import { pricing, setup, plan, scopeNote, scopeShort, platformAtSignature, platformCustom } from "./data";
import { cases, casesNote, headlineStats } from "./cases";
import { stack, stackOwnership } from "./stack";
import { ESBOCO_URL, siteSections, siteShift, siteDeliverables, siteTimeline, siteNeeds } from "./site";
import { keywordRows, keywordTotals, measures, articles } from "./seo";
import { COLLAGE_TITANIO, COLLAGE_MERCADOS, ESBOCO_SHOT } from "./collages";

export const metadata: Metadata = {
  title: "Proposta · Draivv × Exaktus",
  description:
    "Site novo, conteúdo técnico para ser encontrado no Google e nas IAs, e abertura de dois mercados novos para a Exaktus, com a plataforma Draivv desde a assinatura.",
};

/* O que sabemos da Exaktus, em três pontos. */
const heard = [
  {
    title: "A origem é a compatibilidade",
    text: "A Exaktus nasceu em 2007 para resolver a falta de componentes protéticos compatíveis em Portugal. É a pergunta que o técnico de prótese faz todos os dias, e é a pergunta que o site novo responde primeiro.",
  },
  {
    title: "A internacionalização já está decidida",
    text: "O projeto Exaktus Global Smile, aprovado no COMPETE 2030, tem a internacionalização dos componentes protéticos como objetivo. Falta o canal digital que mede e a máquina que abre os mercados.",
  },
  {
    title: "Três linhas, três compradores",
    text: "Componentes, implantes e equipamentos vendem-se a laboratórios, clínicas e distribuidores com perguntas diferentes. O site cobre as três; a prospeção trabalha uma linha de cada vez.",
  },
];

/** Telemetria de leitura da proposta no CRM Draivv (proposta cmu461v6t0002kj6qohuqnnta). */
const TRACKING_PUBLIC_ID = "OsvijufrNG6D";

function n(v: number | null) {
  return v === null ? "—" : v.toLocaleString("pt-PT");
}

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
            Um canal digital que mede, <strong>e dois mercados novos.</strong>
          </h1>
          <p className="lede">
            Há laboratórios e clínicas a pesquisar, todos os meses, pelos
            componentes que a Exaktus fabrica. Hoje ninguém mede quem chega,
            de onde vem nem o que procura. Propomos um site novo construído
            para converter, conteúdo técnico para aparecer no Google e nas
            respostas de IA, e seis meses de prospeção para abrir dois
            mercados novos, com a plataforma Draivv desde a assinatura.
          </p>
          <div className="facts">
            <div className="fact"><p className="k">Formato</p><p className="v">Site novo + conteúdo técnico + prospeção internacional</p></div>
            <div className="fact"><p className="k">Duração</p><p className="v">6 meses · site no ar em 6 semanas</p></div>
            <div className="fact"><p className="k">Âmbito</p><p className="v">Site inteiro · 2 mercados novos</p></div>
            <div className="fact"><p className="k">Plataforma</p><p className="v">CRM e orçamentos rastreados incluídos</p></div>
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

      {/* 03 · Diagnóstico: há procura, ninguém mede */}
      <Slide num="03" label="Há procura" variant="glow" ghost="03">
        <Reveal>
          <span className="eyebrow">Diagnóstico do canal digital</span>
          <h2 className="display-2">
            Há quem pesquise pelos vossos produtos. <strong>Hoje ninguém mede.</strong>
          </h2>
          <p className="lede">
            Fomos ver quantas pessoas pesquisam no Google, em Portugal e em
            Espanha, pelos componentes e equipamentos que a Exaktus vende. São
            pesquisas com intenção de compra, feitas por técnicos e clínicas.
            O canal existe; o que falta é um site que o capte e uma medição
            que diga o que está a funcionar.
          </p>
        </Reveal>
        <div className="split">
          <Reveal delay={0.06}>
            <div className="m-elevated p-5 sm:p-6 h-full">
              <span className="mono-label">Pesquisas por mês no Google · média · fonte DataForSEO, set. 2026</span>
              <div className="mt-3 overflow-x-auto">
                <table className="kwtable">
                  <thead>
                    <tr><th>Termo</th><th className="text-right">🇵🇹 PT</th><th className="text-right">🇪🇸 ES</th><th>Intenção</th></tr>
                  </thead>
                  <tbody>
                    {keywordRows.map((k) => (
                      <tr key={k.term}>
                        <td><span className="term">{k.term}</span>{k.note ? <span className="note">{k.note}</span> : null}</td>
                        <td className={`n ${k.pt !== null && k.pt >= 100 ? "hi" : ""} ${k.pt === null ? "muted" : ""}`}>{n(k.pt)}</td>
                        <td className={`n ${k.es !== null && k.es >= 100 ? "hi" : ""} ${k.es === null ? "muted" : ""}`}>{n(k.es)}</td>
                        <td><span className={`intent ${k.intent}`}>{k.intent}</span></td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr><td>Total nestes termos</td><td className="n hi">{keywordTotals.pt}</td><td className="n hi">{keywordTotals.es}</td><td /></tr>
                  </tfoot>
                </table>
              </div>
              <p className="body-s mt-3 !text-[12px]">
                {keywordTotals.note} Os termos de cauda longa (por exemplo, «ti-base compatível Straumann») não
                têm volume publicado nos mercados pequenos: são as pesquisas em que um artigo técnico com página
                de catálogo ganha sem concorrência. O mês 1 confirma com o Search Console.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="m-elevated p-5 sm:p-6 h-full">
              <span className="mono-label">O que passa a ser medido desde o dia 1</span>
              <div className="measures mt-3">
                {measures.map((m) => (
                  <div key={m.title} className="measure">
                    <h4>{m.title}</h4>
                    <p>{m.text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4"><Art name="reports" /></div>
            </div>
          </Reveal>
        </div>
      </Slide>

      {/* 04 · Artigos técnicos de alta intenção */}
      <Slide num="04" label="Artigos técnicos" variant="open" ghost="04">
        <Reveal>
          <span className="eyebrow">Conteúdo técnico com intenção de compra</span>
          <h2 className="display-2">
            Cada pesquisa de compra <strong>tem um artigo e uma página de catálogo.</strong>
          </h2>
          <p className="lede">
            O motor de conteúdo da Draivv escreve a partir das fichas técnicas,
            das tabelas de compatibilidade e dos certificados da Exaktus, com a
            fonte citada e no tom da marca. Cada artigo responde a uma pesquisa
            que antecede uma encomenda e aponta para a página de catálogo e
            para a loja. Dez exemplos, para as três linhas e para a Academy.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="overflow-x-auto">
            <table className="artmap">
              <thead>
                <tr><th>Pesquisa</th><th>Artigo técnico</th><th>Página de destino</th></tr>
              </thead>
              <tbody>
                {articles.map((a) => (
                  <tr key={a.article}>
                    <td className="q">{a.search}</td>
                    <td><span className="a">{a.article}</span></td>
                    <td className="p">{a.page}<br /><span className="tag tag-tech mt-1">{a.line}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
        <Reveal delay={0.14}>
          <div className="split mt-8">
            <div className="feat illustrated">
              <Art name="geo" />
              <div className="feat-body">
                <span className="tag tag-brand">GEO</span>
                <h3>Aparecer nas respostas de IA</h3>
                <p>Conteúdo estruturado para ser citado pelo ChatGPT, Gemini e Perplexity quando um técnico pergunta por um componente compatível. Medimos por pergunta, todas as semanas.</p>
              </div>
            </div>
            <div className="feat illustrated">
              <Art name="rag" />
              <div className="feat-body">
                <span className="tag tag-brand">Base de conhecimento</span>
                <h3>Escrito a partir do que a Exaktus sabe</h3>
                <p>Fichas, tabelas de compatibilidade e certificados entram numa base aprovada por vós. Cada artigo cita a fonte e sai com a publicação para o LinkedIn pronta.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </Slide>

      {/* 05 · O site novo: o esboço */}
      <Slide num="05" label="O site novo" variant="open">
        <Reveal>
          <span className="eyebrow">O site novo</span>
          <h2 className="display-2">
            Já há um esboço. <strong>Navegue-o antes de decidir.</strong>
          </h2>
          <p className="lede">
            Construímos um esboço navegável a partir do que a Exaktus mostra
            hoje: as três linhas de produto, o fluxo digital, a compatibilidade
            por sistema, a Academy e a Innova. Não é o site final; é a conversa
            que queremos ter convosco sobre ele.
          </p>
          <div className="mb-8 flex flex-wrap items-center gap-3">
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
        <div className="featgrid mt-8">
          {siteSections.map((s, i) => (
            <Reveal key={s.title} delay={0.05 + i * 0.04}>
              <div className="feat h-full">
                <span className="tag tag-tech">Secção {String(i + 1).padStart(2, "0")}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div className="shift mt-10">
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

      {/* 06 · O projeto do site e a tecnologia */}
      <Slide num="06" label="O projeto do site" variant="glow" ghost="6 sem.">
        <Reveal>
          <span className="eyebrow tech">O projeto do site</span>
          <h2 className="display-2">
            Seis semanas do esboço ao ar, <strong>na mesma stack dos nossos produtos.</strong>
          </h2>
          <p className="lede">
            O site é construído com a tecnologia do nosso gestor de conteúdo e
            do nosso CRM: Next.js e React, alojado na Vercel, com dados no
            Supabase. É o que permite ao site ser rápido, ser lido pelo Google
            e pelas IAs, publicar os artigos sem intervenção e entregar cada
            pedido ao CRM com origem.
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="weeks">
            {siteTimeline.map((t) => (
              <div key={t.week} className="week">
                <span className="w">{t.week}</span>
                <h4>{t.title}</h4>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <div className="featgrid mt-8">
          {siteDeliverables.map((d, i) => (
            <Reveal key={d.title} delay={0.05 + i * 0.04}>
              <div className="feat h-full">
                <span className="tag tag-brand">Incluído no setup</span>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.16}>
          <span className="mono-label mt-8 block">O que a tecnologia entrega à Exaktus</span>
          <div className="featgrid mt-3">
            {stack.map((s) => (
              <div key={s.name} className="card tech h-full stackcard">
                <div className="icon"><Icon name={s.icon} /></div>
                <span className="idx">{s.role}</span>
                <h3>{s.name}</h3>
                <ul>{s.delivers.map((d) => <li key={d}>{d}</li>)}</ul>
              </div>
            ))}
            <div className="card brand h-full stackcard">
              <div className="icon"><Icon name="target" /></div>
              <span className="idx">No fim</span>
              <h3>O que fica da Exaktus</h3>
              <ul>{stackOwnership.map((d) => <li key={d}>{d}</li>)}</ul>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="body-s mt-6 max-w-[80ch] !text-[13px]">
            Precisamos da Exaktus: {siteNeeds.map((s) => s.toLowerCase()).join("; ")}. O que faltar, resolvemos convosco na primeira semana.
          </p>
        </Reveal>
      </Slide>

      {/* 07 · Internacionalização */}
      <Slide num="07" label="Internacionalização" variant="open" collage={COLLAGE_MERCADOS}>
        <Reveal>
          <span className="eyebrow">Abertura de novos mercados</span>
          <h2 className="display-2">
            Dois países novos, <strong>uma equipa a prospetar por vós.</strong>
          </h2>
          <p className="lede">
            A Exaktus escolhe os dois países na reunião de arranque. Nós
            estudamos o mercado, encontramos os laboratórios, as clínicas e os
            distribuidores certos, escrevemos as mensagens e falamos com os
            decisores. À vossa equipa comercial chega uma reunião marcada, com
            contexto. Uma linha de produto por contrato.
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="steps3">
            <div className="card brand h-full">
              <span className="idx">Mês 1</span>
              <h3>Estudo de mercado</h3>
              <p>Quantos laboratórios, clínicas e distribuidores existem em cada país, quem já vende componentes compatíveis, o que é exigido para entrar (CE, MDR, registo) e a lista de empresas e decisores, pronta para o mês 2.</p>
            </div>
            <div className="card brand h-full">
              <span className="idx">Meses 2 a 6</span>
              <h3>Campanhas multicanal</h3>
              <p>E-mail, LinkedIn e telefone, com mensagens escritas para cada empresa e domínios dedicados. O que responde melhor ganha volume; o que não responde é reescrito, todas as semanas.</p>
            </div>
            <div className="card brand h-full">
              <span className="idx">O que recebem</span>
              <h3>Reuniões e registo</h3>
              <p>Decisores interessados, com contexto, entregues à equipa que já sabe vender. Cada empresa abordada, resposta e reunião registada na plataforma Draivv, com relatório semanal.</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="audit mt-8">
            <div className="audit-body">
              <span className="tag tag-solid">Incluído</span>
              <h3>Auditoria de IA da área comercial</h3>
              <p>No primeiro mês olhamos para o processo comercial da Exaktus, do pedido de compatibilidade ao orçamento e à encomenda, e entregamos onde a IA entra, com que impacto e por que ordem.</p>
              <ul>
                <li>Mapa de oportunidades de IA no processo comercial</li>
                <li>Matriz de impacto e esforço para decidir por onde começar</li>
                <li>Roteiro dos primeiros 90 dias</li>
              </ul>
            </div>
            <div className="audit-art"><Art name="audit" /></div>
          </div>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="body-s mt-5 max-w-[70ch] !text-[13px]">{scopeShort}</p>
        </Reveal>
      </Slide>

      {/* 08 · A plataforma */}
      <Slide num="08" label="A plataforma" variant="glow" ghost="08">
        <Reveal>
          <span className="eyebrow tech">A plataforma</span>
          <h2 className="display-2">
            Ao assinar, já têm o CRM. <strong>O resto desenha-se convosco.</strong>
          </h2>
          <p className="lede">
            Os pedidos do site e as portas abertas pela prospeção ficam
            registados na plataforma Draivv desde o primeiro dia. Como a
            plataforma é nossa, qualquer parte do processo pode ser
            automatizada e cada função pode ter o seu assistente. Vem com o
            serviço, sem licença por utilizador.
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
          </div>
        </div>
        <Reveal delay={0.12}>
          <span className="mono-label mt-8 block">Sob medida, especificado convosco</span>
          <div className="featgrid mt-3">
            {platformCustom.map((f) => (
              <div key={f.title} className="feat">
                <span className="tag tag-tech">{f.tag}</span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Slide>

      {/* 09 · Plano de 6 meses */}
      <Slide num="09" label="Plano de 6 meses" variant="open" ghost="M1→M6">
        <Reveal>
          <span className="eyebrow">Plano de 6 meses</span>
          <h2 className="display-2">
            Um mês a construir e a estudar. <strong>Cinco a publicar e a abrir portas.</strong>
          </h2>
          <p className="lede">
            O site e o estudo de mercado correm em paralelo no primeiro mês. A
            partir do segundo, o site está no ar, os artigos publicam-se e as
            campanhas correm e ajustam-se todas as semanas, com o que a medição
            mostra.
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

      {/* 10 · Resultados */}
      <Slide num="10" label="Resultados" ghost="10">
        <Reveal>
          <span className="eyebrow">Casos e números</span>
          <h2 className="display-2">
            O mesmo método, <strong>em números reais.</strong>
          </h2>
          <p className="lede">
            Dois casos em curso, um de prospeção internacional e um de
            conteúdo, com os números dos nossos sistemas em setembro de 2026.
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

      {/* 11 · Investimento */}
      <Slide num="11" label="Investimento" variant="light" ghost="€">
        <Reveal>
          <span className="eyebrow">Investimento</span>
          <h2 className="display-2">
            Um setup e uma mensalidade. <strong>Uma combinação recomendada.</strong>
          </h2>
          <p className="lede">
            O site novo é o setup do projeto, com valor único. O serviço é um
            contrato de 6 meses com três formas de contratar: o conteúdo técnico
            (Rank) faz o site ser encontrado, a prospeção (Reach) abre os dois
            países, e os dois juntos são o canal inteiro. O primeiro pagamento é
            feito na assinatura; os cinco seguintes, no início de cada mês.
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
                <tr><td>Âmbito</td><td>O site cobre a Exaktus inteira. A prospeção trabalha uma linha de produto (a nossa leitura: componentes protéticos compatíveis) em dois países. Outra linha tem estudo, listas e proposta próprios.</td></tr>
                <tr><td>Inclui</td><td>Equipa Draivv, ferramentas de prospeção, domínios dedicados, auditoria de IA da área comercial (no Reach) e plataforma com acesso para a vossa equipa.</td></tr>
                <tr><td>Sob medida</td><td>Automações e agentes para o processo da Exaktus: especificados convosco, com proposta própria.</td></tr>
              </tbody>
            </table>
          </div>
        </Reveal>
      </Slide>

      {/* 12 · Equipa e próximos passos */}
      <Slide num="12" label="Equipa e próximos passos" variant="glow" ghost="→">
        <Reveal>
          <span className="eyebrow">Quem faz e o que falta decidir</span>
          <h2 className="display-2">
            Tecnologia e comercial na mesma mesa. <strong>Três decisões e a semana 1 começa.</strong>
          </h2>
          <p className="lede">
            O Luís acompanha a Exaktus em Portugal; o Felippe desenha o estudo,
            o conteúdo e as cadências; o Filipe constrói o site, a plataforma e
            os assistentes. Quem propõe é quem executa.
          </p>
        </Reveal>
        <Team id="equipa-proposta" />
        <Reveal delay={0.1}>
          <ol className="deliv max-w-3xl mt-10">
            <li><span><b>Rever o esboço e esclarecer dúvidas.</b> O Luís Caturna percorre a proposta e o esboço do site com a equipa da Exaktus nos próximos dias.</span></li>
            <li><span><b>Confirmar a linha de produto e escolher os dois países.</b> Na reunião de arranque.</span></li>
            <li><span><b>Assinar e arrancar.</b> Assinatura, primeiro pagamento e 50% do setup; acessos e materiais técnicos partilhados; o site e o estudo começam na semana seguinte.</span></li>
          </ol>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="mailto:luis.caturna@draivv.com" className="btn btn-primary">Falar com o Luís Caturna</a>
            <a href={ESBOCO_URL} target="_blank" rel="noopener" className="btn btn-outline">Abrir o esboço do site</a>
            <Link href="/" className="btn btn-outline">Conhecer a Draivv</Link>
          </div>
        </Reveal>
      </Slide>
    </main>
  );
}
