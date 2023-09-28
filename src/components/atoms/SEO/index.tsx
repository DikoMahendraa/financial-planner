import Head from 'next/head';
import React from 'react';

export default function ASEO({
  title = 'Financial Planner'
}: {
  title: string;
}) {
  return (
    <Head>
      <title>Financial Planner | {title}</title>
      <meta
        name="description"
        content="catat pemasukan, pengeluaran, dan tabungan mu jauh lebih mudah, hanya dalam genggaman"
      />

      <meta
        property="og:url"
        content="https://financial-planner-ck.vercel.app/"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Financial Planner" />
      <meta
        property="og:description"
        content="catat pemasukan, pengeluaran, dan tabungan mu jauh lebih mudah, hanya dalam genggaman"
      />
      <meta
        property="og:image"
        content="https://financial-planner-ck.vercel.app/illustrations/il-layout.png"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:domain"
        content="https://financial-planner-ck.vercel.app/"
      />
      <meta
        property="twitter:url"
        content="https://financial-planner-ck.vercel.app/"
      />
      <meta name="twitter:title" content="Financial Planner" />
      <meta
        name="twitter:description"
        content="catat pemasukan, pengeluaran, dan tabungan mu jauh lebih mudah, hanya dalam genggaman"
      />
      <meta
        name="twitter:image"
        content="https://financial-planner-ck.vercel.app/illustrations/il-layout.png"
      />
    </Head>
  );
}
