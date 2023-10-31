import COLORS from '@/constants/colors';
import React, { useCallback, useRef, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  View,
  ActivityIndicator,
  useWindowDimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
// eslint-disable-next-line import/no-unresolved
import { BASE_URL, API_KEY, ADMIN_TOKEN } from '@env';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import StarComponent from '@/assets/StarComponent';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';
import acaiPlaceHolder from '../../assets/AcaiBackground.png';
import Clock from '../../assets/Clock.svg';
import ItemCard from './ItemCard';

export default function Shop({ route, navigation }) {
  const { shopId } = route.params;
  const { width } = useWindowDimensions();
  const [isLoading, setIsLoading] = useState(true);
  const [menu, setMenu] = useState({});
  const [shop, setShop] = useState({});
  const [itemCategory, setItemCategory] = useState([]);
  const categoryLocation = [];
  const $scrollViewRef = useRef();

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

          const categoryNames = new Set(
            data.map((item) =>
              item && item.category && item.category.name
                ? item.category.name
                : null,
            ),
          );

          const formattedData = {};

          data.forEach((menuItem) => {
            const categoryName =
              menuItem && menuItem.category && menuItem.category.name
                ? menuItem.category.name
                : 'uncategorized';

            if (!formattedData[categoryName]) {
              formattedData[categoryName] = [];
            }
            formattedData[categoryName].push(menuItem);
          });

          setItemCategory(categoryNames);
          setMenu(formattedData);
        } catch (error) {
          // eslint-disable-next-line no-undef
          alert(error);
        } finally {
          setIsLoading(false);
        }
      }

      async function fetchShop() {
        try {
          setIsLoading(true);
          const { data } = await axios.get(`${BASE_URL}user/${shopId}`, {
            headers: {
              'x-api-key': API_KEY,
              Authorization: ADMIN_TOKEN,
            },
          });

          setShop(data);
        } catch (error) {
          // eslint-disable-next-line no-undef
          alert(error);
        } finally {
          setIsLoading(false);
        }
      }

      fetchShop();
      fetchMenu();
    }, [shopId]),
  );

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
    <SafeAreaView style={styles.container}>
      <ParallaxScrollView
        ref={$scrollViewRef}
        showsVerticalScrollIndicator={false}
        parallaxHeaderHeight={200}
        onScroll={(e) => {
          if (e.nativeEvent.contentOffset.y >= 250)
            navigation.setOptions({
              headerTitle: shop.userInfo && shop.userInfo.name,
            });
          else {
            navigation.setOptions({ headerTitle: '' });
          }
        }}
        renderBackground={() => (
          <Image
            source={acaiPlaceHolder}
            style={{ width, height: 210, resizeMode: 'cover' }}
          />
        )}
        renderStickyHeader={() => (
          <FlatList
            style={{ height: 50, backgroundColor: COLORS.neutrlWhite }}
            contentContainerStyle={{
              flex: 1,
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}
            data={Array.from(itemCategory)}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() =>
                  $scrollViewRef.current.scrollTo({
                    animated: true,
                    y: categoryLocation[index] + 120,
                  })
                }
              >
                <Text
                  style={{
                    color: COLORS.secondary,
                    textAlign: 'center',
                    fontFamily: 'MontserratBold',
                  }}
                >
                  {item ?? 'Cardápio'}
                </Text>
              </TouchableOpacity>
            )}
          />
        )}
        stickyHeaderHeight={50}
      >
        <View>
          <View style={{ padding: 20, gap: 15 }}>
            <View style={styles.profileContainer}>
              <View style={{ width: '80%', gap: 15 }}>
                <Text style={styles.profileTitle}>
                  {shop.userInfo && shop.userInfo.name}
                </Text>
                <View style={{ flexDirection: 'row', gap: 5 }}>
                  <Clock width={15} />
                  <Text
                    style={{
                      color: COLORS.neutralBlue,
                      fontFamily: 'MontserratSemiBold',
                    }}
                  >
                    Fecha as 20:00
                  </Text>
                </View>
                <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                  <StarComponent rating={3.45} />
                  <Text style={styles.profileStarCount}>3,45</Text>
                </View>
              </View>
              <Image
                source={{
                  uri: shop.photoUrl,
                }}
                style={styles.profileImage}
              />
            </View>

            <ItemCard data={menu} location={categoryLocation} />
          </View>
        </View>
      </ParallaxScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.neutrlWhite,
  },
  profileContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  profileTitle: {
    fontFamily: 'MontserratBold',
    fontSize: 25,
    color: COLORS.secondary,
  },
  profileStarCount: {
    fontFamily: 'MontserratSemiBold',
    fontSize: 14,
    color: COLORS.secondary,
  },
  profileImage: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    borderRadius: 999,
    borderColor: 'purple',
    borderWidth: 2,
  },
});
