import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Welcome from '../Onboarding/Welcome';
import Login from '../Login/Login';
import Signup from '../Register/Signup';
import CheckinRegister from '../Register/CheckinRegister';
import UserProfile from '../UserProfile/UserProfile';
import CheckoutLogout from '../UserProfile/CheckoutLogout';
import DadosPessoais from '../UserProfile/DadosPessoais';
import CarteiraDigital from '../UserProfile/CarteiraDigital';
import CheckinPayment from '../UserProfile/CheckinPayment';
import Cartoes from '../UserProfile/Cartoes';
import FaleConosco from '../UserProfile/FaleConosco';
import Problemas from '../UserProfile/Problemas';
import Address from '../UserProfile/Address';
import Favoritos from '../UserProfile/Favoritos';
import PedidosAcompanhamento from '../Compras/PedidosAcompanhamento';
import Search from '../Search/index';
import Home from '../Home';
import Scan from '../Scan/Index.jsx';
import Scanner from '../Scanner/Index.jsx';
import Notifications from '../Notifications/Index';
import CheckinLogin from '../Login/CheckinLogin';
import CheckinFaleConosco from '../UserProfile/CheckinFaleConosco';

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
        // Falar com o grupo para manter o QR Scan sempre.
        // O usuário deve ter opção de usar o app sem criar conta, o scan deve sempre estar dispnível para ve o menu do restaurante
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CheckinLogin"
        component={CheckinLogin}
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
        name="UserProfile"
        component={UserProfile}
        options={{ title: '' }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CheckoutLogout"
        component={CheckoutLogout}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CarteiraDigital"
        component={CarteiraDigital}
        options={{ title: '' }}
      />
      <Stack.Screen
        name="Cartoes"
        component={Cartoes}
        options={{ title: '' }}
      />
      <Stack.Screen
        name="PedidosAcompanhamento"
        component={PedidosAcompanhamento}
        options={{ title: '' }}
      />
      <Stack.Screen
        name="CheckinPayment"
        component={CheckinPayment}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="DadosPessoais"
        component={DadosPessoais}
        options={{ title: '' }}
      />
      <Stack.Screen
        name="Address"
        component={Address}
        options={{ title: '' }}
      />
      <Stack.Screen
        name="Favoritos"
        component={Favoritos}
        options={{ title: '' }}
      />
      <Stack.Screen
        name="FaleConosco"
        component={FaleConosco}
        options={{ title: '' }}
      />
      <Stack.Screen
        name="CheckinFaleConosco"
        component={CheckinFaleConosco}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Problemas"
        component={Problemas}
        options={{ title: '' }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
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
