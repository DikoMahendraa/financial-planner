import React from 'react';

import AGap from '@/components/atoms/Gap';
import { ICAvatarProfile } from '@/components/icons/ICAvatarProfile';
import { ICDownload } from '@/components/icons/ICDownload';
import { ICArrowRightStop } from '@/components/icons/ICArrowRightStop';
import { Authentication } from '@/services/firebaseApp';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
import { deleteCookie } from 'cookies-next';

export default function PageSettings() {
  const router = useRouter();

  const onSignOut = () => {
    signOut(Authentication())
      .then(() => {
        deleteCookie('email');
        deleteCookie('uuid');
        deleteCookie('authorization');
        router.push('/login');
      })
      .catch(() => {
        // An error happened.
        // eslint-disable-next-line no-console
        console.log('something went wrong');
      });
  };

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

      <AGap height={10} />
      <div
        className="bg-red-100 rounded-xl cursor-pointer py-5 px-4 border-2 border-vampire-black flex items-center justify-between"
        onClick={onSignOut}
      >
        <p className="font-semibold">Keluar</p>

        <div className="cursor-pointer">
          <ICArrowRightStop />
        </div>
      </div>
    </div>
  );
}
