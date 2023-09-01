import React from 'react';
import Head from 'next/head';

import PageSettings from '@/components/pages/Settings';

export default function Settings() {
  return (
    <React.Fragment>
      <Head>
        <title>Planner - Settings</title>
      </Head>
      <PageSettings />
    </React.Fragment>
  );
}
