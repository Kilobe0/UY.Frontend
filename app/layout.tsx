import type { Metadata } from "next";
import { Geist, Geist_Mono, Lato, Nunito, Raleway } from "next/font/google";
import { ClientThemeProvider } from "../components/client-theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "UaiYuan - Engenharia Civil | Soluções Integradas em Projetos de Engenharia",
  description: "Especialistas em soluções integradas de engenharia civil. Projetos inovadores e sustentáveis com mais de uma década de experiência no mercado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const theme = localStorage.getItem('theme') || 'light';
              document.documentElement.setAttribute('data-theme', theme);
            })();
          `
        }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${raleway.variable} ${lato.variable} ${nunito.variable} antialiased`}
      >
        <ClientThemeProvider>{children}</ClientThemeProvider>
      </body>
    </html>
  );
}
