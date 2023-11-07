import COLORS from '@/constants/colors';
import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

export default function Item({ title, description, price, image }) {
  return (
    <>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ gap: 5 }}>
          <Text style={styles.itemTitle}>{title}</Text>
          <Text
            numberOfLines={3}
            textBreakStrategy="highQuality"
            style={styles.itemDescription}
          >
            {description}
          </Text>
          <Text style={styles.itemPrice}>R$ {price}</Text>
        </View>

        <Image source={image} style={styles.itemImage} />
      </View>
      <View
        style={{
          borderWidth: StyleSheet.hairlineWidth,
          borderColor: '#00000020',
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  itemTitle: {
    fontFamily: 'MontserratSemiBold',
    fontSize: 16,
    color: COLORS.secondary,
  },
  itemDescription: {
    textAlign: 'left',
    fontFamily: 'MontserratSemiBold',
    fontSize: 12,
    color: COLORS.neutralBlue,
    width: 200,
  },
  itemPrice: {
    textAlign: 'left',
    fontFamily: 'MontserratSemiBold',
    fontSize: 14,
    color: COLORS.iconGreen,
    width: 200,
  },
  itemImage: {
    width: 80,
    resizeMode: 'cover',
    borderRadius: 15,
    aspectRatio: 1 / 1,
  },
});
