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

  const [registerSuccess, setRegisterSuccess] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const onRegister = (data: { email: string; password: string }) => {
    setErrorMessage('');
    setIsLoading(true);
    try {
      createUserWithEmailAndPassword(
        Authentication(),
        data.email,
        data.password
      )
        .then(() => {
          setIsLoading(false);
          setRegisterSuccess(true);
        })
        .catch(error => {
          setIsLoading(false);
          const errorCode = error?.message;

          if (errorCode.includes('auth/email-already-in-use')) {
            setErrorMessage('Email sudah terdaftar');
          } else {
            setErrorMessage('Ups, terjadi kesalahan');
          }
        });
    } catch (error) {}
  };

  const onRedirectToLogin = () => {
    router.push('/login');
    setRegisterSuccess(false);
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
            disabled={isLoading}
            type="submit"
            name="Daftar"
            rootStyle="bg-deep-carrot-orange/90 hover:bg-deep-carrot-orange rounded-md py-2 mt-4"
          />
        </form>
        {!!errorMessage && (
          <p className="text-red-500 italic mt-2 text-sm">{errorMessage}</p>
        )}

        <div className="mt-6">
          <p>
            Sudah punya akun,{' '}
            <Link className="text-blue underline text-blue-400" href="/login">
              Masuk
            </Link>
          </p>
        </div>
      </div>

      {registerSuccess && (
        <MModal>
          <div className="bg-white w-[20rem] h-[10rem] rounded-md flex flex-col items-center justify-center">
            <p className="text-md">
              Pendaftaran kamu <strong>Berhasil!</strong>
            </p>
            <div className="mt-6">
              <AButton
                onClick={onRedirectToLogin}
                rootStyle=" px-6 py-1 rounded-md bg-deep-carrot-orange text-white"
                name="Masuk"
              />
            </div>
          </div>
        </MModal>
      )}
    </>
  );
}
