import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, Button } from 'react-native';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Bom dia</Text>
            <Image
                source={{
                    uri: 'https://ih1.redbubble.net/image.3611159929.7215/st,small,507x507-pad,600x600,f8f8f8.jpg',
                }}
                style={styles.logo}
            />
            <Button 
                title="click"
                onPress={() => navigation.navigate("Scan")}
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
        justifyContent: 'center',
    },
    logo: {
        width: 150,
        height: 150,
    },
});
