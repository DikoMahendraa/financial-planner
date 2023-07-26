import AChips from '@/components/atoms/Chips';
import React from 'react';

type MCardInEx = {
  label: string;
  name: string;
  date: string;
  amount: string;
  type: string;
};

export default function MCardInEx(props: Partial<MCardInEx>) {
  const { label, name, date, amount, type } = props;

  return (
    <div className="bg-main-white rounded-2xl mt-2 border-vampire-black border-2 p-4 flex justify-between items-center">
      <div className="w-full">
        <p className="font-sm capitalize">{label}</p>
        <div className="flex justify-between w-full">
          <p className="text-lg font-bold">{name}</p>
          <p className="font-bold text-lg">Rp. {amount}</p>
        </div>
        <div className="flex items-center mt-1">
          <AChips name={type} rootStyle="bg-majorelle-blue" />
          <p className="text-xs ml-2 capitalize text-spanish-gray font-light">
            {date}
          </p>
        </div>
      </div>
    </div>
  );
}
