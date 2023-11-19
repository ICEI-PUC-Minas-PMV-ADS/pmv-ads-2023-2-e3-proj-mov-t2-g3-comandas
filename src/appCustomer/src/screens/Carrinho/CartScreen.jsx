import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { useCart } from '@/context/CartContext'; // Ajuste este caminho conforme necessário
import COLORS from '@/constants/colors';

function CartScreen() {
  const { cart } = useCart();

  function RenderItem({ cartEntry }) {
    return (
      <View style={styles.itemContainer}>
        <View style={{ flexDirection: 'row' }}>
          <Image source={{ uri: cartEntry.photoUrl }} style={styles.image} />
          <Text style={styles.itemName}>{cartEntry.name}</Text>
        </View>
        <View style={styles.infoContainer}>
          {cartEntry.items.map((entry) => (
            <View>
              {entry.photoUrl ? (
                <Image source={{ uri: entry.photoUrl }} style={styles.image} />
              ) : null}
              <Text style={styles.itemName}>{entry.name}</Text>
              <Text style={styles.itemDetails}>
                Quantidade: {entry.quantity}
              </Text>
              <Text style={styles.itemDetails}>Preço: R$ {entry.total}</Text>
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
        renderItem={({ item, index }) => <RenderItem cartEntry={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: COLORS.neutralWhite,
  },
  itemContainer: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  infoContainer: {
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDetails: {
    fontSize: 16,
  },
});

export default CartScreen;
