import React from 'react';
import MNavigation from '@/components/molecules/Navigation';

export default function HomePage() {
  return (
    <main className="h-screen font-poppins">
      <div className="md:max-w-[360px] w-full h-full m-auto relative bg-aero-blue">
        <section className=" bg-blue-400 px-5">card</section>

        <MNavigation />
      </div>
    </main>
  );
}
