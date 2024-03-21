import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Raquel Rodrigues Masson',
  description: 'Serviço de Assessoria Jurídica',
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
