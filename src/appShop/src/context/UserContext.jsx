import React, { createContext, useState, useContext, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { GetUser } from '@/services/user.services';

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [signed, setSigned] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadSigned = async () => {
      const secureSigned = await SecureStore.getItemAsync('TOKEN_KEY');
      setSigned(!!secureSigned);

      const secureUserId = await SecureStore.getItemAsync('USER_ID');
      if (secureUserId) {
        const userInfo = await GetUser(secureUserId);
        setUser(userInfo);
      }
    };

    loadSigned();
  }, []);

  return (
    <UserContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        signed,
        setSigned,
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  const { signed, setSigned, user, setUser } = context;
  return { signed, setSigned, user, setUser };
}
