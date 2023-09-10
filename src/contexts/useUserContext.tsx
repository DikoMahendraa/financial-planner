import { createContext, useState, useContext } from 'react';

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

  const value = { ...userState, setUser, resetUser };

  return <UserContext.Provider value={value} {...props} />;
};
