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
    status,
    type = 'large'
  } = props;

  const _rootStyle = [
    rootStyle,
    'bg-main-white rounded-md border-b-4 border-r-4 border-black border-vampire-black border-2 p-4'
  ].join(' ');

  const iconChart = status === 'increase' ? <ICChartUp /> : <ICChartDown />;

  const setStyleText = (() => {
    switch (type) {
      case 'small':
        return 'text-sm';
      case 'large':
        return 'text-2xl';
      case 'medium':
      default:
        return 'text-md';
    }
  })();

  return (
    <div className={_rootStyle}>
      <div>
        <p className="mb-2 font-light text-sm">{label}</p>
        <div className="flex">
          <p className={`font-bold mr-2 ${setStyleText}`}>Rp. {amount}</p>
          {withIcon && iconChart}
        </div>
      </div>
      {children}
    </div>
  );
}
