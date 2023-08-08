import React from 'react';
import { Controller } from 'react-hook-form';

import MModal from '@/components/molecules/Modal';
import AInput from '@/components/atoms/Input';
import AButton from '@/components/atoms/Button';

export const MModalForm = ({ ...props }) => {
  return (
    <MModal>
      <div className="rounded-2xl bg-main-white w-[440px] h-[530px] p-4 border-2 border-vampire-black flex flex-col justify-between">
        <form id="form" onSubmit={props.handleSubmit(props.onSubmit)}>
          <fieldset className="mt-8">
            <Controller
              control={props.control}
              name="name"
              render={({ field: { onChange, ...rest } }) => (
                <AInput
                  {...rest}
                  label={props.label}
                  placeholder="Enter your Income"
                  onChange={onChange}
                />
              )}
            />
            <Controller
              control={props.control}
              name="date"
              render={({ field: { onChange, ...rest } }) => (
                <AInput
                  {...rest}
                  label="Date"
                  rootStyle="mt-2"
                  type="date"
                  placeholder="Enter Date"
                  onChange={onChange}
                />
              )}
            />
            <Controller
              control={props.control}
              name="amount"
              render={({ field: { onChange, ...rest } }) => (
                <AInput
                  {...rest}
                  prefix="Rp."
                  label="Amount"
                  rootStyle="mt-2"
                  placeholder="Enter your Amount"
                  onChange={onChange}
                />
              )}
            />

            <div className="mt-2">
              <label htmlFor="income" className="font-bold">
                Category
              </label>
              <Controller
                control={props.control}
                name="category"
                defaultValue="internet"
                render={({ field: { onChange, ...rest } }) => (
                  <select
                    {...rest}
                    defaultValue="internet"
                    onChange={onChange}
                    placeholder="Select Category"
                    className="block w-full cursor-pointer mt-1 appearance-none bg-white rounded-md border-2 border-vampire-black text-gray-700 py-4 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    <option value="internet">Internet</option>
                    <option value="jajan">Jajan</option>
                    <option value="kebutuhan">Kebutuhan</option>
                    <option value="gajian">Gajian</option>
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
              rootStyle="bg-gray-platinum"
            />
            <AButton
              type="submit"
              name="Create"
              rootStyle="bg-majorelle-blue text-main-white"
            />
          </div>
        </form>
      </div>
    </MModal>
  );
};
