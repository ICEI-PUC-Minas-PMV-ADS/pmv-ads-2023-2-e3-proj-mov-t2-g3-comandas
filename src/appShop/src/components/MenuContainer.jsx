import * as React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import CardPreco from './CardPreco';
import {
    FontFamily,
    FontSize,
    Color,
    Padding,
    Border,
} from '../../GlobalStyles';

function MenuContainer() {
    return (
        <View style={[styles.allMenu, styles.allMenuFlexBox]}>
            <CardPreco
                priceText="$28"
                nomeComida="Cornetto Pizza"
                produtoImagem={require('../assets/rate.png')}
            />
            <View style={[styles.titleImageAndButton, styles.titleFlexBox]}>
                <View
                    style={[styles.titleImageAndButton1, styles.titleFlexBox]}
                >
                    <View style={[styles.imageAndPrice, styles.allMenuFlexBox]}>
                        <Image
                            style={styles.imageAndPriceChild}
                            contentFit="cover"
                            source={require('../assets/ellipse-213.png')}
                        />
                        <View style={styles.image9} />
                        <View style={styles.priceLayout}>
                            <Image
                                style={[styles.priceChild, styles.priceLayout]}
                                contentFit="cover"
                                source={require('../assets/ellipse-214.png')}
                            />
                            <Text style={[styles.text, styles.textTypo]}>
                                $22
                            </Text>
                        </View>
                    </View>
                    <View style={[styles.titleAndRate, styles.buttonFlexBox]}>
                        <Text style={[styles.beeferistBurger, styles.textTypo]}>
                            Beeferist Burger
                        </Text>
                        <Image
                            style={styles.rateIcon}
                            contentFit="cover"
                            source={require('../assets/rate.png')}
                        />
                    </View>
                    <View style={[styles.button, styles.buttonFlexBox]}>
                        <Text style={[styles.addToCart, styles.textTypo]}>
                            Add to Cart
                        </Text>
                    </View>
                </View>
            </View>
            <CardPreco
                priceText="$26"
                nomeComida="Sausage Pizza"
                produtoImagem={require('../assets/rate.png')}
                propWidth={140}
                propPaddingRight="unset"
                propWidth1={128}
                propJustifyContent="center"
                propWidth2={113}
            />
            <CardPreco
                priceText="$24"
                nomeComida="Tomayaki Burger"
                produtoImagem={require('../assets/rate.png')}
                propWidth={140}
                propPaddingRight="unset"
                propWidth1={130}
                propJustifyContent="center"
                propWidth2={130}
            />
            <CardPreco
                priceText="$26"
                nomeComida="Brey Sandwich"
                produtoImagem={require('../assets/rate.png')}
                propWidth={136}
                propPaddingRight={4}
                propWidth1={128}
                propJustifyContent="center"
                propWidth2={115}
            />
            <CardPreco
                priceText="$22"
                nomeComida="Tomato Pizza"
                produtoImagem={require('../assets/rate1.png')}
                propWidth={140}
                propPaddingRight="unset"
                propWidth1={128}
                propJustifyContent="flex-start"
                propWidth2={104}
            />
            <CardPreco
                priceText="$24"
                nomeComida="Shiren Hot Dog"
                produtoImagem={require('../assets/rate.png')}
                propWidth={140}
                propPaddingRight="unset"
                propWidth1={128}
                propJustifyContent="center"
                propWidth2={117}
            />
            <CardPreco
                priceText="$26"
                nomeComida="Cheese Pizza"
                produtoImagem={require('../assets/rate.png')}
                propWidth={136}
                propPaddingRight={4}
                propWidth1={128}
                propJustifyContent="center"
                propWidth2={105}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    allMenuFlexBox: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    titleFlexBox: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    priceLayout: {
        height: 48,
        width: 48,
    },
    textTypo: {
        textAlign: 'left',
        fontFamily: FontFamily.interSemiBold,
        fontWeight: '600',
    },
    buttonFlexBox: {
        marginTop: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageAndPriceChild: {
        width: 132,
        height: 132,
    },
    image9: {
        height: 120,
        width: 132,
    },
    priceChild: {
        top: 0,
        left: 0,
        position: 'absolute',
    },
    text: {
        height: '33.33%',
        width: '58.33%',
        top: '33.33%',
        left: '20.83%',
        fontSize: FontSize.size_sm,
        color: Color.neutral1,
        textAlign: 'left',
        fontFamily: FontFamily.interSemiBold,
        fontWeight: '600',
        position: 'absolute',
    },
    imageAndPrice: {
        width: 140,
        alignItems: 'flex-end',
        height: 132,
    },
    beeferistBurger: {
        fontSize: FontSize.size_base,
        width: 127,
        height: 18,
        color: Color.neutral1,
        textAlign: 'left',
        fontFamily: FontFamily.interSemiBold,
        fontWeight: '600',
    },
    rateIcon: {
        height: 24,
        marginTop: 5,
        width: 128,
    },
    titleAndRate: {
        height: 54,
        width: 128,
    },
    addToCart: {
        fontSize: FontSize.size_xs,
        color: Color.colorWhite,
        width: 67,
        height: 14,
        textAlign: 'left',
        fontFamily: FontFamily.interSemiBold,
        fontWeight: '600',
    },
    button: {
        backgroundColor: Color.primary,
        height: 40,
        paddingHorizontal: Padding.p_25xl,
        paddingVertical: 0,
        width: 156,
        borderRadius: Border.br_3xs,
    },
    titleImageAndButton1: {
        height: 274,
        width: 156,
    },
    titleImageAndButton: {
        backgroundColor: Color.colorWhite,
        width: 188,
        height: 306,
        borderRadius: Border.br_3xs,
    },
    allMenu: {
        width: 824,
        flexWrap: 'wrap',
    },
});

export default MenuContainer;
