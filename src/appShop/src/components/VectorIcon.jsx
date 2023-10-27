import * as React from 'react';
import { StyleSheet, Image } from 'react-native';

function VectorIcon({ style }) {
    return (
        <Image
            style={[styles.vectorIcon, style]}
            contentFit="cover"
            source={require('../assets/vector10.png')}
        />
    );
}

const styles = StyleSheet.create({
    vectorIcon: {
        width: 11,
        height: 7,
    },
});

export default VectorIcon;
