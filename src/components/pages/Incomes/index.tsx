import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { getDatabase, ref, onValue, off, remove } from 'firebase/database';

import MCardInEx from '@/components/molecules/CardInEx';
import HeaderInEx from '@/components/molecules/HeaderInEx';
import { convertCurrency } from '@/utils/convertCurrency';
import { convertToArray } from '@/utils/converToArray';
import { calculateSum } from '@/utils/calculateNumber';

type StateDataType = {
  amount: number;
  date: string;
  name: string;
  uuid: string;
  id: string;
  category: string;
};

export default function PageIncomes() {
  const [data, setData] = useState<Array<StateDataType>>([]);
  const [total, setTotal] = useState<number>(0);

  const database = getDatabase();

  useEffect(() => {
    const databaseRef = ref(database, 'incomes');
    const onDataChange: any = (snapshot: { val: any }) => {
      setData(snapshot.val());
    };

    onValue(databaseRef, onDataChange);
    return () => off(databaseRef, onDataChange);
  }, [database]);

  /* @ts-ignore */
  const listOfExpense: Array<StateDataType> = convertToArray(data);
  const getAmount = listOfExpense.map(item => Number(item.amount));

  useEffect(() => {
    if (getAmount.length > 0) {
      const convertNumber = Number(calculateSum(getAmount));
      setTotal(convertNumber);
    }
  }, [getAmount]);

  const onRemove = async ({ uuid }: { uuid: string }) => {
    return await remove(ref(database, `incomes/${uuid}`))
      .then(() => {})
      .catch(() => {});
  };

  return (
    <div className="h-screen px-5 pt-5 ">
      <HeaderInEx
        title="Daftar Pemasukan"
        amount={`Rp. ${convertCurrency(total)}`}
      />
      <hr />
      <div className="mt-4">
        {listOfExpense?.map((item, index) => {
          return (
            <MCardInEx
              onRemove={() => onRemove(item)}
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
