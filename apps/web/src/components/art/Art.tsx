import type { ReactNode } from "react";

export type ArtName =
  | "crm"
  | "proposal"
  | "automation"
  | "agents"
  | "mcp"
  | "rag"
  | "voice"
  | "keywords"
  | "geo"
  | "reports"
  | "linkedin"
  | "audit"
  | "site"
  | "stack";

function Svg({ children, viewBox = "0 0 320 140" }: { children: ReactNode; viewBox?: string }) {
  return (
    <svg className="art-svg" viewBox={viewBox} fill="none" aria-hidden="true">
      {children}
    </svg>
  );
}

/* 1 · CRM: kanban com cartões a avançar de coluna */
function Crm() {
  const cols = ["Abordadas", "Responderam", "Reunião", "Proposta"];
  const cards = [5, 3, 2, 1];
  return (
    <Svg>
      {cols.map((c, i) => (
        <g key={c} transform={`translate(${12 + i * 76} 12)`}>
          <text x="0" y="8" className="art-mono">{c.toUpperCase()}</text>
          <line x1="0" y1="16" x2="64" y2="16" className="art-rule" />
          {Array.from({ length: cards[i] }).map((_, k) => (
            <rect key={k} x="0" y={24 + k * 20} width="64" height="14" rx="4" className={k === 0 && i < 3 ? "art-card art-card-hot" : "art-card"} />
          ))}
        </g>
      ))}
      <circle className="art-dot art-travel" r="4" />
    </Svg>
  );
}

/* 2 · Proposta rastreada: mapa de calor da leitura por secção */
function Proposal() {
  const rows = [100, 100, 72, 18, 0];
  return (
    <Svg>
      <rect x="20" y="10" width="150" height="120" rx="8" className="art-sheet" />
      {rows.map((r, i) => (
        <g key={i}>
          <rect x="32" y={24 + i * 20} width="126" height="10" rx="3" className="art-track" />
          <rect x="32" y={24 + i * 20} width={(126 * r) / 100} height="10" rx="3" className="art-fill art-grow" style={{ animationDelay: `${i * 0.15}s` }} />
        </g>
      ))}
      <g transform="translate(190 22)">
        <text className="art-mono" y="8">ABERTA 3×</text>
        <text className="art-mono" y="30">LIDA 6M 52S</text>
        <text className="art-mono art-accent" y="52">SECÇÃO 4 · 18%</text>
        <rect x="0" y="66" width="96" height="26" rx="13" className="art-btn" />
        <text x="48" y="83" textAnchor="middle" className="art-btn-label">ACEITAR</text>
      </g>
      <circle cx="152" cy="94" r="10" className="art-ping" />
    </Svg>
  );
}

/* 3 · Automação de processo: nós ligados, pulso a percorrer o percurso */
function Automation() {
  const nodes = [
    ["Pedido", 30], ["Cotação", 105], ["Proposta", 180], ["Contrato", 255],
  ] as const;
  return (
    <Svg>
      <path d="M30 70 H255" className="art-path" />
      <path d="M105 70 C130 70 130 30 165 30 H210" className="art-path art-path-alt" />
      <path d="M30 70 H255" className="art-path art-pulse" />
      {nodes.map(([n, x], i) => (
        <g key={n} transform={`translate(${x} 70)`}>
          <circle r="14" className={i === 1 ? "art-node art-node-hot" : "art-node"} />
          <text y="34" textAnchor="middle" className="art-label">{n}</text>
        </g>
      ))}
      <g transform="translate(187 30)">
        <rect x="-38" y="-11" width="76" height="22" rx="11" className="art-chip" />
        <text textAnchor="middle" y="4" className="art-mono">AGENTE</text>
      </g>
      <text x="30" y="128" className="art-mono art-muted">QUALQUER PASSO DO PROCESSO</text>
    </Svg>
  );
}

/* 4 · Agentes por função: órbita à volta do núcleo */
function Agents() {
  const roles = ["Proposta", "Follow-up", "Qualificação", "Carteira"];
  return (
    <Svg>
      <g transform="translate(160 70)">
        <circle r="46" className="art-orbit" />
        <circle r="18" className="art-core" />
        <text textAnchor="middle" y="4" className="art-mono art-on-core">CRM</text>
        <g className="art-spin">
          {roles.map((r, i) => {
            const a = (i / roles.length) * Math.PI * 2;
            const x = Math.cos(a) * 46;
            const y = Math.sin(a) * 46;
            return (
              <g key={r} transform={`translate(${x} ${y})`}>
                <circle r="7" className="art-sat" />
              </g>
            );
          })}
        </g>
        {roles.map((r, i) => {
          const a = (i / roles.length) * Math.PI * 2;
          const x = Math.cos(a) * 92;
          const y = Math.sin(a) * 56;
          return (
            <text key={r} x={x} y={y + 4} textAnchor="middle" className="art-label">{r}</text>
          );
        })}
      </g>
    </Svg>
  );
}

