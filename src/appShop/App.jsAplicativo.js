import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import DashBord from './screens/DashBord';
import VectorIcon from './components/VectorIcon';
import WardahSeptianiPutri from './components/WardahSeptianiPutri';
import ImageIcon from './components/ImageIcon';

const Stack = createNativeStackNavigator();

function App() {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
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
            name="VectorIcon"
            component={VectorIcon}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="WardahSeptianiPutri"
            component={WardahSeptianiPutri}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ImageIcon"
            component={ImageIcon}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      ) : null}
    </NavigationContainer>
  );
}
export default App;
