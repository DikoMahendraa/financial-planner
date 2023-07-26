import React from 'react';

export default function Home() {
  return (
    <main className="h-screen font-poppins">
      <div className="md:max-w-[360px] w-full h-full m-auto relative bg-aero-blue">
        <section className=" bg-blue-400 px-5">card</section>

        <section className="absolute bottom-5 w-full px-4">
          <div className="bg-vampire-black h-18 w-full rounded-[40px] grid grid-cols-5 p-1 space-x-1">
            <div className="col-span-2 cursor-pointer">
              <div className="w-full h-16 rounded-full bg-forest-green flex items-center justify-center">
                <p className="text-main-white m-0">Home</p>
              </div>
            </div>
            <div className="col-span-1 ">
              <div className="w-full h-full rounded-full bg-majorelle-blue flex items-center justify-center">
                <p className="text-main-white m-0">E</p>
              </div>
            </div>
            <div className="col-span-1">
              <div className="w-full h-full rounded-full bg-earth-yellow flex items-center justify-center">
                <p className="text-main-white m-0">I</p>
              </div>
            </div>
            <div className="col-span-1">
              <div className="w-full h-full rounded-full bg-mid-blue-purple flex items-center justify-center">
                <p className="text-main-white m-0">S</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
