/* eslint-disable camelcase */
import React, { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import {
    useFonts,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import UserProvider from "@/context/UserContext";
import Routes from "@/screens/routes";

function App() {
    // Carregar as fontes
    const [fontsLoaded] = useFonts({
        MontserratLight: Montserrat_300Light,
        MontserratRegular: Montserrat_400Regular,
        MontserratMedium: Montserrat_500Medium,
        MontserratSemiBold: Montserrat_600SemiBold,
        MontserratBold: Montserrat_700Bold,
    });

    // Preparar a SplashScreen
    useEffect(() => {
        async function prepare() {
            await SplashScreen.preventAutoHideAsync();
        }
        prepare();
    }, []);

    // Checar se as fontes estão carregadas
    if (!fontsLoaded) {
        return null;
    }

    // Esconder a SplashScreen quando as fontes estiverem carregadas
    SplashScreen.hideAsync();

    return (
        <UserProvider>
            <Routes />
        </UserProvider>
    );
}

export default App;
