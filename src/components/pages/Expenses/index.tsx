import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/redux/store';
import moment from 'moment';

import MCardInEx from '@/components/molecules/CardInEx';
import HeaderInEx from '@/components/molecules/HeaderInEx';

import { TypeFormPayload } from '@/types';

import { onShowModal } from '@/redux/features/main';
import { convertCurrency } from '@/utils/convertCurrency';
import { listFilterExpenses } from '@/constants/home';
import useGetValues from '@/hooks/useGetValues';

type GetValues = {
  isLoading: boolean;
  snapshot: any;
  error: any;
};

export default function PageExpanses() {
  const dispatch = useDispatch();
  const [category, setCategory] = useState<string>('kebutuhan');

  const { visible } = useAppSelector(state => state?.incomesReducer.edit) || {};

  const expenses: GetValues = useGetValues({ path: 'expenses' });
  const data: Array<TypeFormPayload> = Object.values(expenses.snapshot || {});

  const onEdit = async (items: TypeFormPayload) => {
    dispatch(
      onShowModal({
        isUpdate: true,
        visible: !visible,
        data: items
      })
    );
  };

  if (expenses.isLoading) {
    return (
      <div className="w-full flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="h-screen px-5 pt-5 mb-48">
      <HeaderInEx
        title="Daftar Pengeluaran"
        amount={`Rp. ${convertCurrency(2132101)}`}
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
        {data?.map((item, index) => {
          return (
            <MCardInEx
              onEdit={() => onEdit(item)}
              // onRemove={() => onRemove(item)}
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
