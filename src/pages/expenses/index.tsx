import React from 'react';
import Head from 'next/head';

import PageExpenses from '@/components/pages/Expenses';
import MainLayout from '@/layouts';

export default function Expanses() {
  return (
    <React.Fragment>
      <Head>
        <title>Planner - Homepage</title>
      </Head>
      <MainLayout>
        <PageExpenses />
      </MainLayout>
    </React.Fragment>
  );
}
