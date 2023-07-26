import React from 'react';

type MCardTarget = {
  label: string;
  amount: string;
  rootStyle?: string;
};

export default function MCard(props: MCardTarget) {
  const { label, amount, rootStyle } = props;

  const _rootStyle = [
    rootStyle,
    'bg-main-white rounded-2xl border-vampire-black border-2 p-4'
  ].join(' ');

  return (
    <div className={_rootStyle}>
      <p className="font-light">{label}</p>
      <p className="text-2xl font-bold">Rp. {amount}</p>
    </div>
  );
}
