import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Controller, useForm } from 'react-hook-form';
import { getDatabase, ref, set } from 'firebase/database';
import { useDispatch, useSelector } from 'react-redux';

import { bottomNavigation } from '@/constants/home';
import ButtonNavigation from '@/components/atoms/ButtonNavigation';
import AButtonCreate from '@/components/atoms/ButtonCreate';
import MModal from '@/components/molecules/Modal';
import AInput from '@/components/atoms/Input';
import AButton from '@/components/atoms/Button';
import { generateRandomUUID } from '@/utils/generateID';
import { onShowModal } from '@/redux/features/incomes';

const Modal = ({ ...props }) => {
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
                  label="Income"
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
              onClick={props.onClick}
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

type FormPayload = {
  amount: number;
  date: string;
  id: string;
  uuid: string;
  name: string;
  category: string;
};

export default function MNavigation() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(router.route);

  const forms = useForm<FormPayload>();
  const {
    isUpdate,
    edit: { visible, data }
    /* @ts-ignore */
  } = useSelector(state => state?.incomesReducer) || {};
  const dispatch = useDispatch();
  const currentPosition = router.route.split('/').pop();
  const currentDate = new Date();

  const handleActiveTab = (tab: string) => {
    router.push(tab);
    setActiveTab(tab);
  };

  const showCreateInEx = ['/incomes', '/expenses'].includes(activeTab);

  const onHandleShowModal = () => {
    dispatch(
      onShowModal({
        isUpdate: false,
        data: {},
        visible: !visible
      })
    );
  };

  const onhandleSubmit = async (data: Partial<FormPayload>) => {
    const database = getDatabase();
    const pathCreate = `${currentPosition}/${generateRandomUUID()}`;
    const pathEdit = `${currentPosition}/${data.uuid}`;
    const isPath = isUpdate ? pathEdit : pathCreate;

    const payload = isUpdate
      ? { ...data }
      : { ...data, createdAt: String(currentDate), id: generateRandomUUID() };

    const paramsCreate = set(ref(database, isPath), {
      ...payload
    });

    await paramsCreate
      .then(() => {
        forms.reset({
          category: 'internet'
        });
        onHandleShowModal();
      })
      .catch(error => alert(error));
  };

  useEffect(() => {
    if (visible) {
      forms.reset({ ...data });
    }
  }, [data, forms, visible]);

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

      {visible && (
        <Modal
          {...forms}
          onSubmit={onhandleSubmit}
          onClick={onHandleShowModal}
        />
      )}
    </React.Fragment>
  );
}
