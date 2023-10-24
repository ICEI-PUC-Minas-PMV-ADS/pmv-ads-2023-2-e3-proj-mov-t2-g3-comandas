/* eslint-disable camelcase */
/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import {
  useFonts,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
// eslint-disable-next-line no-unused-vars
import * as SplashScreen from 'expo-splash-screen';
import Routes from '@/screens/routes';
import UserProvider from '@/context/UserContext';
// import LocationProvider from '@/context/LocationContext';

export default function App() {
  // Carregando as fontes
  const [fontsLoaded] = useFonts({
    MontserratThin: Montserrat_300Light,
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });

  // Mostrando SplashScreen até hideAsync ser chamado
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) return null;

  // Chegou aqui então fontsLoaded é true então podemos esconder a Splash
  SplashScreen.hideAsync();

  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
}
