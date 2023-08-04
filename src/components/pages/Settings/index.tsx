import React from 'react';

import { ICAvatarProfile } from '@/components/icons/ICAvatarProfile';
import AGap from '@/components/atoms/Gap';
import { ICDownload } from '@/components/icons/ICDownload';

export default function PageSettings() {
  return (
    <div className="h-screen px-4 pt-4">
      <div
        onClick={() => {}}
        className="bg-main-white cursor-pointer rounded-xl border-2 border-vampire-black px-4 py-3 flex items-center justify-between"
      >
        <div>
          <p className="font-light text-sm">Profile</p>
          <p>
            Hi, <strong>Diko Mahendra</strong>
          </p>
        </div>
        <ICAvatarProfile />
      </div>

      <AGap height={10} />
      <div className="bg-main-white rounded-xl p-4 border-2 border-vampire-black flex items-center justify-between">
        <p className="font-semibold">Atur Tema</p>
        <div
          className="w-11 h-11 border-2 rounded-sm border-vampire-black bg-aero-blue cursor-pointer"
          onClick={() => {}}
        />
      </div>

      <AGap height={10} />
      <div className="bg-main-white rounded-xl py-5 px-4 border-2 border-vampire-black flex items-center justify-between">
        <p className="font-semibold">Export Data</p>

        <div className="cursor-pointer" onClick={() => {}}>
          <ICDownload />
        </div>
      </div>
    </div>
  );
}
