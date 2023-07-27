import React from 'react';

import { ICCreate } from '@/icons/ICCreate';

export default function AButtonCreate() {
  return (
    <section className="sticky cursor-pointer bottom-28 flex justify-end px-4">
      <p className="bg-yellow w-16 h-16 flex rounded-full items-center justify-center">
        <ICCreate />
      </p>
    </section>
  );
}
