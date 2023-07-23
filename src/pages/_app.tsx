import type { AppProps } from "next/app";
import "@/globals.css";

export default function MyApp({ Component }: AppProps) {
  return <Component {...pageProps} />;
}
