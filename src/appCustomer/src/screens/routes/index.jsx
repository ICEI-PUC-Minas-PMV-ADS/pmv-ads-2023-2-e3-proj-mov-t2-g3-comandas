import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { TouchableOpacity, Alert, View, Image } from 'react-native';
import { useCart } from '@/context/CartContext';
import { useUser } from '@/context/UserContext';
import * as Animatable from 'react-native-animatable';
import COLORS from '@/constants/colors';
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
import TrashCan from '../../assets/TrashCan.svg';
import Icon from '../../assets/Comandas-icon.png';

function SplashScreen() {
  return (
    <Animatable.View
      animation="bounce"
      style={{
        flex: 1,
        backgroundColor: COLORS.neutralWhite,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Animatable.Image
        animation="rotate"
        iterationCount="infinite"
        source={Icon}
        style={{ width: 150, height: 150 }}
      />
    </Animatable.View>
  );
}

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

function RightButton({ onPress }) {
  return (
    <TouchableOpacity
      onPress={() =>
        Alert.alert(
          'Atenção !',
          'Deseja realmente limpar sua sacola ?',
          [
            {
              text: 'Confirmar',
              onPress,
            },
            { text: 'Cancelar', style: 'cancel' },
          ],
          { cancelable: true },
        )
      }
      style={{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 15,
      }}
    >
      <TrashCan />
    </TouchableOpacity>
  );
}

const Stack = createNativeStackNavigator();

function StackNavigation() {
  const navigation = useNavigation();
  const { clearCart } = useCart();
  const { signed } = useUser();

  useEffect(() => {
    if (typeof signed !== 'undefined')
      navigation.navigate(signed ? 'Home' : 'Welcome');
  }, [signed, navigation]);

  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
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
        name="Home"
        component={Home}
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
        options={{ headerShadowVisible: false, title: 'Meus pedidos' }}
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
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          title: 'Sacola',
          headerRight: () => <RightButton onPress={clearCart} />,
        }}
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
