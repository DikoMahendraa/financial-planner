import React, { useEffect, useRef, useState } from 'react';
import CalculatorComponent from '@/components/molecules/Calculator';
import AInput from '@/components/atoms/Input';
import AButton from '@/components/atoms/Button';
import AGap from '@/components/atoms/Gap';
import { ICArrow } from '@/components/icons/ICArrow';
import { useRouter } from 'next/router';

export default function CreateCalculation() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState<string>('');

  const onRouterBack = () => {
    router.push('/calculation');
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const onClickButton = (value: number) => {
    setInput(prevExpression => prevExpression + value);
  };

  const onClearForm = () => {
    setInput('');
  };

  const onDeleteForm = () => {
    if (input.length > 0) {
      setInput(prevInput => prevInput.slice(0, -1));
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
        <p className="font-semibold">Masukan Nominal Pendapatan</p>
        <AInput
          inputRef={inputRef}
          value={input}
          isCurrency
          prefix="Rp."
          placeholder="xxx.xxx.xxx"
        />
        <div className="mt-2">
          <label htmlFor="select metode" className="font-semibold">
            Metode
          </label>
          <select
            placeholder="Select Category"
            className="block w-full capitalize cursor-pointer mt-1 appearance-none bg-white rounded-md border-2 border-vampire-black text-gray-700 py-4 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            {['50/30/20', '60/30/10', '40/30/20/10'].map(
              (item: string, key: number) => (
                <option value={item} key={key} className="capitalize">
                  {item}
                </option>
              )
            )}
          </select>
        </div>
        <AGap height={20} />

        <AButton
          name="Hitung"
          rootStyle="py-2 bg-deep-carrot-orange text-white"
        />

        <div className="mt-8">
          <p className="mb-4">Berikut ini adalah hasilnya</p>

          <ul className="list-disc pl-6">
            <li className="mb-2">
              <strong>50%</strong> -{' '}
              <span className="bg-red-200 px-2 py-1 border border-r-2 border-b-2 border-vampire-black">
                1.000.000
              </span>{' '}
              <span className="italic">
                Ini adalah nominal uang tabunganmu, usahakan uang tabunganmu
                hanya dipakai ketika keadaan darurat saja ya {`:)`}
              </span>
            </li>
            <li className="mb-2">
              <strong>30%</strong> -{' '}
              <span className="bg-red-200 px-2 py-1 border border-r-2 border-b-2 border-vampire-black">
                900.000
              </span>{' '}
              <span className="italic">
                Ini adalah nominal uang yg akan digunakan untuk membayar kredit,
                hutang dan sejenisnya
              </span>
            </li>
            <li className="mb-2">
              <strong>20%</strong> -{' '}
              <span className="bg-red-200 px-2 py-1 border border-r-2 border-b-2 border-vampire-black">
                500.000
              </span>{' '}
              <span className="italic">
                Ini adalah nominal uang yg akan digunakan untuk kebutuhan
                hidupmu sehari-hari
              </span>
            </li>
          </ul>
        </div>
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
