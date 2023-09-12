import type { AppProps } from 'next/app';
import ReduxProvider from '@/redux/Provider';
import { UserProvider } from '@/contexts/useUserContext';
import AuthStateChangeProvider from '@/contexts/useAuthContext';

import '@/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <ReduxProvider>
        <AuthStateChangeProvider />
        <Component {...pageProps} />
      </ReduxProvider>
    </UserProvider>
  );
}
