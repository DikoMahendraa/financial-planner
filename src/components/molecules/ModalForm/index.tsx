import React from 'react';
import moment from 'moment';
import { Controller } from 'react-hook-form';

import MModal from '@/components/molecules/Modal';
import AInput from '@/components/atoms/Input';
import AButton from '@/components/atoms/Button';
import { useRouter } from 'next/router';

export const MModalForm = ({ ...props }) => {
  const router = useRouter();

  const label = router.pathname.includes('expenses')
    ? 'Pengeluaran'
    : 'Pemasukan';

  return (
    <MModal>
      <div className="rounded-2xl bg-main-white w-[440px] h-[530px] p-4 border-2 border-vampire-black flex flex-col justify-between">
        <form id="form" onSubmit={props.handleSubmit(props.onSubmit)}>
          <fieldset className="mt-8">
            <Controller
              control={props.control}
              name="name"
              rules={{
                required: `${label} tidak boleh kosong`
              }}
              render={({
                field: { onChange, ...rest },
                formState: { errors }
              }) => (
                <AInput
                  {...rest}
                  errors={errors}
                  label={label}
                  placeholder={`Masukan ${label}`}
                  onChange={onChange}
                />
              )}
            />
            <Controller
              control={props.control}
              defaultValue={moment(new Date()).format('YYYY-MM-DD')}
              name="date"
              render={({ field: { onChange, ...rest } }) => (
                <AInput
                  {...rest}
                  label="Tanggal"
                  rootStyle="mt-2"
                  type="date"
                  placeholder={`Masukan Tanggal ${label}`}
                  onChange={onChange}
                />
              )}
            />
            <Controller
              control={props.control}
              name="amount"
              rules={{
                required: `jumlah tidak boleh kosong`,
                pattern: {
                  value: /^[0-9]*$/,
                  message: 'Hanya angka yang diperbolehkan'
                }
              }}
              render={({
                field: { onChange, ...rest },
                formState: { errors }
              }) => (
                <AInput
                  {...rest}
                  errors={errors}
                  prefix="Rp."
                  label="Jumlah"
                  isCurrency
                  rootStyle="mt-2"
                  name="amount"
                  placeholder="Enter your Amount"
                  onChange={onChange}
                />
              )}
            />

            <div className="mt-2">
              <label htmlFor="income" className="font-bold">
                Kategori
              </label>
              <Controller
                control={props.control}
                name="category"
                defaultValue={props.defaultValue}
                render={({ field: { onChange, ...rest } }) => (
                  <select
                    {...rest}
                    onChange={onChange}
                    placeholder="Select Category"
                    className="block w-full capitalize cursor-pointer mt-1 appearance-none bg-white rounded-md border border-r-b border-b-2 border-vampire-black text-gray-700 py-4 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    {props.category.map((item: string, key: number) => (
                      <option value={item} key={key} className="capitalize">
                        {item}
                      </option>
                    ))}
                  </select>
                )}
              />
            </div>
          </fieldset>

          <div className="flex justify-between mt-10 gap-4">
            <AButton
              type="reset"
              onClick={props.onCancel}
              name="Cancel"
              rootStyle="border border-b-4 border-r-4 rounded-md border-black bg-gray-platinum"
            />
            <AButton
              type="submit"
              name="Create"
              rootStyle="border border-b-4 border-r-4 rounded-md border-black py-2 bg-majorelle-blue text-main-white"
            />
          </div>
        </form>
      </div>
    </MModal>
  );
};
