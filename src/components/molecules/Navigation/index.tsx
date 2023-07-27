import React, { useState } from 'react';
import { useRouter } from 'next/router';

import ButtonNavigation from '@/components/atoms/ButtonNavigation';
import { bottomNavigation } from '@/constants/home';

export default function MNavigation() {
  const [activeTab, setActiveTab] = useState('home');
  const router = useRouter();

  const handleActiveTab = async (tab: string, route: string) => {
    setActiveTab(tab);
    await router.push(route);
  };

  return (
    <section className="sticky bottom-5 w-full px-4">
      <div className="bg-vampire-black h-18 w-full rounded-[40px] grid grid-cols-5 p-1 space-x-1">
        {bottomNavigation.map((item, key) => {
          const active = activeTab === item.label;
          const setColumn = active ? 'col-span-2' : 'col-span-1';
          const setInitial = active && item.label;

          return (
            <ButtonNavigation
              key={key}
              rootStyle={setColumn}
              parentStyle={item.color}
              text={setInitial}
              label={item.label}
              onClick={() => handleActiveTab(item.label, item.route)}
            />
          );
        })}
      </div>
    </section>
  );
}
