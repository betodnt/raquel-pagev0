import type { Metadata } from 'next';

import './globals.css';
import Head from 'next/head';

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
      <Head>
        <link rel='icon' href='/images/favicon.ico' />
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='/images/android-chrome-192x192.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='512x512'
          href='/images/android-chrome-512x512.png'
        />
        <link rel='icon' type='image/png' sizes='32x32' href='/images/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/images/favicon-16x16.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/images/apple-touch-icon.png' />
        <link rel='manifest' href='/images/site.webmanifest' />
      </Head>
      <body>{children}</body>
    </html>
  );
}
