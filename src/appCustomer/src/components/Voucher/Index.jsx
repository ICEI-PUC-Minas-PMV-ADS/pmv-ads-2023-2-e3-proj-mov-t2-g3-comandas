import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, useWindowDimensions, Text, Image, TouchableOpacity, FlatList, Animated } from 'react-native';
import voucherBackground from '../../assets/voucher.png'

export default function Voucher({ voucherData }) {
    const { width } = useWindowDimensions();

    return (
        <View style={styles.container}>
            <Image
                source={voucherBackground}
                style={[styles.image, { width: width - 20, height: width * 9 / 16, resizeMode: 'contain' }]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        margin: 10
    }
});
