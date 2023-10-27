import * as React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import ConfirmedReservationsContainer from './ConfirmedReservationsContainer';
import {
    Color,
    FontFamily,
    FontSize,
    Padding,
    Border,
} from '../../GlobalStyles';

function RequestsContainer1() {
    return (
        <View style={styles.frameParent}>
            <View style={styles.solicitaesPendentesParent}>
                <Text style={[styles.solicitaesPendentes, styles.verTodosTypo]}>
                    Solicitações Pendentes
                </Text>
                <Text style={[styles.verTodos, styles.verLayout]}>
                    Ver todos
                </Text>
            </View>
            <View style={styles.frameGroup}>
                <View style={styles.vectorParent}>
                    <Image
                        style={[styles.vectorIcon, styles.vectorIconLayout]}
                        contentFit="cover"
                        source={require('../assets/vector.png')}
                    />
                    <View
                        style={[styles.frameChild, styles.frameChildPosition]}
                    />
                    <Text style={[styles.mesaPara3, styles.mesaPara3Typo]}>
                        Mesa para 3 pessoas
                    </Text>
                </View>
                <View style={styles.vectorParent}>
                    <Image
                        style={[styles.vectorIcon1, styles.vectorIconLayout]}
                        contentFit="cover"
                        source={require('../assets/vector1.png')}
                    />
                    <View
                        style={[styles.frameChild, styles.frameChildPosition]}
                    />
                    <Text style={[styles.mesaPara3, styles.mesaPara3Typo]}>
                        Mesa para 3 pessoas
                    </Text>
                </View>
                <View style={styles.vectorParent}>
                    <View
                        style={[styles.frameChild, styles.frameChildPosition]}
                    />
                    <Image
                        style={[styles.vectorIcon2, styles.vectorIconLayout]}
                        contentFit="cover"
                        source={require('../assets/vector2.png')}
                    />
                    <Text style={[styles.mesaPara3, styles.mesaPara3Typo]}>
                        Mesa para 3 pessoas
                    </Text>
                </View>
            </View>
            <Image
                style={styles.frameChild1}
                contentFit="cover"
                source={require('../assets/vector-11.png')}
            />
            <View style={styles.reservasConfirmadasParent}>
                <Text
                    style={[
                        styles.reservasConfirmadas,
                        styles.frameChildPosition,
                    ]}
                >
                    Reservas confirmadas
                </Text>
                <Text style={[styles.verTodos1, styles.mesaPara3Typo]}>
                    Ver todos
                </Text>
            </View>
            <View style={styles.frameContainer}>
                <ConfirmedReservationsContainer
                    dimensions={require('../assets/vector3.png')}
                />
                <ConfirmedReservationsContainer
                    dimensions={require('../assets/vector4.png')}
                    propTop={72}
                    propTop1="41.16%"
                    propBottom="41.16%"
                />
                <ConfirmedReservationsContainer
                    dimensions={require('../assets/vector5.png')}
                    propTop={145}
                    propTop1="41.16%"
                    propBottom="41.16%"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    verTodosTypo: {
        textAlign: 'left',
        fontWeight: '500',
    },
    verLayout: {
        height: 13,
        width: 68,
        color: Color.colorLimegreen,
        fontFamily: FontFamily.interMedium,
        fontSize: FontSize.size_xs,
    },
    vectorIconLayout: {
        maxHeight: '100%',
        overflow: 'hidden',
        maxWidth: '100%',
        left: '98.36%',
        right: '-0.22%',
        width: '1.86%',
        height: '17.69%',
        position: 'absolute',
    },
    frameChildPosition: {
        left: 0,
        top: 0,
        position: 'absolute',
    },
    mesaPara3Typo: {
        position: 'absolute',
        textAlign: 'left',
        fontWeight: '500',
    },
    solicitaesPendentes: {
        width: 174,
        height: 22,
        color: Color.colorGray_300,
        fontFamily: FontFamily.workSansMedium,
        fontSize: FontSize.title1_size,
        fontWeight: '500',
    },
    verTodos: {
        textAlign: 'left',
        fontWeight: '500',
    },
    solicitaesPendentesParent: {
        height: 51,
        flexDirection: 'row',
        padding: Padding.p_3xs,
        justifyContent: 'space-between',
        width: 315,
    },
    vectorIcon: {
        top: '43.61%',
        bottom: '38.7%',
    },
    frameChild: {
        borderRadius: Border.br_xs,
        backgroundColor: Color.primary,
        width: 52,
        height: 57,
    },
    mesaPara3: {
        top: 16,
        left: 65,
        fontSize: FontSize.size_base,
        width: 166,
        height: 17,
        color: Color.colorGray_300,
        fontFamily: FontFamily.workSansMedium,
    },
    vectorParent: {
        height: 57,
        width: 311,
    },
    vectorIcon1: {
        top: '41.68%',
        bottom: '40.63%',
    },
    vectorIcon2: {
        top: '41.16%',
        bottom: '41.16%',
    },
    frameGroup: {
        height: 201,
        marginTop: 24,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    frameChild1: {
        width: 316,
        height: 1,
        marginTop: 24,
    },
    reservasConfirmadas: {
        width: 231,
        height: 22,
        textAlign: 'left',
        fontWeight: '500',
        color: Color.colorGray_300,
        fontFamily: FontFamily.workSansMedium,
        fontSize: FontSize.title1_size,
    },
    verTodos1: {
        top: 5,
        left: 247,
        height: 13,
        width: 68,
        color: Color.colorLimegreen,
        fontFamily: FontFamily.interMedium,
        fontSize: FontSize.size_xs,
    },
    reservasConfirmadasParent: {
        marginTop: 24,
        height: 22,
        width: 315,
    },
    frameContainer: {
        height: 202,
        width: 311,
        marginTop: 24,
    },
    frameParent: {
        backgroundColor: Color.colorWhite,
        height: 856,
        alignItems: 'center',
    },
});

export default RequestsContainer1;
