import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Welcome from '../Onboarding/Welcome';
import Login from '../Login/Login';
import Signup from '../Register/Signup';
import CheckinRegister from '../Register/CheckinRegister';
import Home from '../Home';
import Scan from '../Scan/Index.jsx';
import Scanner from '../Scanner/Index.jsx';
import Notifications from '../Notifications/Index';

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ title: '' }}
        // Falar com o grupo para manter o QR Scan sempre.
        // O usuário deve ter opção de usar o app sem criar conta, o scan deve sempre estar dispnível para ve o menu do restaurante
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CheckinRegister"
        component={CheckinRegister}
        options={{ headerShown: false }}
      />
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

export default function Routes() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}
