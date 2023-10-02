import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import TopBar from '../../components/TopBar/Index';
import BottomBar from '../../components/BottomBar/Index';

export default function Home({ navigation }) {

    return (
        <View style={styles.container}>
            <TopBar navigation={navigation} />
            <ScrollView style={{width: '100%'}} contentContainerStyle={styles.scrollContent}>
                <View style={styles.main}>
                    <Image style={styles.banner} source={require('../../assets/banner.png')} />
                </View>
            </ScrollView>
            <BottomBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    scrollContent: {
        flexGrow: 1, // Permite que o ScrollView cresça para preencher o espaço disponível
    },
    main: {
        width: '100%',
        alignItems: 'center',
    },
    banner: {
        width: '95%',
        height: 200,
        marginTop: 10,
        borderTopLeftRadius: 35,
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
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
    },
});
