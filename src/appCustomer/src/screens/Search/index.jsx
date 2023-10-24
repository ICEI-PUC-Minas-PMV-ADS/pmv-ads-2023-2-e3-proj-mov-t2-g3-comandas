import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';
import React, { useCallback, useState } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  SafeAreaView,
  TextInput,
  View,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native';
// eslint-disable-next-line import/no-unresolved
import { BASE_URL, API_KEY, ADMIN_TOKEN } from '@env';
import COLORS from '@/constants/colors';
import searchBtn from '../../assets/search_blue.png';

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
      console.log(JSON.stringify(data, null, 2));
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
            <Image
              source={searchBtn}
              style={{ tintColor: isLoading ? COLORS.neutrlWhite : null }}
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
          renderItem={({ item, index }) => <Text>{item.name}</Text>}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          fadingEdgeLength={50}
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
    // backgroundColor: 'lightblue',
  },
});
