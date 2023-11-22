import colors from "@/constants/colors";
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
            { id: "idade", icon: "git-commit", label: "Desde", type: "input" },
            {
                id: "sobre",
                icon: "edit-3",
                label: "Escreva sobre a Empresa",
                type: "input",
            },
        ],
    },
    {
        header: "Sugestão",
        icon: "edit",
        items: [
            { id: "name", icon: "user", label: "Nome", type: "input" },
            { id: "email", icon: "mail", label: "Email", type: "input" },
            {
                id: "sugestao",
                icon: "edit",
                label: "Escreva sua Sugestão",
                type: "input",
            },
        ],
    },
    {
        header: "Comentário",
        icon: "edit",
        items: [
            { id: "name", icon: "user", label: "Nome", type: "input" },
            { id: "email", icon: "mail", label: "Email", type: "input" },
            {
                id: "comentario",
                icon: "edit",
                label: "Escreva seu Comentário",
                type: "input",
            },
        ],
    },
];

function About() {
    const navigation = useNavigation();
    const { user } = useUser();
    const [isLoading, setIsLoading] = useState(false);
    const { height } = useWindowDimensions();
    const [form] = React.useState({
        id: user.userInfo.id,
        name: user.userInfo.name,
        email: user.userInfo.email,
    });
    const [value, setValue] = React.useState(0);
    const [onChangeText] = React.useState();
    const { tabs, items } = React.useMemo(
        () => ({
            tabs: SECTIONS.map(({ header }) => ({
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
                        Se você tem alguma{" "}
                        <Text
                            style={{ color: colors.primary, fontWeight: "500" }}
                        >
                            dúvida, sugestão, comentário ou reclamação,
                        </Text>{" "}
                        por favor, escreva abaixo e envie à nossa equipe.
                        Teremos todo o prazer em atendê-lo naquilo que for
                        possível. {"\n"}
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
                                                style={{ padding: 8 }}
                                                name={icon}
                                                size={18}
                                                color={colors.placeholderText}
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
                                    color={colors.placeholderText}
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
                            height={90}
                            maxLength={250}
                            onChangeText={(text) => onChangeText(text)}
                            value={value}
                            style={{ padding: 10 }}
                        />
                    </View>
                    {/* >>>>>>>>>> Send Button <<<<<<<<<<<< */}
                    <View>
                        <TouchableOpacity
                            style={{ marginTop: height / 11 }}
                            onPress={() => {
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
        position: "relative",
        overflow: "hidden",
    },
    tabText: {
        fontSize: 15,
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
