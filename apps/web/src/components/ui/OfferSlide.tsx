import { Slide } from "./Slide";
import { Reveal } from "./Reveal";
import type { Offer } from "@/app/proposta/offers";

/**
 * Slide de oferta: uma capa por método (Reach, Rank, Run). Imagem em faixa
 * com o selo da oferta, título com a palavra-chave a azul, resumo em
 * linguagem simples e três blocos: o que é, como funciona, o que recebem.
 */
export function OfferSlide({ num, offer }: { num: string; offer: Offer }) {
  return (
    <Slide num={num} label={`${offer.name} ${offer.nameStrong}`} variant="open">
      <Reveal>
        <div className={offer.art ? "kv-band is-art" : "kv-band"}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={offer.image} alt={offer.alt} />
          <div className="kv-stamp">
            <span className="mono-label">{offer.num}</span>
            <span className="name">
              {offer.name} <strong>{offer.nameStrong}</strong>
            </span>
            <p className="strap">{offer.strap}</p>
          </div>
        </div>
      </Reveal>
      <div className="kv-grid">
        <Reveal delay={0.06}>
          <h2 className="display-2">
            {offer.title} <strong>{offer.titleStrong}</strong>
          </h2>
          <p className="lede">{offer.summary}</p>
          <p className="kv-note">{offer.role}</p>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="kv-cards">
            {offer.cards.map((c) => (
              <div key={c.label} className="kv-card">
                <span className="mono-label">{c.label}</span>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Slide>
  );
}
