import React from 'react';
import { TypeMCardTarget } from '@/types';
import { ICChartDown } from '@/components/icons/ICChartDown';
import { ICChartUp } from '@/components/icons/ICChartUp';

export default function MCard(props: TypeMCardTarget) {
  const {
    label,
    amount,
    rootStyle,
    withIcon = false,
    children,
    status
  } = props;

  const _rootStyle = [
    rootStyle,
    'bg-main-white rounded-2xl border-vampire-black border-2 p-4'
  ].join(' ');

  const iconChart = status === 'increase' ? <ICChartUp /> : <ICChartDown />;

  return (
    <div className={_rootStyle}>
      <div>
        <p className="mb-2 font-light">{label}</p>
        <div className="flex">
          <p className="text-2xl font-bold mr-2">Rp. {amount}</p>
          {withIcon && iconChart}
        </div>
      </div>
      {children}
    </div>
  );
}
