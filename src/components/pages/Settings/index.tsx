'use client';

import React from 'react';

import AGap from '@/components/atoms/Gap';
import { ICAvatarProfile } from '@/components/icons/ICAvatarProfile';
import { ICDownload } from '@/components/icons/ICDownload';
import { ICArrowRightStop } from '@/components/icons/ICArrowRightStop';
import { Authentication } from '@/services/firebaseApp';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
import { deleteCookie, getCookie } from 'cookies-next';

export default function PageSettings() {
  const router = useRouter();

  const username = getCookie('username') ?? 'No Name';

  const onSignOut = () => {
    signOut(Authentication())
      .then(() => {
        deleteCookie('email');
        deleteCookie('uuid');
        deleteCookie('authorization');
        deleteCookie('username');
        router.push('/login');
      })
      .catch(() => {});
  };

  return (
    <div className="h-screen px-4 pt-4">
      <div className="bg-main-white cursor-pointer rounded-xl border-2 border-vampire-black px-4 py-3 flex items-center justify-between">
        <button onClick={() => {}}>
          <p className="font-light text-sm">Profile</p>
          <p>
            Hi, <strong className="capitalize">{username}</strong>
          </p>
        </button>
        <ICAvatarProfile />
      </div>

      <AGap height={10} />
      <div className="bg-main-white rounded-xl p-4 border-2 border-vampire-black flex items-center justify-between">
        <p className="font-semibold">Atur Tema</p>
        <div className="w-11 h-11 border-2 rounded-sm border-vampire-black bg-aero-blue cursor-pointer" />
      </div>

      <AGap height={10} />
      <div className="bg-main-white rounded-xl py-5 px-4 border-2 border-vampire-black flex items-center justify-between">
        <p className="font-semibold">Export Data</p>

        <div className="cursor-pointer">
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
