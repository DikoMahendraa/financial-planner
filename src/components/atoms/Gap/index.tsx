import React from 'react';

export default function AGap({
  height,
  width
}: {
  height?: string | number;
  width?: string | number;
}) {
  return <div style={{ width, height }} />;
}
