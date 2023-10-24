import * as React from 'react';
// Remove the line below and run 'expo install expo-image' in the terminal
// expo install expo-image
import { StyleSheet, Text, View } from 'react-native';
import Menulatereal from '../components/Menulatereal';
import MensagemPesquisaPerfil from '../components/MensagemPesquisaPerfil';
import ConteinerSuperior from '../components/ConteinerSuperior';
import ConteinerInferior from '../components/ConteinerInferior';
import { FontSize, FontFamily, Color } from '../GlobalStyles';

function DashBord() {
  return (
    <View style={[styles.dashbord, styles.frameFlexBox]}>
      <View style={[styles.dashbordInner, styles.frameParentLayout]}>
        <View style={[styles.frameParent, styles.frameParentLayout]}>
          <View style={styles.comandasDegrade1Parent}>
            <Image
              style={styles.comandasDegrade1}
              contentFit="cover"
              source={require('../assets/comandas-degrade-1.png')}
            />
            <Text style={styles.redeemPoints}>COMANDAS</Text>
          </View>
          <Menulatereal />
        </View>
      </View>
      <View style={[styles.frame, styles.frameFlexBox]}>
        <MensagemPesquisaPerfil />
        <ConteinerSuperior />
        <ConteinerInferior />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  frameFlexBox: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  frameParentLayout: {
    width: 206,
    justifyContent: 'space-between',
  },
  comandasDegrade1: {
    width: 32,
    height: 35,
    overflow: 'hidden',
  },
  redeemPoints: {
    fontSize: FontSize.title1_size,
    fontWeight: '600',
    fontFamily: FontFamily.title1,
    color: Color.colorDarkslateblue,
    textAlign: 'left',
  },
  comandasDegrade1Parent: {
    width: 158,
    paddingTop: 35,
    height: 35,
    alignItems: 'center',
    flexDirection: 'row',
  },
  frameParent: {
    height: 446,
    alignItems: 'center',
  },
  dashbordInner: {
    alignSelf: 'stretch',
    backgroundColor: Color.colorWhite,
    paddingTop: 32,
    flexDirection: 'row',
  },
  frame: {
    width: 1154,
    height: 820,
    flexWrap: 'wrap',
  },
  dashbord: {
    backgroundColor: '#f4f5f7',
    flex: 1,
    width: '100%',
    height: 900,
  },
});

export default DashBord;
