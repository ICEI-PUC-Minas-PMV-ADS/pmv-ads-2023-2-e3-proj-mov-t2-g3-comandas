import * as React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import RecentOrdersContainer1 from './RecentOrdersContainer1';
import { Color, FontFamily, FontSize } from '../../GlobalStyles';

function PedidosContainer() {
    return (
        <View style={styles.frameParent}>
            <View
                style={[
                    styles.pedidosRecentesParent,
                    styles.frameWrapperFlexBox,
                ]}
            >
                <Text style={[styles.pedidosRecentes, styles.pedidosTypo]}>
                    Pedidos recentes
                </Text>
                <Text style={styles.verTypo}>Ver todos</Text>
            </View>
            <RecentOrdersContainer1
                dimensionCode={require('../assets/45.png')}
                dimensionCodeImageUrl={require('../assets/451.png')}
                dimensionCodeText={require('../assets/452.png')}
            />
            <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require('../assets/vector-12.png')}
            />
            <View style={[styles.frameWrapper, styles.frameWrapperFlexBox]}>
                <View style={styles.pedidosParaRetiradaParent}>
                    <Text
                        style={[styles.pedidosParaRetirada, styles.pedidosTypo]}
                    >
                        Pedidos para retirada
                    </Text>
                    <Text style={[styles.verTodos1, styles.verTypo]}>
                        Ver todos
                    </Text>
                </View>
            </View>
            <RecentOrdersContainer1
                dimensionCode={require('../assets/453.png')}
                dimensionCodeImageUrl={require('../assets/454.png')}
                dimensionCodeText={require('../assets/455.png')}
                propMarginTop={10}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    frameWrapperFlexBox: {
        justifyContent: 'space-between',
        height: 22,
    },
    pedidosTypo: {
        textAlign: 'left',
        color: Color.colorGray_300,
        fontFamily: FontFamily.workSansMedium,
        fontWeight: '500',
        fontSize: FontSize.title1_size,
        height: 22,
    },
    verTypo: {
        height: 13,
        width: 68,
        color: Color.colorLimegreen,
        fontFamily: FontFamily.interMedium,
        fontSize: FontSize.size_xs,
        textAlign: 'left',
        fontWeight: '500',
    },
    pedidosRecentes: {
        width: 174,
    },
    pedidosRecentesParent: {
        width: 349,
        flexDirection: 'row',
    },
    frameChild: {
        width: 316,
        height: 1,
        marginTop: 10,
    },
    pedidosParaRetirada: {
        width: 213,
    },
    verTodos1: {
        marginLeft: 34,
    },
    pedidosParaRetiradaParent: {
        width: 315,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        height: 22,
        alignItems: 'center',
    },
    frameWrapper: {
        marginTop: 10,
    },
    frameParent: {
        backgroundColor: Color.colorWhite,
        width: 357,
        height: 839,
        overflow: 'hidden',
        alignItems: 'center',
    },
});

export default PedidosContainer;
