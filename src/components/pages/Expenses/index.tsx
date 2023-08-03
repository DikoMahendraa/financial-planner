import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, off, remove } from 'firebase/database';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import MCardInEx from '@/components/molecules/CardInEx';
import HeaderInEx from '@/components/molecules/HeaderInEx';
import { convertToArray } from '@/utils/converToArray';
import { convertCurrency } from '@/utils/convertCurrency';
import { calculateSum } from '@/utils/calculateNumber';
import { onShowModal } from '@/redux/features/incomes';

type StateDataType = {
  amount: number;
  date: string;
  id: string;
  uuid: string;
  name: string;
  category: string;
};

export default function PageExpanses() {
  const [data, setData] = useState<Array<StateDataType>>([]);
  const [total, setTotal] = useState(0);

  const dispatch = useDispatch();
  /* @ts-ignore */
  const { visible } = useSelector(state => state?.incomesReducer.edit) || {};
  const database = getDatabase();

  useEffect(() => {
    const databaseRef = ref(database, 'expenses');
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
    return await remove(ref(database, `expenses/${uuid}`))
      .then(() => {})
      .catch(() => {});
  };

  const onEdit = async (items: StateDataType) => {
    dispatch(
      onShowModal({
        isUpdate: true,
        visible: !visible,
        data: items
      })
    );
  };

  return (
    <div className="h-screen px-5 pt-5">
      <HeaderInEx
        title="Daftar Pengeluaran"
        amount={`Rp. ${convertCurrency(total)}`}
      />
      <hr />
      <div className="mt-4">
        {listOfExpense.map((item, index) => {
          return (
            <MCardInEx
              onEdit={() => onEdit(item)}
              onRemove={() => onRemove(item)}
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
