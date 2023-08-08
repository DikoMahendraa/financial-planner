import { useEffect, useRef, useState } from 'react';
import { child, getDatabase, ref, get } from 'firebase/database';
import firebaseApp from '@/services/firebaseApp';

type UseGetValues = {
  path: string;
};

export default function useGetValues({ path }: UseGetValues) {
  const [isLoading, setIsLoading] = useState(true);
  const snapshot = useRef(null);
  const error = useRef(null);

  const getValue = async () => {
    try {
      const database = getDatabase(firebaseApp);
      const rootReference = ref(database);
      const dbGet = await get(child(rootReference, path));
      const dbValue = dbGet.val();

      snapshot.current = dbValue;
    } catch (errorMsg: any) {
      error.current = errorMsg.message;
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getValue();
  }, []);

  return { isLoading, snapshot: snapshot.current, error: error.current };
}
