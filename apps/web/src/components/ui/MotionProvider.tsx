"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/**
 * Uma única árvore para servidor e cliente. Com `reducedMotion="user"` o
 * Motion desliga transformações quando o utilizador pede movimento reduzido
 * e mantém só a transição de opacidade, sem ramificar o JSX (o que deixava
 * o `opacity: 0` do SSR colado ao DOM depois da hidratação).
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
