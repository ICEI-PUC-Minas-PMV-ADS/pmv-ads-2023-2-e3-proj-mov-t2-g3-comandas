import React, { createContext, useState, useContext, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { GetUser } from '@/services/user.services';

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [signed, setSigned] = useState(null);
  const [user, setUser] = useState(null);

  async function logout() {
    await SecureStore.deleteItemAsync('TOKEN_KEY');
    await SecureStore.deleteItemAsync('USER_ID');
    await SecureStore.deleteItemAsync('CART');
    setSigned(false);
    setUser(false);
  }

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
  }, [signed]);

  return (
    <UserContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        signed,
        setSigned,
        user,
        setUser,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  const { signed, setSigned, user, setUser, logout } = context;
  return { signed, setSigned, user, setUser, logout };
}
