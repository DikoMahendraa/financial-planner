import React, { memo } from 'react';
import { TypeMModal } from '@/types';

const MModal = ({ children }: TypeMModal) => {
  return (
    <div className="fixed bg-vampire-black/30 top-0 bottom-0 left-0 right-0 z-99 flex justify-center items-center px-6">
      {children}
    </div>
  );
};

export default memo(MModal);
