import React from 'react';
import { TypeAGap } from '@/types';

export default function AGap({ height, width }: Partial<TypeAGap>) {
  return <div style={{ width, height }} />;
}
