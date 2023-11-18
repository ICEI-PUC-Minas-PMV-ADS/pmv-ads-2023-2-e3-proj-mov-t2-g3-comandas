import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { BASE_URL, API_KEY, ADMIN_TOKEN } from '@env';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import COLORS from '@/constants/colors';
import { useFocusEffect } from '@react-navigation/native';
import { useUser } from '@/context/UserContext';
import ImgPlaceholder from '../../assets/ItemImgPlaceholder.svg';

export default function Cardapio({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  const [menu, setMenu] = useState({});
  const { user } = useUser();

  const shopId = user.userInfo.id;

  useFocusEffect(
    useCallback(() => {
      async function fetchMenu() {
        try {
          setIsLoading(true);
          const { data } = await axios.get(`${BASE_URL}shop/${shopId}/menu`, {
            headers: {
              'x-api-key': API_KEY,
              Authorization: ADMIN_TOKEN,
            },
          });

          setMenu(
            data.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)),
          );
        } catch (error) {
          // eslint-disable-next-line no-undef
          setMenu([]);
        } finally {
          setIsLoading(false);
        }
      }

      fetchMenu();
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
    <SafeAreaView style={styles.container}>
      <FlatList
        data={menu}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        fadingEdgeLength={50}
        contentContainerStyle={{ gap: 20, padding: 12 }}
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
        ListHeaderComponent={() => (
          <Text
            style={{
              color: COLORS.secondary,
              textAlign: 'center',
              fontFamily: 'MontserratLight',
            }}
          >
            Selecione algum item para editá-lo
          </Text>
        )}
        renderItem={({ item }) => (
          <View style={styles.itemCardContainer}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
              onPress={() => navigation.navigate('ItemDetails', { item })}
            >
              <View style={{ gap: 5 }}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>R$ {item.price}</Text>
                <Text
                  numberOfLines={3}
                  textBreakStrategy="highQuality"
                  style={styles.itemDescription}
                >
                  {item.description}
                </Text>
              </View>

              {item.image ? (
                <Image source={{ uri: item.image }} style={styles.itemImage} />
              ) : (
                <View style={styles.itemPlaceholder}>
                  <ImgPlaceholder />
                </View>
              )}
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.neutralWhite,
  },
  itemCardContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.8,
    shadowRadius: 1.5,
    elevation: 3,

    padding: 16,
    borderRadius: 16,
    backgroundColor: COLORS.neutralWhite,
    justifyContent: 'center',
  },
  itemName: {
    fontFamily: 'MontserratSemiBold',
    fontSize: 16,
  },
  itemDescription: {
    textAlign: 'left',
    fontFamily: 'MontserratSemiBold',
    fontSize: 12,
    color: COLORS.neutralBlue,
    width: 200,
  },
  itemPrice: {
    fontFamily: 'MontserratSemiBold',
    fontSize: 14,
    color: COLORS.primary,
  },
  itemImage: {
    width: 80,
    resizeMode: 'cover',
    borderRadius: 15,
    aspectRatio: 1 / 1,
  },
  itemPlaceholder: {
    backgroundColor: COLORS.neutralLightGrey,
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
