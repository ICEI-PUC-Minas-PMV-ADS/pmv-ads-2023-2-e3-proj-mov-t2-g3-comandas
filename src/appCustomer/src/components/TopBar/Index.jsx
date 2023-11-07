import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';
import Logo from '../../assets/Comandas-icon.png';
import MiniQr from '../../assets/MiniQrCode.svg';
import Alarm from '../../assets/alarm.svg';

export default function TopBar({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Animatable.Image
          style={styles.image}
          delay={100}
          animation="flipInY"
          source={Logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.icons}>
        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
          <Alarm />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Scan')}>
          <MiniQr />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  searchContainer: {
    flexDirection: 'row',
  },
  icons: {
    width: '20%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchbar: {
    width: '60%',
    height: '100%',
    paddingLeft: 20,
  },
  image: {
    // height: 120,
    alignSelf: 'center',
    height: 35,
    width: 35,
    aspectRatio: 1 / 1,
  },
});
