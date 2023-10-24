import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import NavbarItem from './NavbarItem';

function Navbar({ items }) {
  return (
    <View style={styles.navbar}>
      {items.map((item) => (
        <NavbarItem key={item.id} title={item.title} icon={item.icon} />
      ))}
    </View>
  );
}

export default Navbar;
