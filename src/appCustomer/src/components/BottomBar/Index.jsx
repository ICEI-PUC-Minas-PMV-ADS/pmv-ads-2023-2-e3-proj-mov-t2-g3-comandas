import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';

import HomeIcon from '../../assets/Home.png';
import BuscaIcon from '../../assets/Icone_Busca.png';
import PedidosIcon from '../../assets/Pedidos.png';
import PerfilIcon from '../../assets/Icone_Perfil.png';

export default function BottomBar({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image source={HomeIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <Image source={BuscaIcon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={PedidosIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
        <Image source={PerfilIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
