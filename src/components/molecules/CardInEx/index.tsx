import AChips from '@/components/atoms/Chips';
import React from 'react';

type MCardInEx = {
  label: string;
  name: string;
  date: string;
  amount: string;
  type: string;
  showLabel: boolean;
  variant: 'small' | 'medium' | 'large';
};

export default function MCardInEx(props: Partial<MCardInEx>) {
  const {
    label,
    name,
    date,
    amount,
    type,
    variant = 'medium',
    showLabel = true
  } = props;

  const isSmall = variant === 'small';

  const style = {
    amount: isSmall ? 'text-md' : 'text-lg',
    name: isSmall ? 'text-md' : 'text-lg',
    label: isSmall ? 'text-sm' : 'text-lg'
  };

  return (
    <div className="bg-main-white rounded-2xl mt-2 border-vampire-black border-2 p-4 flex justify-between items-center">
      <div className="w-full">
        {showLabel && (
          <p className={[style.label, 'capitalize'].join(' ')}>{label}</p>
        )}
        <div className="flex justify-between w-full">
          <p className={[style.name].join(' ')}>{name}</p>
          <p className={[style.amount, 'font-bold'].join(' ')}>Rp. {amount}</p>
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
