import React from 'react';

type PropsHeaderInEx = {
  title: string;
  amount: string;
};

export default function MHeaderInEx(props: Partial<PropsHeaderInEx>) {
  const { title, amount } = props;

  return (
    <div className="flex items-center justify-between">
      <p className="font-bold capitalize text-xl mb-4">{title}</p>
      <div className="flex items-center justify-between py-2 px-4 border-2 border-vampire-black rounded-md bg-white">
        <p className="font-bold capitalize text-sm">{amount}</p>
      </div>
    </div>
  );
}
