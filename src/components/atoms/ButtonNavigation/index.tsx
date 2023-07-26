import React from 'react';

type PropsButtonNavigation = {
  rootStyle: string;
  parentStyle: string;
  atomStyle: string;
  text: string;
};

export default function ButtonNavigation(
  props: Partial<PropsButtonNavigation>
) {
  const { rootStyle, parentStyle, atomStyle, text } = props;

  const _rootStyle = [rootStyle, 'cursor-pointer'].join(' ');
  const _atomStyle = [atomStyle, 'text-main-white m-0'].join(' ');
  const _parentStyle = [
    parentStyle,
    'w-full h-16 rounded-full flex items-center justify-center'
  ].join(' ');

  return (
    <div className={_rootStyle}>
      <div className={_parentStyle}>
        <p className={_atomStyle}>{text}</p>
      </div>
    </div>
  );
}
