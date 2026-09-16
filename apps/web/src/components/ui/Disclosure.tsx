"use client";

import { useState, type ReactNode } from "react";
import { motion } from "motion/react";

type DisclosureProps = {
  /** Texto do botão que convida a explorar. */
  label: string;
  /** Linha pequena por baixo do botão. */
  hint?: string;
  /** Rótulo da secção para a telemetria de leitura (quem abriu, viu). */
  section?: string;
  children: ReactNode;
};

/**
 * Conteúdo escondido atrás de um convite. Quem quer saber mais abre; quem
 * lê por alto segue em frente. Ao abrir, a área ganha um data-section
 * próprio, e o tracker do CRM regista que foi explorada.
 */
export function Disclosure({ label, hint, section, children }: DisclosureProps) {
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <div className="disclosure-cta">
        <button type="button" className="btn btn-primary" onClick={() => setOpen(true)}>
          {label}
        </button>
        {hint ? <p className="body-s mt-3 !text-[13px]">{hint}</p> : null}
      </div>
    );
  }

  return (
    <motion.div
      data-section={section}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
      <div className="disclosure-close">
        <button type="button" className="btn btn-outline btn-sm" onClick={() => setOpen(false)}>
          Recolher
        </button>
      </div>
    </motion.div>
  );
}
