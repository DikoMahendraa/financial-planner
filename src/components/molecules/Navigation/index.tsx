import ButtonNavigation from '@/components/atoms/ButtonNavigation';
import { bottomNavigation } from '@/constants/home';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

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
          const setInitial = active ? item.label : item.label.slice(0, 1);

          return (
            <ButtonNavigation
              key={key}
              rootStyle={setColumn}
              parentStyle={item.color}
              text={setInitial}
              onClick={() => handleActiveTab(item.label, item.route)}
            />
          );
        })}
      </div>
    </section>
  );
}
