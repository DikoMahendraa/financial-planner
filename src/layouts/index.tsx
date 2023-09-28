import React from 'react';
import MNavigation from '@/components/molecules/Navigation';
import { useRouter } from 'next/router';

import ASEO from '@/components/atoms/SEO';

type PropsMainLayout = {
  children: string | React.JSX.Element | React.JSX.Element[] | React.ReactNode;
};

export default function MainLayout(props: PropsMainLayout) {
  const { children } = props;

  const router = useRouter();

  const hideNavigation = !router?.pathname.includes('calculation/create');
  const currentPath = (() => {
    switch (router.pathname) {
      case '/incomes':
        return 'Pemasukan';
      case '/expenses':
        return 'Pengeluaran';
      case '/calculation':
        return 'Hitung Anggaranmu';
      case '/settings':
        return 'Pengaturan';
      case '/':
      default:
        return 'Halaman Utama';
    }
  })();

  return (
    <main>
      <ASEO title={currentPath} />
      <div className="h-screen bg-aero-blue md:w-[480px] w-full m-auto">
        {children}

        {hideNavigation && <MNavigation />}
      </div>
    </main>
  );
}
