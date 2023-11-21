import {
    View,
    Text,
    Image,
    Pressable,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    StatusBar,
    useWindowDimensions,
    Platform,
    Alert,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../../constants/colors";
import icon from "../../assets/Comandas-icon.png";
import Button from "../../components/Button";

const inputFields = [
    { label: "Nome", key: "name", contentType: "name" },
    { label: "Email", key: "email", contentType: "emailAddress" },
    { label: "Senha", key: "password", contentType: "password" },
    {
        label: "Telefone",
        key: "phoneNumber",
        keyboardType: "numeric",
        maxLength: 11,
    },
    { label: "Turno", key: "turno", contentType: "turno" },
];

const initialState = {
    name: "",
    email: "",
    password: "",
    phoneNumber: null,
};

export default function AdmSignup({ navigation }) {
    const [form, setForm] = useState(initialState);
    const [isPasswordHide, setIsPasswordHide] = useState(true);
    const { height } = useWindowDimensions();

    const navigateToSignupAddress = () => {
        if (
            Object.values(form).some(
                (value) => !value || value.toString().trim().length === 0,
            )
        ) {
            Alert.alert("Todos os campos devem ser preenchidos!");
        } else {
            navigation.navigate("SignupAddress", {
                userInfo: {
                    name: form.name,
                    password: form.password,
                    email: form.email,
                    phoneNumber: form.phoneNumber,
                },
            });
        }
    };

    return (
        <SafeAreaView
            style={{
                flex: 1,
                paddingTop:
                    Platform.OS === "android" ? StatusBar.currentHeight : 0,
                backgroundColor: COLORS.neutralWhite,
            }}
        >
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <Image source={icon} style={styles.imageStyle} />
                    </View>
                    <View>
                        <Text style={styles.textHeader}>
                            Cadastro de Novo Membro da Equipe
                        </Text>
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
                                    keyboardType={field.keyboardType}
                                    secureTextEntry={
                                        field.key === "password" &&
                                        isPasswordHide
                                    }
                                    style={styles.textInput}
                                    value={form[field.key]}
                                    textContentType={
                                        field.contentType ?? "none"
                                    }
                                    maxLength={field.maxLength}
                                    onChangeText={(text) =>
                                        setForm((prev) => ({
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
                                />

                                {field.key === "password" && (
                                    <TouchableOpacity
                                        onPress={() =>
                                            setIsPasswordHide((prev) => !prev)
                                        }
                                        style={styles.eye}
                                    >
                                        <Ionicons
                                            name={
                                                isPasswordHide
                                                    ? "eye"
                                                    : "eye-off"
                                            }
                                            size={24}
                                            color={COLORS.placeholderText}
                                        />
                                    </TouchableOpacity>
                                )}
                            </View>
                        </View>
                    ))}

                    <Button
                        title="Prosseguir"
                        filled
                        onPress={navigateToSignupAddress}
                        style={{ marginTop: height < 1300 ? "5%" : "35%" }}
                    />

                    <View style={styles.footer}>
                        <Text style={styles.textFooter}>
                            Já tem uma conta? Então{" "}
                        </Text>
                        <Pressable onPress={() => navigation.navigate("Login")}>
                            <Text style={styles.textFooterLink}>
                                faça login.
                            </Text>
                        </Pressable>
                    </View>
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
    textHeader: {
        fontSize: 16,
        fontWeight: "400",
        marginVertical: 8,
        alignSelf: "center",
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
