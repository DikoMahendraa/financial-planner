import React from 'react';
import Head from 'next/head';

import PageIncomes from '@/components/pages/Incomes';
import MainLayout from '@/layouts';

export default function Incomes() {
  return (
    <React.Fragment>
      <Head>
        <title>Planner - Homepage</title>
      </Head>
      <MainLayout>
        <PageIncomes />
      </MainLayout>
    </React.Fragment>
  );
}
