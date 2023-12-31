import React, { useRef, useEffect, useState } from 'react';

import {
    StyleSheet,
    View,
    FlatList,
    Image,
    useWindowDimensions,
    Animated,
    TouchableOpacity,
    Text,
} from 'react-native';

/* Existem 2 tipos de slider, o que a imagem ocupa a tela inteira e o que várias imagem são exibidas ao mesmo tempo. Paging define o tipo de slider (paging = true => slider de tela inteira) */

// data: array de objetos das imagens do slider (obrigatorio ter id, image(link da imagem), link(link para onde a imagem leva quandp clicada))

// iconsOnDisplay: quantidade de icones que aparecem na tela ao mesmo tempo (obrigatorio apenas no slider = false)

// ratioSize: proporção do icone (1/1 = icone quadrado, 16/9 = icone retangular) (obrigatorio apenas no slider = false)

// spacing: espaçamento entre os icones (opcional)

export default function Slider({
    paging,
    data,
    iconsOnDisplay,
    ratioSize,
    spacing,
}) {
    const { width, height } = useWindowDimensions();
    const scrollX = useRef(new Animated.Value(0)).current;
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleImagePress = (item) => {
        // eslint-disable-next-line no-alert, no-undef
        alert(
            `será redireconado para o subitem de "${item.title.toUpperCase()}"`,
        );
    };

    useEffect(() => {
        scrollX.addListener((event) => {
            const newIndex = Math.round(event.value / width);
            setCurrentIndex(newIndex);
        });

        return () => {
            scrollX.removeAllListeners();
        };
    }, [currentIndex, scrollX, width]);

    return (
        <View style={[styles.container, { marginVertical: 0.01 * height }]}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                pagingEnabled={paging}
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false },
                )}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => handleImagePress(item)}
                        activeOpacity={1}
                    >
                        {paging ? (
                            <Image
                                source={{ uri: item.image }}
                                style={[
                                    styles.image,
                                    {
                                        width: width * 0.95,
                                        height: (width * 7) / 16,
                                        marginHorizontal: 0.025 * width,
                                        resizeMode: 'contain',
                                    },
                                ]}
                            />
                        ) : (
                            <Image
                                source={{ uri: item.image }}
                                style={[
                                    styles.image,
                                    {
                                        width: (width * 1) / iconsOnDisplay,
                                        height:
                                            (width * 1) /
                                            iconsOnDisplay /
                                            ratioSize,
                                        marginHorizontal: spacing,
                                    },
                                ]}
                            />
                        )}
                        {!paging ? (
                            <Text style={styles.text}>{item.title}</Text>
                        ) : null}
                    </TouchableOpacity>
                )}
            />
            {paging && data.length > 1 ? (
                <FlatList
                    style={styles.dotContainer}
                    data={data}
                    renderItem={({ index }) => (
                        <Text
                            style={[
                                styles.dot,
                                {
                                    color:
                                        currentIndex === index
                                            ? '#8661ff'
                                            : '#aba9a9',
                                    fontSize: (10 / 101.34) * height - 62.17,
                                },
                            ]}
                        >
                            ●
                        </Text>
                    )}
                    horizontal
                />
            ) : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        marginVertical: 5,
        fontWeight: 'semibold',
        color: '#2e2b5e',
    },
});
