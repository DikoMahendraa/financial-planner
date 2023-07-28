import React from 'react';

type PropsAModal = {
  children: React.ReactNode | JSX.Element;
};

export default function MModal({ children }: PropsAModal) {
  return (
    <div className="fixed bg-vampire-black/30 top-0 bottom-0 left-0 right-0 z-99 flex justify-center items-center">
      {children}
    </div>
  );
}
