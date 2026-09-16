"use client";

import { useEffect, useRef, useState } from "react";

type Device = "desktop" | "mobile";

const VIEWPORT: Record<Device, { width: number; height: number; label: string }> = {
  desktop: { width: 1440, height: 900, label: "Desktop" },
  mobile: { width: 390, height: 780, label: "Telemóvel" },
};

type SitePlayerProps = {
  /** Página a carregar dentro do player (mesma origem). */
  url: string;
  /** Captura mostrada antes de carregar a página. */
  poster: string;
  posterAlt: string;
  title: string;
};

/**
 * Mini player do site: uma janela de browser ilustrativa que, ao clicar,
 * carrega o esboço real numa iframe à escala. Quem lê a proposta navega o
 * site sem sair do deck; quem quer o ecrã inteiro abre numa página nova.
 * A iframe só é montada depois do clique, para o deck não capturar o scroll
 * nem carregar a página a quem passa por alto.
 */
export function SitePlayer({ url, poster, posterAlt, title }: SitePlayerProps) {
  const [live, setLive] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [device, setDevice] = useState<Device>("desktop");
  const [scale, setScale] = useState(1);
  const viewportRef = useRef<HTMLDivElement>(null);

  const vp = VIEWPORT[device];

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const update = () => {
      const { width, height } = el.getBoundingClientRect();
      if (!width || !height) return;
      setScale(Math.min(width / vp.width, height / vp.height));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [vp.width, vp.height]);

  const switchDevice = (next: Device) => {
    if (next === device) return;
    setLoaded(false);
    setDevice(next);
  };

  return (
    <div className={`player mock mock-light ${device === "mobile" ? "is-mobile" : ""}`}>
      <div className="mock-bar player-bar">
        <span className="mock-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="mock-title">{title}</span>
        <div className="player-toggle" role="group" aria-label="Tamanho do ecrã">
          {(Object.keys(VIEWPORT) as Device[]).map((d) => (
            <button
              key={d}
              type="button"
              className={d === device ? "is-active" : ""}
              aria-pressed={d === device}
              onClick={() => switchDevice(d)}
            >
              {VIEWPORT[d].label}
            </button>
          ))}
        </div>
      </div>

      <div className="player-viewport" ref={viewportRef}>
        {live ? (
          <div
            className="player-stage"
            style={{ width: vp.width * scale, height: vp.height * scale }}
          >
            <iframe
              key={device}
              className="player-frame"
              src={url}
              title={title}
              loading="lazy"
              onLoad={() => setLoaded(true)}
              style={{
                width: vp.width,
                height: vp.height,
                transform: `scale(${scale})`,
              }}
            />
            {!loaded ? <div className="player-loading">A carregar o esboço…</div> : null}
          </div>
        ) : (
          <button
            type="button"
            className="player-poster"
            onClick={() => setLive(true)}
            aria-label="Navegar o esboço do site aqui"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={poster} alt={posterAlt} />
            <span className="player-play">
              <span className="player-play-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M8 5.5v13l11-6.5z" />
                </svg>
              </span>
              <span>Navegar o esboço aqui</span>
            </span>
          </button>
        )}
      </div>

      <div className="player-foot">
        <span className="body-s !text-[12.5px]">
          {live
            ? "Está a navegar o esboço real. Use a roda do rato ou o dedo para percorrer a página."
            : "Esboço v0.1, para discussão. Clique para navegar a página dentro da proposta."}
        </span>
        <span className="player-actions">
          {live ? (
            <button type="button" className="btn btn-outline btn-sm" onClick={() => { setLive(false); setLoaded(false); }}>
              Fechar
            </button>
          ) : null}
          <a href={url} target="_blank" rel="noopener" className="btn btn-outline btn-sm">
            Abrir em página nova
          </a>
        </span>
      </div>
    </div>
  );
}
