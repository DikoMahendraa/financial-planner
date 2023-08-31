import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { child, ref, get } from 'firebase/database';
import { useForm } from 'react-hook-form';
import { database } from '@/services/firebaseApp';

import { TypeFormPayload } from '@/types';
import { convertToArray } from '@/utils/convertToArray';
import { convertCurrency } from '@/utils/convertCurrency';
import { listCategoryExpenses, listFilterExpenses } from '@/constants/home';
import useRemoveValues from '@/hooks/useRemoveValues';

import { MModalForm } from '@/components/molecules/ModalForm';
import MCardInEx from '@/components/molecules/CardInEx';
import HeaderInEx from '@/components/molecules/HeaderInEx';
import { ANLoading } from '@/components/animations/ANLoading';
import MEmptyState from '@/components/molecules/EmptyData';
import AButtonCreate from '@/components/atoms/ButtonCreate';
import { calculateSum } from '@/utils/calculateNumber';
import ChartComponent from '@/components/molecules/Chart';
import useCreateValues from '@/hooks/useCreateValues';

export default function PageExpanses() {
  const forms = useForm<TypeFormPayload>();

  const [category, setCategory] = useState<string>('kebutuhan');
  const [dataExpenses, setDataExpenses] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);
  const [formEdit, setFormEdit] = useState<TypeFormPayload>();

  const removeExpense = useRemoveValues();
  const createValues = useCreateValues();
  const data: Array<TypeFormPayload> = convertToArray(dataExpenses || {});
  const getAmount = data.map(item => Number(item.amount));

  const fetchData = async () => {
    const rootReference = ref(database);
    const dbGet = await get(child(rootReference, '/expenses'));
    const isEmpty = dbGet.exists();
    setDataExpenses(dbGet.val());
    setIsEmpty(!isEmpty);
  };

  const onEdit = async (items: TypeFormPayload) => {
    setVisible(true);
    setFormEdit(items);
  };

  const onRemove = async (items: { uuid: string }) => {
    setIsLoading(true);
    const path = `expenses/${items.uuid}`;
    try {
      await removeExpense.removeValue(path);
      fetchData();
      setVisible(false);
    } catch (error) {
      setVisible(false);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (visible) {
      forms.setValue('name', 'mlkasdmaskd');
    }
  }, [formEdit, forms, visible]);

  useEffect(() => {
    fetchData();
  }, []);

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      await createValues.pushValue(String('/expenses'), data);
      fetchData();
      setVisible(false);
    } catch (err) {
      setVisible(false);
    }
    setIsLoading(false);
  };

  return (
    <React.Fragment>
      <AButtonCreate onClick={() => setVisible(true)} />

      <div className="px-5 pt-5 bg-aero-blue">
        <ChartComponent
          labels={listCategoryExpenses.map((item: string) => item)}
        />
        <div className="sticky top-0 bg-aero-blue">
          <HeaderInEx
            title="Daftar Pengeluaran"
            amount={`Rp. ${convertCurrency(calculateSum(getAmount))}`}
          />
          <div className="mt-4 bg-main-white rounded-md border-2 border-b-4 border-r-4 border-vampire-black p-[2px] flex items-center gap-2">
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
          {isEmpty && isLoading && (
            <div className="w-full flex items-center justify-center h-screen">
              <ANLoading />
            </div>
          )}
          {isEmpty && (
            <MEmptyState
              rootStyle="mt-10"
              title="Pengeluaran"
              description={
                <p className="italic mb-4 text-gray-600">
                  Belum ada pengeluaran
                </p>
              }
              actionBtn={false}
            />
          )}
          {data?.map((item, index) => {
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
      {visible && (
        <MModalForm
          {...forms}
          category={listCategoryExpenses}
          defaultValue={'kebutuhan'}
          onSubmit={onSubmit}
          onCancel={() => setVisible(false)}
        />
      )}
    </React.Fragment>
  );
}
