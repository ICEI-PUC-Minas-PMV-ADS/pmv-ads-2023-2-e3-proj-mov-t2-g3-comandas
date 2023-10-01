import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from '../Home';
import Scan from '../Scan/Scan';
import Scanner from '../Scanner/Scanner'

const Stack = createNativeStackNavigator();

function StackNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Scan" component={Scan} />
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
