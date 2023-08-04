import React from 'react';
import { TypeAButton } from '@/types';

export default function AButton(props: Partial<TypeAButton>) {
  const { name, rootStyle, onClick, type } = props;

  const _rootStyle = [
    rootStyle,
    'border-2 rounded-md w-full border-vampire-black px-6 py-3 capitalize'
  ].join(' ');

  return (
    <button type={type} onClick={onClick} className={_rootStyle}>
      {name}
    </button>
  );
}
