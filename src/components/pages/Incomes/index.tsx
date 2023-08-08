import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/redux/store';
import moment from 'moment';

import MCardInEx from '@/components/molecules/CardInEx';
import HeaderInEx from '@/components/molecules/HeaderInEx';

import { TypeFormPayload } from '@/types';

import { onShowModal } from '@/redux/features/main';
import { convertCurrency } from '@/utils/convertCurrency';
import { listFilterIncomes } from '@/constants/home';
import useGetValues from '@/hooks/useGetValues';

type GetValues = {
  isLoading: boolean;
  snapshot: any;
  error: any;
};

export default function PageIncomes() {
  const [category, setCategory] = useState<string>('gajian');
  const [total, setTotal] = useState<number>(0);

  const dispatch = useDispatch();
  const { visible } = useAppSelector(state => state?.incomesReducer.edit) || {};

  const incomes: GetValues = useGetValues({ path: 'incomes' });
  const data: Array<TypeFormPayload> = Object.values(incomes.snapshot || {});

  const onEdit = async (items: TypeFormPayload) => {
    dispatch(
      onShowModal({
        isUpdate: true,
        visible: !visible,
        data: items
      })
    );
  };

  if (incomes.isLoading) {
    return (
      <div className="w-full flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="h-screen px-5 pt-5 mb-48">
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
        {data?.map((item, index) => {
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
            />
          );
        })}
      </div>
    </div>
  );
}
