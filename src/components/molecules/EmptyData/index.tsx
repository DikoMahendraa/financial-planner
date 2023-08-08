import React from 'react';
import Image from 'next/image';
import AButton from '@/components/atoms/Button';

type PropsEmptyData = {
  title: string;
  onClick: () => void;
};

export default function MEmptyState({ title = '', onClick }: PropsEmptyData) {
  return (
    <div className="h-screen flex justify-center items-center">
      <div>
        <Image
          src="/illustrations/il-empty-state.png"
          width={350}
          height={100}
          layout="contain"
          loading="lazy"
          alt="check-images"
        />
        <p className="text-center mb-4">
          Ups kamu belum punya <strong>{title}</strong> <br /> Yuk Buat
        </p>
        <AButton name={`Buat ${title}`} onClick={onClick} />
      </div>
    </div>
  );
}
