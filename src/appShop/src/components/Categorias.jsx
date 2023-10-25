import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import CategoriaOff from './CategoriaOff';
import {
  FontSize,
  FontFamily,
  Color,
  Border,
  Padding,
} from '../../GlobalStyles';

function Categorias() {
  return (
    <View style={[styles.categories, styles.all1FlexBox]}>
      <View style={styles.all}>
        <View style={[styles.all1, styles.all1FlexBox]}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require('../assets/icon1@3x.png')}
          />
          <Text style={styles.all2}>All</Text>
        </View>
      </View>
      <CategoriaOff />
      <CategoriaOff />
      <CategoriaOff />
      <CategoriaOff />
    </View>
  );
}

const styles = StyleSheet.create({
  all1FlexBox: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    width: 40,
    height: 40,
  },
  all2: {
    fontSize: FontSize.size_sm,
    fontWeight: '500',
    fontFamily: FontFamily.interMedium,
    color: Color.colorWhite,
    textAlign: 'left',
    width: 37,
    height: 16,
    marginLeft: 16,
  },
  all1: {
    width: 93,
    height: 40,
  },
  all: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.primary,
    width: 152,
    height: 72,
    justifyContent: 'center',
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
  },
  categories: {
    width: 824,
    justifyContent: 'space-between',
  },
});

export default Categorias;
