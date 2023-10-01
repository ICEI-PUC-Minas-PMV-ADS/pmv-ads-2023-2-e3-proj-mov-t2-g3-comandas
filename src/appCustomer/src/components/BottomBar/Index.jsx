import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function BottomBar({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image source={require("../../assets/Home.png")}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require("../../assets/Icone_Busca.png")}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require("../../assets/Pedidos.png")}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require("../../assets/Icone_Perfil.png")}/>
            </TouchableOpacity>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
});