/* 5 · MCP: assistentes ligados à plataforma, com a configuração em código */
function Mcp() {
  const clients = ["Claude", "ChatGPT", "Cowork"];
  const code = [
    '"mcpServers": {',
    '  "draivv": {',
    '    "url": "app.draivv.com/mcp",',
    '    "auth": "oauth" } }',
  ];
  return (
    <Svg>
      {clients.map((c, i) => (
        <g key={c} transform={`translate(14 ${22 + i * 40})`}>
          <rect width="62" height="22" rx="11" className="art-pillbox" />
          <text x="31" y="15" textAnchor="middle" className="art-label">{c}</text>
        </g>
      ))}
      <path d="M76 33 C100 33 100 73 124 73" className="art-path" />
      <path d="M76 73 H124" className="art-path" />
      <path d="M76 113 C100 113 100 73 124 73" className="art-path" />
      <path d="M76 33 C100 33 100 73 124 73" className="art-path art-pulse" />
      <path d="M76 73 H124" className="art-path art-pulse" style={{ animationDelay: "0.6s" }} />
      <path d="M76 113 C100 113 100 73 124 73" className="art-path art-pulse" style={{ animationDelay: "1.2s" }} />
      <g transform="translate(124 52)">
        <rect width="70" height="42" rx="12" className="art-core-box" />
        <text x="35" y="18" textAnchor="middle" className="art-on-core-label">Plataforma</text>
        <text x="35" y="32" textAnchor="middle" className="art-on-core-label">Draivv</text>
      </g>
      <text x="100" y="62" textAnchor="middle" className="art-mono art-accent">MCP</text>
      <g transform="translate(200 26)">
        <rect x="-8" y="-14" width="124" height="96" rx="8" className="art-codebox" />
        {code.map((line, i) => (
          <text key={i} y={i * 16} className="art-code-line">{line}</text>
        ))}
        <text y="72" className="art-mono art-muted">OAUTH · POR ACESSO</text>
      </g>
    </Svg>
  );
}

