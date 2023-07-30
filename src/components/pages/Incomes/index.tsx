import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { getDatabase, ref, onValue, off } from 'firebase/database';
import { initializeApp } from 'firebase/app';

import MCardInEx from '@/components/molecules/CardInEx';

import { firebaseConfig } from '../../../../firebaseConfig';
import { convertToArray } from '@/utils/converToArray';
import { convertCurrency } from '@/utils/convertCurrency';

type StateDataType = {
  amount: number;
  date: string;
  name: string;
  category: string;
};

export default function PageIncomes() {
  const [data, setData] = useState<Array<StateDataType>>([]);

  useEffect(() => {
    if (!initializeApp?.apps?.length) {
      initializeApp(firebaseConfig);
    }

    /* need fixed type */
    const database = getDatabase();
    const databaseRef = ref(database, 'incomes');
    const onDataChange: any = (snapshot: { val: any }) => {
      setData(snapshot.val());
    };
    onValue(databaseRef, onDataChange);
    return () => off(databaseRef, onDataChange);
  }, []);

  const listOfExpense: Array<StateDataType> = convertToArray(data);

  return (
    <div className="h-screen px-5 pt-5 ">
      <p className="font-bold capitalize text-xl mb-4">Your incomes list</p>
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
