import React, { useEffect, useRef, useState } from 'react';
import CalculatorComponent from '@/components/molecules/Calculator';
import AButton from '@/components/atoms/Button';
import AGap from '@/components/atoms/Gap';
import { ICArrow } from '@/components/icons/ICArrow';
import { useRouter } from 'next/router';
import { Controller, useForm } from 'react-hook-form';
import { convertCurrency } from '@/utils/convertCurrency';

type FormsType = {
  salary: string;
  method: string;
};

export default function CreateCalculation() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [amount, setAmountValue] = useState<any>(null);

  const {
    watch,
    getValues,
    reset,
    handleSubmit,
    control,
    setValue,
    setError,
    formState: { errors }
  } = useForm<FormsType>();

  const onRouterBack = () => {
    router.push('/calculation');
  };

  const inputValue = watch('salary') || 0;

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (inputValue) {
      reset({
        salary: inputValue
      });
    }
  }, [inputValue, reset]);

  const onClickButton = async (value: string) => {
    const previousValue = getValues?.('salary') || 0;
    const newSalary = previousValue + value;

    setValue('salary', String(newSalary));
  };

  const onClearForm = () => reset({ salary: '0' });

  const onDeleteForm = () => {
    const previousValue = getValues('salary') || '0';
    const newSalary = previousValue.slice(0, -1);
    if (previousValue.length > 0) {
      setValue('salary', String(newSalary));
    }
  };

  const onSubmit = (data: any) => {
    const { salary, method } = data;
    const numberValue: number = parseFloat(String(salary)?.replace(/\./g, ''));

    let sixty = 0.6;
    let fifty = 0.5;
    let fourty = 0.4;
    let thirty = 0.3;
    let twenty = 0.2;
    let ten = 0.1;

    switch (String(method)) {
      case '40/30/20/10': {
        return setAmountValue({
          40: numberValue * fourty,
          30: numberValue * thirty,
          20: numberValue * twenty,
          10: numberValue * ten
        });
      }
      case '50/30/20': {
        return setAmountValue({
          50: numberValue * fifty,
          30: numberValue * thirty,
          20: numberValue * twenty
        });
      }
      case '60/30/10':
      default: {
        return setAmountValue({
          60: numberValue * sixty,
          30: numberValue * thirty,
          10: numberValue * ten
        });
      }
    }
  };

  const sectionResult = () => {
    if (!!amount) {
      const data = Object.keys(amount) || [];
      const is4length = data.length > 3;

      return (
        <div className="mt-8">
          <p className="mb-4">Berikut ini adalah hasilnya</p>

          <ul className="list-disc pl-6">
            <li className="mb-2">
              <strong>{data[data?.length - 1]}%</strong> -{' '}
              <span className="bg-red-200 px-2 py-1 border border-r-2 border-b-2 border-vampire-black">
                {convertCurrency(
                  amount['50'] || amount['60'] || amount['40'] || 0
                )}
              </span>{' '}
              <span className="italic">
                Ini adalah nominal uang tabunganmu, usahakan uang tabunganmu
                hanya dipakai ketika keadaan darurat saja ya {`:)`}
              </span>
            </li>
            <li className="mb-2">
              <strong>30%</strong> -{' '}
              <span className="bg-red-200 px-2 py-1 border border-r-2 border-b-2 border-vampire-black">
                {convertCurrency(amount['30'] || 0)}
              </span>{' '}
              <span className="italic">
                Ini adalah nominal uang yg akan digunakan untuk membayar kredit,
                hutang dan sejenisnya
              </span>
            </li>
            <li className="mb-2">
              <strong>
                {is4length ? data[data.length - 3] : data.shift()}%
              </strong>{' '}
              -{' '}
              <span className="bg-red-200 px-2 py-1 border border-r-2 border-b-2 border-vampire-black">
                {convertCurrency(amount['20'] || amount['10'] || 0)}
              </span>{' '}
              <span className="italic">
                Ini adalah nominal uang yg akan digunakan untuk kebutuhan
                hidupmu sehari-hari
              </span>
            </li>
            {is4length && (
              <li className="mb-2">
                <strong>10%</strong> -{' '}
                <span className="bg-red-200 px-2 py-1 border border-r-2 border-b-2 border-vampire-black">
                  {convertCurrency(amount['10'])}
                </span>{' '}
                <span className="italic">
                  Ini adalah nominal uang yg akan digunakan sebagai dana
                  darurat, pengeluaran ini bersifat optional
                </span>
              </li>
            )}
          </ul>
        </div>
      );
    }
  };

  const onErrorSubmit = (error: any) => {
    if (error.salary) {
      setError('salary', {
        message: 'Jumlah uangmu tidak boleh kosong'
      });
    }
  };

  return (
    <div>
      <div className="px-4 pt-4">
        <p
          onClick={onRouterBack}
          className="flex cursor-pointer border font-semibold"
        >
          <ICArrow />
        </p>
      </div>
      <div className="px-4 pt-4">
        <form onSubmit={handleSubmit(onSubmit, onErrorSubmit)}>
          <p className="font-semibold">Masukan Nominal Pendapatan</p>
          <Controller
            name="salary"
            control={control}
            render={({ field: { onChange } }) => {
              return (
                <React.Fragment>
                  <input
                    readOnly
                    {...(inputValue && {
                      value: convertCurrency(Number(inputValue))
                    })}
                    className="mt-2 w-full pl-4 rounded border border-b-2 border-r-2 border-vampire-black bg-white py-3 text-base text-vampire-black outline-none focus:border-[#6A64F1] focus:shadow-md"
                    onChange={onChange}
                    placeholder="ex 123.456.789"
                    ref={inputRef}
                  />
                  {errors.salary && (
                    <span className="text-red-500 text-xs italic">
                      {errors.salary.message}
                    </span>
                  )}
                </React.Fragment>
              );
            }}
            rules={{ required: true }}
          />
          <div className="mt-2">
            <label htmlFor="select metode" className="font-semibold">
              Metode
            </label>
            <Controller
              name="method"
              control={control}
              defaultValue="50/30/20"
              render={({ field: { onChange } }) => {
                return (
                  <select
                    onChange={onChange}
                    placeholder="Select Category"
                    className="block w-full capitalize cursor-pointer mt-1 appearance-none bg-white rounded border border-b-2 border-r-2 border-vampire-black text-gray-700 py-4 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    {['50/30/20', '60/30/10', '40/30/20/10'].map(
                      (item: string, key: number) => (
                        <option value={item} key={key} className="capitalize">
                          {item}
                        </option>
                      )
                    )}
                  </select>
                );
              }}
              rules={{ required: true }}
            />
          </div>
          <AGap height={20} />

          <AButton
            type="submit"
            name="Hitung"
            rootStyle="py-2 bg-deep-carrot-orange text-white"
          />
        </form>

        {sectionResult()}
      </div>

      <div className="fixed cursor-pointer bottom-0 flex justify-end w-full md:max-w-[480px]">
        <CalculatorComponent
          onClickButton={onClickButton}
          onClear={onClearForm}
          onDelete={onDeleteForm}
        />
      </div>
    </div>
  );
}
