import { Authentication } from '@/services/firebaseApp';
import { setCookie } from 'cookies-next';
import React, { useEffect, useState } from 'react';

const AuthStateChangeProvider = () => {
  const [, setIsLoading] = useState(true);

  const initiateAuthStateChange = () => {
    Authentication().onAuthStateChanged(user => {
      if (user) {
        /* @ts-ignored */
        setCookie('authorization', user.accessToken);
        setCookie('uuid', user.uid);
        setCookie('email', user.email);
      }

      setIsLoading(false);
    });
  };

  useEffect(() => {
    initiateAuthStateChange();
  }, []);

  return <></>;
};

export default AuthStateChangeProvider;
