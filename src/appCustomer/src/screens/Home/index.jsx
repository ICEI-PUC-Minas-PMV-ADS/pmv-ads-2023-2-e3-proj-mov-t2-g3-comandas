import React from 'react';
import {
    StyleSheet,
    ScrollView,
    SafeAreaView,
    StatusBar,
    Image
} from 'react-native';
import TopBar from '../../components/TopBar/Index';
import BottomBar from '../../components/BottomBar/Index';
import Slider from '../../components/Slider/Index'

export default function Home({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <TopBar navigation={navigation} />
            <ScrollView style={{ width: '100%' }}
                contentContainerStyle={styles.scrollContent}
            >
                <Slider />
            </ScrollView>
            <BottomBar />
            <StatusBar />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    img: {
        height: 300
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    scrollContent: {
        flexGrow: 1, // Permite que o ScrollView cresça para preencher o espaço disponível
    },
    main: {
        width: '100%',
        alignItems: 'center',
    },
    banner: {
        width: '92%',
        height: 200,
        marginTop: 10,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    logo: {
        width: 150,
        height: 150,
    },
    search: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: 'orange',
        padding: 10,
    }
});
