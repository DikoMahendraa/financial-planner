import React from 'react';
import Head from 'next/head';

import PageExpenses from '@/components/pages/Expenses';

export default function Expanses() {
  return (
    <React.Fragment>
      <Head>
        <title>Planner - Homepage</title>
      </Head>
      <PageExpenses />;
    </React.Fragment>
  );
}
