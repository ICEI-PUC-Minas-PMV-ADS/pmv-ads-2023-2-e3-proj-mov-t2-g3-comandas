import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native';
// eslint-disable-next-line import/no-unresolved
import { BASE_URL, API_KEY, ADMIN_TOKEN } from '@env';
import COLORS from '@/constants/colors';
import { MotiView } from 'moti';
import { Layout } from 'react-native-reanimated';
import SearchBtn from '../../assets/SearchIcon.svg';
import ClearBtn from '../../assets/Clear.svg';
import Star from '../../assets/Star.svg';
import Select from './Select';

export default function Search({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = React.useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [address, setAddress] = useState({});
  const [generalCategory, setGeneralCategory] = useState([]);
  const [category, setCategory] = useState(null);
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);
  const $stateSelect = useRef();
  const $citySelect = useRef();
  const $categorySelect = useRef();

  const fetchResults = async () => {
    try {
      if (text || state || city || category >= 0) {
        setIsLoading(true);

        const { data } = await axios.get(
          `${BASE_URL}/shop/list?${text ? `search=${text}` : ''}${
            state ? `&state=${state}` : ''
          }${city ? `&city=${city}` : ''}${
            category >= 0 ? `&categories=${category + 1}` : ''
          }`,
          {
            headers: {
              'x-api-key': API_KEY,
              Authorization: ADMIN_TOKEN,
            },
          },
        );

        setSearchResults(data);
        setIsLoading(false);
      }
    } catch (e) {
      // eslint-disable-next-line no-undef
      // alert(e);
      setSearchResults([]);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`${BASE_URL}address/list`, {
          headers: {
            'x-api-key': API_KEY,
            Authorization: ADMIN_TOKEN,
          },
        });

        const states = [];
        const cities = [];

        data.forEach((local) => {
          cities.push(local.city);
          states.push(local.state);
        });

        const addresses = {
          states,
          cities,
        };

        setAddress(addresses);
        setIsLoading(false);
      } catch (e) {
        // eslint-disable-next-line no-undef
        alert(e);
        setIsLoading(false);
      }
    };

    const fetchCategories = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`${BASE_URL}generalcategory/list`, {
          headers: {
            'x-api-key': API_KEY,
            Authorization: ADMIN_TOKEN,
          },
        });

        const categoryName = [];
        // const categoryId = [];

        data.forEach((resCategory) => {
          categoryName.push(resCategory.name);
          //   categoryId.push(resCategory.id);
        });

        setGeneralCategory(categoryName);
        setIsLoading(false);
      } catch (e) {
        // eslint-disable-next-line no-undef
        alert(e);
        setIsLoading(false);
      }
    };

    fetchAddresses();
    fetchCategories();
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          paddingHorizontal: 15,
          paddingVertical: 10,
          backgroundColor: isLoading ? COLORS.grey : COLORS.neutralWhite,
        }}
      >
        <View
          style={{
            ...styles.searchContainer,
            // backgroundColor: isLoading ? COLORS.grey : COLORS.neutralWhite,
          }}
        >
          <TouchableOpacity
            onPress={() => fetchResults()}
            disabled={isLoading}
            style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
          >
            {isLoading ? (
              <ActivityIndicator
                color={COLORS.primary}
                style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
              />
            ) : (
              <SearchBtn fill={COLORS.primary} />
            )}
          </TouchableOpacity>

          <TextInput
            style={styles.searchbar}
            cursorColor={COLORS.primary}
            onChangeText={setText}
            value={text}
            placeholder="Buscar..."
            editable={!isLoading}
            onSubmitEditing={(event) => fetchResults(event.nativeEvent.text)}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          <Select
            reference={$categorySelect}
            placeHolder="Categoria"
            data={generalCategory}
            updateFilterKey="category"
            isLoading={isLoading}
            setFilter={setCategory}
            setIndex
          />
          <Select
            reference={$citySelect}
            placeHolder="Cidade"
            data={address.cities}
            updateFilterKey="city"
            isLoading={isLoading}
            setFilter={setCity}
          />
          <Select
            reference={$stateSelect}
            placeHolder="Estado"
            data={address.states}
            dropdownStyleLeft={50}
            updateFilterKey="state"
            isLoading={isLoading}
            setFilter={setState}
          />
          <TouchableOpacity
            style={{
              borderRadius: 20,
              padding: 3,
              backgroundColor: COLORS.neutralLightGrey,
            }}
            onPress={() => {
              setCategory(null);
              setCity(null);
              setState(null);
              setText(null);
              setSearchResults(null);
              $categorySelect.current.reset();
              $citySelect.current.reset();
              $stateSelect.current.reset();
            }}
          >
            <ClearBtn width={20} height={20} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.viewResults}>
        <FlatList
          data={searchResults}
          contentContainerStyle={{ gap: 20, padding: 15 }}
          renderItem={({ item, index }) => (
            <MotiView
              layout={Layout.stiffness()}
              from={{
                opacity: 0,
                translateY: 100,
              }}
              animate={{
                opacity: 1,
                translateY: 0,
              }}
              transition={{ delay: 150 * index + 50 }}
              style={styles.wrapperContainer}
            >
              <TouchableOpacity
                style={styles.cardContainer}
                activeOpacity={0.25}
                onPress={() =>
                  navigation.navigate('Shop', {
                    shopId: item.user_id,
                  })
                }
              >
                <Image
                  style={styles.cardImage}
                  source={{ uri: item.photo_url }}
                />

                <View style={{ flex: 1, gap: 5 }}>
                  <Text style={styles.cardTitle}>{item.name}</Text>

                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 10,
                      flex: 1,
                      alignItems: 'center',
                    }}
                  >
                    <Text numberOfLines={1} style={styles.cardStar}>
                      {Number(3 + Math.random() * 2).toPrecision(2)}{' '}
                      <Star width={10} height={10} />
                    </Text>
                    <Text numberOfLines={1} style={styles.cardText}>
                      {item.category_name}
                    </Text>

                    <Text numberOfLines={1} style={styles.cardText}>
                      {Number(1 + Math.random() * 5).toPrecision(2)} km
                    </Text>
                  </View>

                  <View>
                    <Text style={styles.cardText}>{item.neighborhood}</Text>
                    <Text style={styles.cardText}>{item.street}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </MotiView>
          )}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.user_id}
          fadingEdgeLength={25}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapperContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    borderRadius: 15,
    backgroundColor: COLORS.neutralWhite,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 1,

    elevation: 2,
  },
  searchContainer: {
    width: '100%',
    height: 50,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: COLORS.neutralLightGrey,
    borderRadius: 20,
    borderTopEndRadius: 3,
    marginVertical: 10,
  },
  searchbar: {
    width: '80%',
    height: '100%',
    fontSize: 16,
  },
  viewResults: {
    flex: 1,
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 15,
  },
  cardImage: {
    width: '20%',
    height: 80,
    resizeMode: 'contain',
    borderRadius: 25,
    marginRight: 10,
  },
  cardTitle: {
    fontSize: 16,
    // color: COLORS.primary,
    fontFamily: 'MontserratBold',
  },
  cardText: {
    fontSize: 11,
  },
  cardStar: {
    fontSize: 11,
    fontFamily: 'MontserratBold',
    // textShadowColor: '#ff9900',
    // textShadowOffset: {
    //   width: 0,
    //   height: 0,
    // },
    // textShadowRadius: 1,

    // elevation: 1,
    color: COLORS.primary,
  },
});
