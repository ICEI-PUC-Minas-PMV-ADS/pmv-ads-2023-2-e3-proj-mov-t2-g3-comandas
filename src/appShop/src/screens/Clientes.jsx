import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import BarraLateral from '../components/BarraLateral';
import {
    FontSize,
    FontFamily,
    Color,
    Border,
    Padding,
} from '../../GlobalStyles';

function Clientes() {
    return (
        <View style={styles.clientes}>
            <BarraLateral
                dimensions={require('../assets/comandas-degrade-11.png')}
                frameViewWidth={206}
                frameViewHeight="unset"
                frameViewOverflow="unset"
            />
            <View style={styles.frameParent}>
                <View style={styles.frameGroup}>
                    <View style={styles.frameContainer}>
                        <View style={styles.groupParent}>
                            <Image
                                style={styles.frameChild}
                                contentFit="cover"
                                source={require('../assets/group-48096245.png')}
                            />
                            <Text style={styles.searchAnythingMenu}>
                                Search anything menu
                            </Text>
                        </View>
                        <Image
                            style={styles.frameItem}
                            contentFit="cover"
                            source={require('../assets/frame-48096288.png')}
                        />
                    </View>
                    <View style={styles.imageParent}>
                        <Image
                            style={styles.imageIcon}
                            contentFit="cover"
                            source={require('../assets/image1.png')}
                        />
                        <Image
                            style={styles.vectorIcon}
                            contentFit="cover"
                            source={require('../assets/vector6.png')}
                        />
                        <Text style={styles.wardahSeptianiPutri}>UserRest</Text>
                    </View>
                </View>
                <View style={styles.frameView}>
                    <View style={styles.frameParent1}>
                        <Image
                            style={styles.frameIcon}
                            contentFit="cover"
                            source={require('../assets/frame1.png')}
                        />
                        <Text style={styles.all}>All</Text>
                    </View>
                    <View style={styles.image9Parent}>
                        <Image
                            style={styles.image9Icon}
                            contentFit="cover"
                            source={require('../assets/image-9.png')}
                        />
                        <Text style={styles.servida}>Servida</Text>
                    </View>
                    <View style={styles.image7Parent}>
                        <View style={styles.image7} />
                        <Text style={styles.aguardandoPedido}>
                            Aguardando pedido
                        </Text>
                    </View>
                    <View style={styles.frameParent2}>
                        <View style={styles.frame}>
                            <View style={styles.image9} />
                        </View>
                        <Text style={styles.fechamento}>Fechamento</Text>
                    </View>
                </View>
                <View style={styles.frameParent3}>
                    <View style={styles.mesa1Parent}>
                        <Text style={styles.mesa1}>Mesa 1</Text>
                        <View style={styles.image8} />
                        <View style={styles.verMesaWrapper}>
                            <Text style={styles.verMesa}>Ver mesa</Text>
                        </View>
                    </View>
                    <View style={styles.mesa1Parent}>
                        <Text style={styles.mesa1}>Mesa 1</Text>
                        <View style={styles.image81} />
                        <View style={styles.verMesaWrapper}>
                            <Text style={styles.verMesa}>Ver mesa</Text>
                        </View>
                    </View>
                    <View style={styles.mesa1Parent}>
                        <Text style={styles.mesa1}>Mesa 1</Text>
                        <View style={styles.image82} />
                        <View style={styles.verMesaWrapper}>
                            <Text style={styles.verMesa}>Ver mesa</Text>
                        </View>
                    </View>
                    <View style={styles.mesa1Parent}>
                        <Text style={styles.mesa1}>Mesa 1</Text>
                        <View style={styles.image83} />
                        <View style={styles.verMesaWrapper}>
                            <Text style={styles.verMesa}>Ver mesa</Text>
                        </View>
                    </View>
                    <View style={styles.mesa1Parent}>
                        <Text style={styles.mesa1}>Mesa 1</Text>
                        <View style={styles.image84} />
                        <View style={styles.verMesaWrapper}>
                            <Text style={styles.verMesa}>Ver mesa</Text>
                        </View>
                    </View>
                    <View style={styles.mesa1Parent3}>
                        <Text style={styles.mesa1}>Mesa 1</Text>
                        <View style={styles.image85} />
                        <View style={styles.verMesaWrapper}>
                            <Text style={styles.verMesa}>Ver mesa</Text>
                        </View>
                    </View>
                    <View style={styles.mesa1Parent}>
                        <Text style={styles.mesa1}>Mesa 1</Text>
                        <View style={styles.image86} />
                        <View style={styles.verMesaWrapper}>
                            <Text style={styles.verMesa}>Ver mesa</Text>
                        </View>
                    </View>
                    <View style={styles.mesa1Parent}>
                        <Text style={styles.mesa1}>Mesa 1</Text>
                        <View style={styles.image87} />
                        <View style={styles.verMesaWrapper}>
                            <Text style={styles.verMesa}>Ver mesa</Text>
                        </View>
                    </View>
                    <View style={styles.mesa1Parent}>
                        <Text style={styles.mesa1}>Mesa 1</Text>
                        <View style={styles.image88} />
                        <View style={styles.verMesaWrapper}>
                            <Text style={styles.verMesa}>Ver mesa</Text>
                        </View>
                    </View>
                    <View style={styles.mesa1Parent}>
                        <Text style={styles.mesa1}>Mesa 1</Text>
                        <View style={styles.image89} />
                        <View style={styles.verMesaWrapper}>
                            <Text style={styles.verMesa}>Ver mesa</Text>
                        </View>
                    </View>
                    <View style={styles.mesa1Parent}>
                        <Text style={styles.mesa1}>Mesa 1</Text>
                        <View style={styles.image810} />
                        <View style={styles.verMesaWrapper}>
                            <Text style={styles.verMesa}>Ver mesa</Text>
                        </View>
                    </View>
                    <View style={styles.mesa1Parent}>
                        <Text style={styles.mesa1}>Mesa 1</Text>
                        <View style={styles.image811} />
                        <View style={styles.verMesaWrapper}>
                            <Text style={styles.verMesa}>Ver mesa</Text>
                        </View>
                    </View>
                    <View style={styles.mesa1Parent}>
                        <Text style={styles.mesa1}>Mesa 1</Text>
                        <View style={styles.image812} />
                        <View style={styles.verMesaWrapper}>
                            <Text style={styles.verMesa}>Ver mesa</Text>
                        </View>
                    </View>
                    <View style={styles.mesa1Parent}>
                        <Text style={styles.mesa1}>Mesa 1</Text>
                        <View style={styles.image813} />
                        <View style={styles.verMesaWrapper}>
                            <Text style={styles.verMesa}>Ver mesa</Text>
                        </View>
                    </View>
                    <View style={styles.mesa1Parent}>
                        <Text style={styles.mesa1}>Mesa 1</Text>
                        <View style={styles.image814} />
                        <View style={styles.verMesaWrapper}>
                            <Text style={styles.verMesa}>Ver mesa</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.frameParent4}>
                <View style={styles.frameParent5}>
                    <View style={styles.pedidosRecentesParent}>
                        <Text style={styles.pedidosRecentes}>
                            Pedidos recentes
                        </Text>
                        <Text style={styles.verTodos}>Ver todos</Text>
                    </View>
                    <View style={styles.frameParent6}>
                        <View style={styles.rectangleParent}>
                            <View style={styles.frameInner} />
                            <Image
                                style={styles.icon}
                                contentFit="cover"
                                source={require('../assets/456.png')}
                            />
                            <View style={styles.noodlesWithPotatoParent}>
                                <Text style={styles.noodlesWithPotato}>
                                    Noodles with potato
                                </Text>
                                <Text style={styles.items}>1 items</Text>
                            </View>
                        </View>
                        <View style={styles.rectangleParent}>
                            <View style={styles.frameInner} />
                            <Image
                                style={styles.icon}
                                contentFit="cover"
                                source={require('../assets/457.png')}
                            />
                            <View style={styles.eggGordonBlueParent}>
                                <Text style={styles.eggGordonBlue}>
                                    Egg gordon blue
                                </Text>
                                <Text style={styles.items1}>4 items</Text>
                            </View>
                        </View>
                        <View style={styles.rectangleParent}>
                            <View style={styles.frameInner} />
                            <Image
                                style={styles.icon}
                                contentFit="cover"
                                source={require('../assets/458.png')}
                            />
                            <View style={styles.pizzaOrangeHotParent}>
                                <Text style={styles.pizzaOrangeHot}>
                                    Pizza orange hot
                                </Text>
                                <Text style={styles.items2}>2 items</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <Image
                    style={styles.frameChild2}
                    contentFit="cover"
                    source={require('../assets/vector-111.png')}
                />
                <View style={styles.frameParent7}>
                    <View style={styles.frameWrapper}>
                        <View style={styles.pedidosRecentesParent}>
                            <Text style={styles.pedidosParaRetirada}>
                                Pedidos para retirada
                            </Text>
                            <Text style={styles.verTodos1}>Ver todos</Text>
                        </View>
                    </View>
                    <View style={styles.frameParent8}>
                        <View style={styles.rectangleParent}>
                            <View style={styles.frameInner} />
                            <Image
                                style={styles.icon}
                                contentFit="cover"
                                source={require('../assets/459.png')}
                            />
                            <View style={styles.noodlesWithPotatoParent}>
                                <Text style={styles.noodlesWithPotato}>
                                    Noodles with potato
                                </Text>
                                <Text style={styles.items}>1 items</Text>
                            </View>
                        </View>
                        <View style={styles.rectangleParent}>
                            <View style={styles.frameInner} />
                            <Image
                                style={styles.icon}
                                contentFit="cover"
                                source={require('../assets/4510.png')}
                            />
                            <View style={styles.eggGordonBlueParent}>
                                <Text style={styles.eggGordonBlue}>
                                    Egg gordon blue
                                </Text>
                                <Text style={styles.items1}>4 items</Text>
                            </View>
                        </View>
                        <View style={styles.rectangleParent}>
                            <View style={styles.frameInner} />
                            <Image
                                style={styles.icon}
                                contentFit="cover"
                                source={require('../assets/4511.png')}
                            />
                            <View style={styles.pizzaOrangeHotParent}>
                                <Text style={styles.pizzaOrangeHot}>
                                    Pizza orange hot
                                </Text>
                                <Text style={styles.items2}>2 items</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    frameChild: {
        position: 'relative',
        width: 18,
        height: 18,
    },
    searchAnythingMenu: {
        position: 'relative',
        fontSize: FontSize.size_sm,
        fontFamily: FontFamily.interRegular,
        color: Color.colorDarkgray_200,
        textAlign: 'left',
        width: 148,
        height: 16,
        marginLeft: 19,
    },
    groupParent: {
        borderRadius: Border.br_3xs,
        backgroundColor: Color.colorWhite,
        width: 520,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 19,
        paddingVertical: Padding.p_base,
    },
    frameItem: {
        position: 'relative',
        borderRadius: Border.br_3xs,
        width: 50,
        height: 50,
    },
    frameContainer: {
        width: 583,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: Padding.p_11xs,
    },
    imageIcon: {
        position: 'absolute',
        height: '66.67%',
        width: '15.46%',
        top: '16.67%',
        right: '76.81%',
        bottom: '16.67%',
        left: '7.73%',
        maxWidth: '100%',
        overflow: 'hidden',
        maxHeight: '100%',
    },
    vectorIcon: {
        position: 'absolute',
        height: '13.54%',
        width: '5.07%',
        top: '45.21%',
        right: '9.08%',
        bottom: '41.25%',
        left: '85.85%',
        maxWidth: '100%',
        overflow: 'hidden',
        maxHeight: '100%',
    },
    wardahSeptianiPutri: {
        position: 'absolute',
        top: 14,
        left: 64,
        fontSize: FontSize.size_sm,
        fontWeight: '500',
        fontFamily: FontFamily.poppinsMedium,
        color: Color.colorGray_200,
        textAlign: 'left',
    },
    imageParent: {
        position: 'relative',
        borderRadius: Border.br_base,
        backgroundColor: Color.colorWhite,
        shadowColor: 'rgba(204, 204, 204, 0.25)',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowRadius: 94,
        elevation: 94,
        shadowOpacity: 1,
        width: 207,
        height: 48,
    },
    frameGroup: {
        width: 824,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    frameIcon: {
        position: 'relative',
        width: 40,
        height: 40,
        overflow: 'hidden',
    },
    all: {
        position: 'relative',
        fontSize: FontSize.size_sm,
        fontWeight: '500',
        fontFamily: FontFamily.interMedium,
        color: Color.colorWhite,
        textAlign: 'left',
        width: 37,
        height: 16,
        marginLeft: 16,
    },
    frameParent1: {
        borderRadius: Border.br_3xs,
        backgroundColor: Color.primary,
        width: 152,
        height: 72,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: Padding.p_base,
    },
    image9Icon: {
        position: 'relative',
        borderRadius: Border.br_3xs,
        width: 48,
        height: 48,
    },
    servida: {
        position: 'relative',
        fontSize: FontSize.size_sm,
        fontWeight: '500',
        fontFamily: FontFamily.interMedium,
        color: Color.neutral1,
        textAlign: 'left',
        width: 75,
        height: 16,
    },
    image9Parent: {
        borderRadius: Border.br_3xs,
        backgroundColor: Color.colorWhite,
        width: 155,
        height: 72,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: Padding.p_5xs,
        paddingVertical: 0,
    },
    image7: {
        position: 'relative',
        borderRadius: Border.br_3xs,
        backgroundColor: Color.primary,
        width: 40,
        height: 40,
    },
    aguardandoPedido: {
        fontSize: FontSize.size_sm,
        fontWeight: '500',
        fontFamily: FontFamily.interMedium,
        color: Color.neutral1,
        textAlign: 'left',
        width: 21,
        height: 16,
        marginTop: 5,
        marginLeft: 10,
    },
    image7Parent: {
        borderRadius: Border.br_3xs,
        backgroundColor: Color.colorWhite,
        width: 166,
        height: 72,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingHorizontal: Padding.p_base,
        paddingTop: Padding.p_base,
    },
    image9: {
        position: 'relative',
        borderRadius: Border.br_3xs,
        backgroundColor: Color.semantic5,
        width: 40,
        height: 40,
        transform: [
            {
                rotate: '-45deg',
            },
        ],
    },
    frame: {
        width: 48,
        height: 55,
        overflow: 'hidden',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    fechamento: {
        position: 'relative',
        fontSize: FontSize.size_sm,
        fontWeight: '500',
        fontFamily: FontFamily.interMedium,
        color: Color.neutral1,
        textAlign: 'left',
        width: 88,
        height: 28,
    },
    frameParent2: {
        borderRadius: Border.br_3xs,
        backgroundColor: Color.colorWhite,
        width: 162,
        height: 72,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: Padding.p_11xs,
        paddingVertical: 0,
    },
    frameView: {
        width: 683,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    mesa1: {
        position: 'absolute',
        height: '10.23%',
        width: '40.91%',
        top: '47.73%',
        left: '31.06%',
        fontSize: FontSize.size_base,
        fontWeight: '600',
        fontFamily: FontFamily.interSemiBold,
        color: Color.neutral1,
        textAlign: 'left',
        zIndex: 0,
    },
    image8: {
        position: 'absolute',
        top: 48,
        left: 37,
        borderRadius: Border.br_3xs,
        backgroundColor: Color.primary,
        width: 40,
        height: 40,
        transform: [
            {
                rotate: '-45deg',
            },
        ],
        zIndex: 1,
    },
    verMesa: {
        position: 'relative',
        fontSize: FontSize.size_xs,
        fontWeight: '600',
        fontFamily: FontFamily.interSemiBold,
        color: Color.colorWhite,
        textAlign: 'left',
        width: 65,
        height: 14,
    },
    verMesaWrapper: {
        position: 'absolute',
        top: 128,
        left: 16,
        borderRadius: Border.br_3xs,
        backgroundColor: Color.primary,
        overflow: 'hidden',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: Padding.p_xl,
        paddingVertical: Padding.p_xs,
        zIndex: 2,
    },
    mesa1Parent: {
        borderRadius: Border.br_3xs,
        backgroundColor: Color.colorWhite,
        width: 132,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    image81: {
        position: 'absolute',
        top: 48,
        left: 37,
        borderRadius: Border.br_3xs,
        backgroundColor: Color.primary,
        width: 40,
        height: 40,
        transform: [
            {
                rotate: '-45deg',
            },
        ],
        zIndex: 1,
    },
    image82: {
        position: 'absolute',
        top: 48,
        left: 37,
        borderRadius: Border.br_3xs,
        backgroundColor: Color.primary,
        width: 40,
        height: 40,
        transform: [
            {
                rotate: '-45deg',
            },
        ],
        zIndex: 1,
    },
    image83: {
        position: 'absolute',
        top: 48,
        left: 37,
        borderRadius: Border.br_3xs,
        backgroundColor: Color.primary,
        width: 40,
        height: 40,
        transform: [
            {
                rotate: '-45deg',
            },
        ],
        zIndex: 1,
    },
    image84: {
        position: 'absolute',
        top: 48,
        left: 37,
        borderRadius: Border.br_3xs,
        backgroundColor: Color.primary,
        width: 40,
        height: 40,
        transform: [
            {
                rotate: '-45deg',
            },
        ],
        zIndex: 1,
    },
    image85: {
        position: 'absolute',
        top: 48,
        left: 37,
        borderRadius: Border.br_3xs,
        backgroundColor: Color.primary,
        width: 40,
        height: 40,
        transform: [
            {
                rotate: '-45deg',
            },
        ],
        zIndex: 1,
    },
    mesa1Parent3: {
        borderRadius: Border.br_3xs,
        backgroundColor: Color.colorWhite,
        width: 132,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: Padding.p_xs,
        paddingVertical: 0,
        position: 'relative',
    },
    image86: {
        position: 'absolute',
        top: 48,
        left: 37,
        borderRadius: Border.br_3xs,
        backgroundColor: Color.primary,
        width: 40,
        height: 40,
        transform: [
            {
                rotate: '-45deg',
            },
        ],
        zIndex: 1,
    },
    image87: {
        position: 'absolute',
        top: 48,
        left: 37,
        borderRadius: Border.br_3xs,
        backgroundColor: Color.primary,
        width: 40,
        height: 40,
        transform: [
            {
                rotate: '-45deg',
            },
        ],
        zIndex: 1,
    },
    image88: {
        position: 'absolute',
        top: 48,
        left: 37,
        borderRadius: Border.br_3xs,
        backgroundColor: Color.primary,
        width: 40,
        height: 40,
        transform: [
            {
                rotate: '-45deg',
            },
        ],
        zIndex: 1,
    },
    image89: {
        position: 'absolute',
        top: 48,
        left: 37,
        borderRadius: Border.br_3xs,
        backgroundColor: Color.primary,
        width: 40,
        height: 40,
        transform: [
            {
                rotate: '-45deg',
            },
        ],
        zIndex: 1,
    },
    image810: {
        position: 'absolute',
        top: 48,
        left: 37,
        borderRadius: Border.br_3xs,
        backgroundColor: Color.primary,
        width: 40,
        height: 40,
        transform: [
            {
                rotate: '-45deg',
            },
        ],
        zIndex: 1,
    },
    image811: {
        position: 'absolute',
        top: 48,
        left: 37,
        borderRadius: Border.br_3xs,
        backgroundColor: Color.primary,
        width: 40,
        height: 40,
        transform: [
            {
                rotate: '-45deg',
            },
        ],
        zIndex: 1,
    },
    image812: {
        position: 'absolute',
        top: 48,
        left: 37,
        borderRadius: Border.br_3xs,
        backgroundColor: Color.primary,
        width: 40,
        height: 40,
        transform: [
            {
                rotate: '-45deg',
            },
        ],
        zIndex: 1,
    },
    image813: {
        position: 'absolute',
        top: 48,
        left: 37,
        borderRadius: Border.br_3xs,
        backgroundColor: Color.primary,
        width: 40,
        height: 40,
        transform: [
            {
                rotate: '-45deg',
            },
        ],
        zIndex: 1,
    },
    image814: {
        position: 'absolute',
        top: 48,
        left: 37,
        borderRadius: Border.br_3xs,
        backgroundColor: Color.primary,
        width: 40,
        height: 40,
        transform: [
            {
                rotate: '-45deg',
            },
        ],
        zIndex: 1,
    },
    frameParent3: {
        width: 768,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    frameParent: {
        height: 774,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 0,
        paddingVertical: Padding.p_5xl,
    },
    pedidosRecentes: {
        position: 'relative',
        fontSize: FontSize.title1_size,
        fontWeight: '500',
        fontFamily: FontFamily.workSansMedium,
        color: Color.colorGray_300,
        textAlign: 'left',
        width: 174,
        height: 22,
    },
    verTodos: {
        position: 'relative',
        fontSize: FontSize.size_xs,
        fontWeight: '500',
        fontFamily: FontFamily.interMedium,
        color: Color.colorLimegreen,
        textAlign: 'left',
        width: 68,
        height: 13,
        marginLeft: 73,
    },
    pedidosRecentesParent: {
        width: 315,
        height: 22,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    frameInner: {
        position: 'absolute',
        top: 0,
        left: 0,
        borderRadius: Border.br_xs,
        backgroundColor: Color.primary,
        width: 52,
        height: 56,
    },
    icon: {
        position: 'absolute',
        top: 21,
        left: 302,
        width: 14,
        height: 15,
        overflow: 'hidden',
    },
    noodlesWithPotato: {
        position: 'relative',
        fontSize: FontSize.size_base,
        fontWeight: '500',
        fontFamily: FontFamily.workSansMedium,
        color: Color.colorGray_300,
        textAlign: 'left',
        width: 166,
        height: 18,
    },
    items: {
        position: 'relative',
        fontSize: FontSize.size_sm,
        fontFamily: FontFamily.workSansRegular,
        color: Color.primary,
        textAlign: 'left',
        width: 51,
        height: 15,
        marginTop: 11,
    },
    noodlesWithPotatoParent: {
        position: 'absolute',
        top: 6,
        left: 65,
        width: 166,
        height: 44,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    rectangleParent: {
        position: 'relative',
        width: 316,
        height: 56,
    },
    eggGordonBlue: {
        position: 'relative',
        fontSize: FontSize.size_base,
        fontWeight: '500',
        fontFamily: FontFamily.workSansMedium,
        color: Color.colorGray_300,
        textAlign: 'left',
        width: 130,
        height: 18,
    },
    items1: {
        position: 'relative',
        fontSize: FontSize.size_sm,
        fontFamily: FontFamily.workSansRegular,
        color: Color.primary,
        textAlign: 'left',
        width: 53,
        height: 15,
        marginTop: 11,
    },
    eggGordonBlueParent: {
        position: 'absolute',
        top: 6,
        left: 65,
        width: 130,
        height: 44,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    pizzaOrangeHot: {
        position: 'relative',
        fontSize: FontSize.size_base,
        fontWeight: '500',
        fontFamily: FontFamily.workSansMedium,
        color: Color.colorGray_300,
        textAlign: 'left',
        width: 137,
        height: 18,
    },
    items2: {
        position: 'relative',
        fontSize: FontSize.size_sm,
        fontFamily: FontFamily.workSansRegular,
        color: Color.primary,
        textAlign: 'left',
        width: 55,
        height: 15,
        marginTop: 11,
    },
    pizzaOrangeHotParent: {
        position: 'absolute',
        top: 6,
        left: 65,
        width: 137,
        height: 44,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    frameParent6: {
        height: 198,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    frameParent5: {
        position: 'absolute',
        top: 37,
        left: 21,
        height: 250,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 0,
    },
    frameChild2: {
        position: 'absolute',
        top: 315,
        left: 21,
        width: 316,
        height: 1,
        zIndex: 1,
    },
    pedidosParaRetirada: {
        position: 'relative',
        fontSize: FontSize.title1_size,
        fontWeight: '500',
        fontFamily: FontFamily.workSansMedium,
        color: Color.colorGray_300,
        textAlign: 'left',
        width: 213,
        height: 22,
    },
    verTodos1: {
        position: 'relative',
        fontSize: FontSize.size_xs,
        fontWeight: '500',
        fontFamily: FontFamily.interMedium,
        color: Color.colorLimegreen,
        textAlign: 'left',
        width: 68,
        height: 13,
        marginLeft: 34,
    },
    frameWrapper: {
        height: 22,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    frameParent8: {
        height: 198,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    frameParent7: {
        width: 316,
        height: 250,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        zIndex: 2,
    },
    frameParent4: {
        backgroundColor: Color.colorWhite,
        width: 357,
        height: 900,
        overflow: 'hidden',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
    },
    clientes: {
        position: 'relative',
        backgroundColor: Color.colorWhitesmoke_200,
        flex: 1,
        width: '100%',
        height: 900,
        overflow: 'hidden',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});

export default Clientes;
