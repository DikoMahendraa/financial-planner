import React from 'react';
import moment from 'moment';

import { TypeResponse } from '@/types';
import { convertCurrency } from '@/utils/convertCurrency';
import useGetValues from '@/hooks/useGetValues';

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

const SectionListExpenseIncome = ({ ...props }) => {
  return (
    <section className="px-5 mt-6 mb-10">
      <p className="mb-5 font-bold text-lg">Pengeluaran / Pemasukan Terbaru</p>

      {props.data.map((item: TypeResponse, key: number) => (
        <MCardInEx
          key={key}
          variant="small"
          type="gajian"
          category={item.category}
          name={item.name}
          amount={convertCurrency(item.amount)}
          date={moment(item.date).format('DD MMM YYYY')}
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
  const incomes = useGetValues({ path: 'incomes' });
  const expenses = useGetValues({ path: 'expenses' });

  const dataIncomes: Array<TypeResponse> = Object.values(
    incomes.snapshot || {}
  );
  const dataIexpenses: Array<TypeResponse> = Object.values(
    expenses.snapshot || {}
  );

  const allData: Array<TypeResponse> = dataIncomes.concat(dataIexpenses) || [];

  return (
    <div className="h-screen mb-48">
      <SectionProfile />
      <SectionMainCard />
      <SectionCardTarget />
      <SectionListExpenseIncome data={allData} />
    </div>
  );
}
