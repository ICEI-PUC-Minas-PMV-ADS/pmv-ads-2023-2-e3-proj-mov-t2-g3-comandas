import React, { useRef } from 'react'
import { StyleSheet, View, FlatList, Image, useWindowDimensions, Animated, Touchable } from 'react-native';
import mydata from './sides'

export default function Slider() {
    const { width } = useWindowDimensions();
    const scrollX = useRef(new Animated.Value(0)).current

    return (
        <View style={styles.container}>
            <FlatList
                data={mydata}
                renderItem={({ item }) => (
                        <Image
                            source={{ uri: item.image }}
                            style={[styles.image, { width, resizeMode: 'contain' }]}
                        />
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
        height: '40%',
    },
    image: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
    },
});
