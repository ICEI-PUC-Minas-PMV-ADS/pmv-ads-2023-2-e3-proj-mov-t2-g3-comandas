import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import COLORS from '@/constants/colors';
import TopBar from '../../components/TopBar/Index';
import BottomBar from '../../components/BottomBar/Index';
import Slider from '../../components/Slider/Index';
import Topic from '../../components/Topic/Index';

import voucherSlides from '../../assets/arrays/vouchers';
import bannerSlides from '../../assets/arrays/bannerSlides';
import categoriesSlides from '../../assets/arrays/categoriesSlides';

export default function Home({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <TopBar navigation={navigation} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ width: '100%' }}
                contentContainerStyle={styles.scrollContent}
            >
                <Slider paging data={bannerSlides} />
                <Slider
                    paging={false}
                    iconsOnDisplay={5}
                    ratioSize={1 / 1}
                    spacing={4}
                    data={categoriesSlides}
                />
                <Topic data={voucherSlides} title="Entrega Grátis" />
                <Topic data={voucherSlides} title="Favoritos" />
            </ScrollView>
            <BottomBar navigation={navigation} />
            <StatusBar />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    img: {
        height: 300,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLORS.neutralWhite,
    },
    scrollContent: {
        flexGrow: 1, // Permite que o ScrollView cresça para preencher o espaço disponível
    },
    main: {
        width: '100%',
        alignItems: 'center',
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
    },
});
