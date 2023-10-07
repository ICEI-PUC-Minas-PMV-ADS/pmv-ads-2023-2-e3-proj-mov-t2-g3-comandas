import React, { useRef } from 'react';
import { StyleSheet, View, FlatList, Image, useWindowDimensions, Animated, TouchableOpacity, Text } from 'react-native';

//data: array de objetos dos icones (obrigatorio ter id, image, link)
//iconsOnDisplay: quantidade de icones que aparecem na tela ao mesmo tempo
//ratioSize: proporção do icone (1/1 = icone quadrado, 16/9 = icone retangular)
//spacing: espaçamento entre os icones

export default function Slider({ paging, data, iconsOnDisplay, ratioSize, spacing }) {
    const { width, height } = useWindowDimensions();
    const scrollX = useRef(new Animated.Value(0)).current;

    const handleImagePress = () => {
        alert('Imagem clicada!'); // Exibe um alerta quando a imagem for clicada
    };

    return (
        <View style={[styles.container, { marginVertical: .005 * height }]}>
            <FlatList
                data={data}
                renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={handleImagePress} activeOpacity={1}>
                        {
                            paging ?
                                <Image
                                    source={{ uri: item.image }}
                                    style={[styles.image, { width, height: width * 9 / 16, resizeMode: 'contain' }]}
                                /> :
                                <Image
                                    source={{ uri: item.image }}
                                    style={[styles.image, {
                                        width: width * 1 / iconsOnDisplay,
                                        height: width * 1 / iconsOnDisplay / ratioSize,
                                        marginHorizontal: spacing,
                                    }]}
                                />
                        }
                        {
                            paging ?
                                null : //bolinhas de slider
                                <Text style={styles.text}>{data[index].title}</Text>
                        }
                    </TouchableOpacity>

                )}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                pagingEnabled={paging}
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
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
        marginVertical: 5,
        fontWeight: 'semibold',
        color: '#2e2b5e',
    }
});
