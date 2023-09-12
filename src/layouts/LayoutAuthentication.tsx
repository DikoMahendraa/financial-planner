import React from 'react';

export default function LayoutAuthentication({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen bg-aero-blue flex justify-center items-center">
      {children}
    </div>
  );
}
