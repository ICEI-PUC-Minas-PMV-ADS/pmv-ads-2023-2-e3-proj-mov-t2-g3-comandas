import React from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput } from 'react-native';

import SearchIcon from '../../assets/SearchIcon.svg';
import MiniQr from '../../assets/MiniQrCode.svg';
import Alarm from '../../assets/alarm.svg';

export default function TopBar({ navigation }) {
    const [text, onChangeText] = React.useState('');

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TouchableOpacity>
                    <SearchIcon />
                </TouchableOpacity>
                <TextInput
                    style={styles.searchbar}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Buscar"
                />
            </View>
            <View style={styles.icons}>
                <TouchableOpacity onPress={() => navigation.navigate('Scan')}>
                    <MiniQr />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Notifications')}
                >
                    <Alarm />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 70,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 10,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icons: {
        width: '20%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    searchbar: {
        width: '60%',
        height: '100%',
        paddingLeft: 20,
    },
});
