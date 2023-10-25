import React, { useMemo } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageSourcePropType,
  Image,
} from 'react-native';
import { Color, FontFamily, FontSize, Border } from '../../GlobalStyles';

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === 'unset' ? undefined : value };
};
function RecentOrdersContainer1({
  dimensionCode,
  dimensionCodeImageUrl,
  dimensionCodeText,
  propMarginTop,
}) {
  const frameView2Style = useMemo(
    () => ({
      ...getStyleValue('marginTop', propMarginTop),
    }),
    [propMarginTop],
  );

  return (
    <View style={[styles.frameParent, frameView2Style]}>
      <View style={styles.rectangleParent}>
        <View style={styles.frameChild} />
        <Image style={styles.icon} contentFit="cover" source={dimensionCode} />
        <View style={[styles.noodlesWithPotatoParent, styles.parentPosition]}>
          <Text style={[styles.noodlesWithPotato, styles.eggGordonBlueTypo]}>
            Noodles with potato
          </Text>
          <Text style={[styles.items, styles.itemsTypo]}>1 items</Text>
        </View>
      </View>
      <View style={styles.rectangleParent}>
        <View style={styles.frameChild} />
        <Image
          style={styles.icon}
          contentFit="cover"
          source={dimensionCodeImageUrl}
        />
        <View style={[styles.eggGordonBlueParent, styles.parentPosition]}>
          <Text style={[styles.eggGordonBlue, styles.eggGordonBlueTypo]}>
            Egg gordon blue
          </Text>
          <Text style={[styles.items1, styles.itemsTypo]}>4 items</Text>
        </View>
      </View>
      <View style={styles.rectangleParent}>
        <View style={styles.frameChild} />
        <Image
          style={styles.icon}
          contentFit="cover"
          source={dimensionCodeText}
        />
        <View style={[styles.pizzaOrangeHotParent, styles.parentPosition]}>
          <Text style={[styles.pizzaOrangeHot, styles.eggGordonBlueTypo]}>
            Pizza orange hot
          </Text>
          <Text style={[styles.items2, styles.itemsTypo]}>2 items</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parentPosition: {
    height: 44,
    left: 65,
    top: 6,
    position: 'absolute',
  },
  eggGordonBlueTypo: {
    height: 18,
    textAlign: 'left',
    color: Color.colorGray_300,
    fontFamily: FontFamily.workSansMedium,
    fontWeight: '500',
    fontSize: FontSize.size_base,
  },
  itemsTypo: {
    marginTop: 11,
    color: Color.primary,
    fontFamily: FontFamily.workSansRegular,
    fontSize: FontSize.size_sm,
    textAlign: 'left',
    height: 15,
  },
  frameChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_xs,
    backgroundColor: Color.primary,
    width: 52,
    position: 'absolute',
    height: 56,
  },
  icon: {
    top: 21,
    left: 302,
    width: 14,
    overflow: 'hidden',
    height: 15,
    position: 'absolute',
  },
  noodlesWithPotato: {
    width: 166,
  },
  items: {
    width: 51,
  },
  noodlesWithPotatoParent: {
    width: 166,
  },
  rectangleParent: {
    width: 316,
    height: 56,
  },
  eggGordonBlue: {
    width: 130,
  },
  items1: {
    width: 53,
  },
  eggGordonBlueParent: {
    width: 130,
  },
  pizzaOrangeHot: {
    width: 137,
  },
  items2: {
    width: 55,
  },
  pizzaOrangeHotParent: {
    width: 137,
  },
  frameParent: {
    height: 198,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default RecentOrdersContainer1;
