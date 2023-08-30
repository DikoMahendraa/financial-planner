import React, { useState } from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/redux/store';

import { TypeFormPayload } from '@/types';
import useGetValues from '@/hooks/useGetValues';
import { listCategoryIncomes, listFilterIncomes } from '@/constants/home';
import useRemoveValues from '@/hooks/useRemoveValues';
import { convertCurrency } from '@/utils/convertCurrency';
import { convertToArray } from '@/utils/convertToArray';
import { onShowModal } from '@/redux/features/main';

import MCardInEx from '@/components/molecules/CardInEx';
import HeaderInEx from '@/components/molecules/HeaderInEx';
import MEmptyState from '@/components/molecules/EmptyData';
import { ANLoading } from '@/components/animations/ANLoading';
import AButtonCreate from '@/components/atoms/ButtonCreate';
import { calculateSum } from '@/utils/calculateNumber';
import ChartComponent from '@/components/molecules/Chart';

type GetValues = {
  isLoading: boolean;
  snapshot: any;
  error: any;
  isEmpty: boolean;
  refreshData: () => void;
};

export default function PageIncomes() {
  const [category, setCategory] = useState<string>('gajian');

  const dispatch = useDispatch();
  const { visible } = useAppSelector(state => state?.incomesReducer.edit) || {};

  const { snapshot, isLoading, refreshData, isEmpty }: GetValues = useGetValues(
    { path: 'incomes' }
  );
  const removeExpense = useRemoveValues();
  const data: Array<TypeFormPayload> = convertToArray(snapshot || {});
  const getAmount = data.map(item => Number(item.amount));

  const onEdit = async (items: TypeFormPayload) => {
    dispatch(
      onShowModal({
        isUpdate: true,
        visible: !visible,
        data: items
      })
    );
  };

  const onRemove = async (items: { uuid: string }) => {
    const path = `incomes/${items.uuid}`;
    try {
      await removeExpense.removeValue(path);
      refreshData();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error deleting data:', error);
    }
  };

  const onVisible = () => {
    dispatch(
      onShowModal({
        isUpdate: false,
        data: {},
        visible: !visible
      })
    );
  };

  if (isLoading) {
    return (
      <div className="w-full flex items-center justify-center h-screen">
        <ANLoading />
      </div>
    );
  }

  if (isEmpty) {
    return (
      <MEmptyState
        rootStyle="h-screen"
        description={
          <p className="italic mb-4 text-gray-600">Belum ada pemasukan</p>
        }
        title="Pemasukan"
        onClick={onVisible}
      />
    );
  }

  return (
    <React.Fragment>
      <AButtonCreate onClick={onVisible} />
      <div className="px-5 pt-5 bg-aero-blue">
        <ChartComponent
          labels={listCategoryIncomes.map((item: string) => item)}
        />
        <div className="sticky top-0 bg-aero-blue">
          <HeaderInEx
            title="Daftar Pemasukan"
            amount={`Rp. ${convertCurrency(calculateSum(getAmount))}`}
          />
          <hr />
          <div className="mt-4 bg-main-white rounded-md border-2 border-b-4 border-r-4 border-vampire-black p-[2px] flex items-center gap-2">
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
                  className={`${setBackground} rounded-md w-1/2 cursor-pointer`}
                >
                  <p
                    className={`${setColor} text-sm text-center py-2 capitalize`}
                  >
                    {item}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-4 h-full bg-aero-blue pb-24">
          {data?.map((item, index) => {
            return (
              <MCardInEx
                key={index}
                onRemove={() => onRemove(item)}
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
    </React.Fragment>
  );
}
