// components/NavItem.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

function NavItem({ label, onPress }) {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  label: {
    fontSize: 16,
  },
});

export default NavItem;
