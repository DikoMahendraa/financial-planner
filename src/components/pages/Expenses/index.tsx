import React, { useCallback, useEffect, useState } from 'react';
import moment from 'moment';
import { child, ref, get } from 'firebase/database';
import { useForm } from 'react-hook-form';
import { getCookie } from 'cookies-next';
import { database } from '@/services/firebaseApp';

import { TypeFormEdit, TypeFormPayload } from '@/types';
import { convertToArray } from '@/utils/convertToArray';
import { convertCurrency } from '@/utils/convertCurrency';
import { listCategoryExpenses, listFilterExpenses } from '@/constants/home';
import useRemoveValues from '@/hooks/useRemoveValues';

import { ICPie } from '@/components/icons/ICPie';
import { ICFilter } from '@/components/icons/ICFilter';
import { MModalForm } from '@/components/molecules/ModalForm';
import MCardInEx from '@/components/molecules/CardInEx';
import HeaderInEx from '@/components/molecules/HeaderInEx';
import { ANLoading } from '@/components/animations/ANLoading';
import MEmptyState from '@/components/molecules/EmptyData';
import AButtonCreate from '@/components/atoms/ButtonCreate';
import { calculateSum } from '@/utils/calculateNumber';
import ChartComponent from '@/components/molecules/Chart';
import useCreateValues from '@/hooks/useCreateValues';
import useUpdateValues from '@/hooks/useUpdateValues';

export default function PageExpanses() {
  const forms = useForm<TypeFormPayload>();
  const uid = getCookie('uuid') ?? '';

  const [category, setCategory] = useState<string>('semua');
  const [dataExpenses, setDataExpenses] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);
  const [showGrafik, setShowGrafik] = useState<boolean>(false);
  const [formEdit, setFormEdit] = useState<TypeFormEdit>({
    visible: false,
    data: {}
  });

  const removeExpense = useRemoveValues();
  const createValues = useCreateValues();
  const updateValues = useUpdateValues();
  const data: Array<TypeFormPayload> = convertToArray(dataExpenses || {});
  const getAmount = data.map(item => Number(item.amount));

  const freshData = (() => {
    return data.filter(item => {
      if (category === 'semua') {
        return { ...item };
      } else {
        return item.category === category;
      }
    });
  })();

  const fetchData = useCallback(async () => {
    const rootReference = ref(database);
    const dbGet = await get(child(rootReference, `${uid}/expenses`));
    const isEmpty = dbGet.exists();
    setDataExpenses(dbGet.val());
    setIsEmpty(!isEmpty);
  }, [uid]);

  const onEdit = async (items: TypeFormPayload) => {
    setVisible(true);
    setFormEdit({
      visible: true,
      data: items
    });
  };

  const onRemove = async (items: { uuid: string }) => {
    setIsLoading(true);
    const path = `${uid}/expenses/${items.uuid}`;
    try {
      await removeExpense.removeValue(path);
      fetchData();
      setVisible(false);
    } catch (error) {
      setVisible(false);
    }
    setIsLoading(false);
  };

  const onSubmit = async (data: any) => {
    setIsLoading(true);

    if (formEdit.visible) {
      try {
        const path = `${uid}/expenses/${formEdit.data.uuid}`;
        await updateValues.updateValues(String(path), data);
        fetchData();
        setVisible(false);
      } catch (err) {
        setVisible(false);
      }
    } else {
      try {
        await createValues.pushValue(String(`${uid}/expenses`), data);
        fetchData();
        setVisible(false);
      } catch (err) {
        setVisible(false);
      }
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (formEdit.visible) {
      forms.reset({
        name: formEdit.data.name,
        date: formEdit.data.date,
        category: formEdit.data.category,
        amount: formEdit.data.amount
      });
    }

    if (!visible) forms.reset({});
  }, [visible, formEdit, forms]);

  const findValueByCategory = () => {
    let b = 0;
    let c = 0;
    let d = 0;
    let e = 0;

    data?.map(item => {
      switch (item.category) {
        case 'pulsa':
          return (b = Number(item.amount));
        case 'kebutuhan':
          return (c = Number(item.amount));
        case 'jajan':
          return (d = Number(item.amount));
        case 'lainnya':
          return (e = Number(item.amount));
        default:
          return 0;
      }
    });

    return [b, c, d, e];
  };

  return (
    <React.Fragment>
      <AButtonCreate onClick={() => setVisible(true)} />

      <div className="px-5 pt-5 bg-aero-blue">
        <div className="flex items-center justify-end mb-4">
          <p
            className="flex gap-2 cursor-pointer bg-white items-center px-4 py-2 border border-gray-600 border-b-2 border-r-2 text-sm"
            onClick={() => setShowGrafik(!showGrafik)}
          >
            {showGrafik ? 'Sembunyikan Grafik' : 'Tampilkan Grafik'}
            {showGrafik ? (
              <ICFilter height={30} width={30} />
            ) : (
              <ICPie height={30} width={30} />
            )}
          </p>
        </div>
        {showGrafik && (
          <ChartComponent
            categories={listFilterExpenses.slice(1, listFilterExpenses.length)}
            dataValues={findValueByCategory()}
            label="Pengeluaran"
          />
        )}
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
          {freshData?.length > 0 ? (
            freshData?.map((item, index) => {
              return (
                <MCardInEx
                  onEdit={() => onEdit(item)}
                  onRemove={() => onRemove(item)}
                  key={index}
                  name={item?.name}
                  date={moment(item?.date).format('DD MMM YYYY')}
                  amount={convertCurrency(item.amount)?.toString()}
                  type="expense"
                  category={item.category}
                  variant="small"
                  showLabel={false}
                />
              );
            })
          ) : (
            <MEmptyState
              rootStyle="mt-10"
              title="Pengeluaran"
              description={
                <p className="italic mb-4 text-gray-600">
                  Belum ada pengeluaran{' '}
                  <span className="uppercase font-semibold not-italic">
                    {category}
                  </span>
                </p>
              }
              actionBtn={false}
            />
          )}
        </div>
      </div>
      {visible && (
        <MModalForm
          {...forms}
          category={listCategoryExpenses}
          defaultValue="kebutuhan"
          onSubmit={onSubmit}
          onCancel={() => {
            setVisible(false);
            setFormEdit({ visible: false, data: {} });
            forms.reset({});
          }}
        />
      )}
    </React.Fragment>
  );
}
