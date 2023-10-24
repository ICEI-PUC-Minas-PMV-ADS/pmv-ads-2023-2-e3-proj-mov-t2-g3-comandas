import React, { useMemo } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { FontFamily, Color, Border, FontSize } from '../../GlobalStyles';

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === 'unset' ? undefined : value };
};
function CardForm({ tituloButao, propBackgroundColor, propWidth, propLeft }) {
  const image8Style = useMemo(
    () => ({
      ...getStyleValue('backgroundColor', propBackgroundColor),
    }),
    [propBackgroundColor],
  );

  const livreStyle = useMemo(
    () => ({
      ...getStyleValue('width', propWidth),
      ...getStyleValue('left', propLeft),
    }),
    [propWidth, propLeft],
  );

  return (
    <View style={styles.mesa1Parent}>
      <Text style={[styles.mesa1, styles.mesa1Typo]}>Mesa 1</Text>
      <View style={[styles.frameChild, styles.image8Layout]} />
      <View style={[styles.image8, styles.image8Layout, image8Style]} />
      <Text style={[styles.livre, styles.mesa1Typo, livreStyle]}>
        {tituloButao}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mesa1Typo: {
    textAlign: 'left',
    fontFamily: FontFamily.interSemiBold,
    fontWeight: '600',
    position: 'absolute',
  },
  image8Layout: {
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
    fontSize: FontSize.size_base,
    color: Color.neutral1,
  },
  frameChild: {
    top: 128,
    left: 16,
    width: 105,
  },
  image8: {
    top: 48,
    left: 37,
    width: 40,
    transform: [
      {
        rotate: '-45deg',
      },
    ],
  },
  livre: {
    height: '7.95%',
    width: '25%',
    top: '79.55%',
    left: '37.12%',
    fontSize: FontSize.size_xs,
    color: Color.colorWhite,
  },
  mesa1Parent: {
    backgroundColor: Color.colorWhite,
    width: 132,
    height: 176,
    borderRadius: Border.br_3xs,
  },
});

export default CardForm;
