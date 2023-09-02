import React from 'react';
import Head from 'next/head';

import PageIncomes from '@/components/pages/Incomes';

export default function Incomes() {
  return (
    <React.Fragment>
      <Head>
        <title>Planner - Homepage</title>
      </Head>
      <PageIncomes />
    </React.Fragment>
  );
}
