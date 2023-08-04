import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDatabase, ref, onValue, off, remove } from 'firebase/database';
import moment from 'moment';

import { TypeFormPayload } from '@/types';
import { convertCurrency } from '@/utils/convertCurrency';
import { convertToArray } from '@/utils/converToArray';
import { calculateSum } from '@/utils/calculateNumber';
import { onShowModal } from '@/redux/features/incomes';
import MCardInEx from '@/components/molecules/CardInEx';
import HeaderInEx from '@/components/molecules/HeaderInEx';
import { useAppSelector } from '@/redux/store';
import { listFilterIncomes } from '@/constants/home';

export default function PageIncomes() {
  const [data, setData] = useState<Array<TypeFormPayload>>([]);
  const [category, setCategory] = useState<string>('gajian');
  const [total, setTotal] = useState<number>(0);

  const dispatch = useDispatch();
  const { visible } = useAppSelector(state => state?.incomesReducer.edit) || {};
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
  const listOfExpense: Array<TypeFormPayload> = convertToArray(data);
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
    <div className="h-screen px-5 pt-5 ">
      <HeaderInEx
        title="Daftar Pemasukan"
        amount={`Rp. ${convertCurrency(total)}`}
      />
      <hr />
      <div className="mt-4 bg-main-white rounded-3xl border-2 border-vampire-black p-[2px] flex items-center gap-2">
        {listFilterIncomes.map(item => {
          const isActiveTab = item === category;
          const setBackground = isActiveTab
            ? 'bg-earth-yellow'
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
        {listOfExpense?.map((item, index) => {
          return (
            <MCardInEx
              key={index}
              type="expense"
              variant="small"
              name={item?.name}
              date={moment(item?.date).format('DD MMM YYYY')}
              amount={convertCurrency(item.amount)}
              category={item?.category}
              showLabel={false}
              onEdit={() => onEdit(item)}
              onRemove={() => onRemove(item)}
            />
          );
        })}
      </div>
    </div>
  );
}
