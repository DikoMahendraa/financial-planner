import React, { useEffect, useState } from 'react';

import { getDatabase, ref, onValue, off, query } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../../../firebaseConfig';

import MCardInEx from '@/components/molecules/CardInEx';
import MCard from '@/components/molecules/Card';
import MHeaderProfile from '@/components/molecules/HeaderProfile';
import { convertToArray } from '@/utils/converToArray';
import { convertCurrency } from '@/utils/convertCurrency';
import moment from 'moment';

const SectionProfile = () => {
  return (
    <section className="px-5 pt-5">
      <MHeaderProfile name="Diko Mahendra" />
    </section>
  );
};

type StateDataType = {
  amount: number;
  date: string;
  name: string;
  category: string;
  createdAt: string;
};

type StateParent = {
  incomes: any;
  expenses: any;
};

const SectionListExpenseIncome = ({ ...props }) => {
  return (
    <section className="px-5 mt-6 mb-10">
      <p className="mb-5 font-bold text-lg">Pengeluaran / Pemasukan Terbaru</p>

      {props.data.map((item: StateDataType, key: number) => (
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
  const [data, setData] = useState<StateParent>();
  useEffect(() => {
    /* need fixed type */
    const database = getDatabase();
    const databaseRef = query(ref(database, '/'));
    const onDataChange: any = (snapshot: { val: any }) => {
      setData(snapshot.val());
    };
    onValue(databaseRef, onDataChange);
    return () => off(databaseRef, onDataChange);
  }, []);

  const listOfIncomes = convertToArray(data?.incomes);
  const listOfExpense = convertToArray(data?.expenses);
  const allData = listOfExpense.concat(listOfIncomes);

  return (
    <div className="h-screen mb-44">
      <SectionProfile />
      <SectionMainCard />
      <SectionCardTarget />
      <SectionListExpenseIncome data={allData} />
    </div>
  );
}
