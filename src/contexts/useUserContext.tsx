import { createContext, useState, useContext, useMemo } from 'react';

export const initialState: { email: unknown; uid: unknown } = {
  email: null,
  uid: null
};

const UserContext = createContext(initialState);

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = (props: any) => {
  const [userState, setUserState] = useState(initialState);

  const setUser = (userCredential: { email: string; uid: string }) => {
    setUserState(userCredential);
  };

  const resetUser = () => {
    setUserState(initialState);
  };

  const value = useMemo(
    () => ({ ...userState, setUser, resetUser }),
    [userState]
  );

  return <UserContext.Provider value={value} {...props} />;
};
