import { Frame } from "./Frame";

/** Artigo técnico gerado a partir da base de conhecimento, com fontes citadas, e ficha de catálogo. */
export function ArticleMock() {
  return (
    <Frame title="exaktus.pt · artigo técnico" className="mock-light">
      <div className="mock-article">
        <div className="mock-art-main">
          <span className="mock-kicker">Fluxo digital · Guia técnico</span>
          <h4>Ti-base ou pilar personalizado: o que muda no ajuste passivo de uma prótese sobre implantes</h4>
          <p>
            Numa Ti-base Exaktus para conexão Straumann Bone Level, a tolerância dimensional de referência é de
            <b> ±0,005 mm </b>
            <span className="mock-cite">Ficha técnica EXK-TB-BL · p. 2</span>. Com a biblioteca oficial no
            exocad, o laboratório desenha sem conversão… <span className="mock-cite">Base de conhecimento · Bibliotecas CAD</span>
          </p>
          <div className="mock-row">
            <span className="tag tag-brand">Fonte citada</span>
            <span className="tag tag-tech">PT · ES · FR · IT</span>
            <span className="tag">Publicação LinkedIn pronta</span>
          </div>
        </div>
        <div className="mock-catalog">
          <span className="mock-kicker">Catálogo indexável</span>
          <div className="mock-swatch" />
          <b>EXK-TB-BL · Ti-base compatível Straumann BL</b>
          <span className="mock-muted">Titânio grau 5 · plataforma RC · rotacional e anti-rotacional</span>
          <span className="mock-muted">Marcação CE · referência UDI · biblioteca exocad e 3Shape</span>
          <span className="mock-btn primary">Encomendar na loja</span>
        </div>
      </div>
    </Frame>
  );
}
