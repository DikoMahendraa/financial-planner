import React from 'react';

import { ICExpense } from '@/components/icons/ICExpanse';
import { ICHome } from '@/components/icons/ICHome';
import { ICIncome } from '@/components/icons/ICIncome';
import { ICSetting } from '@/components/icons/ICSetting';
import { TypeButtonNavigation } from '@/types';
import { ICPie } from '@/components/icons/ICPie';

export default function AButtonNavigation(
  props: Partial<TypeButtonNavigation>
) {
  const { rootStyle, parentStyle, atomStyle, text, label, onClick, active } =
    props;

  const _rootStyle = [rootStyle, 'cursor-pointer'].join(' ');
  const _atomStyle = [atomStyle, 'text-main-white capitalize'].join(' ');
  const _parentStyle = [
    parentStyle,
    'w-full h-12 rounded-full flex items-center justify-center'
  ].join(' ');

  const Icon = () => {
    switch (label) {
      case 'home':
        return <ICHome />;
      case 'pengeluaran':
        return <ICIncome width={34} height={34} />;
      case 'pemasukan':
        return <ICExpense width={34} height={34} />;
      case 'alokasi':
        return <ICPie width={34} height={34} />;
      case 'pengaturan':
      default:
        return <ICSetting />;
    }
  };

  return (
    <div className={_rootStyle} onClick={onClick}>
      <div className={_parentStyle}>
        {!active && <Icon />}
        <p className={_atomStyle}>{text}</p>
      </div>
    </div>
  );
}
