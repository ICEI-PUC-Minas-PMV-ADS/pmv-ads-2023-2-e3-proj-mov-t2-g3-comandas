import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {
    Color,
    Border,
    FontFamily,
    FontSize,
    Padding,
} from '../../GlobalStyles';

function Frame({ style }) {
    return (
        <View style={[styles.frameParent, style]}>
            <View
                style={[
                    styles.comandasDegrade1Parent,
                    styles.frameContainerFlexBox,
                ]}
            >
                <Image
                    style={styles.comandasDegrade1}
                    contentFit="cover"
                    source={require('../assets/comandas-degrade-11.png')}
                />
                <Text style={styles.redeemPoints}>COMANDAS</Text>
            </View>
            <View style={styles.frameGroup}>
                <View
                    style={[
                        styles.frameContainer,
                        styles.frameContainerFlexBox,
                    ]}
                >
                    <View style={styles.frame}>
                        <View style={[styles.frameChild, styles.frameLayout]} />
                        <View style={[styles.frameItem, styles.frameLayout]} />
                        <View
                            style={[styles.frameInner, styles.frameInnerLayout]}
                        />
                        <View
                            style={[
                                styles.rectangleView,
                                styles.frameInnerLayout,
                            ]}
                        />
                    </View>
                    <Text style={[styles.dashboard, styles.clientesTypo]}>
                        Dashboard
                    </Text>
                </View>
                <View style={[styles.parent, styles.parentFlexBox]}>
                    <Image
                        style={styles.icon}
                        contentFit="cover"
                        source={require('../assets/16.png')}
                    />
                    <Text style={[styles.clientes, styles.clientesTypo]}>
                        Clientes
                    </Text>
                </View>
                <View style={[styles.group, styles.parentFlexBox]}>
                    <Image
                        style={styles.icon}
                        contentFit="cover"
                        source={require('../assets/44.png')}
                    />
                    <Text style={[styles.clientes, styles.clientesTypo]}>
                        Menu
                    </Text>
                </View>
                <View style={[styles.container, styles.parentFlexBox]}>
                    <Image
                        style={styles.icon}
                        contentFit="cover"
                        source={require('../assets/17.png')}
                    />
                    <Text style={[styles.clientes, styles.clientesTypo]}>
                        Reservas
                    </Text>
                </View>
                <View style={[styles.frameView, styles.parentFlexBox]}>
                    <Image
                        style={styles.icon}
                        contentFit="cover"
                        source={require('../assets/3.png')}
                    />
                    <Text style={[styles.clientes, styles.clientesTypo]}>
                        Notificações
                    </Text>
                </View>
                <View style={[styles.parent1, styles.parentFlexBox]}>
                    <Image
                        style={styles.icon}
                        contentFit="cover"
                        source={require('../assets/4.png')}
                    />
                    <Text style={[styles.clientes, styles.clientesTypo]}>
                        Configurações
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    frameContainerFlexBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    frameLayout: {
        height: 8,
        width: 8,
        backgroundColor: Color.neutral1,
        borderRadius: Border.br_11xs,
        top: 9,
        position: 'absolute',
    },
    frameInnerLayout: {
        top: 0,
        height: 8,
        width: 8,
        backgroundColor: Color.neutral1,
        borderRadius: Border.br_11xs,
        position: 'absolute',
    },
    clientesTypo: {
        fontFamily: FontFamily.poppinsMedium,
        fontWeight: '500',
        lineHeight: 20,
        fontSize: FontSize.size_sm,
        textAlign: 'left',
    },
    parentFlexBox: {
        marginTop: 41,
        height: 24,
        flexDirection: 'row',
        alignItems: 'center',
    },
    comandasDegrade1: {
        width: 32,
        overflow: 'hidden',
        height: 35,
    },
    redeemPoints: {
        fontSize: FontSize.title1_size,
        fontWeight: '600',
        fontFamily: FontFamily.title1,
        textAlign: 'left',
        color: Color.neutral1,
    },
    comandasDegrade1Parent: {
        width: 158,
        paddingTop: 35,
        height: 35,
    },
    frameChild: {
        left: 0,
    },
    frameItem: {
        left: 10,
    },
    frameInner: {
        left: 0,
    },
    rectangleView: {
        left: 10,
    },
    frame: {
        width: 18,
        height: 18,
        overflow: 'hidden',
    },
    dashboard: {
        marginLeft: 22,
        color: Color.neutral1,
        fontWeight: '500',
        lineHeight: 20,
        fontSize: FontSize.size_sm,
    },
    frameContainer: {
        width: 119,
        height: 20,
    },
    icon: {
        width: 24,
        height: 24,
        overflow: 'hidden',
    },
    clientes: {
        color: Color.colorSlategray,
        marginLeft: 16,
    },
    parent: {
        width: 98,
    },
    group: {
        width: 80,
    },
    container: {
        width: 105,
    },
    frameView: {
        width: 128,
    },
    parent1: {
        width: 145,
    },
    frameGroup: {
        height: 362,
        paddingHorizontal: Padding.p_9xl,
        paddingTop: Padding.p_mini,
        paddingBottom: Padding.p_11xs,
        width: 206,
    },
    frameParent: {
        height: 446,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 206,
    },
});

export default Frame;
