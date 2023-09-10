import React from 'react';
import MNavigation from '@/components/molecules/Navigation';
import { useRouter } from 'next/router';
import Head from 'next/head';

type PropsMainLayout = {
  children: string | JSX.Element | JSX.Element[] | React.ReactNode;
};

export default function MainLayout(props: PropsMainLayout) {
  const { children } = props;

  const router = useRouter();

  const hideNavigation = !router?.pathname.includes('calculation/create');

  return (
    <main>
      <Head>
        <title>Financial planner | Homepage</title>
        <meta
          name="financial planner"
          content="financial planner is web application for calculate your balanced salary, within a lot of variant/method/type"
          key="financial"
        />
      </Head>
      <div className="h-screen bg-aero-blue md:w-[480px] w-full m-auto">
        {children}

        {hideNavigation && <MNavigation />}
      </div>
    </main>
  );
}
