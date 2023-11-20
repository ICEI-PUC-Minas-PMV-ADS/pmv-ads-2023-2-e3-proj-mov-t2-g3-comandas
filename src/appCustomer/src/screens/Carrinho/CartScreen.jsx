import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useCart } from '@/context/CartContext'; // Ajuste este caminho conforme necessário
import COLORS from '@/constants/colors';
import useAuthVerify from '@/components/AuthVerify';
import CartItem from './CartItem';

export default function CartScreen({ navigation }) {
  useAuthVerify(navigation);
  const { cart } = useCart();

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 20, gap: 20, flexGrow: 1 }}
        renderItem={({ item }) => <CartItem cartEntry={item} key={item.id} />}
        ListEmptyComponent={() => (
          <Text
            style={{
              color: COLORS.secondary,
              textAlign: 'center',
              fontFamily: 'MontserratLight',
            }}
          >
            Nenhum item encontrado
          </Text>
        )}
        ListFooterComponentStyle={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
        ListFooterComponent={() => (
          <TouchableOpacity
            style={{
              width: '80%',
              backgroundColor: COLORS.primary,
              borderRadius: 50,
              padding: 20,
              alignSelf: 'center',
            }}
          >
            <Text
              style={{
                textAlign: 'center',
                color: COLORS.neutralWhite,
                fontSize: 20,
                fontFamily: 'MontserratSemiBold',
              }}
            >
              Realizar pedido
            </Text>
          </TouchableOpacity>
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
});
