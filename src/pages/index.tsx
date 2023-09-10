import React from 'react';
import Head from 'next/head';

import HomePage from '@/components/pages/Home';
import MainLayout from '@/layouts';

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Planner - Homepage</title>
      </Head>
      <MainLayout>
        <HomePage />
      </MainLayout>
    </React.Fragment>
  );
}
