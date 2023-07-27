import React from 'react';

import { ICExpense } from '@/icons/ICExpanse';
import { ICHome } from '@/icons/ICHome';
import { ICIncome } from '@/icons/ICIncome';
import { ICSetting } from '@/icons/ICSetting';

type PropsButtonNavigation = {
  rootStyle: string;
  parentStyle: string;
  atomStyle: string;
  text: string | boolean;
  label: 'home' | 'expands' | 'income' | 'settings' | string;
  onClick: () => void;
};

export default function AButtonNavigation(
  props: Partial<PropsButtonNavigation>
) {
  const { rootStyle, parentStyle, atomStyle, text, label, onClick } = props;

  const _rootStyle = [rootStyle, 'cursor-pointer'].join(' ');
  const _atomStyle = [atomStyle, 'text-main-white capitalize'].join(' ');
  const _parentStyle = [
    parentStyle,
    'w-full h-16 rounded-full flex items-center justify-center'
  ].join(' ');

  const Icon = () => {
    switch (label) {
      case 'home':
        return <ICHome />;
      case 'income':
        return <ICIncome />;
      case 'expands':
        return <ICExpense />;
      case 'settings':
        return <ICSetting />;
      default:
        return null;
    }
  };

  return (
    <div className={_rootStyle} onClick={onClick}>
      <div className={_parentStyle}>
        <Icon />
        <p className={_atomStyle}>{text}</p>
      </div>
    </div>
  );
}
