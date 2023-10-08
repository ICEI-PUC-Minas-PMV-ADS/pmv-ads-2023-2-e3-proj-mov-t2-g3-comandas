import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, useWindowDimensions, Text, Image, TouchableOpacity, FlatList, Animated } from 'react-native';
import Voucher from '../Voucher/Index';

export default function Topic({ data }) {
    const { width } = useWindowDimensions();
    const scrollViewRef = useRef(null);
    const scrollX = useRef(new Animated.Value(0)).current;
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleImagePress = (item) => {
        alert('Será redirecionado para o subitem de "' + item.title.toUpperCase() + '"');
    };

    const scrollToRight = () => {
        if (currentIndex < data.length - 1 && data.length != 1) {
            const newIndex = currentIndex + 1;
            setCurrentIndex(newIndex);
            const newX = newIndex * width;
            scrollViewRef.current.scrollToOffset({ offset: newX, animated: true });
        } else {
            // Se estiver na última imagem, volte para a primeira imagem
            setCurrentIndex(0);
            scrollViewRef.current.scrollToOffset({ offset: 0, animated: true });
        }
    };

    useEffect(() => {
        scrollX.addListener((event) => {
            const newIndex = Math.round(event.value / width);
            setCurrentIndex(newIndex);
        });

        const scrollInterval = setInterval(() => {
            scrollToRight();
        }, 6500);

        return () => {
            clearInterval(scrollInterval);
            scrollX.removeAllListeners();
        };
    }, [currentIndex]);

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Programa Fidelidade</Text>
                <TouchableOpacity>
                    <Text style={styles.seeMore}>Ver Mais</Text>
                </TouchableOpacity>
            </View>
            <View>
                <FlatList
                    ref={scrollViewRef}
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                        useNativeDriver: false
                    })}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={() => handleImagePress(item)} activeOpacity={1}>
                            <Image
                                source={{ uri: item.image }}
                                style={[styles.image, { width, height: width * 9 / 16, resizeMode: 'contain' }]}
                            />
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    },
    textContainer: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2e2b5e'
    },
    seeMore: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#f3484f'
    }
});
