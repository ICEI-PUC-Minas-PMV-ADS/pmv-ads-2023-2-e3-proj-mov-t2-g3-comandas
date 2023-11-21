import colors from "@/constants/colors";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    Image,
    TouchableOpacity,
    Switch,
    TextInput,
} from "react-native";
import React, { useState, useMemo } from "react";
import { useUser } from "@/context/UserContext";
import FeatherIcon from "react-native-vector-icons/Feather";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SECTIONS = [
    {
        header: "Dados da Loja",
        icon: "settings",
        items: [
            { id: "id", icon: "bookmark", label: "Id", type: "input" },
            { id: "name", icon: "user", label: "Nome", type: "input" },
            { id: "email", icon: "mail", label: "Email", type: "input" },
            {
                id: "phoneNumber",
                icon: "phone",
                label: "Celular",
                type: "input",
            },
        ],
    },
    {
        header: "Turnos",
        icon: "clock",
        items: [
            {
                id: "01",
                icon: "bell",
                label: "Almoço - 8:00 -> 16:00",
                type: "toggle",
            },
            {
                id: "02",
                icon: "bell",
                label: "Jantar - 17:00 -> 23:00",
                type: "toggle",
            },
        ],
    },
];

export default function CrewList() {
    const { user } = useUser();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState(null);

    const [form, setForm] = useState({
        id: user.userInfo.id,
        name: user.userInfo.name,
        email: user.userInfo.email,
        phoneNumber: user.userInfo.phoneNumber,
    });
    const [value, setValue] = useState(0);
    const { tabs, items } = useMemo(
        () => ({
            tabs: SECTIONS.map(({ header, icon }) => ({
                header,
                icon,
            })),
            items: SECTIONS[value].items,
        }),
        [value],
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.container}>
                {/* >>>>>>>>>>header<<<<<<<<<<<< */}
                <View style={styles.header}>
                    <Text style={styles.title}>Equipe Disponível</Text>
                    <Text style={styles.subtitle}>
                        Gerencie aqui os membros da sua Equipe.
                    </Text>
                </View>
                {/* >>>>>>>>>>Edit Head<<<<<<<<<<<< */}
                <View style={styles.profile}>
                    <View style={styles.profileHeader}>
                        <View style={styles.profileHeader}>
                            <MaterialCommunityIcons
                                name="chef-hat"
                                size={30}
                                color={colors.iconGreen}
                                style={styles.profileAction}
                            />
                            <Text style={styles.profileName}>Luis João </Text>
                            <Text style={styles.profileRole}>Chef</Text>
                        </View>
                    </View>
                    <View style={styles.profileHeader}>
                        <View style={styles.profileHeader}>
                            <MaterialCommunityIcons
                                name="room-service-outline"
                                size={30}
                                color={colors.iconGreen}
                                style={styles.profileAction}
                            />
                            <Text style={styles.profileName}>João Luis</Text>
                            <Text style={styles.profileRole}>Garçom</Text>
                        </View>
                    </View>
                    <View style={styles.profileHeader}>
                        <View style={styles.profileHeader}>
                            <MaterialCommunityIcons
                                name="room-service-outline"
                                size={30}
                                color={colors.iconGreen}
                                style={styles.profileAction}
                            />
                            <Text style={styles.profileName}>Luiza Maria</Text>
                            <Text style={styles.profileRole}>Garçonete</Text>
                        </View>
                    </View>
                    <View style={styles.profileHeader}>
                        <View style={styles.profileHeader}>
                            <MaterialCommunityIcons
                                name="room-service-outline"
                                size={30}
                                color={colors.iconGreen}
                                style={styles.profileAction}
                            />
                            <Text style={styles.profileName}>Wal kyria</Text>
                            <Text style={styles.profileRole}>Garçonete</Text>
                        </View>
                    </View>
                    <View style={styles.profileHeader}>
                        <View style={styles.profileHeader}>
                            <MaterialCommunityIcons
                                name="silverware-clean"
                                size={30}
                                color={colors.iconGreen}
                                style={styles.profileAction}
                            />
                            <Text style={styles.profileName}>Eduardo José</Text>
                            <Text style={styles.profileRole}>Limpeza</Text>
                        </View>
                    </View>
                    <View style={styles.profileHeader}>
                        <View style={styles.profileHeader}>
                            <MaterialCommunityIcons
                                name="silverware-clean"
                                size={30}
                                color={colors.iconGreen}
                                style={styles.profileAction}
                            />
                            <Text style={styles.profileName}>Alexandrina</Text>
                            <Text style={styles.profileRole}>Limpeza</Text>
                        </View>
                    </View>
                </View>

                {/* >>>>>>>>>>Body<<<<<<<<<<<< */}
                <View style={styles.content}>
                    <View style={styles.tabs}>
                        {tabs.map(({ header, icon }, index) => {
                            const isActive = value === index;

                            return (
                                <View
                                    key={index}
                                    style={[
                                        styles.tabWrapper,
                                        isActive && {
                                            borderBottomColor:
                                                colors.linkTextGreen,
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
                                                color={
                                                    isActive
                                                        ? colors.linkTextGreen
                                                        : "#6b7280"
                                                }
                                                size={18}
                                            />
                                            <Text
                                                style={
                                                    (styles.tabText,
                                                    {
                                                        color: isActive
                                                            ? colors.linkTextGreen
                                                            : "#6b7280",
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

                                {type === "toggle" && (
                                    <Switch
                                        trackColor={{
                                            true: colors.iconGreen,
                                        }}
                                        value={form[id]}
                                        onValueChange={(val) =>
                                            setForm({ ...form, [id]: val })
                                        }
                                    />
                                )}
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 24,
    },
    header: {
        paddingHorizontal: 24,
        marginBottom: 12,
    },
    title: {
        fontSize: 28,
        fontWeight: "600",
        color: colors.linkTextGreen,
        marginBottom: 6,
    },
    subtitle: {
        fontSize: 15,
        fontWeight: "500",
        color: colors.placeholderText,
    },
    profile: {
        paddingTop: 28,
        paddingHorizontal: 12,
        paddingBottom: 28,
        backgroundColor: colors.white,
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: colors.placeholderText,
    },
    profileHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 12,
    },
    profileName: {
        fontSize: 22,
        fontWeight: "700",
        color: colors.grayDark,
        lineHeight: 38,
    },
    profileRole: {
        fontSize: 17,
        fontWeight: "500",
        color: colors.grayDark,
        lineHeight: 38,
    },
    profileHandle: {
        marginTop: 4,
        fontSize: 15,
        color: colors.placeholderText,
    },
    profileAvatar: {
        width: 120,
        height: 120,
        borderRadius: 99,
        borderColor: colors.linkTextGreen,
        borderWidth: 0.2,
        marginRight: 12,
    },
    profileAction: {
        paddingHorizontal: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    profileAvatarWrapper: {
        alignItems: "center",
        justifyContent: "center",
    },
    profileActionText: {
        fontSize: 18,
        fontWeight: "600",
        color: colors.white,
        marginRight: 8,
    },
    content: {
        backgroundColor: colors.white,
        borderBottomWidth: 1,
        borderColor: colors.placeholderText,
    },
    tabs: {
        flexDirection: "row",
        padding: 16,
    },
    tabWrapper: {
        flex: 1,
        borderBottomWidth: 2,
        borderColor: colors.placeholderText,
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
        marginLeft: 5,
    },
    rowWrapper: {
        borderTopWidth: 1,
        borderColor: colors.placeholderText,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 24,
        height: 60,
    },
    rowEditSheet: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        height: 50,
        backgroundColor: colors.neutralLightGrey,
        borderRadius: 15,
        marginBottom: 12,
        paddingHorizontal: 12,
    },
    rowLabel: {
        fontSize: 16,
        fontWeight: "500",
        color: colors.placeholderText,
    },
    rowValue: {
        fontSize: 16,
        fontWeight: "500",
        color: colors.linkTextGreen,
        marginRight: 4,
    },
    // Bottom Sheets Styles
    sheet: {
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    sheetHeader: {
        paddingTop: 14,
        paddingHorizontal: 24,
        borderColor: colors.placeholderText,
        alignItems: "center",
        justifyContent: "center",
    },
    sheetHeaderTitle: {
        fontSize: 28,
        fontWeight: "700",
        color: colors.iconRed,
    },
    sheetBody: {
        padding: 24,
    },
    sheetBodyText: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "400",
        color: colors.black,
        marginBottom: 24,
        textAlign: "center",
    },
    btn: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginTop: 20,
    },
    btnText: {
        fontSize: 18,
        lineHeight: 24,
        fontWeight: "700",
        color: colors.white,
    },
});
