/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import { Image, Text, View } from 'react-native';
import Home from '../Home';
import Dashboard from '../../assets/Dashboard.svg';
import Pedidos from '../../assets/Pedidos.svg';
import Mesas from '../../assets/Mesas.svg';
import Perfil from '../../assets/Perfil.svg';
import Icon from '../../assets/icon.png';
import Cardapio from '../Cardapio';

const Tab = createBottomTabNavigator();
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

function CardapioStackNavigation() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Cardapio" component={Cardapio} />
    </Stack.Navigator>
  );
}

function CustomDrawer(props) {
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
          <Text style={{ fontFamily: 'Montserrat-SemiBold', fontSize: 20 }}>
            COMANDAS
          </Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
}

function DrawerNavigation() {
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
            <Dashboard fill={focused ? '#ff0000' : 'gray'} />
          ),
        })}
      />
      <Drawer.Screen
        name="Mesas"
        component={HomeStackNavigation}
        options={() => ({
          drawerLabel: 'Mesas',
          drawerIcon: ({ focused }) => (
            <Mesas fill={focused ? '#ff0000' : 'gray'} />
          ),
        })}
      />
      <Drawer.Screen
        name="Cardápio"
        component={CardapioStackNavigation}
        options={() => ({
          drawerLabel: 'Cardápio',
          drawerIcon: ({ focused }) => (
            <Pedidos stroke={focused ? '#ff0000' : 'gray'} />
          ),
        })}
      />
      <Drawer.Screen
        name="Perfil"
        component={HomeStackNavigation}
        options={() => ({
          drawerLabel: 'Perfil',
          drawerIcon: ({ focused }) => (
            <Perfil fill={focused ? '#ff0000' : 'gray'} />
          ),
        })}
      />
    </Drawer.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
}
