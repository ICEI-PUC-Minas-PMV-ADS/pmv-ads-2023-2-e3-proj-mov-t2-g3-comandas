import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native';
// eslint-disable-next-line import/no-unresolved
import { BASE_URL, API_KEY, ADMIN_TOKEN } from '@env';
import COLORS from '@/constants/colors';
import SearchBtn from '../../assets/SearchIcon.svg';
import ClearBtn from '../../assets/Clear.svg';
import Select from './Select';
import ResultCard from './ResultCard';

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
      if (text || state || city || category) {
        setIsLoading(true);

        const { data } = await axios.get(
          `${BASE_URL}shop/list?${text ? `search=${text}` : ''}${
            state ? `&state=${state}` : ''
          }${city ? `&city=${city}` : ''}${
            category ? `&categories=${category}` : ''
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
      alert(e);
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
            <ResultCard index={index} item={item} navigation={navigation} />
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
});
