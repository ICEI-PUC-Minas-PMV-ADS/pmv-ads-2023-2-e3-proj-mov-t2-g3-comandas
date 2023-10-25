import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import BarraLateral from '../components/BarraLateral';
import ContainerForm from '../components/ContainerForm';
import Categorias from '../components/Categorias';
import MenuContainer from '../components/MenuContainer';
import PedidosContainer from '../components/PedidosContainer';
import { Padding, Color } from '../../GlobalStyles';

function Menu() {
  return (
    <View style={[styles.menu, styles.menuFlexBox]}>
      <BarraLateral
        dimensions={require('../assets/comandas-degrade-1@3x.png')}
      />
      <View style={[styles.frameParent, styles.menuFlexBox]}>
        <ContainerForm
          imageDimensions={require('../assets/71@3x.png')}
          imageDimensionsText={require('../assets/notif1@3x.png')}
          imageCode={require('../assets/image1@3x.png')}
          imageCodeText={require('../assets/471@3x.png')}
        />
        <Categorias />
        <MenuContainer />
      </View>
      <PedidosContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  menuFlexBox: {
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
  },
  frameParent: {
    width: 824,
    height: 838,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xl,
  },
  menu: {
    backgroundColor: Color.colorWhitesmoke_200,
    flex: 1,
    width: '100%',
    height: 900,
    flexDirection: 'row',
  },
});

export default Menu;
