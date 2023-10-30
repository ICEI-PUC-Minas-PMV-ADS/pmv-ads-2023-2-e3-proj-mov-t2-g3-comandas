import * as React from 'react';
import { StyleSheet, Image } from 'react-native';

function ImageIcon({ style }) {
    return (
        <Image
            style={[styles.imageIcon, style]}
            contentFit="center"
            source={require('../assets/image3.png')}
        />
    );
}

const styles = StyleSheet.create({
    imageIcon: {
        width: 32,
        height: 32,
    },
});

export default ImageIcon;
