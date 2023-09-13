import { Authentication } from '@/services/firebaseApp';
import { setCookie } from 'cookies-next';
import React, { useEffect, useState } from 'react';

const AuthStateChangeProvider = () => {
  const [, setIsLoading] = useState(true);

  const initiateAuthStateChange = () => {
    Authentication().onAuthStateChanged(user => {
      if (user) {
        setCookie('authorization', user.accessToken);
        setCookie('uuid', user.uid);
        setCookie('email', user.email);
      } else {
        setCookie('authorization', null);
        setCookie('uuid', null);
        setCookie('email', null);
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
