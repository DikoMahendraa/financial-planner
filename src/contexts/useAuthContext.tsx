import { Authentication } from '@/services/firebaseApp';
import React, { useEffect, useState } from 'react';

const AuthStateChangeProvider = () => {
  const [, setIsLoading] = useState(true);

  const initiateAuthStateChange = () => {
    Authentication().onAuthStateChanged(user => {
      if (user) {
        // do something
      } else {
        // do something
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
