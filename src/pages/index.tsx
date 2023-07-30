import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, off } from 'firebase/database';

import { initializeApp } from 'firebase/app';
import HomePage from '@/components/pages/Home';

export default function Home() {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!initializeApp?.apps?.length) {
      initializeApp({
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        projectId: process.env.PROJECT_ID,
        storageBucket: process.env.STORAGE_BUCKET,
        messagingSenderId: process.env.MESSAGING_SENDER_ID,
        appId: process.env.APP_ID,
        measurementId: process.env.MESAUREMENT_ID
      });
    }

    const database = getDatabase();
    const databaseRef = ref(database, 'incomes');

    const onDataChange = snapshot => {
      setData(snapshot.val());
    };
    onValue(databaseRef, onDataChange);

    return () => off(databaseRef, onDataChange);
  }, []);

  return <HomePage />;
}
