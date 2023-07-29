import type { AppProps } from 'next/app';
import MainLayout from '@/layouts';

import '@/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
