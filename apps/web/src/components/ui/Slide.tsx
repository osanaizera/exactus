import type { ReactNode } from "react";
import { Mark } from "./Mark";

type SlideProps = {
  num: string;
  label: string;
  ghost?: string;
  /** "light" = tema documental (tabelas, investimento); "glow" = foco de luz atmosférico */
  variant?: "dark" | "light" | "glow" | "glow-green" | "open";
  /** Colagem em facetas (tema open): caminho da imagem. */
  collage?: string;
  /** Símbolo Draivv em marca de água, mono, muito baixa opacidade. */
  watermark?: boolean;
  footLeft?: string;
  footRight?: string;
  children: ReactNode;
};

const variantClass: Record<NonNullable<SlideProps["variant"]>, string> = {
  dark: "",
  light: "theme-light",
  glow: "m-light",
  "glow-green": "m-light-green",
  open: "theme-open",
};

export function Slide({
  num,
  label,
  ghost,
  watermark = false,
  collage,
  variant = "dark",
  footLeft = "Draivv × Exaktus",
  footRight = "Confidencial · Setembro 2026",
  children,
}: SlideProps) {
  return (
    <section
      className={`slide ${variantClass[variant]} ${collage ? "with-collage" : ""}`}
      data-section={`${num} ${label}`}
    >
      <div className="slide-chrome">
        <span>
          <span className="num">{num}</span> · {label}
        </span>
        <span>draivv.com</span>
      </div>
      {collage ? (
        <>
          <div className="collage" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={collage} alt="" />
          </div>
          <div className="collage-fade hidden md:block" aria-hidden="true" />
        </>
      ) : null}
      {variant === "open" ? <span className="pagenum">{num}</span> : null}
      {ghost ? <div className="ghost">{ghost}</div> : null}
      {watermark ? (
        <div className="watermark" aria-hidden="true">
          <Mark title="" />
        </div>
      ) : null}
      <div className="slide-inner">{children}</div>
      <div className="slide-foot">
        <span>{footLeft}</span>
        <span>{footRight}</span>
      </div>
    </section>
  );
}
