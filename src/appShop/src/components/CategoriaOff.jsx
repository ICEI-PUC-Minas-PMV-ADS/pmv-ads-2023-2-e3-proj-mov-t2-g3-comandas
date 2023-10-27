import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Border, Color, FontSize, FontFamily } from '../../GlobalStyles';

function CategoriaOff() {
    return (
        <View style={[styles.hotDogWrapper, styles.hotFlexBox]}>
            <View style={[styles.hotDog, styles.hotFlexBox]}>
                <View style={styles.image}>
                    <View style={styles.pngwing1} />
                </View>
                <Text style={styles.hotDog1}>Hot Dog</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    hotFlexBox: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    pngwing1: {
        width: 39,
        height: 24,
    },
    image: {
        borderRadius: Border.br_3xs,
        backgroundColor: Color.primary,
        width: 40,
        justifyContent: 'center',
        height: 40,
    },
    hotDog1: {
        fontSize: FontSize.size_sm,
        fontWeight: '500',
        fontFamily: FontFamily.interMedium,
        color: Color.neutral1,
        textAlign: 'left',
        width: 55,
        height: 16,
        marginLeft: 16,
    },
    hotDog: {
        width: 111,
        height: 40,
    },
    hotDogWrapper: {
        backgroundColor: Color.colorWhite,
        width: 152,
        height: 72,
        justifyContent: 'space-between',
    },
});

export default CategoriaOff;
