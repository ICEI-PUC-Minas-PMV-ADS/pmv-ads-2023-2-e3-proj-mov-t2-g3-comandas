/* import React from 'react';
import { useUser } from '../../context/UserContext';
import Main from '../routes/index';
import Auth from './Auth';

function CheckSignedIn = () => {
  const { signed } = useUser();

  return (
    <>
    {
        signed 
        //se o login esta feito segue para o arquivo index das rotas, 
        // se não vai p login
        ? <Main /> 
        : <Auth />
    }
    </>
  )
  
}

export default CheckSignedIn;
 */
