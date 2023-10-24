import axios from 'axios';
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
} from 'react-native';

// eslint-disable-next-line import/no-unresolved
import { BASE_URL, API_KEY, ADMIN_TOKEN } from '@env';
import SearchIcon from '../../assets/SearchIcon.svg';

export default function Search() {
    const [text, onChangeText] = React.useState('');
    const [searchResults, setSearchResults] = useState([]);

    const fetchResults = async () => {
        try {
            const { data } = await axios.get(`${BASE_URL}item/list`, {
                headers: {
                    'x-api-key': API_KEY,
                    Authorization: ADMIN_TOKEN,
                },
            });

            const results = data.filter((item) =>
                item.name.toLowerCase().includes(text.toLowerCase()),
            );

            setSearchResults(results);
        } catch (e) {
            // eslint-disable-next-line no-alert, no-undef
            alert(e);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TouchableOpacity onPress={() => fetchResults()}>
                    <SearchIcon />
                </TouchableOpacity>
                <TextInput
                    style={styles.searchbar}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Buscar"
                />
            </View>
            <View style={styles.viewResults}>
                {searchResults &&
                    searchResults.map((item) => (
                        <Text key={item.id}>{item.name}</Text>
                    ))}
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
        backgroundColor: 'lightblue',
    },
});
