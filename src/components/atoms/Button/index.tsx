import React from 'react';

type PropsAButton = {
  name: string;
  rootStyle: string;
  onClick: () => void;
  type: "button" | "submit" | "reset" | undefined
};

export default function AButton(props: Partial<PropsAButton>) {
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
