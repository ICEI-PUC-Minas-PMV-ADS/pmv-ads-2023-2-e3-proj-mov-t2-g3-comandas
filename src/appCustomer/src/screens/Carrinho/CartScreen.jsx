import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { useCart } from '@/context/CartContext'; // Ajuste este caminho conforme necessário
import COLORS from '@/constants/colors';

function CartScreen() {
  const { cart } = useCart();

  function RenderItem({ cartEntry }) {
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
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.itemDetails}>{entry.quantity}x </Text>
                <Text style={styles.itemName}>{entry.name}</Text>
                <Text style={styles.itemPrice}>R$ {entry.total}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 20, gap: 20 }}
        renderItem={({ item, index }) => (
          <RenderItem cartEntry={item} key={item.id} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.neutralWhite,
  },
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
  },
  itemDetails: {
    fontSize: 16,
    fontFamily: 'MontserratRegular',
  },
  itemPrice: {
    fontSize: 16,
    fontFamily: 'MontserratRegular',
    alignSelf: 'flex-end',
  },
});

export default CartScreen;
