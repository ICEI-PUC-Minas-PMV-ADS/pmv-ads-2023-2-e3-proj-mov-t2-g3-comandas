import React, { useMemo } from 'react';
import {
  Text,
  StyleSheet,
  View,
  ImageSourcePropType,
  Image,
} from 'react-native';
import { FontSize, FontFamily, Color, Border } from '../../GlobalStyles';

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === 'unset' ? undefined : value };
};
function ConfirmedReservationsContainer({
  dimensions,
  propTop,
  propTop1,
  propBottom,
}) {
  const frameViewStyle = useMemo(
    () => ({
      ...getStyleValue('top', propTop),
    }),
    [propTop],
  );

  const vectorIconStyle = useMemo(
    () => ({
      ...getStyleValue('top', propTop1),
      ...getStyleValue('bottom', propBottom),
    }),
    [propTop1, propBottom],
  );

  return (
    <View
      style={[
        styles.mesaPara3PessoasParent,
        styles.frameChildPosition,
        frameViewStyle,
      ]}
    >
      <Text style={styles.mesaPara3}>Mesa para 3 pessoas</Text>
      <View style={[styles.frameChild, styles.frameChildPosition]} />
      <Image
        style={[styles.vectorIcon, vectorIconStyle]}
        contentFit="cover"
        source={dimensions}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  frameChildPosition: {
    height: 57,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  mesaPara3: {
    top: 20,
    left: 65,
    fontSize: FontSize.size_base,
    fontWeight: '500',
    fontFamily: FontFamily.workSansMedium,
    color: Color.colorGray_300,
    textAlign: 'left',
    width: 166,
    height: 17,
    position: 'absolute',
  },
  frameChild: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.primary,
    width: 52,
  },
  vectorIcon: {
    height: '17.69%',
    width: '1.86%',
    top: '42.73%',
    right: '-0.22%',
    bottom: '39.58%',
    left: '98.36%',
    maxWidth: '100%',
    overflow: 'hidden',
    maxHeight: '100%',
    position: 'absolute',
  },
  mesaPara3PessoasParent: {
    width: 311,
  },
});

export default ConfirmedReservationsContainer;
