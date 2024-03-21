import Head from 'next/head';
import Content from '@/components/content/Content';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Content />
      <Footer />
    </>
  );
}
