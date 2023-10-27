import React from 'react';
import { StyleSheet, View, useWindowDimensions, Image } from 'react-native';
import voucherBackground from '../../assets/vouchers/default.png';

export default function Voucher({ voucherImage }) {
    const { width } = useWindowDimensions();

    return (
        <View style={styles.container}>
            <Image
                source={voucherBackground}
                style={[
                    styles.image,
                    {
                        width: width - 20,
                        height: (width * 8) / 16,
                        resizeMode: 'contain',
                    },
                ]}
            />
            <Image
                source={{ uri: voucherImage }} // Sua imagem por cima
                style={[styles.overlayImage, { bottom: '20%', left: '14%' }]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        marginHorizontal: 10,
    },
    overlayImage: {
        width: 90,
        height: 90,
        position: 'absolute',
    },
});
