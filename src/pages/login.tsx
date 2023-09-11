import React from 'react';
import Head from 'next/head';
import LayoutAuthentication from '@/layouts/LayoutAuthentication';
import PageLogin from '@/components/pages/Login';

export default function Login() {
  return (
    <React.Fragment>
      <Head>
        <title>Planner - Masuk</title>
      </Head>
      <LayoutAuthentication>
        <PageLogin />
      </LayoutAuthentication>
    </React.Fragment>
  );
}
