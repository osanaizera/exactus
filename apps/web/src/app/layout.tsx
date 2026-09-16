import type { Metadata } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import { MotionProvider } from "@/components/ui/MotionProvider";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Draivv × Exaktus · Site novo, conteúdo técnico e dois mercados",
  description:
    "Proposta da Draivv para a Exaktus: um site novo construído para converter, um motor de conteúdo técnico para ser encontrado no Google e nas IAs, e prospeção internacional em dois países durante seis meses, com a plataforma Draivv desde a assinatura.",
  metadataBase: new URL("https://exaktus.draivv.com"),
  openGraph: {
    title: "Draivv × Exaktus",
    description:
      "Site novo (Next.js, Vercel, Supabase), Rank (conteúdo técnico, SEO e GEO) e Reach (prospeção internacional em dois países).",
    images: ["/brand/hero-abstract.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-PT" className={`${manrope.variable} ${mono.variable}`}>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
