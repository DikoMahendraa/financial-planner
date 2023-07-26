import React from 'react';
import MNavigation from '@/components/molecules/Navigation';
import { ICAvatarProfile } from '@/components/icons/ICAvatarProfile';

export default function HomePage() {
  return (
    <main className="h-full font-poppins">
      <div className="md:max-w-[360px] w-full h-full m-auto relative bg-aero-blue">
        <section className="px-5 pt-5">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-lg">
                Hi, <strong>Diko Mahendra</strong>
              </p>
              <p className="font-light">Welcome Back</p>
            </div>
            <div>
              <ICAvatarProfile />
            </div>
          </div>
        </section>

        <section className="px-5 pt-5">
          <div className="bg-main-white h-52 rounded-2xl border-vampire-black border-2 p-4">
            <p className="font-light">Your Balance</p>
            <p className="text-xl font-bold">Rp. 10.000.000</p>
          </div>
        </section>

        <section className="grid grid-cols-2 px-5 mt-2 space-x-2">
          <div className="bg-main-white rounded-2xl border-vampire-black border-2 p-4">
            <p className="font-light">Your last entry</p>
            <p className="text-2xl font-bold">Rp. 100k</p>
          </div>

          <div className="bg-main-white rounded-2xl border-vampire-black border-2 p-4">
            <p className="font-light">Your goals</p>
            <p className="text-2xl font-bold">Rp. 10JT</p>
          </div>
        </section>

        <section className="px-5 mt-6 mb-10">
          <p className="mb-5 font-bold text-lg">
            List of expenses / income last
          </p>
          {[1, 2, 3].map(key => (
            <div
              key={key}
              className="bg-main-white rounded-2xl mt-2 border-vampire-black border-2 p-4 flex justify-between items-center"
            >
              <div className="w-full">
                <p className="font-sm">Income</p>
                <div className="flex justify-between w-full">
                  <p className="text-lg font-bold">Gajian Bulanan VTR</p>
                  <p className="font-bold text-lg">Rp. 10.210.928</p>
                </div>
                <div className="flex items-center mt-1">
                  <p className="text-xs bg-majorelle-blue px-2 py-1 rounded-full text-main-white">
                    Gajian
                  </p>
                  <p className="text-xs ml-2">21 May 2023</p>
                </div>
              </div>
            </div>
          ))}
        </section>

        <MNavigation />
      </div>
    </main>
  );
}
