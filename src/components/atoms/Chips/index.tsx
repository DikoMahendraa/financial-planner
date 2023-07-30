import React from 'react';

type AChips = {
  rootStyle: string;
  name: string;
};

export default function AChips(props: Partial<AChips>) {
  const { name, rootStyle } = props;

  const setColorChips = (() => {
    switch (name) {
      case 'internet':
        return 'bg-majorelle-blue';
      case 'jajan':
        return 'bg-mid-blue-purple';
      case 'kebutuhan':
        return 'bg-forest-green';
      case 'gajian':
        return 'bg-deep-carrot-orange';
      default:
        return 'bg-gray-platinum';
    }
  })();

  const _rootStyle = [
    rootStyle,
    setColorChips,
    'text-xs px-2 py-1 rounded-full text-main-white capitalize'
  ].join(' ');

  return <p className={_rootStyle}>{name}</p>;
}
