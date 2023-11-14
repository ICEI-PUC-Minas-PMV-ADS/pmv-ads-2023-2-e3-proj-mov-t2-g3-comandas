import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login/Login';
import Signup from '../screens/Register/Signup';
import Welcome from '../screens/Onboarding/Welcome';

const Stack = createNativeStackNavigator();

function Auth() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ title: '' }}
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

export default Auth;
