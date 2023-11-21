import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    Alert,
    ScrollView,
    SafeAreaView,
    StatusBar,
    useWindowDimensions,
    Platform,
} from "react-native";
import React, { useState } from "react";
import Button from "@/components/Button";
import { register } from "../../services/auth.service";
import COLORS from "../../constants/colors";
import icon from "../../assets/Comandas-icon.png";
import LoadingBSheet from "../../components/LoadingBSheet";

const inputFields = [
    { label: "País", key: "country", contentType: "countryName" },
    { label: "Estado", key: "state", contentType: "addressState" },
    { label: "Cidade", key: "city", contentType: "addressCity" },
    { label: "Bairro", key: "neighborhood" },
    { label: "Rua", key: "street" },
    { label: "Número", key: "number", keyboardType: "numeric" },
];

// TODO Fazer tela de login e logout e login persistente e puxar infos de outras telas baseado em userId do userContext

export default function CrewSignupAddress({ navigation, route }) {
    const { shopInfo, userInfo } = route.params;
    const { height } = useWindowDimensions();
    const [address, setAddress] = useState({
        number: "",
        street: "",
        city: "",
        state: "",
        country: "",
        neighborhood: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    function handleRegister() {
        if (
            Object.values(address).some(
                (value) => !value || value.toString().trim().length === 0,
            )
        ) {
            Alert.alert("Todos os campos devem ser preenchidos!");
        } else {
            setIsLoading(true);
            register({
                shopInfo: {
                    ...shopInfo,
                    tables: parseInt(shopInfo.tables, 10),
                },
                userInfo: {
                    ...userInfo,
                    phoneNumber: parseInt(userInfo.phoneNumber, 10),
                },
                addressInfo: {
                    ...address,
                    number: parseInt(address.number, 10),
                },
            })
                .then(() => {
                    navigation.navigate("Login");
                })
                .catch((error) => {
                    // eslint-disable-next-line default-case
                    switch (error?.response?.status) {
                        case 400:
                            Alert.alert("Todos campos devem ser preenchidos!");
                            break;
                        case 409:
                            Alert.alert(
                                "Usuário existente!",
                                "Um usuário com o mesmo Email já está cadastrado!",
                            );
                            break;
                    }
                })
                .finally(() => setIsLoading(false));
        }
    }

    return (
        <SafeAreaView
            style={{
                flex: 1,
                paddingTop:
                    Platform.OS === "android" ? StatusBar.currentHeight : 0,
                backgroundColor: COLORS.neutralWhite,
            }}
        >
            {isLoading ? (
                <LoadingBSheet
                    welcomeBackText="Conta Criada com Sucesso!"
                    route={() => navigation.navigate("Login")}
                />
            ) : null}

            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <Image source={icon} style={styles.imageStyle} />
                    </View>

                    {inputFields.map((field) => (
                        <View key={field.key}>
                            <Text style={styles.textLableInput}>
                                {field.label}
                            </Text>
                            <View style={styles.textInputWrapper}>
                                <TextInput
                                    placeholder={field.label}
                                    placeholderTextColor={
                                        COLORS.placeholderText
                                    }
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    style={styles.textInput}
                                    value={address[field.key]}
                                    onChangeText={(text) =>
                                        setAddress((prev) => ({
                                            ...prev,
                                            [field.key]:
                                                field.keyboardType === "numeric"
                                                    ? text.replace(
                                                          /[^0-9]/g,
                                                          "",
                                                      )
                                                    : text,
                                        }))
                                    }
                                    textContentType={
                                        field.contentType ?? "none"
                                    }
                                    keyboardType={field.keyboardType}
                                />
                            </View>
                        </View>
                    ))}

                    <View style={styles.checkbox}>
                        <Text
                            style={{
                                width: "100%",
                                fontFamily: "MontserratLight",
                                fontSize: 12,
                            }}
                        >
                            Registrando-se você concorda com os termos e
                            condições.
                        </Text>
                    </View>

                    <Button
                        title="Criar Conta"
                        filled
                        onPress={() => handleRegister()}
                        style={{
                            marginTop: height < 1300 ? "5%" : "35%",
                        }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 20,
        gap: 15,
    },
    imageStyle: {
        alignSelf: "center",
        height: 75,
        width: 75,
        aspectRatio: 1 / 1,
    },
    textInput: {
        width: "100%",
        backgroundColor: COLORS.neutralLightgray,
        padding: 10,
        borderRadius: 10,
        fontFamily: "MontserratRegular",
    },
    textInputWrapper: {
        justifyContent: "center",
    },
    textLableInput: {
        fontSize: 16,
        fontWeight: "400",
        marginVertical: 8,
    },
    eye: {
        position: "absolute",
        right: 15,
    },
    checkbox: {
        flexDirection: "row",
        marginVertical: 10,
        marginHorizontal: 22,
    },
    obsText: {
        fontSize: 12,
        color: COLORS.primary,
        flexDirection: "row",
        marginVertical: 10,
        lineHeight: 24,
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
    },
    textFooter: {
        fontSize: 16,
        color: COLORS.black,
    },
    textFooterLink: {
        fontSize: 16,
        color: COLORS.linkTextGreen,
        fontWeight: "bold",
    },
});
