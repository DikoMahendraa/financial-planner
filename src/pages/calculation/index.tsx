import Head from 'next/head';
import React from 'react';

import PageCalculations from '@/components/pages/Calculations';

export default function Calculation() {
  return (
    <React.Fragment>
      <Head>
        <title>Planner - Create Calculation Balance</title>
      </Head>
      <PageCalculations />
    </React.Fragment>
  );
}
