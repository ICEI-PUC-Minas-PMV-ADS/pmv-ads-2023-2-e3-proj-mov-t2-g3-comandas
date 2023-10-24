import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

function NavbarItem({ label, onPress }) {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <Text style={styles.itemText}>{label}</Text>
    </TouchableOpacity>
  );
}

export default NavbarItem;
