import React from 'react';

import { ICCreate } from '@/components/icons/ICCreate';

type PropsAButtonCreate = {
  onClick: () => void;
};

export default function AButtonCreate(props: Partial<PropsAButtonCreate>) {
  const { onClick } = props;

  return (
    <section
      onClick={onClick}
      className="fixed cursor-pointer bottom-28 flex justify-end w-full md:max-w-[480px] px-4"
    >
      <p className="bg-yellow w-16 h-16 flex rounded-full items-center justify-center">
        <ICCreate />
      </p>
    </section>
  );
}
