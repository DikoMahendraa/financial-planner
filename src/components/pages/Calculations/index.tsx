import React from 'react';
import { useRouter } from 'next/router';

import AButton from '@/components/atoms/Button';
import CollapsibleComponent from '@/components/atoms/Collapse';

export default function PageCalculations() {
  const router = useRouter();

  const onCreateCalculation = () => {
    router.push('/calculation/create');
  };

  return (
    <div className="h-screen overscroll-auto">
      <div className="px-4 h-full pt-4">
        <div className="mb-6 mt-4">
          <p>
            Hitung <strong>ALOKASI</strong> dana kamu
          </p>
        </div>

        <CollapsibleComponent title="metode: 50% - 30% - 20%">
          <ul className="list-disc pl-8">
            <li className="mb-2 italic text-sm">
              50%: adalah jumlah uang yg akan kamu tabung dari total
              penghasilanmu
            </li>
            <li className="mb-2 italic text-sm">
              30%: adalah jumlah uang yg akan kamu gunakan untuk hutang, cicilan
              atau kredit
            </li>
            <li className="mb-2 italic text-sm">
              20%: adalah jumlah uang yg akan kamu gunakan untuk kebutuhan
              sehari-hari
            </li>
          </ul>
        </CollapsibleComponent>
        <CollapsibleComponent title="metode: 40% - 30% - 20% - 10%">
          <ul className="list-disc pl-8">
            <li className="mb-2 italic text-sm">
              40%: adalah jumlah uang yg akan kamu tabung dari total
              penghasilanmu
            </li>
            <li className="mb-2 italic text-sm">
              30%: adalah jumlah uang yg akan kamu gunakan untuk hutang, cicilan
              atau kredit
            </li>
            <li className="mb-2 italic text-sm">
              20%: adalah jumlah uang yg akan kamu gunakan untuk kebutuhan
              sehari-hari
            </li>
            <li className="mb-2 italic text-sm">
              10%: (optional) adalah jumlah uang yg akan digunakan untuk dana
              darurat
            </li>
          </ul>
        </CollapsibleComponent>
        <CollapsibleComponent title="metode: 60% - 30% - 10%">
          <ul className="list-disc pl-8">
            <li className="mb-2 italic text-sm">
              60%: adalah jumlah uang yg akan kamu tabung dari total
              penghasilanmu
            </li>
            <li className="mb-2 italic text-sm">
              30%: adalah jumlah uang yg akan kamu gunakan untuk hutang, cicilan
              atau kredit
            </li>
            <li className="mb-2 italic text-sm">
              10%: adalah jumlah uang yg akan kamu gunakan untuk kebutuhan
              sehari-hari
            </li>
          </ul>
        </CollapsibleComponent>

        <div className="mt-10">
          <AButton
            onClick={onCreateCalculation}
            name="Hitung Sekarang"
            rootStyle="py-2 bg-deep-carrot-orange text-white"
          />
        </div>
      </div>
    </div>
  );
}
