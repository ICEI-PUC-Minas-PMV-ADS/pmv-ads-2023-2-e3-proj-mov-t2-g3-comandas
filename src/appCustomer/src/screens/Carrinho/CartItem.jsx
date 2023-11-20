import COLORS from '@/constants/colors';
import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

export default function CartItem({ cartEntry }) {
  return (
    <View style={styles.itemContainer}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={{ uri: cartEntry.photoUrl }} style={styles.image} />
        <Text style={styles.shopName}>{cartEntry.name}</Text>
      </View>
      <View style={styles.infoContainer}>
        {cartEntry.items.map((entry) => (
          <View style={{ gap: 10 }} key={entry.id}>
            {entry.photoUrl ? (
              <Image source={{ uri: entry.photoUrl }} style={styles.image} />
            ) : null}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 15,
              }}
            >
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.itemDetails}>{entry.quantity}x </Text>
                <Text style={styles.itemName} numberOfLines={1}>
                  {entry.name}
                </Text>
              </View>
              <Text style={styles.itemPrice}>R$ {entry.total}</Text>
            </View>
            <View
              style={{
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderColor: COLORS.greyLineStyle,
              }}
            />
          </View>
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: COLORS.neutralWhite,
    borderRadius: 25,
    padding: 15,
    elevation: 2,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 15,
  },
  infoContainer: {
    justifyContent: 'center',
  },
  shopName: {
    fontSize: 18,
    color: COLORS.primary,
    fontFamily: 'MontserratSemiBold',
  },
  itemName: {
    fontSize: 16,
    color: COLORS.primary,
    fontFamily: 'MontserratSemiBold',
    width: 160,
  },
  itemDetails: {
    fontSize: 16,
    fontFamily: 'MontserratRegular',
  },
  itemPrice: {
    fontSize: 16,
    fontFamily: 'MontserratRegular',
  },
});
