import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, off, query } from 'firebase/database';
import moment from 'moment';

import MCardInEx from '@/components/molecules/CardInEx';
import HeaderInEx from '@/components/molecules/HeaderInEx';
import { convertToArray } from '@/utils/converToArray';
import { convertCurrency } from '@/utils/convertCurrency';

type StateDataType = {
  amount: number;
  date: string;
  name: string;
  category: string;
};

export default function PageExpanses() {
  const [data, setData] = useState<Array<StateDataType>>([]);

  useEffect(() => {
    const database = getDatabase();
    const databaseRef = query(ref(database, 'expenses'));
    const onDataChange: any = (snapshot: { val: any }) => {
      setData(snapshot.val());
    };
    onValue(databaseRef, onDataChange);
    return () => off(databaseRef, onDataChange);
  }, []);

  /* @ts-ignore */
  const listOfExpense: Array<StateDataType> = convertToArray(data);

  return (
    <div className="h-screen px-5 pt-5">
      <HeaderInEx title="Daftar Pengeluaran" amount="Rp. 1.029.991" />
      <hr />
      <div className="mt-4">
        {listOfExpense.map((item, index) => {
          return (
            <MCardInEx
              key={index}
              name={item?.name}
              date={moment(item?.date).format('DD MMM YYYY')}
              amount={convertCurrency(item.amount)}
              type="expense"
              category={item.category}
              variant="small"
              showLabel={false}
            />
          );
        })}
      </div>
    </div>
  );
}
