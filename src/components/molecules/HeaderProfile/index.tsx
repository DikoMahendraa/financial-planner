import React from 'react';
import { ICAvatarProfile } from '@/icons/ICAvatarProfile';

type PropsHeaderProfile = {
  name: string;
};

export default function MHeaderProfile(props: Partial<PropsHeaderProfile>) {
  const { name } = props;

  return (
    <div className="flex justify-between items-center">
      <div>
        <p className="text-lg capitalize">
          Halo, <strong>{name}</strong>
        </p>
        <p className="font-light">Selamat Datang</p>
      </div>
      <div>
        <ICAvatarProfile />
      </div>
    </div>
  );
}
