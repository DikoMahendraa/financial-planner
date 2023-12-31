import React from 'react';
import { TypePropsAInput } from '@/types';

export default function AInput(props: Partial<TypePropsAInput>) {
  const {
    onChange,
    label,
    placeholder,
    rootStyle,
    suffix,
    prefix,
    name,
    inputRef,
    type = 'text',
    errors,
    ...rest
  } = props;

  const _inputStyle = [
    prefix ? 'pl-11' : 'px-4',
    'mt-2 w-full rounded placeholder:text-sm border border-b-2 border-r-2 border-vampire-black bg-white py-3 text-base text-vampire-black outline-none focus:border-[#6A64F1] focus:shadow-md'
  ].join(' ');
  const _rootStyle = [rootStyle].join(' ');

  return (
    <div className={_rootStyle}>
      {label && (
        <label htmlFor="income" className="font-bold capitalize">
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
          ref={inputRef}
          {...rest}
          onChange={onChange}
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
      {errors && (
        <p className="italic lowercase text-xs text-red-500">
          {errors?.[`${name}`]?.message}
        </p>
      )}
    </div>
  );
}
