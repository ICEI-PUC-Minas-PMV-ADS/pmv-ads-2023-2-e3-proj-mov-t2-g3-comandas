/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import COLORS from '@/constants/colors';
import { useUser } from '@/context/UserContext';
import Splash from '../../assets/splash.png';
import Home from '../Home';
import Mesas from '../Mesas/index';

import DashboardIcon from '../../assets/Dashboard.svg';
import PedidosIcon from '../../assets/Pedidos.svg';
import MesasIcon from '../../assets/Mesas.svg';
import PerfilIcon from '../../assets/Perfil.svg';
import Icon from '../../assets/icon.png';
import Cardapio from '../Cardapio';
import ItemDetails from '../Cardapio/ItemDetails';
import Plus from '../../assets/Plus.svg';
import Signup from '../Register/Signup';
import SignupAddress from '../Register/SignupAddress';
import Login from '../Login/Login';
import MesaInfo from '../MesaInfo/index';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStackNavigation() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

function AuthStackNavigation() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen
        name="SignupAddress"
        component={SignupAddress}
        options={{
          animation: 'slide_from_right',
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          animation: 'slide_from_bottom',
        }}
      />
    </Stack.Navigator>
  );
}

function CardapioStackNavigation() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Cardapio" component={Cardapio} />
      <Stack.Screen
        name="ItemDetails"
        component={ItemDetails}
        options={{
          animation: 'fade',
          presentation: 'transparentModal',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function MesasStackNavigation() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MesasStack" component={Mesas} />
      <Stack.Screen name="MesaInfo" component={MesaInfo} />
    </Stack.Navigator>
  );
}

function CustomDrawer(props) {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 10,
            marginVertical: 15,
          }}
        >
          <Image
            source={Icon}
            style={{
              width: 50,
              height: 50,
            }}
          />
          <Text
            style={{
              fontFamily: 'MontserratSemiBold',
              fontSize: 20,
            }}
          >
            COMANDAS
          </Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
}

function DrawerNavigation() {
  const navigation = useNavigation();
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        drawerStyle: {
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          paddingBottom: 10,
        },
        drawerInactiveTintColor: 'gray',
        drawerActiveTintColor: 'red',
      }}
    >
      <Drawer.Screen
        name="Dashboard"
        component={HomeStackNavigation}
        options={() => ({
          drawerLabel: 'Dashboard',
          drawerIcon: ({ focused }) => (
            <DashboardIcon fill={focused ? '#ff0000' : 'gray'} />
          ),
        })}
      />
      <Drawer.Screen
        name="Mesas"
        component={MesasStackNavigation}
        options={() => ({
          drawerLabel: 'Mesas',
          drawerIcon: ({ focused }) => (
            <MesasIcon fill={focused ? '#ff0000' : 'gray'} />
          ),
        })}
      />
      <Drawer.Screen
        name="Cardápio"
        component={CardapioStackNavigation}
        options={() => ({
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('ItemDetails')}
              style={{
                backgroundColor: COLORS.primary,
                borderRadius: 999,
                width: 30,
                height: 30,
                marginRight: 32,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Plus />
            </TouchableOpacity>
          ),
          drawerLabel: 'Cardápio',
          drawerIcon: ({ focused }) => (
            <PedidosIcon stroke={focused ? '#ff0000' : 'gray'} />
          ),
        })}
      />
      <Drawer.Screen
        name="Perfil"
        component={HomeStackNavigation}
        options={() => ({
          drawerLabel: 'Perfil',
          drawerIcon: ({ focused }) => (
            <PerfilIcon fill={focused ? '#ff0000' : 'gray'} />
          ),
        })}
      />
    </Drawer.Navigator>
  );
}

export default function Routes() {
  const { signed } = useUser();

  if (typeof signed === 'object') {
    return (
      <View>
        <Image source={Splash} />
      </View>
    );
  }
  return (
    <NavigationContainer>
      {signed ? <DrawerNavigation /> : <AuthStackNavigation />}
    </NavigationContainer>
  );
}
