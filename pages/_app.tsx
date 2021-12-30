import { AppProps } from 'next/app';
import Head from 'next/head';
import Gnb from '../src/components/Gnb';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Default</title>
        <meta name="description" content="default 설정 입니다." />
      </Head>
      <Gnb />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
