import { useRef, useState } from 'react';
import { child, ref, push, set } from 'firebase/database';
import { database } from '@/services/firebaseApp';

export default function useCreateValues() {
  const [isLoading, setIsLoading] = useState(true);
  const success = useRef(false);
  const error = useRef(null);
  const data: any = useRef(null);

  const pushValue = async (path: string, values: any) => {
    setIsLoading(true);
    try {
      const rootReference = ref(database);
      const dbPath = child(rootReference, path);
      const dbPush = await push(dbPath, values);
      data.current = { key: dbPush.key, values };
      success.current = true;
    } catch (errorMsg: any) {
      error.current = errorMsg.message;
    }

    setIsLoading(false);
  };

  const setValue = async (path: string, values: any) => {
    setIsLoading(true);
    try {
      const rootReference = ref(database);
      const dbPath = child(rootReference, path);
      await set(dbPath, values);
      success.current = true;
    } catch (errorMsg: any) {
      error.current = errorMsg.message;
    }

    setIsLoading(false);
  };

  return {
    pushValue,
    setValue,
    isLoading,
    success: success.current,
    error: error.current,
    data: data.current
  };
}
