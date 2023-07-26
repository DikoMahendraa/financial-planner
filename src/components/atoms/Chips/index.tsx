import React from 'react';

type AChips = {
  rootStyle: string;
  name: string;
};

export default function AChips(props: Partial<AChips>) {
  const { name, rootStyle } = props;

  const _rootStyle = [
    rootStyle,
    'text-xs px-2 py-1 rounded-full text-main-white capitalize'
  ].join(' ');

  return <p className={_rootStyle}>{name}</p>;
}
