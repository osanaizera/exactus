"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { RevealMedia } from "@/components/ui/RevealMedia";

export function Hero() {
  const fade = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 0.61, 0.36, 1] as const },
  });

  return (
    <section className="section relative min-h-[100svh] !pt-40 !pb-28 flex items-center">
      {/* Um único foco de luz por tela: a fita azul→verde, dormente até o cursor passar */}
      <RevealMedia
        className="fill"
        dormant="/brand/hero-dormant.jpg"
        still="/brand/hero-still.jpg"
        video="/brand/hero-alive-loop.mp4"
        alt=""
        radius={260}
      />
      <span className="hint-reveal">Passe o cursor</span>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(5,9,11,.94) 0%, rgba(5,9,11,.78) 45%, rgba(5,9,11,.35) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="container pointer-events-none">
        <motion.span {...fade(0)} className="eyebrow">
          Draivv · tecnologia para negócios B2B
        </motion.span>

        <motion.h1 {...fade(0.1)} className="display-1">
          Novos clientes hoje.
          <br />
          <strong>Relação que dura</strong> depois.
        </motion.h1>

        <motion.p {...fade(0.2)} className="lede">
          A Draivv trabalha em dois produtos que se complementam: um motor de
          captação de novos clientes, por inbound e outbound, e uma plataforma
          de relacionamento com assistentes de IA especializados por tarefa.
          Especialistas em vendas e marketing, com sistemas próprios por trás.
        </motion.p>

        <motion.div {...fade(0.3)} className="flex flex-wrap items-center gap-3 pointer-events-auto">
          <Link href="/proposta" className="btn btn-primary">
            Ver a proposta para a Exaktus
          </Link>
          <Link href="/esboco" className="btn btn-outline">
            Abrir o esboço do site novo
          </Link>
        </motion.div>

        <motion.div {...fade(0.45)} className="mt-16 grid max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 sm:grid-cols-3">
          {[
            ["Produto 01", "Captação de novos clientes", "Site + inbound + outbound"],
            ["Produto 02", "Plataforma de relacionamento", "Assistentes por tarefa"],
            ["Onde", "Brasil · Portugal · Europa", "Equipa em 2 fusos"],
          ].map(([k, v, s]) => (
            <div key={k} className="m-glass px-5 py-4">
              <p className="mono-label mb-2">{k}</p>
              <p className="m-0 text-[15px] font-medium text-paper">{v}</p>
              <p className="body-s m-0">{s}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
