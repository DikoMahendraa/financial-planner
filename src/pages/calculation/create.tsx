import React from 'react';
import CreateCalculation from '@/components/pages/Calculations/create';
import Head from 'next/head';
import MainLayout from '@/layouts';

export default function PageCreateCalculation() {
  return (
    <React.Fragment>
      <Head>
        <title>Planner - Calculation Balance</title>
      </Head>
      <MainLayout>
        <CreateCalculation />
      </MainLayout>
    </React.Fragment>
  );
}
