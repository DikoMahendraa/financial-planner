import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, off } from 'firebase/database';

import { initializeApp } from 'firebase/app';
import HomePage from '@/components/pages/Home';
import { firebaseConfig } from '../../firebase';

export default function Home() {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!initializeApp?.apps?.length) {
      initializeApp(firebaseConfig);
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
