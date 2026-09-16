"use client";

import { useEffect, useRef, useState } from "react";

type RevealMediaProps = {
  /** Camada base: versão dormente (dessaturada, escurecida). */
  dormant: string;
  /** Primeiro frame do vídeo, registado pixel a pixel com o loop. */
  still: string;
  /** Loop ping-pong, sem áudio. */
  video: string;
  alt: string;
  /** Raio da máscara do cursor, em px. */
  radius?: number;
  className?: string;
  /** Sem cursor (toque) ou com movimento reduzido: mostra a camada viva inteira ou só a imagem. */
  fallback?: "alive" | "still";
};

/**
 * Efeito "estático → vivo" do pacote de marca Draivv: a imagem dormente é a
 * base e a camada viva (vídeo) só aparece sob o cursor, através de uma
 * máscara radial. O primeiro frame do MP4 é o `still`, por isso a máscara
 * não salta ao revelar.
 */
export function RevealMedia({
  dormant,
  still,
  video,
  alt,
  radius = 220,
  className = "",
  fallback = "alive",
}: RevealMediaProps) {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mode, setMode] = useState<"cursor" | "alive" | "still">("still");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (reduced) {
      setMode("still");
      return;
    }
    setMode(fine ? "cursor" : fallback);
  }, [fallback]);

  useEffect(() => {
    const el = ref.current;
    if (!el || mode !== "cursor") return;

    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--rx", `${e.clientX - r.left}px`);
      el.style.setProperty("--ry", `${e.clientY - r.top}px`);
      el.dataset.active = "true";
    };
    const leave = () => {
      el.dataset.active = "false";
    };
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    return () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
    };
  }, [mode]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (mode === "still") {
      v.pause();
      return;
    }
    v.play().catch(() => {
      /* autoplay bloqueado: fica no still, que é o frame zero */
    });
  }, [mode]);

  const showVideo = mode !== "still";

  return (
    <div
      ref={ref}
      className={`reveal-media ${className}`}
      data-mode={mode}
      data-active="false"
      style={{ "--r": `${radius}px` } as React.CSSProperties}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="reveal-base" src={mode === "still" ? still : dormant} alt={alt} />
      {showVideo ? (
        <video
          ref={videoRef}
          className="reveal-alive"
          src={video}
          poster={still}
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
      ) : null}
    </div>
  );
}
