import COLORS from '@/constants/colors';
// eslint-disable-next-line import/no-unresolved
import { BASE_URL, API_KEY, ADMIN_TOKEN } from '@env';
import { useUser } from '@/context/UserContext';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';
import React, { useCallback, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import * as Clipboard from 'expo-clipboard';

export default function QrCodes() {
  const [isLoading, setIsLoading] = useState(false);
  const [qrCodes, setQrCodes] = useState([]);
  const { user } = useUser();

  const shopId = user?.userInfo?.id;

  async function copyToClipboard(string) {
    await Clipboard.setStringAsync(string);
  }

  useFocusEffect(
    useCallback(() => {
      async function fetchQrCodes() {
        try {
          setIsLoading(true);
          const { data } = await axios.get(`${BASE_URL}shop/${shopId}/qrcode`, {
            headers: {
              'x-api-key': API_KEY,
              Authorization: ADMIN_TOKEN,
            },
          });

          const sortedData = data.sort((a, b) => a.table - b.table);

          setQrCodes(sortedData);
        } catch (error) {
        } finally {
          setIsLoading(false);
        }
      }

      fetchQrCodes();
    }, [shopId]),
  );

  if (isLoading)
    return (
      <View
        style={{
          backgroundColor: COLORS.neutralWhite,
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}
      >
        <ActivityIndicator color={COLORS.primary} size="large" />
      </View>
    );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.neutralWhite,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <FlatList
        data={qrCodes}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 25, padding: 10 }}
        fadingEdgeLength={30}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              elevation: 2,
              backgroundColor: COLORS.neutralWhite,
              padding: 35,
              borderRadius: 25,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              Alert.alert(
                'Link copiado!',
                'A url para o QrCode foi copiada para a área de transferência',
              );
              copyToClipboard(item.qrCodeUrl);
            }}
          >
            <Text
              style={{
                textAlign: 'center',
                color: COLORS.secondary,
                fontFamily: 'MontserratBold',
                fontSize: 16,
              }}
            >
              Mesa: {item.table}
            </Text>
            <Image
              key={item.id}
              source={{ uri: item.qrCodeUrl }}
              width={100}
              height={100}
            />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}
