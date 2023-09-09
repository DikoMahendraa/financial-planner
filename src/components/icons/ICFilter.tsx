import React from 'react';

export const ICFilter = ({
  width,
  height
}: {
  width: number;
  height: number;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${height} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 7L20 7"
        stroke="#33363F"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 7L8 7"
        stroke="#33363F"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M17 17L20 17"
        stroke="#33363F"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 17L12 17"
        stroke="#33363F"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle
        cx="10"
        cy="7"
        r="2"
        transform="rotate(90 10 7)"
        stroke="#33363F"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle
        cx="15"
        cy="17"
        r="2"
        transform="rotate(90 15 17)"
        stroke="#33363F"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
