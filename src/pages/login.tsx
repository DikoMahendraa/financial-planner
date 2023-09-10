import React, { useState } from 'react';
import Head from 'next/head';
import { Controller, useForm } from 'react-hook-form';
import AInput from '@/components/atoms/Input';
import AGap from '@/components/atoms/Gap';
import AButton from '@/components/atoms/Button';
import Link from 'next/link';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Authentication } from '@/services/firebaseApp';

export default function Register() {
  const { control, handleSubmit } = useForm<{
    email: string;
    password: string;
    confirm_password: string;
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
    <React.Fragment>
      <Head>
        <title>Planner - Masuk</title>
      </Head>
      <div className="h-screen flex justify-center items-center">
        <div className="bg-white w-[20rem] py-6 px-4 min-h-[20rem] shadow-lg">
          <p className="text-md font-semibold my-3 underline">MASUK</p>
          <form onSubmit={handleSubmit(onSubmit)}>
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
                  label={'Kata Sandi'}
                  placeholder={`Masukan Kata Sandi`}
                  onChange={onChange}
                />
              )}
            />

            <AGap height={10} />

            <AButton
              type="submit"
              name="Masuk"
              rootStyle="bg-gray-200 py-2 mt-4"
            />
          </form>
          {!!errorMessage && (
            <p className="text-red-500 italic mt-2 text-sm">{errorMessage}</p>
          )}

          <div className="mt-6">
            <p>
              Belum punya akun,{' '}
              <Link
                className="text-blue underline text-blue-400"
                href="/register"
              >
                Daftar
              </Link>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
