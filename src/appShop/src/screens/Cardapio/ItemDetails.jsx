import COLORS from "@/constants/colors";
import React, { useEffect, useState } from "react";
import {
    ScrollView,
    Text,
    SafeAreaView,
    StyleSheet,
    Image,
    useWindowDimensions,
    View,
    TouchableOpacity,
    TextInput,
    Alert,
} from "react-native";
// eslint-disable-next-line import/no-unresolved
import { BASE_URL, API_KEY, ADMIN_TOKEN } from "@env";
import CurrencyInput from "react-native-currency-input";
import axios from "axios";
import { useUser } from "@/context/UserContext";
import BannerPlaceholder from "../../assets/ItemBannerPlaceholder.svg";

export default function ItemDetails({ navigation, route }) {
    const item = route.params?.item ?? null;
    const { width, height } = useWindowDimensions();
    const [name, setName] = useState(item?.name ?? "");
    const [description, setDescription] = useState(item?.description ?? "");
    const [price, setPrice] = useState(item?.price ?? 0);
    const { user } = useUser();

    const shopId = user.userInfo.id;

    async function handleAdd() {
        if (
            !name ||
            name.trim().length <= 0 ||
            !description ||
            description.trim().length <= 0 ||
            !price ||
            price.toString().trim().length <= 0
        ) {
            // eslint-disable-next-line no-alert, no-undef
            Alert.alert("Preencha todos os campos!");
        } else {
            try {
                await axios.post(
                    `${BASE_URL}/item/create`,
                    { name, price, shopId, description: description.trim() },
                    {
                        headers: {
                            Authorization: ADMIN_TOKEN,
                            "x-api-key": API_KEY,
                        },
                    },
                );

                // eslint-disable-next-line no-alert, no-undef
                Alert.alert(`${name} criado !`);
            } catch (error) {
                console.log(
                    `ERROR IN handleAdd => [${
                        error?.response?.status
                    }]\n ${JSON.stringify(error?.response?.data, null, 2)}`,
                );
                throw error;
            } finally {
                navigation.goBack();
            }
        }
    }

    async function handleEdit(itemId) {
        if (
            !name ||
            name.trim().length <= 0 ||
            !description ||
            description.trim().length <= 0 ||
            !price ||
            price.toString().trim().length <= 0
        ) {
            // eslint-disable-next-line no-alert, no-undef
            alert("Preencha todos os campos!");
        } else {
            try {
                await axios.put(
                    `${BASE_URL}/item/update`,
                    { id: itemId, name, price, description },
                    {
                        headers: {
                            Authorization: ADMIN_TOKEN,
                            "x-api-key": API_KEY,
                        },
                    },
                );

                // eslint-disable-next-line no-alert, no-undef
                alert(`Item ${name} modificado !`);
            } catch (error) {
                console.log(error);
            } finally {
                navigation.goBack();
            }
        }
    }

    async function handleDelete(itemId) {
        try {
            await axios.delete(`${BASE_URL}/item/delete/${itemId}`, {
                headers: { Authorization: ADMIN_TOKEN, "x-api-key": API_KEY },
            });

            // eslint-disable-next-line no-alert, no-undef
            alert(`Item ${name} excluído !`);
        } catch (error) {
            console.log(error);
        } finally {
            navigation.goBack();
        }
    }

    // Escondendo a header do drawer
    useEffect(() => {
        navigation.getParent()?.setOptions({
            headerShown: false,
        });
        return () =>
            navigation.getParent()?.setOptions({
                headerShown: true,
            });
    }, [navigation]);

    return (
        <SafeAreaView
            style={styles.container}
            // Ao tocar no background esconda o modal
            onTouchEnd={() => navigation.goBack()}
        >
            <ScrollView
                onTouchEnd={(e) => e.stopPropagation()}
                style={styles.wrapper(height)}
                showsVerticalScrollIndicator={false}
            >
                <TouchableOpacity
                    style={styles.modalClose}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.modalCloseText}>X</Text>
                </TouchableOpacity>
                {item?.image ? (
                    <Image
                        source={item?.image}
                        style={styles.modalBanner(width)}
                    />
                ) : (
                    <View style={styles.modalBannerPlaceholder(width)}>
                        <BannerPlaceholder />
                    </View>
                )}
                <View style={{ padding: 16, gap: 15 }}>
                    <TextInput
                        placeholder="Nome"
                        cursorColor={COLORS.primary}
                        autoFocus
                        style={styles.itemTitle}
                        value={name}
                        onChangeText={(text) => setName(text)}
                        multiline
                    />
                    <TextInput
                        placeholder="Descrição"
                        cursorColor={COLORS.primary}
                        style={styles.itemDescription}
                        value={description}
                        onChangeText={setDescription}
                        multiline
                    />

                    <CurrencyInput
                        cursorColor={COLORS.primary}
                        style={styles.itemPrice}
                        value={price}
                        onChangeValue={(val) =>
                            val && val.toString().length !== 0
                                ? setPrice(val)
                                : setPrice(0)
                        }
                        prefix="R$ "
                        delimiter="."
                        separator=","
                        precision={2}
                    />

                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <TouchableOpacity
                            style={styles.modalAddCart}
                            onPress={() => {
                                if (item) handleEdit(item.id);
                                else {
                                    handleAdd();
                                }
                            }}
                        >
                            <Text style={styles.modalTotalCart}>
                                {item ? "Salvar" : "Criar"}
                            </Text>
                        </TouchableOpacity>

                        {item ? (
                            <TouchableOpacity
                                style={styles.modalExcludeContainer}
                                onPress={() => {
                                    Alert.alert(
                                        "Atenção !",
                                        "Essa ação não pode ser revertida.",
                                        [
                                            {
                                                text: "Confirmar",
                                                onPress: () =>
                                                    handleDelete(item.id),
                                            },
                                            {
                                                text: "Cancelar",
                                                style: "cancel",
                                            },
                                        ],
                                        { cancelable: true },
                                    );
                                }}
                            >
                                <Text style={styles.modalExcludeCart}>
                                    Excluir
                                </Text>
                            </TouchableOpacity>
                        ) : null}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.7)",
        justifyContent: "center",
        alignItems: "center",
    },
    wrapper: (height) => ({
        width: "90%",
        maxHeight: height * 0.8,
        flexGrow: 0,
        backgroundColor: COLORS.neutralWhite,
        borderRadius: 20,
    }),
    itemTitle: {
        fontFamily: "MontserratBold",
        fontSize: 22,
        color: COLORS.secondary,
    },
    itemDescription: {
        textAlign: "left",
        fontFamily: "MontserratSemiBold",
        fontSize: 14,
        color: COLORS.neutralBlue,
    },
    itemPrice: {
        textAlign: "left",
        fontFamily: "MontserratBold",
        fontSize: 14,
        color: COLORS.iconGreen,
    },
    modalClose: {
        position: "absolute",
        zIndex: 100,
        right: 10,
        top: 10,
        width: 25,
        height: 25,
        backgroundColor: COLORS.neutralWhite,
        borderRadius: 999,
        borderTopRightRadius: 450,
        justifyContent: "center",
        alignItems: "center",
    },
    modalCloseText: {
        fontFamily: "MontserratBold",
        color: COLORS.primary,
        textAlign: "center",
    },
    modalBanner: (width) => ({
        width,
        resizeMode: "cover",
        borderTopLeftRadius: 20,
        aspectRatio: 16 / 10,
        height: 210,
    }),
    modalBannerPlaceholder: (width) => ({
        backgroundColor: COLORS.neutralLightGrey,
        height: 100,
        width,
        borderTopLeftRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    }),
    modalPlus: {
        backgroundColor: COLORS.primary,
        borderRadius: 999,
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    modalMinus: {
        backgroundColor: COLORS.neutralMiddGrey,
        borderRadius: 999,
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    modalQuantity: {
        color: COLORS.primary,
        fontFamily: "MontserratBold",
        textAlign: "center",
        margin: 10,
        fontSize: 16,
    },
    modalAddCart: {
        backgroundColor: COLORS.primary,
        padding: 15,
        borderRadius: 15,
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
    modalExcludeContainer: {
        padding: 15,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: COLORS.primary,
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
    modalTotalCart: {
        fontFamily: "MontserratBold",
        color: COLORS.neutralWhite,
        textAlign: "center",
        fontSize: 16,
    },
    modalExcludeCart: {
        fontFamily: "MontserratSemiBold",
        color: COLORS.primary,
        textAlign: "center",
        fontSize: 16,
    },
});
