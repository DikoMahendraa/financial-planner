import React from 'react';
import Head from 'next/head';

import HomePage from '@/components/pages/Home';

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Planner - Homepage</title>
      </Head>
      <HomePage />
    </React.Fragment>
  );
}
