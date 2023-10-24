import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Color, Border, FontFamily, FontSize } from '../../GlobalStyles';

function CategoriasReservas() {
  return (
    <View style={styles.categories}>
      <View style={styles.all}>
        <View style={[styles.all1, styles.all1Position]}>
          <Image
            style={[styles.icon, styles.iconPosition]}
            contentFit="cover"
            source={require('../assets/icon@3x.png')}
          />
          <Text style={styles.all2}>All</Text>
        </View>
      </View>
      <View style={[styles.pizza, styles.pizzaPosition]}>
        <Text style={[styles.ocupadas, styles.livresTypo]}>Ocupadas</Text>
        <View style={[styles.image9, styles.imageLayout]} />
      </View>
      <View style={[styles.sandwich, styles.pizzaPosition]}>
        <View style={[styles.sandwich1, styles.all1Position]}>
          <View style={styles.image7} />
          <Text style={[styles.livres, styles.livresTypo]}>Livres</Text>
        </View>
      </View>
      <View style={[styles.burger, styles.pizzaPosition]}>
        <Text style={[styles.reservadas, styles.livresTypo]}>Reservadas</Text>
        <View style={[styles.frame, styles.iconPosition]}>
          <View style={[styles.image91, styles.imageLayout]} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  all1Position: {
    height: 40,
    left: 16,
    top: 16,
    position: 'absolute',
  },
  iconPosition: {
    overflow: 'hidden',
    position: 'absolute',
  },
  pizzaPosition: {
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs,
    bottom: '0%',
    top: '0%',
    height: '100%',
    position: 'absolute',
  },
  livresTypo: {
    color: Color.neutral1,
    textAlign: 'left',
    fontFamily: FontFamily.interMedium,
    fontWeight: '500',
    fontSize: FontSize.size_sm,
    position: 'absolute',
  },
  imageLayout: {
    transform: [
      {
        rotate: '-45deg',
      },
    ],
    width: 40,
    height: 40,
    borderRadius: Border.br_3xs,
  },
  icon: {
    width: '43.01%',
    right: '56.99%',
    maxWidth: '100%',
    maxHeight: '100%',
    left: '0%',
    bottom: '0%',
    top: '0%',
    height: '100%',
    overflow: 'hidden',
  },
  all2: {
    width: '39.78%',
    left: '60.22%',
    color: Color.colorWhite,
    textAlign: 'left',
    fontFamily: FontFamily.interMedium,
    fontWeight: '500',
    fontSize: FontSize.size_sm,
    top: '30%',
    height: '40%',
    position: 'absolute',
  },
  all1: {
    width: 93,
  },
  all: {
    right: '77.21%',
    backgroundColor: Color.primary,
    borderRadius: Border.br_3xs,
    left: '0%',
    bottom: '0%',
    top: '0%',
    width: '22.79%',
    height: '100%',
    position: 'absolute',
  },
  ocupadas: {
    height: '22.22%',
    width: '48.39%',
    left: '46.45%',
    top: '38.89%',
    color: Color.neutral1,
  },
  image9: {
    top: 36,
    left: 9,
    backgroundColor: Color.colorSilver,
    position: 'absolute',
    transform: [
      {
        rotate: '-45deg',
      },
    ],
  },
  pizza: {
    width: '23.24%',
    right: '51.57%',
    left: '25.19%',
  },
  image7: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    backgroundColor: Color.primary,
    borderRadius: Border.br_3xs,
    position: 'absolute',
  },
  livres: {
    width: '54.47%',
    left: '45.53%',
    color: Color.neutral1,
    top: '30%',
    height: '40%',
  },
  sandwich1: {
    width: 123,
  },
  sandwich: {
    right: '26.54%',
    left: '50.67%',
    width: '22.79%',
    backgroundColor: Color.colorWhite,
  },
  reservadas: {
    height: '38.89%',
    width: '49.38%',
    left: '44.44%',
    top: '38.89%',
    color: Color.neutral1,
  },
  image91: {
    backgroundColor: Color.accent,
  },
  frame: {
    top: 7,
    left: 10,
    width: 57,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  burger: {
    width: '24.29%',
    right: '0%',
    left: '75.71%',
  },
  categories: {
    width: 667,
    height: 72,
  },
});

export default CategoriasReservas;
