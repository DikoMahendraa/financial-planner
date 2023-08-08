import type { AppProps } from 'next/app';
import ReduxProvider from '@/redux/Provider';
import MainLayout from '@/layouts';
import '@/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ReduxProvider>
  );
}
