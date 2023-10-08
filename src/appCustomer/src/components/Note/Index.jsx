import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import icone from '../../assets/icon_comandas.png'

export default function Note({ text_title, text_subtitle, image_link }) {
    return (
        <TouchableOpacity  style={styles.container} onPress={() => alert("OK")}>
            <Image 
                style={styles.image} 
                source={{ uri: image_link || require('../../assets/adaptive-icon.png')}} />
            <View style={styles.info}>
                <View style={styles.firstInfo}>
                    <Image style={styles.icon} source={icone}/>
                    <Text style={styles.date}>06/04/2023</Text>
                </View>
                <View>
                    <Text style={styles.textTitle}>{ text_title }</Text>
                    <Text style={styles.textSubTitle}>{ text_subtitle }</Text>
                </View>
            </View>
        </TouchableOpacity >
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        height: 150,
        padding: 10,
        overflow: 'hidden',
        justifyContent: 'space-around',
    },
    image: {
        width: '28%',
        height: '100%',
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15, 
        borderBottomRightRadius: 15,
        opacity: 0.95
    },
    info: {
        width: '65%',
        height: '100%',
        justifyContent: 'space-around'
    },
    firstInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent : 'space-between'
    },
    logo: {
        fontSize: 20,
        color: '#e93e44',
        paddingRight: 20
    },
    date: {
        fontSize: 12
    },
    textTitle: {
        color: '#2e2b5e',
        fontSize: 20
    },
    textSubTitle: {
        color: '#75759e',
        fontSize: 16
    }
});
