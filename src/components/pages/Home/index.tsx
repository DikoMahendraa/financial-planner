import React from 'react';

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
      <p className="mb-5 font-bold text-lg">Pengeluaran / Pemasukan Terbaru</p>
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
      <MCard label="Total Pengeluaran" amount="100k" />
      <MCard label="Target Tabunganmu" amount="10Jt" />
    </section>
  );
};

const SectionMainCard = () => {
  return (
    <section className="px-5 pt-5">
      <MCard label="Sisa Uangmu" amount="10.000.000" rootStyle="h-52" />
    </section>
  );
};

export default function HomePage() {
  return (
    <div className="h-screen mb-44">
      <SectionProfile />
      <SectionMainCard />
      <SectionCardTarget />
      <SectionListExpenseIncome />
    </div>
  );
}
