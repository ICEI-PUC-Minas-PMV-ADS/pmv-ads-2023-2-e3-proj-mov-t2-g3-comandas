import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Note from '../../components/Note/Index';

export default function Scan({ navigation }) {
    return (
        <View style={styles.container}>
            <Note
                image_link="https://s1.1zoom.me/b4240/Fast_food_Hamburger_French_fries_Drinks_Highball_512223_169x300.jpg"
                text_title="Hoje ta com cara de sushi, né ?"
                text_subtitle="Que tal fechar fechar o dia comendo ?"
            />

            <Note
                image_link="https://img.freepik.com/fotos-gratis/uma-tigela-de-salada-caesar-decorada-com-palitos-de-pao_140725-8508.jpg?w=2000"
                text_title="Hoje ta com cara de sushi, né ?"
                text_subtitle="Que tal fechar fechar o dia comendo ?"
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
});
