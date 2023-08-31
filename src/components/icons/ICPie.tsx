import React from 'react';

export const ICPie = ({
  width,
  height
}: {
  width?: number | string;
  height?: number | string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="9" stroke="#000000" stroke-width="2" />
      <path
        d="M12 12H21"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M12 3V11.9379C12 11.9777 12.0158 12.0158 12.0439 12.0439L18 18"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};
