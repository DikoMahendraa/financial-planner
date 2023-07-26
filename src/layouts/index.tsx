import React from 'react';
import MNavigation from '@/components/molecules/Navigation';

type PropsMainLayout = {
  children: string | JSX.Element | JSX.Element[] | React.ReactNode;
};

export default function MainLayout(props: PropsMainLayout) {
  const { children } = props;
  return (
    <main className="h-full">
      <div className="md:max-w-[360px] w-full h-full m-auto relative bg-aero-blue">
        {children}
        <MNavigation />
      </div>
    </main>
  );
}