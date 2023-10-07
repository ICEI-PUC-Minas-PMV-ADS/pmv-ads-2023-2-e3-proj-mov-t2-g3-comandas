import React, { useRef } from 'react';
import { StyleSheet, View, FlatList, Image, useWindowDimensions, Animated, TouchableOpacity, Text } from 'react-native';
import mydata from './sides';

export default function Slider() {
    const { width } = useWindowDimensions();
    const scrollX = useRef(new Animated.Value(0)).current;

    const handleImagePress = () => {
        alert('Imagem clicada!'); // Exibe um alerta quando a imagem for clicada
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={mydata}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={handleImagePress} activeOpacity={1}>
                        <Image
                            source={{ uri: item.image }}
                            style={[styles.image, { width, resizeMode: 'contain' }]}
                        />
                    </TouchableOpacity>

                )}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                pagingEnabled
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                    useNativeDriver: false
                })}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    image: {
        height: 250,
        justifyContent: 'center',
    },
});
