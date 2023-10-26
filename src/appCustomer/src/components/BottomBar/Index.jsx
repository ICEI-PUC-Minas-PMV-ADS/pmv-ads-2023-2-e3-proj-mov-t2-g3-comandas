import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import HomeMenu from '../../assets/HomeMenu.svg';
import SearchMenu from '../../assets/SearchMenu.svg';
import OrderMenu from '../../assets/OrderMenu.svg';
import ProfileMenu from '../../assets/ProfileMenu.svg';

export default function BottomBar({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <HomeMenu />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <SearchMenu />
      </TouchableOpacity>
      <TouchableOpacity>
        <OrderMenu />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
        <ProfileMenu />
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
