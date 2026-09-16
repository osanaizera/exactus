import { Frame } from "./Frame";

/** Pergunta ao Claude ligado à plataforma por MCP. */
export function ChatMock() {
  return (
    <Frame title="Claude · ligado à plataforma Draivv (MCP)">
      <div className="mock-chat">
        <div className="mock-msg user">Que laboratórios em França pediram orçamento de Ti-base e ainda não responderam?</div>
        <div className="mock-msg bot">
          <b>4 orçamentos</b> enviados há mais de 5 dias sem leitura: Laboratoire Dentaire Moreau (Lyon), Prothèse
          Atlantique (Nantes), Lab Céramique Sud (Marselha) e Dentalis (Lille). Quer que prepare um e-mail de
          acompanhamento para cada um?
        </div>
        <div className="mock-msg user">Sim, e junta a tabela de compatibilidade Straumann Bone Level.</div>
      </div>
    </Frame>
  );
}
