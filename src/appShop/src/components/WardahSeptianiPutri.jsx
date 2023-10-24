import * as React from 'react';
import { StyleProp, ViewStyle, Text, StyleSheet } from 'react-native';
import { FontSize, FontFamily, Color } from '../../GlobalStyles';

function WardahSeptianiPutri({ style }) {
  return <Text style={[styles.wardahSeptianiPutri, style]}>UserRest</Text>;
}

const styles = StyleSheet.create({
  wardahSeptianiPutri: {
    fontSize: FontSize.size_sm,
    fontWeight: '500',
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorGray_200,
    textAlign: 'right',
  },
});

export default WardahSeptianiPutri;
