// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { useFonts } from 'expo-font';
// eslint-disable-next-line no-unused-vars
import * as SplashScreen from 'expo-splash-screen';
import Routes from '@/screens/routes';
import UserProvider from '@/context/UserContext';

export default function App() {
  //   // Carregando as fontes locais
  //   const [fontsLoaded] = useFonts({
  //     REMLight: require('@/assets/fonts/REM-Light.ttf'),
  //     REMRegular: require('@/assets/fonts/REM-Regular.ttf'),
  //     REMBold: require('@/assets/fonts/REM-SemiBold.ttf'),
  //   });

  //   // Mostrando SplashScreen até hideAsync ser chamado
  //   useEffect(() => {
  //     async function prepare() {
  //       await SplashScreen.preventAutoHideAsync();
  //     }
  //     prepare();
  //   }, []);

  //   if (!fontsLoaded) return null;

  //   // Chegou aqui então fontsLoaded é true então podemos esconder a Splash
  //   SplashScreen.hideAsync();

  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
}
