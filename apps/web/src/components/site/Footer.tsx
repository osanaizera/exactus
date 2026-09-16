import { Lockup } from "@/components/ui/Lockup";

export function Footer() {
  return (
    <footer className="section !py-12">
      <hr className="rule" />
      <div className="container flex flex-wrap items-center justify-between gap-6 pt-10">
        <Lockup tagline="inteligência humana · sistemas inteligentes" />
        <div className="mono-label">Brasil · Portugal · draivv.com</div>
      </div>
      <p className="container body-s mt-6 max-w-2xl">
        Documento preparado pela Draivv para a Exaktus. Conteúdo confidencial,
        destinado exclusivamente à avaliação desta proposta.
      </p>
    </footer>
  );
}
