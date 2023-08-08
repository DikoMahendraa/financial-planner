import { useEffect, useRef, useState } from 'react';
import { child, ref, get } from 'firebase/database';
import { database } from '@/services/firebaseApp';

type UseGetValues = {
  path: string;
};

export default function useGetValues({ path }: UseGetValues) {
  const [isLoading, setIsLoading] = useState(true);
  const snapshot = useRef(null);
  const error = useRef(null);
  const isEmpty = useRef(false);

  const getValue = async () => {
    try {
      const rootReference = ref(database);
      const dbGet = await get(child(rootReference, path));
      const dbValue = dbGet.val();
      const dbExist = dbGet.exists();
      if (!dbExist) {
        isEmpty.current = true;
      }
      snapshot.current = dbValue;
    } catch (errorMsg: any) {
      error.current = errorMsg.message;
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getValue();
  }, []);

  return {
    isLoading,
    snapshot: snapshot.current,
    error: error.current,
    isEmpty
  };
}
