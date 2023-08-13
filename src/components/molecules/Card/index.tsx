import React from 'react';
import { TypeMCardTarget } from '@/types';
import { ICChartDown } from '@/components/icons/ICChartDown';
import { ICChartUp } from '@/components/icons/ICChartUp';
import { ICQuestionMark } from '@/components/icons/ICQuestionMark';

export default function MCard(props: TypeMCardTarget) {
  const {
    label,
    amount,
    rootStyle,
    withIcon = false,
    children,
    status,
    isEmpty = false,
    type = 'large'
  } = props;

  const _rootStyle = [
    rootStyle,
    'bg-main-white rounded-md border-b-4 border-r-4 border-black border-vampire-black border-2 p-4'
  ].join(' ');

  const chartAvailable =
    status === 'increase' ? <ICChartUp /> : <ICChartDown />;
  const iconChart = isEmpty ? <ICQuestionMark /> : chartAvailable;

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
        <div className="flex items-center">
          <p className={`font-bold mr-2 ${setStyleText}`}>Rp. {amount}</p>
          {withIcon && iconChart}
        </div>
      </div>
      {children}
    </div>
  );
}
