import { useRef, useState } from 'react';
import { child, ref, remove } from 'firebase/database';
import { database } from '@/services/firebaseApp';

export default function useRemoveValues() {
  const [isLoading, setIsLoading] = useState(true);
  const success = useRef(false);
  const error = useRef(null);
  const data: any = useRef(null);

  const removeValue = async (path: string) => {
    setIsLoading(true);
    try {
      const rootReference = ref(database);
      const dbPath = child(rootReference, path);
      await remove(dbPath);

      success.current = true;
    } catch (errorMsg: any) {
      error.current = errorMsg.message;
    }

    setIsLoading(false);
  };

  return {
    removeValue,
    isLoading,
    success: success.current,
    error: error.current,
    data: data.current
  };
}
