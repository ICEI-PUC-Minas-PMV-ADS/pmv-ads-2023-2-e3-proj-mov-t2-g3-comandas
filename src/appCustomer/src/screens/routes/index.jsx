import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Welcome from '../Onboarding/Welcome';
import Login from '../Login/Login';
import Signup from '../Register/Signup';
import UserProfile from '../UserProfile/UserProfile';
import DadosPessoais from '../UserProfile/DadosPessoais';
import CarteiraDigital from '../UserProfile/CarteiraDigital';
import Cartoes from '../UserProfile/Cartoes';
import FaleConosco from '../UserProfile/FaleConosco';
import Problemas from '../UserProfile/Problemas';
import Address from '../UserProfile/Address';
import Favoritos from '../UserProfile/Favoritos';
import PedidosAcompanhamento from '../Compras/PedidosAcompanhamento';
import Search from '../Search/index';
import Home from '../Home';
import Scan from '../Scan/Index';
import Scanner from '../Scanner/Index';
import Notifications from '../Notifications/Index';
import Shop from '../Shop';
import BackArrow from '../../assets/BackArrow.svg';
import ItemDetails from '../Shop/ItemDetails';
import CartScreen from '../Carrinho/CartScreen';
import OrderList from '../Compras/PedidosAcompanhamento';

function LeftButton({ onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 15,
      }}
    >
      <BackArrow />
    </TouchableOpacity>
  );
}

const Stack = createNativeStackNavigator();

function StackNavigation() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
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
        name="UserProfile"
        component={UserProfile}
        options={{
          title: '',
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
                name="CheckoutLogout"
                component={CheckoutLogout}
                options={{ headerShown: false }}
            /> */}
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
      {/* <Stack.Screen
                name="CheckinFaleConosco"
                component={CheckinFaleConosco}
                options={{ headerShown: false }}
            /> */}
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
        name="Shop"
        component={Shop}
        options={{
          animation: 'slide_from_right',
          headerShadowVisible: false,
          headerTitle: '',
          headerTitleAlign: 'center',
          headerLeft: () => <LeftButton onPress={() => navigation.goBack()} />,
          headerBackButtonMenuEnabled: false,
        }}
      />
      <Stack.Screen
        name="ItemDetails"
        component={ItemDetails}
        options={{
          animation: 'fade',
          presentation: 'transparentModal',
          headerShown: false,
        }}
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
      <Stack.Screen name="Cart" component={CartScreen} />
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
