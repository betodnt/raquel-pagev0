import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Raquel Rodrigues Masson',
  description: 'Serviço de Assessoria Jurídica',
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png'],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body>{children}</body>
    </html>
  );
}
