import React, { memo } from 'react';

import AChips from '@/components/atoms/Chips';
import { TypeMCardInEx } from '@/types';
import { ICTrash } from '@/components/icons/ICTrash';

const MCardInEx = (props: Partial<TypeMCardInEx>) => {
  const {
    label,
    name,
    date,
    amount,
    variant = 'medium',
    showLabel = true,
    category,
    onRemove,
    onEdit
  } = props;

  const isSmall = variant === 'small';

  const style = {
    amount: isSmall ? 'text-sm' : 'text-lg',
    name: isSmall ? 'text-sm' : 'text-lg',
    label: isSmall ? 'text-sm' : 'text-lg'
  };

  return (
    <div className="border-2 border-b-4 border-r-4 border-black rounded-md shadow-lg gap-2 bg-main-white mt-2 p-3 flex justify-between items-center">
      <div className="w-full">
        {showLabel && (
          <p className={[style.label, 'capitalize'].join(' ')}>{label}</p>
        )}
        <div
          onClick={onEdit}
          className="flex cursor-pointer justify-between w-full"
        >
          <p className={[style.name, 'capitalize'].join(' ')}>{name}</p>
          <p className={[style.amount, 'font-bold'].join(' ')}>Rp. {amount}</p>
        </div>
        <div className="flex justify-between mt-1">
          <div className="flex items-center">
            {category && <AChips rootStyle="text-xs" name={category} />}
            <p className="text-xs ml-2 capitalize text-spanish-gray font-light">
              {date}
            </p>
          </div>
          {!!onRemove && (
            <div onClick={onRemove} className="cursor-pointer">
              <ICTrash />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(MCardInEx);
