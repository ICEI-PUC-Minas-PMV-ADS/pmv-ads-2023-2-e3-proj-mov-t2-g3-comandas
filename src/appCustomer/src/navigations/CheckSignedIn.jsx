import React from 'react';
import { useUser } from '../context/UserContext';
import Main from '../screens/routes/index';
import Auth from './Auth';

function CheckSigned() {
  const { signed } = useUser();

  return (
    <>
      {
        // Rota principal
        signed ? (
          // se o usuário estiver logado segue para o Main, se não esta logado segue para o Auth
          <Main />
        ) : (
          <Auth />
        )
      }
    </>
  );
}

export default CheckSigned;
