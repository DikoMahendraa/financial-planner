import type { AppProps } from 'next/app';
import ReduxProvider from '@/redux/Provider';
import { UserProvider } from '@/contexts/useUserContext';

import '@/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <ReduxProvider>
        <Component {...pageProps} />
      </ReduxProvider>
    </UserProvider>
  );
}
