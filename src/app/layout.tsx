import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Regularização com os Bombeiros - PPCI | Eben Engenharia",
  description:
    "A regularização de incêndio não precisa ser um pesadelo burocrático nem um rombo no orçamento. Garanta a segurança do seu patrimônio com eficiência e responsabilidade aqui na Eben Engenharia. Faça seu projeto de bombeiros (PPCI) com a gente!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.className} min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
