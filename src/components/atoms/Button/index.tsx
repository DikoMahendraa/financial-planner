import React from 'react';
import { TypeAButton } from '@/types';

export default function AButton(props: Partial<TypeAButton>) {
  const { name, rootStyle, onClick, type, icon } = props;

  const _rootStyle = [
    rootStyle,
    'border-2 w-full border-vampire-black capitalize'
  ].join(' ');

  return (
    <button type={type} onClick={onClick} className={_rootStyle}>
      {icon} {name}
    </button>
  );
}
