import COLORS from '@/constants/colors';
// eslint-disable-next-line import/no-unresolved
import { BASE_URL, API_KEY, ADMIN_TOKEN } from '@env';
import axios from 'axios';
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';

function formattedDate(data) {
  const myDate = new Date(data);
  myDate.setMinutes(myDate.getMinutes() + myDate.getTimezoneOffset());

  const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };

  return myDate.toLocaleDateString('pt-BR', options);
}

export default function Order({ OrderData }) {
  const [isLoading, setIsLoading] = useState(false);

  async function handleComplete() {
    setIsLoading(true);

    try {
      await axios.post(
        `${BASE_URL}/order/complete/${OrderData.groupId}`,
        {},
        {
          headers: {
            Authorization: ADMIN_TOKEN,
            'x-api-key': API_KEY,
          },
        },
      );

      // eslint-disable-next-line no-alert, no-undef
      alert(`Pedido concluído !`);
    } catch (error) {
      // eslint-disable-next-line no-alert, no-undef
      console.log(
        `ERROR IN handleComplete => [${
          error?.response?.status
        }]\n ${JSON.stringify(error?.response?.data, null, 2)}`,
      );
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading || !OrderData)
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
      <View style={styles.orderHeader}>
        <Text style={[styles.textH1, { fontSize: 16 }]}>
          Order #{OrderData.groupId}
        </Text>
        <Text style={styles.textH2}>{formattedDate(OrderData.updatedAt)}</Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <Text>Status: </Text>
        <Text
          style={{
            fontWeight: 'bold',
            color:
              OrderData.status === 'open' ? COLORS.iconGreen : COLORS.iconRed,
          }}
        >
          {OrderData.status}
        </Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <Text>Cliente: </Text>
        <Text style={{ width: 100 }}>{OrderData.customer.userInfo.name}</Text>
      </View>
      <View>
        {OrderData &&
          OrderData.items.map((item) => (
            <View style={{ paddingVertical: 5 }} key={item.id}>
              <View style={[styles.item, { paddingVertical: 5 }]} key={item.id}>
                <Text style={styles.textH2}>
                  {item.quantity}x - {item.name}
                </Text>
                <Text style={styles.textH2}>R$ {item.total.toFixed(2)}</Text>
              </View>
              <Text numberOfLines={3} style={styles.description}>
                {item.description}
              </Text>
            </View>
          ))}
      </View>
      <View style={styles.orderFooter}>
        <Text style={styles.textH1}>Total: </Text>
        <Text style={{ color: COLORS.primary, fontWeight: 'bold' }}>
          R$ {OrderData.total.toFixed(2)}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.footerBtn}
        onPress={() =>
          Alert.alert(
            'Atenção !',
            'Essa ação não pode ser revertida.',
            [
              {
                text: 'Confirmar',
                onPress: () => handleComplete(),
              },
              {
                text: 'Cancelar',
                style: 'cancel',
              },
            ],
            { cancelable: true },
          )
        }
      >
        <Text style={styles.footerBtnText}>Concluir Pedido</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    gap: 5,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 2,
    shadowColor: '#000',
    elevation: 8, // Adiciona sombra no Android
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
  footerBtn: {
    width: '60%',
    backgroundColor: COLORS.primary,
    borderRadius: 50,
    padding: 15,
    alignSelf: 'center',
    marginTop: 15,
  },
  footerBtnText: {
    textAlign: 'center',
    color: COLORS.neutralWhite,
    fontSize: 16,
    fontFamily: 'MontserratSemiBold',
  },
});
