import type { Metadata } from "next";
import { Roboto, Playfair } from "next/font/google";
import "./globals.css";

const playfair = Playfair({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const roboto = Roboto({
  weight: ["300", "400", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Raquel Rodrigues Masson",
  description: "Serviço de Assessoria Jurídica",
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${roboto.variable}`}>
      <body>{children}</body>
    </html>
  );
}
