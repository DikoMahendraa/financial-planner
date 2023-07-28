import React from 'react';

type PropsAButton = {
  name: string;
  rootStyle: string;
  onClick: () => void;
};

export default function AButton(props: Partial<PropsAButton>) {
  const { name, rootStyle, onClick } = props;

  const _rootStyle = [
    rootStyle,
    'border-2 rounded-md w-full border-vampire-black px-6 py-2 capitalize'
  ].join(' ');

  return (
    <button onClick={onClick} className={_rootStyle}>
      {name}
    </button>
  );
}
