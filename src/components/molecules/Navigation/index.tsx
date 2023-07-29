import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { bottomNavigation } from '@/constants/home';
import ButtonNavigation from '@/components/atoms/ButtonNavigation';
import AButtonCreate from '@/components/atoms/ButtonCreate';
import MModal from '@/components/molecules/Modal';
import AInput from '@/components/atoms/Input';
import AButton from '@/components/atoms/Button';

const Modal = ({ onClick }: { onClick: () => void }) => {
  return (
    <MModal>
      <div className="rounded-2xl bg-main-white w-[440px] h-[530px] p-4 border-2 border-vampire-black flex flex-col justify-between">
        <fieldset className="mt-8">
          <AInput
            name="income"
            rootStyle="mb-2"
            label="Source of Income"
            placeholder="Enter your Income"
          />
          <AInput
            name="date"
            rootStyle="mb-2"
            type="date"
            label="Date"
            placeholder="DD/MM/YYYY"
          />
          <AInput
            name="amount"
            prefix="Rp."
            label="Amount"
            placeholder="Enter your Amount"
          />
          <div className="mt-2">
            <label htmlFor="income" className="font-bold">
              Category
            </label>
            <select
              id="select"
              name="select"
              placeholder="Select Category"
              className="block w-full cursor-pointer mt-1 appearance-none bg-white rounded-md border-2 border-vampire-black text-gray-700 py-4 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value="option1">Internet</option>
              <option value="option2">Jajan</option>
              <option value="option2">Kebutuhan</option>
              <option value="option2">Gajian</option>
            </select>
          </div>
        </fieldset>

        <div className="flex justify-between mt-10 gap-4">
          <AButton
            onClick={onClick}
            name="Cancel"
            rootStyle="bg-gray-platinum"
          />
          <AButton
            onClick={onClick}
            name="Create"
            rootStyle="bg-majorelle-blue text-main-white"
          />
        </div>
      </div>
    </MModal>
  );
};

export default function MNavigation() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(router.route);
  const [visible, setVisible] = useState(false);

  const handleActiveTab = (tab: string) => {
    router.push(tab);
    setActiveTab(tab);
  };

  const showCreateInEx = ['/incomes', '/expenses'].includes(activeTab);

  const onHandleShowModal = () => {
    setVisible(!visible);
  };

  return (
    <React.Fragment>
      {showCreateInEx && <AButtonCreate onClick={onHandleShowModal} />}

      <section className="sticky bottom-5 w-full px-4">
        <div className="bg-vampire-black h-18 w-full rounded-[40px] grid grid-cols-5 p-1 space-x-1">
          {bottomNavigation.map((item, key) => {
            const active = activeTab === item.route;
            const setColumn = active ? 'col-span-2' : 'col-span-1';
            const setInitial = active && item.label;

            return (
              <ButtonNavigation
                key={key}
                active={active}
                rootStyle={setColumn}
                parentStyle={item.color}
                text={setInitial}
                label={item.label}
                onClick={() => handleActiveTab(item.route)}
              />
            );
          })}
        </div>
      </section>

      {visible && <Modal onClick={onHandleShowModal} />}
    </React.Fragment>
  );
}
