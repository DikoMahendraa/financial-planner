import React from 'react';
import MNavigation from '@/components/molecules/Navigation';
import { useRouter } from 'next/router';

type PropsMainLayout = {
  children: string | JSX.Element | JSX.Element[] | React.ReactNode;
};

export default function MainLayout(props: PropsMainLayout) {
  const { children } = props;

  const router = useRouter();

  const hideNavigation = !router?.pathname.includes('calculation');

  return (
    <main>
      <div className="h-screen bg-aero-blue md:w-[480px] w-full m-auto">
        {children}
        {hideNavigation && <MNavigation />}
      </div>
    </main>
  );
}
