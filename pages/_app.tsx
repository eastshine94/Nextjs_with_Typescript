import React, { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactQueryProvider } from '../src/context/react-query-context';
import Gnb from '../src/components/Gnb';
import Footer from '../src/components/Footer';
import Loading from '../src/components/Loading';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const onRouteChangeStart = () => {
      setIsLoading(true);
    };

    const onRouteChangeComplete = () => {
      setIsLoading(false);
    };

    router.events.on('routeChangeStart', onRouteChangeStart);
    router.events.on('routeChangeComplete', onRouteChangeComplete);

    return () => {
      router.events.off('routeChangeStart', onRouteChangeStart);
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, [router]);
  return (
    <ReactQueryProvider>
      <Head>
        <title>Default</title>
        <meta name="description" content="default 설정 입니다." />
      </Head>
      {isLoading && <Loading />}
      <Gnb />
      <Component {...pageProps} />
      <Footer />
    </ReactQueryProvider>
  );
}

export default MyApp;
