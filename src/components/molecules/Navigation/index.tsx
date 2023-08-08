import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { TypeFormPayload } from '@/types';
import { bottomNavigation } from '@/constants/home';
import { onShowModal } from '@/redux/features/main';

import ButtonNavigation from '@/components/atoms/ButtonNavigation';
import AButtonCreate from '@/components/atoms/ButtonCreate';
import { MModalForm } from '@/components/molecules/ModalForm';
import { useAppSelector } from '@/redux/store';
import useCreateValues from '@/hooks/useCreateValues';

export default function MNavigation() {
  const router = useRouter();
  const dispatch = useDispatch();
  const forms = useForm<TypeFormPayload>();

  const [activeTab, setActiveTab] = useState<string>(router.route);

  const createValues = useCreateValues();

  const showCTA = ['/incomes', '/expenses'].includes(activeTab);

  const {
    isUpdate,
    edit: { visible, data }
  } = useAppSelector(state => state?.incomesReducer) || {};

  const handleActiveTab = (tab: string) => {
    router.push(tab);
    setActiveTab(tab);
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

  const onSubmit = async (data: any) => {
    const currentPath = router.route;

    await createValues.pushValue(currentPath, data);
  };

  useEffect(() => {
    if (visible) {
      forms.reset({ ...data });
    }
  }, [data, forms, visible]);

  return (
    <React.Fragment>
      {showCTA && <AButtonCreate onClick={onVisible} />}

      <section className="fixed md:max-w-[480px] bottom-3  w-full px-2">
        <div className="bg-vampire-black h-18 rounded-[40px] grid grid-cols-5 p-1 space-x-1">
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
        <MModalForm {...forms} onSubmit={onSubmit} onClick={onShowModal} />
      )}
    </React.Fragment>
  );
}
