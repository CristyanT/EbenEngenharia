import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visita Técnica Gratuita · Eben Engenharia",
  description:
    "Agende sua visita técnica gratuita junto a um engenheiro especialista em AVCB. Evite multas pesadas e interdições. Regularize seu negócio de forma inteligente.",
};

export default function LPLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
