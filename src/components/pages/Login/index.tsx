import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Link from 'next/link';

import AInput from '@/components/atoms/Input';
import AGap from '@/components/atoms/Gap';
import AButton from '@/components/atoms/Button';
import { Authentication } from '@/services/firebaseApp';

export default function PageLogin() {
  const { control, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();

  const [errorMessage, setErrorMessage] = useState<string>('');

  const onSubmit = (data: { email: string; password: string }) => {
    setErrorMessage('');
    signInWithEmailAndPassword(Authentication(), data.email, data.password)
      .then(() => {
        // do something here
      })
      .catch(error => {
        const errorCode = error.code;

        switch (errorCode) {
          case 'auth/wrong-password':
            return setErrorMessage('kata sandi anda salah');
          case 'auth/user-not-found':
          default:
            return setErrorMessage('email tidak terdaftar');
        }
      });
  };

  return (
    <div className=" w-[20rem] py-6 px-4 min-h-[20rem]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="email"
          rules={{
            required: `email tidak boleh kosong`
          }}
          render={({ field: { onChange, ...rest }, formState: { errors } }) => (
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
          render={({ field: { onChange, ...rest }, formState: { errors } }) => (
            <AInput
              {...rest}
              type="password"
              errors={errors}
              label="Kata Sandi"
              placeholder="Masukan Kata Sandi"
              onChange={onChange}
            />
          )}
        />

        <AGap height={20} />

        <AButton
          type="submit"
          name="Masuk"
          rootStyle="bg-deep-carrot-orange/90 hover:bg-deep-carrot-orange rounded-md py-2 mt-4"
        />
      </form>
      {!!errorMessage && (
        <p className="text-red-500 italic mt-2 text-sm">{errorMessage}</p>
      )}

      <div className="mt-6">
        <p>
          Belum punya akun,{' '}
          <Link className="text-blue underline text-blue-400" href="/register">
            Daftar
          </Link>
        </p>
      </div>
    </div>
  );
}
