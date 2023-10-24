import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import qr from '../../assets/qr.png';

export default function Scan({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.textInfo}>
                Escaneie o QR para vizualizar o cardápio
            </Text>
            <Image source={qr} />
            <TouchableOpacity
                style={styles.scanButton}
                onPress={() => navigation.navigate('Scanner')}
            >
                <Text style={styles.buttonText}>Escanear</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    scanButton: {
        width: '70%',
        alignItems: 'center',
        backgroundColor: '#f3484f',
        padding: 10,
        marginTop: 20,
        borderRadius: 50,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    textInfo: {
        width: '70%',
        textAlign: 'center',
        fontSize: 24,
        color: '#484572',
        fontWeight: 'bold',
    },
});
