import React from 'react';
import Head from 'next/head';

import LayoutAuthentication from '@/layouts/LayoutAuthentication';
import PageRegister from '@/components/pages/Register';

export default function Register() {
  return (
    <React.Fragment>
      <Head>
        <title>Planner - Register</title>
      </Head>

      <LayoutAuthentication>
        <PageRegister />
      </LayoutAuthentication>
    </React.Fragment>
  );
}
