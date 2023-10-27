/* eslint-disable global-require */
/* eslint-disable import/extensions */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import DashBord from './src/screens/DashBord';
import Reservas from './src/screens/Reservas';
import Menu from './src/screens/Menu';
import Clientes from './src/screens/Clientes';
import Produtos from './src/screens/Produtos';
// import ImageIcon from './src/components/ImageIcon';
// import WardahSeptianiPutri from './src/components/WardahSeptianiPutri';
// import VectorIcon from './src/components/VectorIcon';
// import Frame from './src/components/Frame';

const Stack = createNativeStackNavigator();

function App() {
    const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

    const [fontsLoaded, error] = useFonts({
        'Poppins-Light': require('./src/assets/fonts/Poppins-Light.ttf'),
        'Poppins-Regular': require('./src/assets/fonts/Poppins-Regular.ttf'),
        'Poppins-Medium': require('./src/assets/fonts/Poppins-Medium.ttf'),
        'Poppins-SemiBold': require('./src/assets/fonts/Poppins-SemiBold.ttf'),
        'Montserrat-SemiBold': require('./src/assets/fonts/Montserrat-SemiBold.ttf'),
        'Inter-Regular': require('./src/assets/fonts/Inter-Regular.ttf'),
        'Inter-Medium': require('./src/assets/fonts/Inter-Medium.ttf'),
        'Inter-SemiBold': require('./src/assets/fonts/Inter-SemiBold.ttf'),
        'WorkSans-Regular': require('./src/assets/fonts/WorkSans-Regular.ttf'),
        'WorkSans-Medium': require('./src/assets/fonts/WorkSans-Medium.ttf'),
    });

    if (!fontsLoaded && !error) {
        return null;
    }

    return (
        <NavigationContainer>
            {hideSplashScreen ? (
                <Stack.Navigator
                    initialRouteName="DashBord"
                    screenOptions={{ headerShown: false }}
                >
                    <Stack.Screen
                        name="DashBord"
                        component={DashBord}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Reservas"
                        component={Reservas}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Menu"
                        component={Menu}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Clientes"
                        component={Clientes}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Produtos"
                        component={Produtos}
                        options={{ headerShown: false }}
                    />
                    {/* <Stack.Screen
            name="ImageIcon"
            component={ImageIcon}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="WardahSeptianiPutri"
            component={WardahSeptianiPutri}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="VectorIcon"
            component={VectorIcon}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Frame"
            component={Frame}
            options={{ headerShown: false }}
          /> */}
                </Stack.Navigator>
            ) : null}
        </NavigationContainer>
    );
}
export default App;
