import { Frame } from "./Frame";

const sections = [
  { name: "Resumo", read: 100, time: "1m 20s" },
  { name: "Componentes compatíveis", read: 100, time: "3m 40s" },
  { name: "Condições", read: 72, time: "0m 55s" },
  { name: "Prazos de entrega", read: 18, time: "0m 12s" },
];

/** Orçamento rastreado: microsite privado com leitura por secção. */
export function ProposalMock() {
  return (
    <Frame title="draivv.app · orçamento 0417 · Laboratório de prótese, Lyon">
      <div className="mock-row">
        <span className="tag tag-brand">Aberto 3×</span>
        <span className="tag tag-tech">Lido por 2 pessoas</span>
        <span className="mock-muted">Última abertura há 2 h</span>
      </div>
      <ul className="mock-sections">
        {sections.map((s) => (
          <li key={s.name}>
            <span className="mock-sec-name">{s.name}</span>
            <span className="mock-track">
              <i style={{ width: `${s.read}%` }} />
            </span>
            <span className="mock-muted">{s.time}</span>
          </li>
        ))}
      </ul>
      <div className="mock-row mock-actions">
        <span className="mock-btn primary">Aceitar orçamento</span>
        <span className="mock-btn">Pedir alteração</span>
        <span className="mock-muted">O comercial recebe o aviso na hora</span>
      </div>
    </Frame>
  );
}
