import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Login/Login';
import Signup from '../Register/Signup';
import Welcome from '../Onboarding/Welcome';

const Stack = createNativeStackNavigator();

function Main() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ title: '' }}
        // Falar com o grupo para manter o Scan sempre.
        // O usuário deve ter opção de usar o app sem criar conta, o scan deve sempre estar dispnível para ve o menu do restaurante
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Register"
        component={Signup}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
}

export default Main;
