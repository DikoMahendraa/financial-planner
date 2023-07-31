import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { getDatabase, ref, onValue, off, query } from 'firebase/database';

import MCardInEx from '@/components/molecules/CardInEx';
import HeaderInEx from '@/components/molecules/HeaderInEx';
import { convertCurrency } from '@/utils/convertCurrency';
import { convertToArray } from '@/utils/converToArray';
import { calculateSum } from '@/utils/calculateNumber';

type StateDataType = {
  amount: number;
  date: string;
  name: string;
  category: string;
};

export default function PageIncomes() {
  const [data, setData] = useState<Array<StateDataType>>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const database = getDatabase();
    const databaseRef = query(ref(database, 'incomes'));
    const onDataChange: any = (snapshot: { val: any }) => {
      setData(snapshot.val());
    };

    onValue(databaseRef, onDataChange);
    return () => off(databaseRef, onDataChange);
  }, []);

  /* @ts-ignore */
  const listOfExpense: Array<StateDataType> = convertToArray(data);
  const getAmount = listOfExpense.map(item => Number(item.amount));

  useEffect(() => {
    if (getAmount.length > 0) {
      const convertNumber = Number(calculateSum(getAmount));
      setTotal(convertNumber);
    }
  }, [getAmount]);

  return (
    <div className="h-screen px-5 pt-5 ">
      <HeaderInEx
        title="Daftar Pengeluaran"
        amount={`Rp. ${convertCurrency(total)}`}
      />
      <hr />
      <div className="mt-4">
        {listOfExpense?.map((item, index) => {
          return (
            <MCardInEx
              key={index}
              name={item?.name}
              date={moment(item?.date).format('DD MMM YYYY')}
              amount={convertCurrency(item.amount)}
              type="expense"
              variant="small"
              category={item?.category}
              showLabel={false}
            />
          );
        })}
      </div>
    </div>
  );
}
