import * as React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import CardForm from './CardForm';
import { Color, FontFamily, FontSize, Border } from '../../GlobalStyles';

function MenuReservaConteiner() {
    return (
        <View style={styles.frameParent}>
            <CardForm tituloButao="Livre" />
            <CardForm
                tituloButao="Livre"
                propBackgroundColor="#f3484f"
                propWidth="25%"
                propLeft="37.12%"
            />
            <CardForm
                tituloButao="Livre"
                propBackgroundColor="#f3484f"
                propWidth="25%"
                propLeft="37.12%"
            />
            <CardForm
                tituloButao="Livre"
                propBackgroundColor="#f3484f"
                propWidth="25%"
                propLeft="37.12%"
            />
            <View style={styles.mesa1Parent}>
                <Text style={[styles.mesa1, styles.mesaTypo]}>Mesa 1</Text>
                <View style={[styles.frameChild, styles.frameLayout]} />
                <View style={[styles.image8, styles.imageTransform]} />
                <Text style={[styles.reservaEmBreve, styles.reservaTypo]}>
                    Reserva em breve
                </Text>
            </View>
            <View style={styles.mesa1Parent}>
                <Text style={[styles.mesa1, styles.mesaTypo]}>Mesa 1</Text>
                <View style={[styles.frameChild, styles.frameLayout]} />
                <View style={[styles.image81, styles.imageTransform]} />
                <Text style={[styles.reservaEmBreve1, styles.reservaTypo]}>
                    Reserva em breve
                </Text>
            </View>
            <CardForm
                tituloButao="Livre"
                propBackgroundColor="#f3484f"
                propWidth="25%"
                propLeft="37.12%"
            />
            <CardForm
                tituloButao="Livre"
                propBackgroundColor="#f3484f"
                propWidth="25%"
                propLeft="37.12%"
            />
            <CardForm
                tituloButao="Livre"
                propBackgroundColor="#f3484f"
                propWidth="25%"
                propLeft="37.12%"
            />
            <CardForm
                tituloButao="Ocupado"
                propBackgroundColor="#c8c8d3"
                propWidth="41.67%"
                propLeft="28.79%"
            />
            <CardForm
                tituloButao="Ocupado"
                propBackgroundColor="#c8c8d3"
                propWidth="41.67%"
                propLeft="28.79%"
            />
            <CardForm
                tituloButao="Text"
                propBackgroundColor="#c8c8d3"
                propWidth="41.67%"
                propLeft="28.79%"
            />
            <CardForm
                tituloButao="Ocupado"
                propBackgroundColor="#c8c8d3"
                propWidth="41.67%"
                propLeft="28.79%"
            />
            <CardForm
                tituloButao="Ocupado"
                propBackgroundColor="#c8c8d3"
                propWidth="41.67%"
                propLeft="28.79%"
            />
            <View style={styles.mesa1Parent}>
                <View style={[styles.frame, styles.framePosition]}>
                    <Text style={[styles.mesa12, styles.mesaTypo]}>Mesa 1</Text>
                    <View style={[styles.image82, styles.image82Position]} />
                </View>
                <View style={[styles.frame1, styles.framePosition]}>
                    <View style={[styles.frameInner, styles.image82Position]} />
                    <Text style={[styles.livre, styles.reservaTypo]}>
                        Livre
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mesaTypo: {
        textAlign: 'left',
        color: Color.neutral1,
        fontFamily: FontFamily.interSemiBold,
        fontWeight: '600',
        fontSize: FontSize.size_base,
        position: 'absolute',
    },
    frameLayout: {
        height: 40,
        left: 16,
        top: 128,
        width: 105,
    },
    imageTransform: {
        transform: [
            {
                rotate: '-45deg',
            },
        ],
        width: 40,
    },
    reservaTypo: {
        color: Color.colorWhite,
        fontSize: FontSize.size_xs,
        textAlign: 'left',
        fontFamily: FontFamily.interSemiBold,
        fontWeight: '600',
        position: 'absolute',
    },
    framePosition: {
        overflow: 'hidden',
        position: 'absolute',
    },
    image82Position: {
        left: 0,
        height: 40,
        backgroundColor: Color.primary,
        position: 'absolute',
        borderRadius: Border.br_3xs,
    },
    mesa1: {
        height: '10.23%',
        width: '40.91%',
        top: '47.73%',
        left: '31.06%',
    },
    frameChild: {
        backgroundColor: Color.primary,
        height: 40,
        left: 16,
        top: 128,
        position: 'absolute',
        borderRadius: Border.br_3xs,
    },
    image8: {
        backgroundColor: Color.accent,
        top: 48,
        transform: [
            {
                rotate: '-45deg',
            },
        ],
        width: 40,
        left: 37,
        height: 40,
        position: 'absolute',
        borderRadius: Border.br_3xs,
    },
    reservaEmBreve: {
        width: '49.24%',
        top: '76.14%',
        left: '27.27%',
        height: '7.95%',
        fontSize: FontSize.size_xs,
    },
    mesa1Parent: {
        backgroundColor: Color.colorWhite,
        width: 132,
        height: 176,
        borderRadius: Border.br_3xs,
    },
    image81: {
        backgroundColor: Color.accent,
        top: 48,
        transform: [
            {
                rotate: '-45deg',
            },
        ],
        width: 40,
        left: 37,
        height: 40,
        position: 'absolute',
        borderRadius: Border.br_3xs,
    },
    reservaEmBreve1: {
        width: '47.73%',
        top: '75%',
        left: '28.03%',
        height: '7.95%',
        fontSize: FontSize.size_xs,
    },
    mesa12: {
        height: '21.87%',
        width: '92.62%',
        top: '78.13%',
        left: '7.38%',
    },
    image82: {
        top: 28,
        transform: [
            {
                rotate: '-45deg',
            },
        ],
        width: 40,
    },
    frame: {
        top: 20,
        width: 58,
        height: 82,
        left: 37,
        overflow: 'hidden',
    },
    frameInner: {
        top: 0,
        width: 105,
        left: 0,
    },
    livre: {
        height: '35%',
        width: '31.43%',
        top: '30%',
        left: '31.43%',
    },
    frame1: {
        height: 40,
        left: 16,
        top: 128,
        width: 105,
        overflow: 'hidden',
    },
    frameParent: {
        width: 768,
        height: 558,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
});

export default MenuReservaConteiner;
