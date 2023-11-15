import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from '@/screens/Home';
import Scan from '@/screens/Scan/Index.jsx';
import Scanner from '@/screens/Scanner/Index.jsx';
import Notifications from '../screens/Notifications/Index';

const Stack = createNativeStackNavigator();

function Main() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Scan"
        component={Scan}
        options={{ title: 'Escanear' }}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{ title: 'Notificações' }}
      />
      <Stack.Screen
        name="Scanner"
        component={Scanner}
        options={{ headerShown: false }} // Ocultar a barra de navegação superior
      />
    </Stack.Navigator>
  );
}

export default Main;
