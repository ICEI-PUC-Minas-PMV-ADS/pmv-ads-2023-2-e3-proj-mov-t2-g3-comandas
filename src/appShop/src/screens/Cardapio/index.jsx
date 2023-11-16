import axios from 'axios';
import React, { useEffect, useState } from 'react';
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
} from 'react-native';
import COLORS from '@/constants/colors';
import ImgPlaceholder from '../../assets/ItemImgPlaceholder.svg';

export default function Cardapio() {
  const [isLoading, setIsLoading] = useState(true);
  const [menu, setMenu] = useState({});

  const shopId = 1;

  useEffect(() => {
    async function fetchMenu() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`${BASE_URL}shop/${shopId}/menu`, {
          headers: {
            'x-api-key': API_KEY,
            Authorization: ADMIN_TOKEN,
          },
        });

        setMenu(data);
      } catch (error) {
        // eslint-disable-next-line no-undef
        alert(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMenu();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={menu}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        fadingEdgeLength={50}
        contentContainerStyle={{ gap: 20, padding: 12 }}
        renderItem={({ item }) => (
          <View style={styles.itemCardContainer}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <View style={{ gap: 5 }}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>R$ {item.price}</Text>
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
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
  },
  itemPrice: {
    fontFamily: 'Montserrat-SemiBold',
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
