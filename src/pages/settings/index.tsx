import React from 'react';
import Head from 'next/head';

import PageSettings from '@/components/pages/Settings';
import MainLayout from '@/layouts';

export default function Settings() {
  return (
    <React.Fragment>
      <Head>
        <title>Planner - Settings</title>
      </Head>
      <MainLayout>
        <PageSettings />
      </MainLayout>
    </React.Fragment>
  );
}
