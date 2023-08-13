import React from 'react';
import Image from 'next/image';
import AButton from '@/components/atoms/Button';
import { TypeEmptyData } from '@/types';

export default function MEmptyState({
  title = '',
  onClick,
  rootStyle,
  illustration,
  description,
  actionBtn = true
}: Partial<TypeEmptyData>) {
  const _rootStyle = [rootStyle, 'flex justify-center items-center'].join(' ');

  return (
    <div className={_rootStyle}>
      <div className="text-center">
        <div className="flex w-full justify-center">
          <Image
            src="/illustrations/il-empty-state.png"
            width={illustration?.width || 350}
            height={illustration?.height || 100}
            layout="contain"
            loading="lazy"
            alt="check-images"
          />
        </div>
        {description}
        {actionBtn && (
          <div className="mx-20">
            <AButton
              rootStyle="py-2 bg-earth-yellow border border-r-2 border-b-2"
              name={`Buat ${title}`}
              onClick={onClick}
            />
          </div>
        )}
      </div>
    </div>
  );
}
