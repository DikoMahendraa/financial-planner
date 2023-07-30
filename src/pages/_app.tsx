import type { AppProps } from 'next/app';
import MainLayout from '@/layouts';

import '@/globals.css';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebaseConfig';

export default function MyApp({ Component, pageProps }: AppProps) {
  /* @ts-ignore */
  if (!initializeApp?.apps?.length) {
    initializeApp(firebaseConfig);
  }

  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
