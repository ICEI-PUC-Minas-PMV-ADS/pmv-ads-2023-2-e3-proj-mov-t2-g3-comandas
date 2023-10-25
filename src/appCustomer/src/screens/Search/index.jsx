import axios from 'axios';
import React, { useState } from 'react';
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
import SearchBtn from '../../assets/SearchIcon.svg';

export default function Search() {
  const [isLoading, setIsLoading] = useState(false);
  const [text, onChangeText] = React.useState('');
  const [searchResults, setSearchResults] = useState([]);

  const fetchResults = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`${BASE_URL}shop/list`, {
        headers: {
          'x-api-key': API_KEY,
          Authorization: ADMIN_TOKEN,
        },
      });

      setSearchResults(data);
      setIsLoading(false);
    } catch (e) {
      // eslint-disable-next-line no-undef
      alert(e);
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.searchContainer,
          backgroundColor: isLoading ? COLORS.grey : COLORS.neutrlWhite,
        }}
      >
        <TouchableOpacity onPress={() => fetchResults()} disabled={isLoading}>
          {isLoading ? (
            <ActivityIndicator color={COLORS.primary} />
          ) : (
            <SearchBtn
              style={{
                tintColor: isLoading ? COLORS.neutrlWhite : null,
              }}
            />
          )}
        </TouchableOpacity>
        <TextInput
          style={styles.searchbar}
          onChangeText={onChangeText}
          value={text}
          placeholder="Buscar"
          editable={!isLoading}
          onSubmitEditing={(event) => fetchResults(event.nativeEvent.text)}
        />
      </View>
      <View style={styles.viewResults}>
        <FlatList
          data={searchResults}
          contentContainerStyle={{ gap: 20, padding: 15 }}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              activeOpacity={0.5}
              key={item.user_id}
              style={styles.cardContainer}
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
                    {Number(3 + Math.random() * 2).toPrecision(2)}
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
    height: 60,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
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
    backgroundColor: COLORS.neutrlWhite,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,

    elevation: 2,
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
    color: COLORS.semanticYellow,
  },
});
