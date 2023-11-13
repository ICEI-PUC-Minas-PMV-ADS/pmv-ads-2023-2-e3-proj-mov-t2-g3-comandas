import React, { createContext, useState, useContext } from 'react';

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [signed, setSigned] = useState(false);
  const [user, setUser] = useState(null);

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
