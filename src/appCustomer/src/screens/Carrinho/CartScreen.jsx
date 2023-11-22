import React, { useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { BASE_URL, API_KEY, ADMIN_TOKEN } from '@env';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useCart } from '@/context/CartContext'; // Ajuste este caminho conforme necessário
import COLORS from '@/constants/colors';
import useAuthVerify from '@/components/AuthVerify';
import { useUser } from '@/context/UserContext';
import axios from 'axios';
import CartItem from './CartItem';

export default function CartScreen({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  useAuthVerify(navigation);
  const { cart, table, clearCart } = useCart();
  const { user } = useUser();

  async function handleOrder() {
    if (table) {
      setIsLoading(true);
      const order = cart[0].items.map((item) => ({
        shopId: cart[0].id,
        customerId: user.userId,
        itemId: item.id,
        quantity: item.quantity,
        total: item.total,
        tableId: Number(table),
      }));

      try {
        await axios.post(`${BASE_URL}/order/create`, order, {
          headers: {
            Authorization: ADMIN_TOKEN,
            'x-api-key': API_KEY,
          },
        });

        // eslint-disable-next-line no-alert, no-undef
        alert(`Pedido realizado !`);
        navigation.navigate('PedidosAcompanhamento');
        clearCart();
      } catch (error) {
        // eslint-disable-next-line no-alert, no-undef
        if (error?.response?.status === 400) alert(`Item sem estoque !`);
        console.log(
          `ERROR IN handleOrder => [${
            error?.response?.status
          }]\n ${JSON.stringify(error?.response?.data, null, 2)}`,
        );
      } finally {
        setIsLoading(false);
      }
    }
  }

  if (isLoading)
    return (
      <View
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0)',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}
      >
        <ActivityIndicator color={COLORS.primary} size="large" />
      </View>
    );

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 20, gap: 20, flexGrow: 1 }}
        renderItem={({ item }) => <CartItem cartEntry={item} key={item.id} />}
        ListHeaderComponent={() =>
          table ? <Text style={styles.tableNum}>Mesa {table}</Text> : null
        }
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
        ListFooterComponent={() =>
          table ? (
            <TouchableOpacity
              style={styles.footerBtn}
              onPress={() => handleOrder()}
            >
              <Text style={styles.footerBtnText}>Realizar pedido</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.footerBtn}
              onPress={() => navigation.navigate('DefineTable')}
            >
              <Text style={styles.footerBtnText}>Definir mesa</Text>
            </TouchableOpacity>
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.neutralWhite,
  },
  footerBtn: {
    width: '80%',
    backgroundColor: COLORS.primary,
    borderRadius: 50,
    padding: 20,
    alignSelf: 'center',
  },
  footerBtnText: {
    textAlign: 'center',
    color: COLORS.neutralWhite,
    fontSize: 20,
    fontFamily: 'MontserratSemiBold',
  },
  tableNum: {
    fontFamily: 'MontserratBold',
    fontSize: 20,
    color: COLORS.secondary,
    textAlign: 'center',
  },
});
