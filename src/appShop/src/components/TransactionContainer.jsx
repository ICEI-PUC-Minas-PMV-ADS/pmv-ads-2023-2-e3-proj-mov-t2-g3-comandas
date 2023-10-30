import * as React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import {
    Color,
    FontFamily,
    FontSize,
    Padding,
    Border,
} from '../../GlobalStyles';

function TransactionContainer() {
    return (
        <View style={[styles.frame, styles.frameFlexBox]}>
            <View style={styles.frameParent}>
                <View style={styles.frame1}>
                    <Text
                        style={[styles.novasTransaes, styles.activeValueTypo]}
                    >
                        Novas Transações
                    </Text>
                    <Image
                        style={styles.frameIcon}
                        contentFit="cover"
                        source={require('../assets/frame.png')}
                    />
                </View>
                <View style={styles.frame2}>
                    <View style={[styles.frameInner, styles.frameSpaceBlock1]}>
                        <View
                            style={[
                                styles.nomeDosClientesParent,
                                styles.parentLayout,
                            ]}
                        >
                            <Text
                                style={[
                                    styles.nomeDosClientes,
                                    styles.numOrderTypo,
                                ]}
                            >
                                Nome dos Clientes
                            </Text>
                            <Text
                                style={[styles.numOrder, styles.numOrderTypo]}
                            >
                                Num order
                            </Text>
                            <Text
                                style={[styles.numOrder, styles.numOrderTypo]}
                            >
                                Montante
                            </Text>
                            <Text
                                style={[styles.numOrder, styles.numOrderTypo]}
                            >
                                Status
                            </Text>
                        </View>
                    </View>
                    <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
                        <View style={[styles.frameWrapper, styles.frameBg]}>
                            <View style={styles.ellipseParent}>
                                <Image
                                    style={styles.frameChild}
                                    contentFit="cover"
                                    source={require('../assets/ellipse-240.png')}
                                />
                                <Text style={styles.bobMarley}>Bob marley</Text>
                                <Text style={[styles.text, styles.textTypo1]}>
                                    2311-103
                                </Text>
                                <Text style={[styles.text, styles.textTypo1]}>
                                    $430
                                </Text>
                                <View
                                    style={[
                                        styles.pendenteWrapper,
                                        styles.pendenteLayout,
                                    ]}
                                >
                                    <Text
                                        style={[
                                            styles.pendente,
                                            styles.numOrderTypo,
                                        ]}
                                    >
                                        Pendente
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.frameContainer, styles.frameBg]}>
                            <View style={styles.ellipseParent}>
                                <Image
                                    style={styles.frameChild}
                                    contentFit="cover"
                                    source={require('../assets/ellipse-240.png')}
                                />
                                <Text
                                    style={[
                                        styles.postmalone,
                                        styles.postmaloneTypo,
                                    ]}
                                >
                                    PostMalone
                                </Text>
                                <Text style={[styles.text2, styles.textTypo1]}>
                                    2311-104
                                </Text>
                                <Text style={[styles.text2, styles.textTypo1]}>
                                    $3431
                                </Text>
                                <View style={styles.finalizadoWrapper}>
                                    <Text
                                        style={[
                                            styles.pendente,
                                            styles.numOrderTypo,
                                        ]}
                                    >
                                        Finalizado
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.frameContainer, styles.frameBg]}>
                            <View style={styles.ellipseParent}>
                                <Image
                                    style={styles.frameChild}
                                    contentFit="cover"
                                    source={require('../assets/ellipse-240.png')}
                                />
                                <Text
                                    style={[
                                        styles.oliviaRodrigo,
                                        styles.postmaloneTypo,
                                    ]}
                                >
                                    Olivia Rodrigo
                                </Text>
                                <Text style={[styles.text4, styles.textTypo1]}>
                                    2311-105
                                </Text>
                                <Text style={[styles.text4, styles.textTypo1]}>
                                    $292
                                </Text>
                                <View
                                    style={[
                                        styles.pendenteContainer,
                                        styles.pendenteLayout,
                                    ]}
                                >
                                    <Text
                                        style={[
                                            styles.pendente,
                                            styles.numOrderTypo,
                                        ]}
                                    >
                                        Pendente
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={[styles.frame3, styles.frameFlexBox]}>
                <View style={[styles.groupParent, styles.frameBg]}>
                    <Image
                        style={styles.groupIcon}
                        contentFit="cover"
                        source={require('../assets/group-48096172.png')}
                    />
                    <Text style={[styles.activeValue, styles.activeValueTypo]}>
                        Active Value
                    </Text>
                    <Image
                        style={[styles.vectorIcon, styles.frameChildLayout]}
                        contentFit="cover"
                        source={require('../assets/vector-23.png')}
                    />
                    <Image
                        style={[styles.frameChild1, styles.frameChildLayout]}
                        contentFit="cover"
                        source={require('../assets/vector-24.png')}
                    />
                    <Image
                        style={[styles.frameChild2, styles.frameChildLayout]}
                        contentFit="cover"
                        source={require('../assets/vector-25.png')}
                    />
                    <Text style={[styles.text6, styles.textLayout]}>1,431</Text>
                    <Text style={[styles.text7, styles.textLayout]}>257</Text>
                    <Text style={[styles.text8, styles.textLayout]}>521</Text>
                    <View
                        style={[
                            styles.frameParent1,
                            styles.frameParentPosition,
                        ]}
                    >
                        <View style={styles.frame4}>
                            <View style={styles.ellipseParent1}>
                                <Image
                                    style={styles.frameChild3}
                                    contentFit="cover"
                                    source={require('../assets/ellipse-140.png')}
                                />
                                <Text
                                    style={[
                                        styles.totalOrder,
                                        styles.textLayout,
                                    ]}
                                >
                                    Total Order
                                </Text>
                            </View>
                        </View>
                        <View
                            style={[
                                styles.frameParent2,
                                styles.frameParentLayout1,
                            ]}
                        >
                            <View style={styles.ellipseParent1}>
                                <Image
                                    style={styles.frameChild3}
                                    contentFit="cover"
                                    source={require('../assets/ellipse-1401.png')}
                                />
                                <Text
                                    style={[
                                        styles.totalOrder,
                                        styles.textLayout,
                                    ]}
                                >
                                    Total Profit
                                </Text>
                            </View>
                            <View style={styles.ellipseParent3}>
                                <Image
                                    style={styles.frameChild3}
                                    contentFit="cover"
                                    source={require('../assets/ellipse-1402.png')}
                                />
                                <Text
                                    style={[
                                        styles.totalOrder,
                                        styles.textLayout,
                                    ]}
                                >
                                    Total Pre-Orders
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={[styles.groupParent, styles.frameBg]}>
                    <Image
                        style={styles.groupIcon}
                        contentFit="cover"
                        source={require('../assets/group-48096172.png')}
                    />
                    <Text style={[styles.activeValue, styles.activeValueTypo]}>
                        Cliente status
                    </Text>
                    <Image
                        style={[styles.vectorIcon, styles.frameChildLayout]}
                        contentFit="cover"
                        source={require('../assets/vector-23.png')}
                    />
                    <Image
                        style={[styles.frameChild1, styles.frameChildLayout]}
                        contentFit="cover"
                        source={require('../assets/vector-24.png')}
                    />
                    <Image
                        style={[styles.frameChild2, styles.frameChildLayout]}
                        contentFit="cover"
                        source={require('../assets/vector-25.png')}
                    />
                    <Text style={[styles.text6, styles.textLayout]}>1,431</Text>
                    <Text style={[styles.text7, styles.textLayout]}>257</Text>
                    <Text style={[styles.text8, styles.textLayout]}>521</Text>
                    <View
                        style={[styles.frameParent3, styles.frameParentLayout]}
                    >
                        <View style={styles.frame5}>
                            <View style={styles.ellipseParent1}>
                                <Image
                                    style={styles.frameChild3}
                                    contentFit="cover"
                                    source={require('../assets/ellipse-140.png')}
                                />
                                <Text
                                    style={[
                                        styles.totalOrder,
                                        styles.textLayout,
                                    ]}
                                >
                                    Satisfeito
                                </Text>
                            </View>
                        </View>
                        <View
                            style={[
                                styles.frameParent4,
                                styles.frameParentLayout,
                            ]}
                        >
                            <View style={styles.ellipseParent1}>
                                <Image
                                    style={styles.frameChild3}
                                    contentFit="cover"
                                    source={require('../assets/ellipse-1403.png')}
                                />
                                <Text
                                    style={[
                                        styles.totalOrder,
                                        styles.textLayout,
                                    ]}
                                >
                                    Muito Satisfeito
                                </Text>
                            </View>
                            <View style={styles.ellipseParent6}>
                                <Image
                                    style={styles.frameChild3}
                                    contentFit="cover"
                                    source={require('../assets/ellipse-1404.png')}
                                />
                                <Text
                                    style={[
                                        styles.totalOrder,
                                        styles.textLayout,
                                    ]}
                                >
                                    Insatisfeito
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    frameFlexBox: {
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        alignItems: 'center',
        flexDirection: 'row',
        overflow: 'hidden',
        height: 388,
    },
    activeValueTypo: {
        textAlign: 'left',
        color: Color.colorGray_200,
        fontFamily: FontFamily.poppinsSemiBold,
        fontWeight: '600',
        fontSize: FontSize.title1_size,
    },
    frameSpaceBlock1: {
        paddingVertical: 0,
        paddingHorizontal: Padding.p_5xl,
        height: 72,
        justifyContent: 'center',
    },
    parentLayout: {
        height: 25,
        flexDirection: 'row',
    },
    numOrderTypo: {
        color: Color.colorWhite,
        fontFamily: FontFamily.poppinsMedium,
        fontWeight: '500',
        textAlign: 'left',
    },
    frameSpaceBlock: {
        marginTop: 16,
        width: 550,
    },
    frameBg: {
        backgroundColor: Color.colorWhite,
        borderRadius: Border.br_base,
    },
    textTypo1: {
        color: Color.colorGray_100,
        fontFamily: FontFamily.poppinsMedium,
        fontWeight: '500',
    },
    pendenteLayout: {
        paddingHorizontal: Padding.p_3xl,
        alignItems: 'flex-end',
        backgroundColor: Color.primary,
        height: 32,
        width: 103,
        paddingVertical: 0,
        justifyContent: 'center',
        borderRadius: Border.br_base,
    },
    postmaloneTypo: {
        width: 118,
        fontFamily: FontFamily.poppinsMedium,
        fontWeight: '500',
        textTransform: 'capitalize',
        fontSize: FontSize.size_base,
        textAlign: 'left',
        color: Color.colorGray_200,
    },
    frameChildLayout: {
        height: 21,
        width: 13,
        position: 'absolute',
    },
    textLayout: {
        lineHeight: 24,
        textAlign: 'left',
    },
    frameParentPosition: {
        height: 56,
        left: 24,
        top: 308,
        position: 'absolute',
        justifyContent: 'center',
    },
    frameParentLayout1: {
        width: 237,
        alignItems: 'center',
    },
    frameParentLayout: {
        width: 226,
        alignItems: 'center',
    },
    novasTransaes: {
        width: 205,
        height: 28,
    },
    frameIcon: {
        width: 4,
        height: 18,
        marginLeft: 332,
        overflow: 'hidden',
    },
    frame1: {
        width: 541,
        height: 28,
        alignItems: 'center',
        flexDirection: 'row',
        overflow: 'hidden',
    },
    nomeDosClientes: {
        textTransform: 'capitalize',
        color: Color.colorWhite,
        fontSize: FontSize.size_base,
    },
    numOrder: {
        marginLeft: 26,
        textTransform: 'capitalize',
        color: Color.colorWhite,
        fontSize: FontSize.size_base,
    },
    nomeDosClientesParent: {
        width: 450,
        alignItems: 'center',
    },
    frameInner: {
        backgroundColor: Color.neutral1,
        borderRadius: Border.br_base,
        paddingVertical: 0,
        paddingHorizontal: Padding.p_5xl,
        height: 72,
        width: 550,
    },
    frameChild: {
        width: 40,
        height: 40,
    },
    bobMarley: {
        marginLeft: 35,
        fontFamily: FontFamily.poppinsMedium,
        fontWeight: '500',
        textTransform: 'capitalize',
        fontSize: FontSize.size_base,
        textAlign: 'left',
        color: Color.colorGray_200,
    },
    text: {
        marginLeft: 35,
        fontSize: FontSize.size_base,
        color: Color.colorGray_100,
        textAlign: 'left',
    },
    pendente: {
        fontSize: FontSize.size_xs,
    },
    pendenteWrapper: {
        marginLeft: 35,
    },
    ellipseParent: {
        width: 480,
        height: 40,
        alignItems: 'center',
        flexDirection: 'row',
    },
    frameWrapper: {
        paddingVertical: 0,
        paddingHorizontal: Padding.p_5xl,
        height: 72,
        justifyContent: 'center',
        width: 550,
    },
    postmalone: {
        marginLeft: 27,
        height: 24,
    },
    text2: {
        marginLeft: 27,
        fontSize: FontSize.size_base,
        color: Color.colorGray_100,
        textAlign: 'left',
    },
    finalizadoWrapper: {
        backgroundColor: Color.semantic5,
        marginLeft: 27,
        height: 32,
        width: 103,
        justifyContent: 'center',
        borderRadius: Border.br_base,
        alignItems: 'center',
    },
    frameContainer: {
        marginTop: 16,
        width: 550,
        paddingVertical: 0,
        paddingHorizontal: Padding.p_5xl,
        height: 72,
        justifyContent: 'center',
    },
    oliviaRodrigo: {
        height: 22,
        marginLeft: 28,
    },
    text4: {
        marginLeft: 28,
        fontSize: FontSize.size_base,
        color: Color.colorGray_100,
        textAlign: 'left',
    },
    pendenteContainer: {
        marginLeft: 28,
    },
    frameGroup: {
        height: 248,
        alignItems: 'center',
    },
    frame2: {
        height: 336,
        marginTop: 24,
        width: 550,
        alignItems: 'center',
        overflow: 'hidden',
    },
    frameParent: {
        justifyContent: 'flex-end',
        width: 550,
        alignItems: 'center',
    },
    groupIcon: {
        top: 92,
        left: 56,
        width: 161,
        height: 161,
        position: 'absolute',
    },
    activeValue: {
        top: 24,
        left: 73,
        position: 'absolute',
    },
    vectorIcon: {
        top: 108,
        left: 41,
    },
    frameChild1: {
        top: 208,
        left: 220,
    },
    frameChild2: {
        top: 239,
        left: 66,
    },
    text6: {
        top: 78,
        left: 21,
        color: Color.primary,
        fontSize: FontSize.size_lg,
        lineHeight: 24,
        position: 'absolute',
        fontFamily: FontFamily.poppinsSemiBold,
        fontWeight: '600',
    },
    text7: {
        top: 237,
        left: 213,
        color: Color.semantic5,
        fontSize: FontSize.size_lg,
        lineHeight: 24,
        position: 'absolute',
        fontFamily: FontFamily.poppinsSemiBold,
        fontWeight: '600',
    },
    text8: {
        top: 268,
        color: Color.neutral1,
        fontSize: FontSize.size_lg,
        lineHeight: 24,
        position: 'absolute',
        fontFamily: FontFamily.poppinsSemiBold,
        fontWeight: '600',
        left: 41,
    },
    frameChild3: {
        width: 8,
        height: 8,
    },
    totalOrder: {
        fontSize: FontSize.size_sm,
        marginLeft: 8,
        color: Color.colorGray_100,
        fontFamily: FontFamily.poppinsMedium,
        fontWeight: '500',
    },
    ellipseParent1: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    frame4: {
        width: 105,
        justifyContent: 'center',
        overflow: 'hidden',
    },
    ellipseParent3: {
        marginLeft: 12,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    frameParent2: {
        marginTop: 8,
        height: 24,
        flexDirection: 'row',
    },
    frameParent1: {
        width: 237,
        alignItems: 'center',
    },
    groupParent: {
        width: 274,
        height: 388,
        backgroundColor: Color.colorWhite,
    },
    frame5: {
        width: 94,
        justifyContent: 'center',
        overflow: 'hidden',
    },
    ellipseParent6: {
        marginLeft: 7,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    frameParent4: {
        marginTop: 7,
        height: 25,
        flexDirection: 'row',
    },
    frameParent3: {
        height: 56,
        left: 24,
        top: 308,
        position: 'absolute',
        justifyContent: 'center',
    },
    frame3: {
        width: 571,
    },
    frame: {
        width: 1154,
    },
});

export default TransactionContainer;
