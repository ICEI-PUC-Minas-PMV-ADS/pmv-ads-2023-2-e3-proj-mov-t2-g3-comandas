import * as React from 'react';
import { StyleProp, ViewStyle, StyleSheet, Image } from 'react-native';

function VectorIcon({ style }) {
  return (
    <Image
      style={[styles.vectorIcon, style]}
      contentFit="cover"
      source={require('../assets/vector10@3x.png')}
    />
  );
}

const styles = StyleSheet.create({
  vectorIcon: {
    width: 11,
    height: 7,
  },
});

export default VectorIcon;
