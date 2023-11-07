/* eslint-disable camelcase */
/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
// eslint-disable-next-line no-unused-vars
import * as SplashScreen from 'expo-splash-screen';
import Routes from '@/screens/routes';
import UserProvider from '@/context/UserContext';
import { LogBox } from 'react-native';
import ignoreWarnings from 'ignore-warnings';
// import LocationProvider from '@/context/LocationContext';

export default function App() {
  // Carregando as fontes
  const [fontsLoaded] = useFonts({
    MontserratLight: Montserrat_300Light,
    MontserratRegular: Montserrat_400Regular,
    MontserratMedium: Montserrat_500Medium,
    MontserratSemiBold: Montserrat_600SemiBold,
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

  ignoreWarnings('warn', ['ViewPropTypes']);

  LogBox.ignoreLogs([
    "ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.",
  ]);

  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
}
