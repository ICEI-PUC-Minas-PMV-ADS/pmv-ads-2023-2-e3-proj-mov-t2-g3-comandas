import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import TopBar from '../../components/TopBar/Index'

import BottomBar from '../../components/BottomBar/Index'

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <TopBar navigation={navigation}/>
            <View style={styles.main}>
                <Image style={styles.banner} source={require('../../assets/banner.png')} />
            </View>
            <BottomBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between', // Coloca espaço entre o conteúdo e o BottomBar
    },
    main: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
    },
    banner: {
        width: '95%',
        height: 200,
        marginTop: 10,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    logo: {
        width: 150,
        height: 150,
    },
    search: {
        width: '100%',
        flexDirection: 'row',
        width: '100%',
        backgroundColor: 'orange',
        padding: 10,
    }
});
