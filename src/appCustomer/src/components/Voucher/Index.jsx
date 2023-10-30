import React from 'react';
import {
    StyleSheet,
    View,
    useWindowDimensions,
    Image,
    Text,
} from 'react-native';
import voucherBackground from '../../assets/vouchers/Voucher.png';

export default function Voucher({ voucherImage, product, voucherTitle }) {
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
                style={styles.overlayImage}
            />
            <Text style={styles.titleText}>{voucherTitle.toUpperCase()}</Text>
            <Text style={styles.productText}>{product.toUpperCase()}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        marginHorizontal: 10,
    },
    overlayImage: {
        width: '25%',
        aspectRatio: '1/1',
        position: 'absolute',
        bottom: '14%',
        right: '8%',
    },
    titleText: {
        position: 'absolute',
        bottom: '42%',
        left: '14%',
        fontSize: 15,
        color: '#FFF',
    },
    productText: {
        position: 'absolute',
        bottom: '26%',
        left: '14%',
        fontSize: 25,
        color: '#FFF',
    },
});
