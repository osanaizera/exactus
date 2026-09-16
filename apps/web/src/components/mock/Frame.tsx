import type { ReactNode } from "react";

/** Janela de produto ilustrativa: barra com três pontos, título mono, corpo. */
export function Frame({ title, children, className = "" }: { title: string; children: ReactNode; className?: string }) {
  return (
    <div className={`mock ${className}`} aria-hidden="true">
      <div className="mock-bar">
        <span className="mock-dots">
          <i />
          <i />
          <i />
        </span>
        <span className="mock-title">{title}</span>
      </div>
      <div className="mock-body">{children}</div>
    </div>
  );
}
