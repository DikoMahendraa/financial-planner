import ButtonNavigation from '@/components/atoms/ButtonNavigation';
import React from 'react';

export default function MNavigation() {
  return (
    <section className="absolute bottom-5 w-full px-4">
      <div className="bg-vampire-black h-18 w-full rounded-[40px] grid grid-cols-5 p-1 space-x-1">
        <ButtonNavigation
          rootStyle="col-span-2"
          parentStyle="bg-forest-green"
          text="Home"
        />
        <ButtonNavigation
          rootStyle="col-span-1"
          parentStyle="bg-majorelle-blue"
          text="I"
        />
        <ButtonNavigation
          rootStyle="col-span-1"
          parentStyle="bg-earth-yellow"
          text="E"
        />
        <ButtonNavigation
          rootStyle="col-span-1"
          parentStyle="bg-mid-blue-purple"
          text="S"
        />
      </div>
    </section>
  );
}
