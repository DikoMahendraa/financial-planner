import React from 'react';
import moment from 'moment';

import { TypeResponse } from '@/types';
import { convertCurrency } from '@/utils/convertCurrency';
import useGetValues from '@/hooks/useGetValues';

import MCardInEx from '@/components/molecules/CardInEx';
import MCard from '@/components/molecules/Card';
import MHeaderProfile from '@/components/molecules/HeaderProfile';
import { calculateSum } from '@/utils/calculateNumber';
import AButton from '@/components/atoms/Button';
import { ICExpense } from '@/components/icons/ICExpanse';
import { ICIncome } from '@/components/icons/ICIncome';

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

const SectionCardTarget = ({
  totalExpense = 0,
  totalIncomes = 0
}: {
  totalExpense: Number | string;
  totalIncomes: Number | string;
}) => {
  return (
    <section className="grid grid-cols-2 px-5 mt-2 space-x-2">
      <MCard label="Total Pengeluaran" amount={String(totalExpense)} />
      <MCard label="Total Pemasukan" amount={String(totalIncomes)} />
    </section>
  );
};

const SectionMainCard = ({
  amount = 0,
  minus = false
}: {
  amount: Number;
  minus: boolean;
}) => {
  const convertTo = convertCurrency(Number(amount));
  const ifMinus = minus
    ? `Wah, SALDO kamu minus nih, coba muhasabah pengeluaranmu`
    : 'Hore, pengeluaranmu stabil, jangan lupa menabung';
  const styleBtn =
    'px-5 py-2 border border-b-4 border-r-4 border-black rounded-md shadow-lg text-main-white flex items-center gap-2';

  return (
    <section className="px-5 pt-5">
      <MCard
        withIcon
        status="decrease"
        label="Sisa Uangmu"
        amount={String(convertTo)}
        rootStyle="h-52 flex flex-col justify-between"
      >
        <div>
          <p className="text-xs italic">{ifMinus}</p>
        </div>
        <div className="flex gap-4">
          <AButton
            rootStyle={`${styleBtn} bg-majorelle-blue `}
            name="Pengeluaran"
            icon={<ICExpense width={20} height={20} />}
          />
          <AButton
            rootStyle={`${styleBtn} bg-deep-carrot-orange`}
            name="Pemasukan"
            icon={<ICIncome width={20} height={20} />}
          />
        </div>
      </MCard>
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

  const getAmountIncomes = dataIncomes.map(item => Number(item.amount));
  const getAmountExpenses = dataIexpenses.map(item => Number(item.amount));

  const balanceAmount =
    calculateSum(getAmountIncomes) - calculateSum(getAmountExpenses);
  const isMinus =
    calculateSum(getAmountIncomes) < calculateSum(getAmountExpenses);

  const allData: Array<TypeResponse> = dataIncomes.concat(dataIexpenses) || [];

  return (
    <div className="h-screen mb-48">
      <SectionProfile />
      <SectionMainCard minus={isMinus} amount={balanceAmount} />
      <SectionCardTarget
        totalIncomes={convertCurrency(calculateSum(getAmountIncomes))}
        totalExpense={convertCurrency(calculateSum(getAmountExpenses))}
      />
      <SectionListExpenseIncome data={allData} />
    </div>
  );
}
