import colors from "@/constants/colors";
import * as SecureStore from "expo-secure-store";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    useWindowDimensions,
    TextInput,
} from "react-native";
import React, { useState } from "react";
import { useUser } from "@/context/UserContext";
import { useNavigation } from "@react-navigation/native";
import FeatherIcon from "react-native-vector-icons/Feather";
import LoadingBSheet from "@/components/LoadingBSheet/index";

const SECTIONS = [
    {
        header: "Sobre",
        icon: "book",
        items: [
            { id: "name", icon: "user", label: "Nome", type: "input" },
            {
                id: "phoneNumber",
                icon: "phone",
                label: "Contato",
                type: "input",
            },
            {
                id: "sobre",
                icon: "edit-3",
                label: "Escreva sobre a Empresa",
                type: "input",
            },
        ],
    },
    {
        header: "Localização",
        icon: "map",
        items: [
            { id: "street", icon: "", label: "Rua", type: "input" },
            { id: "number", icon: "", label: "No", type: "input" },
            { id: "city", icon: "", label: "Cidade", type: "input" },
            { id: "state", icon: "", label: "Estado", type: "input" },
            { id: "country", icon: "", label: "País", type: "input" },
        ],
    },
    {
        header: "Horários",
        icon: "clock",
        items: [
            {
                id: "01",
                icon: "sun",
                label: "Almoço - 8:00 -> 16:00",
                type: "toggle",
            },
            {
                id: "02",
                icon: "moon",
                label: "Jantar - 17:00 -> 23:00",
                type: "toggle",
            },
        ],
    },
];

