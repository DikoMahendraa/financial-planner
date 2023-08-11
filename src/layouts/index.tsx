import React from 'react';
import MNavigation from '@/components/molecules/Navigation';

type PropsMainLayout = {
  children: string | JSX.Element | JSX.Element[] | React.ReactNode;
};

export default function MainLayout(props: PropsMainLayout) {
  const { children } = props;
  return (
    <main>
      <div className="h-screen bg-aero-blue md:w-[480px] w-full m-auto">
        {children}
        <MNavigation />
      </div>
    </main>
  );
}
