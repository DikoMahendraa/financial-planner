import React from 'react';

type PropsAInput = {
  label: string;
  rootStyle: string;
  placeholder: string;
  suffix: string;
  prefix: string;
  name: string;
  type: 'text' | 'date' | 'number';
};

export default function AInput(props: Partial<PropsAInput>) {
  const {
    label,
    placeholder,
    rootStyle,
    suffix,
    prefix,
    name,
    type = 'text'
  } = props;

  const _inputStyle = [
    prefix ? 'pl-11' : 'px-4',
    'mt-2 w-full rounded-md border-2 border-vampire-black bg-white py-3 text-base text-vampire-black outline-none focus:border-[#6A64F1] focus:shadow-md'
  ].join(' ');
  const _rootStyle = [rootStyle].join(' ');

  return (
    <div className={_rootStyle}>
      {label && (
        <label htmlFor="income" className="font-bold">
          {label}
        </label>
      )}
      <div className="relative">
        {prefix && (
          <span className="absolute inset-y-8 pl-4 left-0 flex items-center">
            {prefix}
          </span>
        )}
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className={_inputStyle}
        />
        {suffix && (
          <span className="absolute inset-y-0 right-0 pr-3 flex items-center">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}
