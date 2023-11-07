import COLORS from '@/constants/colors';
import React from 'react';

import { Text, StyleSheet, View } from 'react-native';

export default function Category({ category }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
      }}
    >
      <View
        style={{
          flex: 1,
          height: StyleSheet.hairlineWidth,
          backgroundColor: '#000000',
        }}
      />
      <View>
        <Text style={styles.categoryTitle}>
          {category === 'uncategorized' ? 'Cardápio' : category}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          height: StyleSheet.hairlineWidth,
          backgroundColor: '#000000',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  categoryTitle: {
    fontFamily: 'MontserratBold',
    fontSize: 18,
    color: COLORS.secondary,
  },
});
