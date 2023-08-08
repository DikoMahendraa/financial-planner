import { useRef, useState } from 'react';
import { child, ref, update } from 'firebase/database';
import { database } from '@/services/firebaseApp';

export default function useUpdateValues() {
  const [isLoading, setIsLoading] = useState(true);
  const success = useRef(false);
  const error = useRef(null);
  const data: any = useRef(null);

  const updateValues = async (path: string, values: any) => {
    setIsLoading(true);
    try {
      const rootReference = ref(database);
      const dbPath = child(rootReference, path);
      await update(dbPath, values);
      success.current = true;
    } catch (errorMsg: any) {
      error.current = errorMsg.message;
    }

    setIsLoading(false);
  };

  return {
    updateValues,
    isLoading,
    success: success.current,
    error: error.current,
    data: data.current
  };
}
