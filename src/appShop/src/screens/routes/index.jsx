import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Home';
import Dashboard from '../../assets/Dashboard.svg';
import Pedidos from '../../assets/Pedidos.svg';
import Mesas from '../../assets/Mesas.svg';
import Perfil from '../../assets/Perfil.svg';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function StackNavigation() {
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

function TabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    borderTopWidth: 0,
                    elevation: 0,
                    shadowOpacity: 0,
                    height: '7%',
                    paddingBottom: 10,
                },
                tabBarInactiveTintColor: 'gray',
                tabBarActiveTintColor: 'red',
            }}
        >
            <Tab.Screen
                name="Dashboard"
                component={StackNavigation}
                options={() => ({
                    tabBarLabel: 'Dashboard',
                    tabBarIcon: ({ focused }) => (
                        <Dashboard fill={focused ? '#ff0000' : 'gray'} />
                    ),
                })}
            />
            <Tab.Screen
                name="Mesas"
                component={StackNavigation}
                options={() => ({
                    tabBarLabel: 'Mesas',
                    tabBarIcon: ({ focused }) => (
                        <Mesas fill={focused ? '#ff0000' : 'gray'} />
                    ),
                })}
            />
            <Tab.Screen
                name="Pedidos"
                component={StackNavigation}
                options={() => ({
                    tabBarLabel: 'Pedidos',
                    tabBarIcon: ({ focused }) => (
                        <Pedidos stroke={focused ? '#ff0000' : 'gray'} />
                    ),
                })}
            />
            <Tab.Screen
                name="Perfil"
                component={StackNavigation}
                options={() => ({
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ({ focused }) => (
                        <Perfil fill={focused ? '#ff0000' : 'gray'} />
                    ),
                })}
            />
        </Tab.Navigator>
    );
}

export default function Routes() {
    return (
        <NavigationContainer>
            <TabNavigation />
        </NavigationContainer>
    );
}
