import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Authentication } from '@/services/firebaseApp';
import { useRouter } from 'next/router';
import Link from 'next/link';

import AInput from '@/components/atoms/Input';
import AGap from '@/components/atoms/Gap';
import AButton from '@/components/atoms/Button';
import MModal from '@/components/molecules/Modal';

export default function PageRegister() {
  const { control, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();
  const router = useRouter();

  const [loginSuccess, setLoginSuccess] = useState(false);

  const onRegister = (data: { email: string; password: string }) => {
    try {
      createUserWithEmailAndPassword(
        Authentication(),
        data.email,
        data.password
      ).then(() => setLoginSuccess(true));
    } catch (error) {}
  };

  const onRedirectToLogin = () => {
    router.push('/login');
    setLoginSuccess(false);
  };

  return (
    <>
      <div className=" w-[20rem] py-6 px-4 min-h-[20rem]">
        <form onSubmit={handleSubmit(onRegister)}>
          <Controller
            control={control}
            name="email"
            rules={{
              required: `email tidak boleh kosong`
            }}
            render={({
              field: { onChange, ...rest },
              formState: { errors }
            }) => (
              <AInput
                {...rest}
                type="email"
                errors={errors}
                label={'Email'}
                placeholder={`Masukan Email`}
                onChange={onChange}
              />
            )}
          />

          <AGap height={10} />

          <Controller
            control={control}
            name="password"
            rules={{
              required: `kata sandi tidak boleh kosong`
            }}
            render={({
              field: { onChange, ...rest },
              formState: { errors }
            }) => (
              <AInput
                {...rest}
                type="password"
                errors={errors}
                label={'password'}
                placeholder={`Masukan password`}
                onChange={onChange}
              />
            )}
          />

          <AGap height={10} />

          <AButton
            type="submit"
            name="Daftar"
            rootStyle="bg-deep-carrot-orange/90 hover:bg-deep-carrot-orange rounded-md py-2 mt-4"
          />
        </form>

        <div className="mt-6">
          <p>
            Sudah punya akun,{' '}
            <Link className="text-blue underline text-blue-400" href="/login">
              Masuk
            </Link>
          </p>
        </div>
      </div>

      {loginSuccess && (
        <MModal>
          <div className="bg-white w-[20rem] h-[10rem] rounded-md flex flex-col items-center justify-center">
            <p className="text-md">
              Pendaftaran kamu <strong>Berhasil!</strong>
            </p>
            <div className="mt-6">
              <AButton
                onClick={onRedirectToLogin}
                rootStyle=" px-6 py-1 rounded-md"
                name="login"
              />
            </div>
          </div>
        </MModal>
      )}
    </>
  );
}