/* 6 · RAG: documentos → vetores → resposta com citação */
function Rag() {
  const dots = [
    [12, 18], [30, 40], [48, 14], [22, 62], [56, 44], [40, 78], [66, 70], [14, 90], [60, 96], [36, 108],
  ];
  return (
    <Svg>
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${16 + i * 6} ${24 + i * 10})`}>
          <rect width="44" height="56" rx="5" className="art-doc" />
          <line x1="8" y1="14" x2="34" y2="14" className="art-rule" />
          <line x1="8" y1="24" x2="30" y2="24" className="art-rule" />
          <line x1="8" y1="34" x2="34" y2="34" className="art-rule" />
        </g>
      ))}
      <path d="M78 60 H110" className="art-path art-pulse" />
      <g transform="translate(126 12)">
        {dots.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i === 4 ? 5 : 3} className={i === 4 ? "art-vec art-vec-hit" : "art-vec"} />
        ))}
      </g>
      <path d="M198 56 H226" className="art-path art-pulse" style={{ animationDelay: "0.5s" }} />
      <g transform="translate(232 28)">
        <rect width="80" height="70" rx="8" className="art-sheet" />
        <line x1="10" y1="16" x2="66" y2="16" className="art-rule" />
        <line x1="10" y1="28" x2="58" y2="28" className="art-rule" />
        <line x1="10" y1="40" x2="66" y2="40" className="art-rule" />
        <rect x="10" y="50" width="52" height="12" rx="3" className="art-cite" />
        <text x="14" y="59" className="art-mono art-on-cite">FONTE · P. 3</text>
      </g>
      <text x="16" y="116" className="art-mono art-muted">CATÁLOGOS · NORMAS</text>
      <text x="232" y="116" className="art-mono art-muted">ARTIGO CITADO</text>
    </Svg>
  );
}

/* 7 · Tom de voz: espécime do que se diz e do que não se diz */
function Voice() {
  return (
    <div className="art-voice">
      <div className="art-voice-row">
        <span className="art-mono art-muted">DIZEMOS</span>
        <span className="art-voice-yes">Ti-base compatível com Straumann Bone Level</span>
      </div>
      <div className="art-voice-row">
        <span className="art-mono art-muted">NÃO DIZEMOS</span>
        <span className="art-voice-no">a solução definitiva para o seu sorriso</span>
      </div>
      <div className="art-voice-chips">
        {["Ti-base", "cone morse", "scanbody", "UDI", "Exaktus"].map((c) => (
          <span key={c} className="art-chip-text">{c}</span>
        ))}
      </div>
      <span className="art-mono art-muted">GLOSSÁRIO · ESTILO · ERROS A EVITAR</span>
    </div>
  );
}

/* 8 · Palavras-chave: barras de oportunidade por mercado */
function Keywords() {
  const rows = [
    ["pilier compatible straumann bone level", 92, "FR"],
    ["aditamento compatible nobel active", 74, "ES"],
    ["ti-base compatibile straumann", 58, "IT"],
    ["scanbody compatível nobel", 41, "PT"],
  ] as const;
  return (
    <Svg>
      {rows.map(([k, w, m], i) => (
        <g key={k} transform={`translate(12 ${18 + i * 30})`}>
          <text y="0" className="art-label art-ellipsis">{k}</text>
          <rect x="0" y="6" width="260" height="8" rx="4" className="art-track" />
          <rect x="0" y="6" width={(260 * w) / 100} height="8" rx="4" className="art-fill art-grow" style={{ animationDelay: `${i * 0.12}s` }} />
          <text x="296" y="14" textAnchor="end" className="art-mono art-accent">{m}</text>
        </g>
      ))}
    </Svg>
  );
}

/* 9 · GEO: resposta de uma IA que cita o site */
function Geo() {
  return (
    <div className="art-geo">
      <div className="art-geo-q">Que fabricante europeu tem Ti-base compatível com Straumann Bone Level com biblioteca para exocad?</div>
      <div className="art-geo-a">
        A <b>Exaktus</b> (Vila Nova de Gaia) fabrica Ti-base em titânio grau 5 compatíveis com Straumann Bone Level, com bibliotecas oficiais em exocad e 3Shape e marcação CE…
        <span className="art-geo-src">exaktus.pt</span>
      </div>
      <span className="art-mono art-muted">CHATGPT · GEMINI · PERPLEXITY</span>
    </div>
  );
}

/* 10 · Relatórios: linha de impressões com sinais */
function Reports() {
  const pts = [10, 14, 12, 18, 16, 22, 21, 27, 25, 33, 31, 40];
  const path = pts.map((p, i) => `${i === 0 ? "M" : "L"}${20 + i * 24} ${118 - p * 2.4}`).join(" ");
  return (
    <Svg>
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1="20" y1={28 + i * 30} x2="300" y2={28 + i * 30} className="art-grid" />
      ))}
      <path d={path} className="art-line art-draw" />
      <circle cx={20 + 11 * 24} cy={118 - 40 * 2.4} r="5" className="art-dot" />
      <g transform="translate(20 8)">
        <rect width="112" height="18" rx="9" className="art-chip" />
        <text x="56" y="12" textAnchor="middle" className="art-mono">+38% IMPRESSÕES</text>
      </g>
      <g transform="translate(140 8)">
        <rect width="150" height="18" rx="9" className="art-chip art-chip-warn" />
        <text x="75" y="12" textAnchor="middle" className="art-mono">2 PÁGINAS A DECAIR</text>
      </g>
    </Svg>
  );
}

/* 11 · LinkedIn: publicação pronta, à espera de um clique */
function Linkedin() {
  return (
    <div className="art-post">
      <div className="art-post-head">
        <span className="art-avatar" />
        <span>
          <b>Exaktus</b>
          <span className="art-mono art-muted">RASCUNHO PRONTO · PUBLICAR</span>
        </span>
      </div>
      <p>
        Ti-base ou pilar personalizado? O que muda no ajuste passivo, com as tolerâncias medidas na nossa produção…
      </p>
      <div className="art-post-foot">
        <span className="art-chip-text">#implantologia</span>
        <span className="art-chip-text">#fluxodigital</span>
        <span className="art-post-btn">Publicar</span>
      </div>
    </div>
  );
}


/* 12 · Auditoria de IA: matriz de impacto × esforço, com o quadrante por onde começar */
function Audit() {
  /* [x, y, rótulo, prioritário, rótulo à esquerda do ponto] */
  const dots: Array<[number, number, string, boolean, boolean]> = [
    [72, 52, "Pedidos de compatibilidade", true, false],
    [96, 78, "Orçamento por referência", true, false],
    [196, 58, "Encomenda recorrente", false, false],
    [272, 92, "Integração loja e ERP", false, true],
    [112, 136, "Follow-up", false, false],
    [276, 166, "Relatório de carteira", false, true],
  ];
  return (
    <Svg viewBox="0 0 320 200">
      {/* eixos */}
      <line x1="40" y1="20" x2="40" y2="180" className="art-rule" />
      <line x1="40" y1="180" x2="300" y2="180" className="art-rule" />
      <line x1="170" y1="20" x2="170" y2="180" className="art-grid" />
      <line x1="40" y1="100" x2="300" y2="100" className="art-grid" />
      <text x="14" y="104" transform="rotate(-90 14 104)" textAnchor="middle" className="art-mono">IMPACTO ↑</text>
      <text x="170" y="194" textAnchor="middle" className="art-mono">ESFORÇO →</text>
      {/* quadrante por onde começar */}
      <rect x="41" y="21" width="128" height="78" rx="6" className="art-card-hot art-ping" />
      <g transform="translate(48 26)">
        <rect width="86" height="16" rx="8" className="art-chip" />
        <text x="43" y="11" textAnchor="middle" className="art-mono">COMEÇAR AQUI</text>
      </g>
      {/* oportunidades */}
      {dots.map(([x, y, label, hot, left]) => (
        <g key={label}>
          <circle cx={x} cy={y} r={hot ? 6 : 4.5} className={hot ? "art-dot" : "art-dot art-dot-muted"} />
          <text
            x={left ? x - 10 : x + 10}
            y={y + 4}
            textAnchor={left ? "end" : "start"}
            className={hot ? "art-label" : "art-label art-muted"}
          >
            {label}
          </text>
        </g>
      ))}
    </Svg>
  );
}

/* 13 · Site novo: esqueleto de página com o pedido a sair para o CRM */
function Site() {
  return (
    <Svg>
      <rect x="14" y="12" width="176" height="116" rx="8" className="art-sheet" />
      <rect x="14" y="12" width="176" height="14" rx="8" className="art-track" />
      <text x="24" y="22" className="art-mono art-muted">EXAKTUS.PT</text>
      <rect x="24" y="36" width="70" height="8" rx="2" className="art-card" />
      <rect x="24" y="48" width="96" height="5" rx="2" className="art-track" />
      <rect x="24" y="56" width="84" height="5" rx="2" className="art-track" />
      <rect x="24" y="68" width="44" height="14" rx="7" className="art-btn" />
      <text x="46" y="78" textAnchor="middle" className="art-btn-label">CATÁLOGO</text>
      <g transform="translate(130 36)">
        <rect width="48" height="46" rx="4" className="art-card art-card-hot" />
        <line x1="24" y1="6" x2="24" y2="40" className="art-rule" />
        <path d="M14 14 h20 M14 22 h20 M14 30 h20" className="art-rule" />
      </g>
      {[0, 1, 2].map((i) => (
        <rect key={i} x={24 + i * 54} y="92" width="48" height="26" rx="4" className="art-card" />
      ))}
      <path d="M190 104 C220 104 220 70 250 70" className="art-path" />
      <path d="M190 104 C220 104 220 70 250 70" className="art-path art-pulse" />
      <g transform="translate(250 48)">
        <rect width="60" height="44" rx="10" className="art-core-box" />
        <text x="30" y="20" textAnchor="middle" className="art-on-core-label">CRM</text>
        <text x="30" y="33" textAnchor="middle" className="art-on-core-label">Draivv</text>
      </g>
      <text x="196" y="124" className="art-mono art-muted">PEDIDO · ORIGEM · PÁGINA</text>
    </Svg>
  );
}

/* 14 · Stack: três camadas e o que cada uma entrega */
function Stack() {
  const layers = [
    ["Next.js · React", "o site", 0],
    ["Vercel", "onde vive", 1],
    ["Supabase", "os dados", 2],
  ] as const;
  return (
    <Svg>
      {layers.map(([name, role, i]) => (
        <g key={name} transform={`translate(${28 + i * 10} ${22 + i * 34})`}>
          <path d={`M0 16 L60 0 L${200 - i * 20} 0 L${260 - i * 20} 16 L${200 - i * 20} 32 L60 32 Z`} className={i === 0 ? "art-card art-card-hot" : "art-card"} />
          <text x="66" y="20" className="art-label">{name}</text>
          <text x={186 - i * 20} y="20" textAnchor="end" className="art-mono art-muted">{role.toUpperCase()}</text>
        </g>
      ))}
      <path d="M290 30 V118" className="art-path art-path-alt" />
      <text x="296" y="46" className="art-mono art-accent" transform="rotate(90 296 46)">SDCMS · CRM</text>
    </Svg>
  );
}

const map: Record<ArtName, () => ReactNode> = {
  crm: Crm,
  proposal: Proposal,
  automation: Automation,
  agents: Agents,
  mcp: Mcp,
  rag: Rag,
  voice: Voice,
  keywords: Keywords,
  geo: Geo,
  reports: Reports,
  linkedin: Linkedin,
  audit: Audit,
  site: Site,
  stack: Stack,
};

/** Vinheta ilustrativa por conceito. Decorativa: o texto do cartão diz o resto. */
export function Art({ name }: { name: ArtName }) {
  const Comp = map[name];
  return (
    <div className={`art art-${name}`}>
      <Comp />
    </div>
  );
}
