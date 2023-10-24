import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import LongLogo from '../../assets/longLogo.svg';

export default function Note({ myTextTitle, myTextSubtitle, imageLink }) {
    return (
        // eslint-disable-next-line no-alert, no-undef
        <TouchableOpacity style={styles.container} onPress={() => alert('OK')}>
            <Image
                style={styles.image}
                source={{
                    uri: imageLink,
                }}
            />
            <View style={styles.info}>
                <View style={styles.firstInfo}>
                    <LongLogo />
                    <Text style={styles.date}>06/04/2023</Text>
                </View>
                <View>
                    <Text style={styles.textTitle}>{myTextTitle}</Text>
                    <Text style={styles.textSubTitle}>{myTextSubtitle}</Text>
                </View>
            </View>
        </TouchableOpacity>
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
        opacity: 0.95,
    },
    info: {
        width: '65%',
        height: '100%',
        justifyContent: 'space-around',
    },
    firstInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    date: {
        fontSize: 12,
    },
    textTitle: {
        color: '#2e2b5e',
        fontSize: 20,
    },
    textSubTitle: {
        color: '#75759e',
        fontSize: 16,
    },
});
