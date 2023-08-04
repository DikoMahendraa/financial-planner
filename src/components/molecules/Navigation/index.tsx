import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { getDatabase, ref, set } from 'firebase/database';
import { useDispatch, useSelector } from 'react-redux';

import { TypeFormPayload } from '@/types';
import { bottomNavigation } from '@/constants/home';
import { onShowModal } from '@/redux/features/incomes';

import ButtonNavigation from '@/components/atoms/ButtonNavigation';
import AButtonCreate from '@/components/atoms/ButtonCreate';
import { ModalForm } from '@/components/molecules/ModalForm';
import { generateRandomUUID } from '@/utils/generateID';

export default function MNavigation() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(router.route);

  const forms = useForm<TypeFormPayload>();
  const {
    isUpdate,
    edit: { visible, data }
    /* @ts-ignore */
  } = useSelector<>(state => state?.incomesReducer) || {};
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

  const onhandleSubmit = async (data: Partial<TypeFormPayload>) => {
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
        <ModalForm
          {...forms}
          onSubmit={onhandleSubmit}
          onClick={onHandleShowModal}
        />
      )}
    </React.Fragment>
  );
}
