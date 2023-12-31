import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { BASE_URL, API_KEY, ADMIN_TOKEN } from '@env';
import { SafeAreaView, StyleSheet, TouchableOpacity, Text } from 'react-native';
import COLORS from '@/constants/colors';
import { useFocusEffect } from '@react-navigation/native';
import Order from '../../components/Order';

export default function MesaInfo({ route, navigation }) {
  const { shopId, tableId } = route.params;
  const [isLoading, setIsLoading] = useState(true);
  const [tableInfo, setTableInfo] = useState();

  // Escondendo a header do drawer
  useEffect(() => {
    navigation.getParent()?.setOptions({
      headerShown: false,
    });
    navigation.setOptions({
      headerShown: true,
      headerTitle: `Mesa ${tableId}`,
    });
    return () => {
      navigation.getParent()?.setOptions({
        headerShown: true,
      });
      navigation.setOptions({
        headerShown: true,
        headerTitle: `Mesa ${tableId}`,
      });
    };
  }, [navigation, tableId]);

  useFocusEffect(
    useCallback(() => {
      async function getOrderInfo() {
        try {
          const { data } = await axios.get(
            `${BASE_URL}/order/shop/${shopId}/table/${tableId}`,
            {
              headers: {
                'x-api-key': API_KEY,
                Authorization: ADMIN_TOKEN,
              },
            },
          );

          setTableInfo(data);
          setIsLoading(true);
        } catch (error) {
          // eslint-disable-next-line no-undef
          alert(error);
        } finally {
          setIsLoading(false);
        }
      }

      getOrderInfo();
    }, [shopId, tableId]),
  );

  return (
    <SafeAreaView style={styles.container}>
      {tableInfo && <Order OrderData={tableInfo} />}
      {/* <TouchableOpacity style={styles.button}>
                <Text style={{ color: COLORS.white, fontWeight: "600" }}>
                    Finalizar
                </Text>
            </TouchableOpacity> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.neutralWhite,
    alignItems: 'center',
    paddingVertical: 10,
  },
  button: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: COLORS.iconRed,
    width: '90%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
});
