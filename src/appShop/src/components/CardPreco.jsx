import React, { useMemo } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
  Image,
} from 'react-native';
import {
  FontFamily,
  FontSize,
  Color,
  Padding,
  Border,
} from '../../GlobalStyles';

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === 'unset' ? undefined : value };
};
function CardPreco({
  priceText,
  nomeComida,
  produtoImagem,
  propWidth,
  propPaddingRight,
  propWidth1,
  propJustifyContent,
  propWidth2,
}) {
  const imageAndPriceStyle = useMemo(
    () => ({
      ...getStyleValue('width', propWidth),
      ...getStyleValue('paddingRight', propPaddingRight),
    }),
    [propWidth, propPaddingRight],
  );

  const titleAndRateStyle = useMemo(
    () => ({
      ...getStyleValue('width', propWidth1),
      ...getStyleValue('justifyContent', propJustifyContent),
    }),
    [propWidth1, propJustifyContent],
  );

  const cornettoPizzaStyle = useMemo(
    () => ({
      ...getStyleValue('width', propWidth2),
    }),
    [propWidth2],
  );

  return (
    <View style={[styles.titleImageAndButton, styles.titleFlexBox]}>
      <View style={[styles.titleImageAndButton1, styles.titleFlexBox]}>
        <View style={[styles.imageAndPrice, imageAndPriceStyle]}>
          <Image
            style={styles.imageAndPriceChild}
            contentFit="cover"
            source={require('../assets/ellipse-213@3x.png')}
          />
          <View style={styles.priceLayout}>
            <Image
              style={[styles.priceChild, styles.priceLayout]}
              contentFit="cover"
              source={require('../assets/ellipse-214@3x.png')}
            />
            <Text style={[styles.text, styles.textTypo]}>{priceText}</Text>
          </View>
        </View>
        <View
          style={[styles.titleAndRate, styles.buttonFlexBox, titleAndRateStyle]}
        >
          <Text
            style={[styles.cornettoPizza, styles.textTypo, cornettoPizzaStyle]}
          >
            {nomeComida}
          </Text>
          <Image
            style={styles.rateIcon}
            contentFit="cover"
            source={produtoImagem}
          />
        </View>
        <View style={[styles.button, styles.buttonFlexBox]}>
          <Text style={[styles.addToCart, styles.textTypo]}>Add to Cart</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 132,
  },
  cornettoPizza: {
    fontSize: FontSize.size_base,
    width: 116,
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
});

export default CardPreco;
