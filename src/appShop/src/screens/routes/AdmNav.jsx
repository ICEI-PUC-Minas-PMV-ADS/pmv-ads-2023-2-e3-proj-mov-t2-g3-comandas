import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AdmNavMenu from "../Adm/AdmNavMenu";
import Signup from "../Adm/CrewSignup";
import Home from "../Home";
import SignupAddress from "../Adm/CrewSignupAddress";
import ItemDetails from "../Adm/ItemDetails";

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
    const navigation = useNavigation();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="AdmNav"
                component={AdmNavMenu}
                options={{ title: "" }}
            />
            <Stack.Screen
                name="CrewSignup"
                component={Signup}
                options={{ title: "" }}
            />

            <Stack.Screen
                name="CrewSignupAddress"
                component={SignupAddress}
                options={{ title: "" }}
            />
        </Stack.Navigator>
    );
}
