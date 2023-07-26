import type { AppProps } from 'next/app';
import '@/globals.css';
import MainLayout from '@/layouts';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />;
    </MainLayout>
  );
}
