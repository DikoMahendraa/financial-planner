import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/icons/favicon.ico" sizes="10rem" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
