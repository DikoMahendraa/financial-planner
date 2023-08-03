import AChips from '@/components/atoms/Chips';
import { ICTrash } from '@/icons/ICTrash';
import React from 'react';

type MCardInEx = {
  label: string;
  name: string;
  date: string;
  amount: string;
  type: string;
  showLabel: boolean;
  variant: 'small' | 'medium' | 'large';
  category: string;
  onRemove: () => void;
};

export default function MCardInEx(props: Partial<MCardInEx>) {
  const {
    label,
    name,
    date,
    amount,
    variant = 'medium',
    showLabel = true,
    category,
    onRemove
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
        <div className="flex justify-between mt-1">
          <div className="flex items-center">
            {category && <AChips name={category} />}
            <p className="text-xs ml-2 capitalize text-spanish-gray font-light">
              {date}
            </p>
          </div>
          <div onClick={onRemove} className="cursor-pointer">
            <ICTrash />
          </div>
        </div>
      </div>
    </div>
  );
}
