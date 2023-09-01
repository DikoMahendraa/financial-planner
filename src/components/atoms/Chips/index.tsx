import React from 'react';
import { TypeAChips } from '@/types';

export default function AChips(props: Partial<TypeAChips>) {
  const { name, rootStyle } = props;

  const setColorChips = (() => {
    switch (name) {
      case 'internet':
        return 'bg-majorelle-blue';
      case 'jajan':
        return 'bg-mid-blue-purple';
      case 'pulsa':
        return 'bg-earth-yellow';
      case 'jajan':
        return 'bg-mid-blue-purple';
      case 'kebutuhan':
        return 'bg-forest-green';
      case 'gajian':
        return 'bg-deep-carrot-orange';
      default:
        return 'bg-gray-platinum text-vampire-black';
    }
  })();

  const _rootStyle = [
    rootStyle,
    setColorChips,
    'text-xs px-2 py-1 rounded border border-r-2 border-b-2 border-vampire-black  text-main-white capitalize'
  ].join(' ');

  return <p className={_rootStyle}>{name}</p>;
}
