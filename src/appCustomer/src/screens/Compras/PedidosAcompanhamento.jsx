import { BASE_URL, API_KEY, ADMIN_TOKEN } from '@env';
import COLORS from '@/constants/colors';
import { useUser } from '@/context/UserContext';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Modal,
  FlatList,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '@/components/Buttons/Button';
import useAuthVerify from '@/components/AuthVerify';

function OrderList({ navigation }) {
  useAuthVerify(navigation);
  const [items, setItems] = useState([]);
  const { user, signed } = useUser();
  const [isLoading, setLoading] = useState(false);
  const [DetailVisivel, setDetailVisible] = useState(false);

  const [DetVisivel, setDetVisible] = useState(false);

  const [Valor, setValor] = useState('Shurek');
  const [Restaurante, setRestaurante] = useState('Shurek');
  const [statusPedido, setStatusPedido] = useState('open');
  const [Status, setStatus] = useState('open');

  const [GroupId, setGroupId] = useState('x');

  useEffect(() => {
    const fetchItemsFromAPI = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}customer/${user.id}/order`,
          {
            headers: {
              'x-api-key': API_KEY,
              Authorization: ADMIN_TOKEN,
            },
          },
        );

        if (Array.isArray(response.data) && response.data.length > 0) {
          setItems(response.data);
          setLoading(true);
        } else {
          console.log('No data received from the API.');
        }
      } catch (error) {
        setLoading(false);

        if (error?.response?.status === 404) {
          console.log('Sem items');
          setLoading(true);
        } else {
          console.error('Erro ao buscar itens da API', error);
        }
      }
    };
    if (signed) fetchItemsFromAPI();
  }, [signed]);

  if (!isLoading) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View>
          <Text style={styles.profileName}> Carregando pedidos </Text>
        </View>
      </SafeAreaView>
    );
  }

  if (items.length === 0) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View>
          <Text style={styles.profileName}> Olá {user.name} </Text>
        </View>
        <View>
          <Text style={styles.profileText}>
            Você ainda não possui nenhum pedido cadastrado
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <View style={{ backgroundColor: COLORS.neutralWhite }}>
      <View>
        <FlatList
          ListHeaderComponent={() => (
            <>
              <View
                style={{
                  borderColor: '#00000020',
                }}
              />
              <View
                style={{
                  justifyContent: 'center',
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                <Button
                  style={{ width: 100, height: 50 }}
                  title="open"
                  onPress={() => {
                    setStatus('open');
                  }}
                />
                <Button
                  style={{ width: 100, height: 50 }}
                  title="closed"
                  onPress={() => {
                    setStatus('closed');
                  }}
                />
                <Button
                  style={{ width: 100, height: 50 }}
                  title="cancelled"
                  onPress={() => {
                    setStatus('cancelled');
                  }}
                />
              </View>
            </>
          )}
          data={items}
          keyExtractor={(order) => order.id.toString()}
          renderItem={({ item: order }) => (
            <>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                }}
              >
                {Status == order.status ? (
                  <>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <View style={{ gap: 5, flex: 1 }}>
                        <Text style={styles.itemTitle}>
                          {order.shop.userInfo.name}
                        </Text>
                        <Text
                          numberOfLines={3}
                          textBreakStrategy="highQuality"
                          style={styles.itemDescription}
                        >
                          status: {order.status}
                        </Text>
                        <Text style={styles.itemPrice}>R$ {order.total}</Text>
                      </View>
                      <Button
                        style={{
                          width: 100,
                          height: 50,
                          marginTop: 10,
                          borderWidth: StyleSheet.hairlineWidth,
                          borderColor: '#00000020',
                        }}
                        title="Detalhe"
                        onPress={() => {
                          setDetVisible(!DetVisivel), setValor(order.total);
                          setRestaurante(order.shop.userInfo.name);
                          setStatusPedido(order.status);
                          setGroupId(order.groupId);
                        }}
                      />
                    </View>
                    <View
                      style={{
                        marginTop: 0,
                        borderWidth: StyleSheet.hairlineWidth,
                        borderColor: '#00000020',
                      }}
                    />
                  </>
                ) : null}
              </View>

              {/* Iterate through the items within the order */}
              {DetVisivel === true && (
                <>
                  {order.items.map((orderItem) => (
                    <View key={orderItem.id} style={{ paddingVertical: 5 }}>
                      <View style={[styles.item, { paddingVertical: 5 }]}>
                        <Text style={styles.textH2}>
                          {orderItem.name} - {orderItem.status}
                        </Text>
                        <Text style={styles.textH2}>R$ {orderItem.total}</Text>
                      </View>
                      <Text numberOfLines={3} style={styles.description}>
                        {orderItem.description}
                      </Text>
                    </View>
                  ))}
                  <View style={styles.orderFooter}>
                    <Text style={styles.textH1}>Total: </Text>
                    <Text style={{ color: COLORS.primary, fontWeight: 'bold' }}>
                      R$ {Valor}
                    </Text>
                  </View>
                </>
              )}
            </>
          )}
        />
        <Modal visible={DetailVisivel} animationType="slide">
          <View style={styles.container}>
            <View style={styles.orderHeader}>
              <Text style={[styles.textH1, { fontSize: 16 }]}>
                Order #{GroupId}
              </Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <Text>Status: </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  color:
                    statusPedido === 'open' ? COLORS.iconGreen : COLORS.iconRed,
                }}
              >
                {statusPedido}
              </Text>
            </View>
            <View>
              {/* {order.items.map((orderItem) => (
                <View key={orderItem.id} style={{ paddingVertical: 5 }}>
                  <View style={[styles.item, { paddingVertical: 5 }]}>
                    <Text style={styles.textH2}>
                      {orderItem.name} - {orderItem.status}
                    </Text>
                    <Text style={styles.textH2}>R$ {orderItem.total}</Text>
                  </View>
                  <Text numberOfLines={3} style={styles.description}>
                    {orderItem.description}
                  </Text>
                </View>
              ))} */}
            </View>
            <View style={styles.orderFooter}>
              <Text style={styles.textH1}>Total: </Text>
              <Text style={{ color: COLORS.primary, fontWeight: 'bold' }}>
                R$ {Valor}
              </Text>
            </View>
          </View>

          <Text>Restaurante: {Restaurante}</Text>
          <Text>Valor total: {GroupId}</Text>
          <Text>Status do pedido: {GroupId}</Text>

          <Button
            title="Fechar "
            onPress={() => {
              setDetailVisible(false);
            }}
          />
        </Modal>
      </View>
    </View>
  );
}

export default OrderList;

const styles = StyleSheet.create({
  // Seus estilos aqui...
  profileName: {
    marginTop: 20,
    marginHorizontal: 24,
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.linkTextGreen,
    textAlign: 'center',
  },
  profileText: {
    // Adicione estilos conforme necessário...
  },
  wrapperContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: COLORS.neutrlWhite,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 2,
  },
  scrollContent: {
    flexGrow: 1,
  },
  profile: {
    backgroundColor: COLORS.white,
    padding: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: -20,
  },
  Title: {
    marginTop: 20,
    marginHorizontal: 24,
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.linkTextGreen,
    textAlign: 'center',
  },

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

  container: {
    width: '90%',
    gap: 5,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 2,
    shadowColor: '#000',
    elevation: 8,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textH1: {
    color: COLORS.secondary,
    fontWeight: 'bold',
  },
  textH2: {
    color: COLORS.secondary,
    fontWeight: '500',
  },
  description: {
    color: COLORS.grayDark,
    paddingHorizontal: 25,
    lineHeight: 19,
  },
  orderHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  orderFooter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 2,
    borderTopColor: '#ccc',
    borderStyle: 'dashed',
    paddingTop: 10,
  },
});
