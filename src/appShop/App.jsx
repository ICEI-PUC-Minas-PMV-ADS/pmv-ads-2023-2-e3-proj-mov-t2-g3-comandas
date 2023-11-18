/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import Routes from '@/screens/routes';
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';

function App() {
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

  return <Routes />;
}
export default App;
