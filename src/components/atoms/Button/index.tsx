import React from 'react';
import { TypeAButton } from '@/types';

export default function AButton(props: Partial<TypeAButton>) {
  const { name, rootStyle, onClick, type, icon, disabled } = props;

  const _rootStyle = [
    rootStyle,
    'border-2 w-full border-vampire-black capitalize gap-2'
  ].join(' ');

  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={_rootStyle}
    >
      {icon} <p>{name}</p>
    </button>
  );
}
