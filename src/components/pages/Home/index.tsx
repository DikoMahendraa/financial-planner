import React from 'react';
import MNavigation from '@/components/molecules/Navigation';
import MCardInEx from '@/components/molecules/CardInEx';
import MCard from '@/components/molecules/Card';
import MHeaderProfile from '@/components/molecules/HeaderProfile';

const SectionProfile = () => {
  return (
    <section className="px-5 pt-5">
      <MHeaderProfile name="Diko Mahendra" />
    </section>
  );
};

const SectionListExpenseIncome = () => {
  return (
    <section className="px-5 mt-6 mb-10">
      <p className="mb-5 font-bold text-lg">List of expenses / income last</p>
      {[1, 2, 3].map(key => (
        <MCardInEx
          key={key}
          type="gajian"
          label="income"
          name="Gaji bulanan VTR"
          amount="10.000.000"
          date="21 may 2023"
        />
      ))}
    </section>
  );
};

const SectionCardTarget = () => {
  return (
    <section className="grid grid-cols-2 px-5 mt-2 space-x-2">
      <MCard label="Your last entry" amount="100k" />
      <MCard label="Your goals" amount="10Jt" />
    </section>
  );
};

const SectionMainCard = () => {
  return (
    <section className="px-5 pt-5">
      <MCard label="Your Balance" amount="10.000.000" rootStyle="h-52" />
    </section>
  );
};

export default function HomePage() {
  return (
    <main className="h-full">
      <div className="md:max-w-[360px] w-full h-full m-auto relative bg-aero-blue">
        <SectionProfile />
        <SectionMainCard />
        <SectionCardTarget />
        <SectionListExpenseIncome />
        <MNavigation />
      </div>
    </main>
  );
}
