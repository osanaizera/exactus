import Link from "next/link";
import { Lockup } from "@/components/ui/Lockup";

const links = [
  { href: "#captacao", label: "Captação" },
  { href: "#plataforma", label: "Plataforma" },
  { href: "#como-se-liga", label: "Como se liga" },
  { href: "#equipa", label: "Equipa" },
  { href: "/esboco", label: "Esboço do site" },
];

export function Navbar() {
  return (
    <header className="nav m-glass">
      <nav className="container flex h-16 items-center justify-between gap-4">
        <Lockup />
        <div className="hidden items-center gap-7 text-sm text-n-300 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-paper">
              {link.label}
            </Link>
          ))}
        </div>
        <Link href="/proposta" className="btn btn-primary btn-sm">
          Ver a proposta
        </Link>
      </nav>
    </header>
  );
}
