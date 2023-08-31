import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { bottomNavigation } from '@/constants/home';
import ButtonNavigation from '@/components/atoms/ButtonNavigation';

export default function MNavigation() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<string>(router.route);

  const handleActiveTab = (tab: string) => {
    router.push(tab);
    setActiveTab(tab);
  };

  return (
    <React.Fragment>
      <section className="fixed md:max-w-[480px] bottom-0 w-full">
        <div className="bg-vampire-black h-14 rounded-t-3xl grid grid-cols-6 p-1 space-x-1">
          {bottomNavigation.map((item, key) => {
            const active = activeTab === item.route;
            const setColumn = active ? 'col-span-2' : 'col-span-1';
            const setInitial = active && item.label;

            return (
              <ButtonNavigation
                key={key}
                active={active}
                rootStyle={setColumn}
                parentStyle={item.color}
                text={setInitial}
                label={item.label}
                onClick={() => handleActiveTab(item.route)}
              />
            );
          })}
        </div>
      </section>
    </React.Fragment>
  );
}
