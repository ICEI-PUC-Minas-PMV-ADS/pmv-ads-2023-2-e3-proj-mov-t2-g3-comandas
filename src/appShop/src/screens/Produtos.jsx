import * as React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import ContainerForm from '../components/ContainerForm';
import BarraLateral from '../components/BarraLateral';
import {
    Color,
    Padding,
    FontFamily,
    FontSize,
    Border,
} from '../../GlobalStyles';

function Produtos() {
    return (
        <View style={styles.produtos}>
            <View style={styles.frame}>
                <View style={styles.frameParent}>
                    <ContainerForm
                        imageDimensions={require('../assets/72.png')}
                        imageDimensionsText={require('../assets/frame-48096288.png')}
                        imageCode={require('../assets/image2.png')}
                        imageCodeText={require('../assets/472.png')}
                    />
                    <View style={styles.frameGroup}>
                        <View
                            style={[styles.frameWrapper, styles.wrapperLayout1]}
                        >
                            <View style={styles.frameContainer}>
                                <View style={styles.frameView}>
                                    <View>
                                        <Image
                                            style={[
                                                styles.frameChild,
                                                styles.frameLayout3,
                                            ]}
                                            contentFit="cover"
                                            source={require('../assets/frame-48096365.png')}
                                        />
                                        <View
                                            style={[
                                                styles.vuesaxboldgalleryWrapper,
                                                styles.wrapperLayout1,
                                            ]}
                                        >
                                            <View
                                                style={styles.galleryIconLayout}
                                            >
                                                <View
                                                    style={styles.ellipseParent}
                                                >
                                                    <Image
                                                        style={[
                                                            styles.frameItem,
                                                            styles.frameLayout3,
                                                        ]}
                                                        contentFit="cover"
                                                        source={require('../assets/ellipse-1.png')}
                                                    />
                                                    <Image
                                                        style={[
                                                            styles.galleryIcon,
                                                            styles.galleryIconLayout,
                                                        ]}
                                                        contentFit="cover"
                                                        source={require('../assets/gallery.png')}
                                                    />
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    <Text
                                        style={[
                                            styles.nomeDoProduto,
                                            styles.id137FlexBox,
                                        ]}
                                    >
                                        Nome do produto
                                    </Text>
                                    <Text
                                        style={[
                                            styles.id137,
                                            styles.id137FlexBox,
                                        ]}
                                    >
                                        ID 137
                                    </Text>
                                    <View style={styles.frameParent2}>
                                        <View
                                            style={[
                                                styles.frameParent3,
                                                styles.frameParentSpaceBlock,
                                            ]}
                                        >
                                            <Image
                                                style={styles.frameLayout2}
                                                contentFit="cover"
                                                source={require('../assets/frame-48096369.png')}
                                            />
                                            <Text
                                                style={[
                                                    styles.generalInformation,
                                                    styles.apagarItemTypo,
                                                ]}
                                            >
                                                General Information
                                            </Text>
                                        </View>
                                        <View style={styles.frameParentLayout2}>
                                            <Image
                                                style={[
                                                    styles.frameIcon,
                                                    styles.frameLayout2,
                                                ]}
                                                contentFit="cover"
                                                source={require('../assets/frame2.png')}
                                            />
                                            <Image
                                                style={styles.frameChild1}
                                                contentFit="cover"
                                                source={require('../assets/frame-48096380.png')}
                                            />
                                            <Text
                                                style={[
                                                    styles.retirada,
                                                    styles.textTypo,
                                                ]}
                                            >
                                                Retirada
                                            </Text>
                                        </View>
                                        <View
                                            style={[
                                                styles.frameParent5,
                                                styles.frameParentLayout2,
                                            ]}
                                        >
                                            <View style={styles.frame1}>
                                                <Image
                                                    style={styles.frameLayout2}
                                                    contentFit="cover"
                                                    source={require('../assets/frame-48096370.png')}
                                                />
                                                <Text
                                                    style={[
                                                        styles.custoDeProduo,
                                                        styles.r2000Typo,
                                                    ]}
                                                >
                                                    Custo de produção
                                                </Text>
                                            </View>
                                            <Text
                                                style={[
                                                    styles.r2000,
                                                    styles.r2000Typo,
                                                ]}
                                            >
                                                R$20,00
                                            </Text>
                                        </View>
                                        <View
                                            style={[
                                                styles.frameParent6,
                                                styles.frameParent6Bg,
                                            ]}
                                        >
                                            <Image
                                                style={styles.frameLayout2}
                                                contentFit="cover"
                                                source={require('../assets/frame-48096371.png')}
                                            />
                                            <Text
                                                style={[
                                                    styles.apagarItem,
                                                    styles.apagarItemTypo,
                                                ]}
                                            >
                                                Apagar item
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.frameParent7}>
                            <View style={styles.frameParent8}>
                                <View
                                    style={[
                                        styles.cancelWrapper,
                                        styles.wrapperLayout,
                                    ]}
                                >
                                    <Text
                                        style={[styles.cancel, styles.preoClr]}
                                    >
                                        Cancel
                                    </Text>
                                </View>
                                <View
                                    style={[
                                        styles.updateWrapper,
                                        styles.wrapperLayout,
                                    ]}
                                >
                                    <Text
                                        style={[styles.update, styles.textTypo]}
                                    >{`Update `}</Text>
                                </View>
                            </View>
                            <View style={styles.frameChild4} />
                            <View
                                style={[
                                    styles.imagesParent,
                                    styles.imagesPosition,
                                ]}
                            >
                                <Text style={styles.images}>Images</Text>
                                <View
                                    style={[
                                        styles.frameParent9,
                                        styles.frameParentLayout1,
                                    ]}
                                >
                                    <View style={styles.frameParentLayout}>
                                        <View style={styles.productTitleParent}>
                                            <Text
                                                style={[
                                                    styles.productTitle,
                                                    styles.preoClr,
                                                ]}
                                            >
                                                Product Title
                                            </Text>
                                            <View
                                                style={[
                                                    styles.frame2,
                                                    styles.frameSpaceBlock,
                                                ]}
                                            >
                                                <Text
                                                    style={[
                                                        styles.pizzaDeMussarela,
                                                        styles.textTypo,
                                                    ]}
                                                >
                                                    Pizza de mussarela
                                                </Text>
                                            </View>
                                        </View>
                                        <View
                                            style={styles.idDeRefernciaParent}
                                        >
                                            <Text
                                                style={[
                                                    styles.idDeReferncia,
                                                    styles.preoClr,
                                                ]}
                                            >
                                                ID de referncia
                                            </Text>
                                            <View
                                                style={[
                                                    styles.frame3,
                                                    styles.frameSpaceBlock,
                                                ]}
                                            >
                                                <Text
                                                    style={[
                                                        styles.text,
                                                        styles.textTypo,
                                                    ]}
                                                >
                                                    137
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.frameLayout1}>
                                        <View
                                            style={[
                                                styles.frameParent11,
                                                styles.frameParentLayout,
                                            ]}
                                        >
                                            <View
                                                style={[
                                                    styles.frame4,
                                                    styles.frameLayout1,
                                                ]}
                                            >
                                                <Text
                                                    style={[
                                                        styles.category,
                                                        styles.preoClr,
                                                    ]}
                                                >
                                                    Category
                                                </Text>
                                                <View
                                                    style={[
                                                        styles.frame5,
                                                        styles.frameLayout,
                                                    ]}
                                                >
                                                    <Text
                                                        style={[
                                                            styles.pizza,
                                                            styles.preoTypo,
                                                        ]}
                                                    >
                                                        Pizza
                                                    </Text>
                                                    <Image
                                                        style={
                                                            styles.frameIcon1
                                                        }
                                                        contentFit="cover"
                                                        source={require('../assets/frame3.png')}
                                                    />
                                                </View>
                                            </View>
                                            <View
                                                style={[
                                                    styles.frame6,
                                                    styles.frameLayout1,
                                                ]}
                                            >
                                                <Text
                                                    style={[
                                                        styles.preo,
                                                        styles.preoTypo,
                                                    ]}
                                                >
                                                    Preço
                                                </Text>
                                                <View
                                                    style={[
                                                        styles.frame7,
                                                        styles.frameLayout,
                                                    ]}
                                                >
                                                    <Text
                                                        style={[
                                                            styles.r5890,
                                                            styles.textTypo,
                                                        ]}
                                                    >
                                                        R$58,90
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View
                                style={[
                                    styles.imagesGroup,
                                    styles.imagesPosition,
                                ]}
                            >
                                <Text style={styles.images}>Images</Text>
                                <View
                                    style={[
                                        styles.frameWrapper2,
                                        styles.frameParentLayout1,
                                    ]}
                                >
                                    <View style={styles.frameWrapper3}>
                                        <View
                                            style={[
                                                styles.frameParent12,
                                                styles.frameParentLayout1,
                                            ]}
                                        >
                                            <Image
                                                style={[
                                                    styles.frameChild5,
                                                    styles.frameChildLayout,
                                                ]}
                                                contentFit="cover"
                                                source={require('../assets/frame-48096347.png')}
                                            />
                                            <Image
                                                style={[
                                                    styles.frameChild6,
                                                    styles.frameChildLayout,
                                                ]}
                                                contentFit="cover"
                                                source={require('../assets/frame-48096346.png')}
                                            />
                                            <Image
                                                style={[
                                                    styles.frameChild6,
                                                    styles.frameChildLayout,
                                                ]}
                                                contentFit="cover"
                                                source={require('../assets/frame-48096345.png')}
                                            />
                                            <Image
                                                style={[
                                                    styles.frameChild5,
                                                    styles.frameChildLayout,
                                                ]}
                                                contentFit="cover"
                                                source={require('../assets/frame-48096344.png')}
                                            />
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View
                                style={[
                                    styles.vuesaxlineararrowLeft,
                                    styles.vectorIconLayout,
                                ]}
                            >
                                <View
                                    style={[
                                        styles.frame8,
                                        styles.framePosition,
                                    ]}
                                >
                                    <View style={styles.arrowLeft}>
                                        <View style={styles.arrowLeft}>
                                            <View style={styles.frame9}>
                                                <Image
                                                    style={[
                                                        styles.vectorIcon,
                                                        styles.vectorIconLayout,
                                                    ]}
                                                    contentFit="cover"
                                                    source={require('../assets/vector7.png')}
                                                />
                                                <Text
                                                    style={[
                                                        styles.informaesGerais,
                                                        styles.id137FlexBox,
                                                    ]}
                                                >
                                                    Informações gerais
                                                </Text>
                                            </View>
                                            <Image
                                                style={styles.vectorIcon1}
                                                contentFit="cover"
                                                source={require('../assets/vector8.png')}
                                            />
                                        </View>
                                        <Image
                                            style={styles.vectorIcon2}
                                            contentFit="cover"
                                            source={require('../assets/vector9.png')}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={[styles.frame10, styles.framePosition]}>
                <BarraLateral
                    dimensions={require('../assets/comandas-degrade-1.png')}
                    frameViewWidth="unset"
                    frameViewHeight={900}
                    frameViewOverflow="hidden"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapperLayout1: {
        width: 440,
        justifyContent: 'flex-end',
    },
    frameLayout3: {
        height: 140,
        zIndex: 0,
    },
    galleryIconLayout: {
        height: 24,
        width: 24,
    },
    id137FlexBox: {
        textAlign: 'left',
        color: Color.colorBlack,
    },
    frameParentSpaceBlock: {
        paddingBottom: Padding.p_4xs,
        paddingHorizontal: Padding.p_base,
        flexDirection: 'row',
        alignItems: 'center',
    },
    apagarItemTypo: {
        marginLeft: 24,
        height: 20,
        fontFamily: FontFamily.poppinsRegular,
        fontSize: FontSize.size_base,
        textAlign: 'left',
    },
    frameLayout2: {
        height: 40,
        width: 40,
    },
    textTypo: {
        fontFamily: FontFamily.poppinsRegular,
        fontSize: FontSize.size_base,
        textAlign: 'left',
    },
    frameParentLayout2: {
        height: 57,
        backgroundColor: Color.colorWhitesmoke_100,
        borderRadius: Border.br_8xs,
        width: 440,
    },
    r2000Typo: {
        height: 20,
        fontFamily: FontFamily.poppinsRegular,
        fontSize: FontSize.size_base,
        textAlign: 'left',
        color: Color.colorBlack,
    },
    frameParent6Bg: {
        backgroundColor: Color.colorWhitesmoke_100,
        alignItems: 'center',
    },
    wrapperLayout: {
        paddingVertical: 12,
        height: 46,
        borderRadius: Border.br_3xs,
    },
    preoClr: {
        color: Color.colorDarkgray_100,
        height: 21,
    },
    imagesPosition: {
        left: 27,
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        position: 'absolute',
    },
    frameParentLayout1: {
        width: 607,
        flexDirection: 'row',
    },
    frameSpaceBlock: {
        marginTop: 13,
        borderRadius: Border.br_5xs,
        backgroundColor: Color.colorWhitesmoke_100,
        alignSelf: 'stretch',
        overflow: 'hidden',
    },
    frameParentLayout: {
        width: 290,
        alignItems: 'center',
    },
    frameLayout1: {
        height: 80,
        width: 290,
    },
    frameLayout: {
        paddingHorizontal: Padding.p_mid,
        marginTop: 13,
        borderRadius: Border.br_5xs,
        width: 290,
        height: 46,
        backgroundColor: Color.colorWhitesmoke_100,
        overflow: 'hidden',
    },
    preoTypo: {
        width: 58,
        fontFamily: FontFamily.poppinsRegular,
        fontSize: FontSize.size_base,
        textAlign: 'left',
    },
    frameChildLayout: {
        borderRadius: Border.br_5xs,
        height: 142,
    },
    vectorIconLayout: {
        width: 21,
        height: 22,
    },
    framePosition: {
        left: 0,
        position: 'absolute',
    },
    frameChild: {
        zIndex: 0,
        borderRadius: Border.br_8xs,
        height: 140,
        left: 0,
        top: 0,
        width: 440,
        position: 'absolute',
    },
    frameItem: {
        width: 140,
        zIndex: 0,
    },
    galleryIcon: {
        right: 58,
        bottom: 58,
        zIndex: 1,
        position: 'absolute',
    },
    ellipseParent: {
        top: -67,
        left: -54,
        width: 140,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
    },
    vuesaxboldgalleryWrapper: {
        height: 210,
        paddingHorizontal: 204,
        paddingVertical: 49,
        marginTop: 10,
        zIndex: 1,
        justifyContent: 'flex-end',
    },
    nomeDoProduto: {
        width: 178,
        height: 25,
        fontFamily: FontFamily.poppinsMedium,
        fontWeight: '500',
        fontSize: FontSize.title1_size,
        textAlign: 'left',
    },
    id137: {
        fontSize: FontSize.size_sm,
        fontWeight: '300',
        fontFamily: FontFamily.poppinsLight,
        width: 37,
        height: 17,
        opacity: 0.4,
    },
    generalInformation: {
        color: Color.primary,
        width: 161,
    },
    frameParent3: {
        backgroundColor: 'rgba(243, 72, 79, 0.05)',
        paddingTop: Padding.p_6xs,
        height: 56,
        paddingBottom: Padding.p_4xs,
        borderRadius: Border.br_8xs,
        width: 440,
    },
    frameIcon: {
        top: 7,
        left: 16,
        position: 'absolute',
        overflow: 'hidden',
    },
    frameChild1: {
        top: 12,
        left: 367,
        width: 54,
        height: 36,
        position: 'absolute',
    },
    retirada: {
        top: 15,
        left: 76,
        color: Color.colorBlack,
        position: 'absolute',
    },
    custoDeProduo: {
        width: 156,
    },
    frame1: {
        width: 220,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        overflow: 'hidden',
    },
    r2000: {
        width: 77,
        marginLeft: 54,
    },
    frameParent5: {
        paddingTop: Padding.p_5xs,
        paddingBottom: Padding.p_4xs,
        paddingHorizontal: Padding.p_base,
        flexDirection: 'row',
        alignItems: 'center',
    },
    apagarItem: {
        width: 101,
        color: Color.colorBlack,
    },
    frameParent6: {
        paddingTop: Padding.p_4xs,
        paddingBottom: Padding.p_6xs,
        paddingHorizontal: Padding.p_base,
        backgroundColor: Color.colorWhitesmoke_100,
        height: 56,
        borderRadius: Border.br_8xs,
        width: 440,
        flexDirection: 'row',
    },
    frameParent2: {
        height: 277,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    frameView: {
        height: 589,
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        alignItems: 'center',
    },
    frameContainer: {
        alignSelf: 'stretch',
        alignItems: 'center',
    },
    frameWrapper: {
        borderRadius: 20,
        justifyContent: 'flex-end',
        backgroundColor: Color.colorWhite,
        alignItems: 'center',
    },
    cancel: {
        width: 62,
        height: 21,
        fontFamily: FontFamily.poppinsRegular,
        fontSize: FontSize.size_base,
        textAlign: 'left',
    },
    cancelWrapper: {
        width: 83,
        backgroundColor: Color.colorWhitesmoke_100,
        alignItems: 'center',
        paddingHorizontal: 0,
    },
    update: {
        color: Color.colorWhite,
        width: 65,
        height: 21,
    },
    updateWrapper: {
        backgroundColor: Color.primary,
        width: 136,
        paddingHorizontal: 34,
        marginLeft: 17,
    },
    frameParent8: {
        top: 687,
        left: 398,
        width: 236,
        height: 46,
        zIndex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
    },
    frameChild4: {
        top: 369,
        height: 142,
        left: 27,
        zIndex: 1,
        alignSelf: 'stretch',
        position: 'absolute',
    },
    images: {
        width: 68,
        height: 22,
        fontSize: FontSize.size_base,
        textAlign: 'left',
        color: Color.colorBlack,
        fontFamily: FontFamily.poppinsMedium,
        fontWeight: '500',
    },
    productTitle: {
        width: 103,
        height: 21,
        fontFamily: FontFamily.poppinsRegular,
        fontSize: FontSize.size_base,
        textAlign: 'left',
    },
    pizzaDeMussarela: {
        color: Color.colorBlack,
        alignSelf: 'stretch',
    },
    frame2: {
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    productTitleParent: {
        alignSelf: 'stretch',
    },
    idDeReferncia: {
        width: 119,
        height: 21,
        fontFamily: FontFamily.poppinsRegular,
        fontSize: FontSize.size_base,
        textAlign: 'left',
    },
    text: {
        width: 35,
        height: 21,
        color: Color.colorBlack,
    },
    frame3: {
        paddingHorizontal: Padding.p_lg,
        paddingVertical: Padding.p_xs,
        height: 46,
    },
    idDeRefernciaParent: {
        marginTop: 18,
        alignSelf: 'stretch',
    },
    category: {
        width: 80,
        height: 21,
        fontFamily: FontFamily.poppinsRegular,
        fontSize: FontSize.size_base,
        textAlign: 'left',
    },
    pizza: {
        height: 22,
        color: Color.colorBlack,
    },
    frameIcon1: {
        width: 20,
        marginLeft: 177,
        height: 22,
        overflow: 'hidden',
    },
    frame5: {
        paddingVertical: 0,
        flexDirection: 'row',
        alignItems: 'center',
    },
    frame4: {
        overflow: 'hidden',
    },
    preo: {
        height: 21,
        color: Color.colorDarkgray_100,
    },
    r5890: {
        width: 70,
        height: 21,
        color: Color.colorBlack,
    },
    frame7: {
        paddingVertical: Padding.p_xs,
    },
    frame6: {
        marginTop: 18,
        overflow: 'hidden',
    },
    frameParent11: {
        height: 178,
        left: 0,
        position: 'absolute',
        top: 0,
        width: 290,
    },
    frameParent9: {
        height: 212,
        justifyContent: 'space-between',
    },
    imagesParent: {
        top: 89,
        height: 240,
        zIndex: 2,
    },
    frameChild5: {
        width: 138,
    },
    frameChild6: {
        width: 137,
    },
    frameParent12: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    frameWrapper3: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
    },
    frameWrapper2: {
        flexWrap: 'wrap',
    },
    imagesGroup: {
        top: 329,
        height: 182,
        zIndex: 3,
    },
    vectorIcon: {
        opacity: 0,
    },
    informaesGerais: {
        width: 201,
        marginLeft: 21,
        height: 27,
        fontFamily: FontFamily.poppinsMedium,
        fontWeight: '500',
        fontSize: FontSize.title1_size,
        textAlign: 'left',
    },
    frame9: {
        height: 27,
        width: 243,
        flexDirection: 'row',
        overflow: 'hidden',
    },
    vectorIcon1: {
        width: 6,
        height: 13,
        marginLeft: -239,
    },
    arrowLeft: {
        height: 27,
        width: 243,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
    },
    vectorIcon2: {
        width: 16,
        height: 2,
        marginLeft: -239,
    },
    frame8: {
        top: -3,
        height: 28,
        width: 243,
        alignItems: 'center',
        overflow: 'hidden',
    },
    vuesaxlineararrowLeft: {
        right: 613,
        bottom: 709,
        zIndex: 4,
        position: 'absolute',
    },
    frameParent7: {
        width: 661,
        backgroundColor: Color.colorWhite,
        justifyContent: 'center',
    },
    frameGroup: {
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'stretch',
    },
    frameParent: {
        paddingVertical: Padding.p_3xs,
        paddingHorizontal: 0,
        justifyContent: 'space-between',
        borderRadius: Border.br_3xs,
        alignSelf: 'stretch',
    },
    frame: {
        top: 37,
        left: 237,
        width: 1163,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        overflow: 'hidden',
    },
    frame10: {
        top: -8,
        width: 206,
        height: 916,
        alignItems: 'center',
        overflow: 'hidden',
    },
    produtos: {
        backgroundColor: Color.colorWhitesmoke_200,
        width: '100%',
        height: 900,
        overflow: 'hidden',
        flex: 1,
    },
});

export default Produtos;