export const saveSecurely = async (key, value) => {
    try {
        const jsonValue = JSON.stringify.onChangeText(value);
        await SecureStore.setItemAsync(key, jsonValue);
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const fetchSecurely = async (key) => {
    try {
        const jsonValue = await SecureStore.getItemAsync.onChangeText(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

function About() {
    const navigation = useNavigation();
    const { user } = useUser();
    const [isLoading, setIsLoading] = useState(false);
    const { height } = useWindowDimensions();
    const [form] = React.useState({
        id: user.userInfo.id,
        name: user.userInfo.name,
        email: user.userInfo.email,
        phoneNumber: user.userInfo.phoneNumber,
        number: user.addressInfo.number,
        street: user.addressInfo.street,
        city: user.addressInfo.city,
        state: user.addressInfo.state,
        country: user.addressInfo.country,
        neighborhood: user.addressInfo.neighborhood,
    });
    const [value, setValue] = React.useState(0);
    const [onChangeText] = React.useState();

    const { tabs, items } = React.useMemo(
        () => ({
            tabs: SECTIONS.map(({ header, icon }) => ({
                icon,
                header,
            })),
            items: SECTIONS[value].items,
        }),
        [value],
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                {isLoading ? (
                    <LoadingBSheet
                        headerText="Carregando..."
                        route={() => navigation.navigate("AdmNavMenu")}
                    />
                ) : null}

                <View>
                    <Text style={styles.headerName}>Sobre a Empresa</Text>
                </View>
                <View>
                    <Text style={styles.headerText}>
                        {"   "}
                        Esta área é dedicada à formação da página de Perfíl da
                        Empresa na Aplicação destinada aos Consumidores. Escreva
                        abaixo nos campos{" "}
                        <Text
                            style={{ color: colors.primary, fontWeight: "500" }}
                        >
                            Sobre a Empresa, Localização da Empresa & Horários
                            de Funcionamento.
                        </Text>{" "}
                        {"\n"}
                    </Text>
                </View>

                {/* >>>>>>>>>>Body<<<<<<<<<<<< */}
                <View style={styles.content}>
                    <View style={styles.tabs}>
                        {tabs.map(({ icon, header }, index) => {
                            const isActive = value === index;

                            return (
                                <View
                                    key={index}
                                    style={[
                                        styles.tabWrapper,
                                        isActive && {
                                            borderBottomColor: colors.primary,
                                        },
                                    ]}
                                >
                                    <TouchableOpacity
                                        onPress={() => setValue(index)}
                                    >
                                        <View style={styles.tab}>
                                            <FeatherIcon
                                                style={{
                                                    color: isActive
                                                        ? colors.primary
                                                        : colors.grayDark,
                                                }}
                                                name={icon}
                                                size={16}
                                            />
                                            <Text
                                                style={
                                                    (styles.tabText,
                                                    {
                                                        color: isActive
                                                            ? colors.primary
                                                            : colors.grayDark,
                                                    })
                                                }
                                            >
                                                {header}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            );
                        })}
                    </View>
                    {items.map(({ label, type, id, icon }, index) => (
                        <View key={index} style={styles.rowWrapper}>
                            <View style={styles.row}>
                                <FeatherIcon
                                    style={{ padding: 8 }}
                                    name={icon}
                                    size={18}
                                    color={colors.grayDark}
                                />
                                <Text style={styles.rowLabel}>{label}</Text>

                                <View style={{ flex: 1 }} />
                                {type === "input" && (
                                    <Text style={styles.rowValue}>
                                        {form[id]}
                                    </Text>
                                )}
                            </View>
                        </View>
                    ))}
                    <View style={styles.textInput}>
                        <TextInput
                            editable
                            multiline
                            numberOfLines={12}
                            height={50}
                            maxLength={250}
                            placeholderText={() => fetchSecurely("")}
                            onChangeText={onChangeText}
                            value={value}
                            style={{ padding: 10 }}
                        />
                    </View>
                    {/* >>>>>>>>>> Send Button <<<<<<<<<<<< */}
                    <View>
                        <TouchableOpacity
                            style={{
                                marginTop: height < 1300 ? "5%" : "35%",
                            }}
                            onPress={() => {
                                saveSecurely();
                                setIsLoading(true);
                            }}
                        >
                            <View style={styles.btnAction}>
                                <Text style={styles.btnActionText}>Salvar</Text>
                                <FeatherIcon
                                    name="save"
                                    size={16}
                                    color={colors.white}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default About;

const styles = StyleSheet.create({
    scrollContent: {
        flexGrow: 1,
    },
    container: {
        paddingVertical: 20,
        flexGrow: 1,
        textAlign: "justify",
    },
    header: {
        flex: 1,
        textAlign: "justify",
        backgroundColor: colors.white,
        padding: 18,
        justifyContent: "center",
        marginBottom: -20,
    },
    headerName: {
        marginVertical: 16,
        marginHorizontal: 24,
        fontSize: 22,
        fontWeight: "700",
        color: colors.primary,
        textAlign: "center",
    },
    headerText: {
        textAlign: "justify",
        color: colors.grayDark,
        marginVertical: 20,
        marginHorizontal: 24,
        fontSize: 17,
        fontWeight: "400",
        lineHeight: 22,
    },
    content: {
        backgroundColor: colors.white,
    },
    tabs: {
        flexDirection: "row",
        padding: 8,
    },
    tabWrapper: {
        flex: 1,
        borderBottomWidth: 2,
        borderColor: colors.grayDark,
    },
    tab: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10,
        paddingHorizontal: 10,
        position: "relative",
        overflow: "hidden",
    },
    tabText: {
        fontSize: 18,
        fontWeight: "600",
        color: colors.placeholderText,
    },
    rowWrapper: {
        borderTopWidth: 0.2,
        borderColor: colors.grayDark,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 24,
        height: 50,
    },
    rowLabel: {
        fontSize: 16,
        fontWeight: "500",
        color: colors.placeholderText,
    },
    rowValue: {
        fontSize: 16,
        fontWeight: "500",
        color: colors.primary,
        marginRight: 4,
    },
    textInput: {
        backgroundColor: colors.white,
    },
    btnAction: {
        marginHorizontal: 12,
        marginVertical: 30,
        paddingVertical: 10,
        paddingHorizontal: 12,
        flexDirection: "row",
        backgroundColor: colors.primary,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
    },
    btnActionText: {
        fontSize: 18,
        fontWeight: "600",
        color: colors.white,
        marginRight: 8,
    },
});
