import React from 'react';

type PropsButtonNavigation = {
  rootStyle: string;
  parentStyle: string;
  atomStyle: string;
  text: string;
  onClick: () => void;
};

export default function AButtonNavigation(
  props: Partial<PropsButtonNavigation>
) {
  const { rootStyle, parentStyle, atomStyle, text, onClick } = props;

  const _rootStyle = [rootStyle, 'cursor-pointer'].join(' ');
  const _atomStyle = [atomStyle, 'text-main-white capitalize'].join(' ');
  const _parentStyle = [
    parentStyle,
    'w-full h-16 rounded-full flex items-center justify-center'
  ].join(' ');

  return (
    <div className={_rootStyle} onClick={onClick}>
      <div className={_parentStyle}>
        <p className={_atomStyle}>{text}</p>
      </div>
    </div>
  );
}
