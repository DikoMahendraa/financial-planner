import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, off, remove } from 'firebase/database';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import { TypeFormPayload } from '@/types';
import { useAppSelector } from '@/redux/store';
import { convertToArray } from '@/utils/converToArray';
import { convertCurrency } from '@/utils/convertCurrency';
import { calculateSum } from '@/utils/calculateNumber';
import { onShowModal } from '@/redux/features/incomes';
import MCardInEx from '@/components/molecules/CardInEx';
import HeaderInEx from '@/components/molecules/HeaderInEx';
import { listFilterExpenses } from '@/constants/home';

export default function PageExpanses() {
  const [data, setData] = useState<Array<TypeFormPayload>>([]);
  const [category, setCategory] = useState<string>('kebutuhan');
  const [total, setTotal] = useState<number>(0);

  const dispatch = useDispatch();
  const { visible } = useAppSelector(state => state?.incomesReducer.edit) || {};
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
  const listOfExpense: Array<TypeFormPayload> = convertToArray(data);
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

  const onEdit = async (items: TypeFormPayload) => {
    dispatch(
      onShowModal({
        isUpdate: true,
        visible: !visible,
        data: items
      })
    );
  };

  return (
    <div className="h-full px-5 pt-5 mb-48">
      <HeaderInEx
        title="Daftar Pengeluaran"
        amount={`Rp. ${convertCurrency(total)}`}
      />
      <hr />
      <div className="mt-4 bg-main-white rounded-3xl border-2 border-vampire-black p-[2px] flex items-center gap-2">
        {listFilterExpenses.map(item => {
          const isActiveTab = item === category;
          const setBackground = isActiveTab
            ? 'bg-majorelle-blue'
            : 'bg-main-white';
          const setColor = isActiveTab
            ? 'text-white'
            : 'text-vampire-black font-semibold';

          return (
            <div
              key={item}
              onClick={() => setCategory(item)}
              className={`${setBackground} rounded-3xl w-1/2 cursor-pointer`}
            >
              <p className={`${setColor} text-sm text-center py-2 capitalize`}>
                {item}
              </p>
            </div>
          );
        })}
      </div>
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
