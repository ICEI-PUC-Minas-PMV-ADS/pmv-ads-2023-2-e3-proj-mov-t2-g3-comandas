import COLORS from "@/constants/colors";
import React, { useState, useEffect } from "react";
import { useUser } from "@/context/UserContext";
import {
    StyleSheet,
    ScrollView,
    SafeAreaView,
    StatusBar,
    TouchableOpacity,
    Alert,
} from "react-native";
import { View, Text } from "react-native-animatable";
import RBSheet from "react-native-raw-bottom-sheet";
import FeatherIcon from "react-native-vector-icons/Feather";
import LoadingBSheet from "@/components/LoadingBSheet";

const SECTIONS = [
    {
        header: "Equipe",
        icon: "align-center",
        items: [
            {
                id: "AdmSignup",
                icon: "user-plus",
                color: COLORS.iconGreen,
                label: "Novo Administrador",
                type: "link",
            },
            {
                id: "CrewSignup",
                icon: "users",
                color: COLORS.iconGreen,
                label: "Novo Membro da Equipe",
                type: "link",
            },
            {
                id: "EditSignup",
                icon: "edit-3",
                color: COLORS.iconGreen,
                label: "Editar Membro da Equipe",
                type: "link",
            },
            {
                id: "CrewList",
                icon: "grid",
                color: COLORS.iconGreen,
                label: "Mostrar Equipe",
                type: "link",
            },
        ],
    },
    {
        header: "Loja - Cadastro",
        icon: "help-circle",
        items: [
            {
                id: "CombosOfertas",
                icon: "tag",
                color: COLORS.iconBlue,
                label: "Combos & Ofertas",
                type: "link",
            },
            {
                id: "MapaMesas",
                icon: "compass",
                color: COLORS.iconBlue,
                label: "Mapa de Mesas",
                type: "link",
            },
            {
                id: "AboutShop",
                icon: "book-open",
                color: COLORS.iconBlue,
                label: "Sobre a Empresa",
                type: "link",
            },
            {
                id: "Estatisticas",
                icon: "database",
                color: COLORS.iconBlue,
                label: "Estatísticas",
                type: "link",
            },
        ],
    },
    {
        header: "Excluir",
        icon: "align-center",
        items: [
            {
                id: "delete",
                icon: "x",
                color: COLORS.iconRed,
                label: "Excluir Conta no Comandas App",
                type: "BottomSheet",
            },
        ],
    },
];

function AdmNavMenu({ navigation }) {
    const { user, signed, logout } = useUser();
    const [isLoading, setIsLoading] = useState(false);
    // Action Bottom Sheets
    const sheetDeleteAccount = React.useRef();

    // to hide drawer header and show stacknavigation backPage arrow in header
    useEffect(() => {
        navigation.getParent()?.setOptions({
            headerShown: false,
        });
        return () =>
            navigation.getParent()?.setOptions({
                headerShown: true,
            });
    }, [navigation]);

    // Confirmation Dialog Alerts
    const showConfirmDialog = () =>
        Alert.alert("Atenção!", "Deseja Encerrar a Sessão Administrativa?", [
            {
                text: "Sim",
                onPress: () => {
                    setIsLoading(true);
                    logout();
                },
            },
            {
                text: "Não",
            },
        ]);

    const showConfirmDeleteAccountDialog = () =>
        Alert.alert(
            "Atenção!",
            "Confirma que deseja excluir sua conta? Não poderá desfazer esta ação!",
            [
                {
                    text: "Sim",
                    onPress: () => {
                        sheetDeleteAccount.current.close();
                        setIsLoading(true);
                        logout();
                    },
                },
                {
                    text: "Não",
                    onPress: () => {
                        sheetDeleteAccount.current.close();
                    },
                },
            ],
        );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView
                style={{ width: "100%" }}
                contentContainerStyle={styles.scrollContent}
            >
                {/* >>>>>Logout Bottom Sheet<<<<< */}
                {isLoading ? (
                    <LoadingBSheet
                        headerText="Saindo da Conta..."
                        welcomeBackText="Sua conta esta segura!"
                        route={() => navigation.navigate("Login")}
                    />
                ) : null}

                {/* >>>>>Logout Button<<<<< */}
                <View style={styles.profile}>
                    <TouchableOpacity
                        style={{ opacity: 0.75 }}
                        onPress={() => {
                            // handle logout
                            // AsyncStorage.clear();
                            showConfirmDialog();
                        }}
                    >
                        <View style={styles.logout}>
                            <Text style={styles.logoutLabel}>
                                Encerrar Sessão Adm
                            </Text>
                            <FeatherIcon
                                name="log-out"
                                size={26}
                                label="Sair"
                                color={COLORS.iconRed}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                {/* >>>>>Body Sections & Lists<<<<< */}
                {SECTIONS.map(({ header, items }) => (
                    <View style={styles.section} key={header}>
                        <Text style={styles.sectionHeader}>{header}</Text>

                        {items.map(({ id, label, type, icon, color }) => (
                            <TouchableOpacity
                                key={icon}
                                onPress={() => {
                                    // handle onPress
                                    if (id === "AdmSignup") {
                                        navigation.navigate("AdmSignup");
                                    }
                                    if (id === "CrewSignup") {
                                        navigation.navigate("CrewSignup");
                                    }
                                    if (id === "CrewList") {
                                        navigation.navigate("CrewList");
                                    }
                                    if (id === "CombosOfertas") {
                                        navigation.navigate("CombosOfertas");
                                    }
                                    if (id === "delete") {
                                        sheetDeleteAccount.current.open();
                                    }
                                }}
                            >
                                <View style={styles.row}>
                                    <View
                                        style={[
                                            styles.rowIcon,
                                            { backgroundColor: color },
                                        ]}
                                    >
                                        <FeatherIcon
                                            name={icon}
                                            color="#fff"
                                            size={18}
                                        />
                                    </View>

                                    <Text style={styles.rowLabel}>{label}</Text>

                                    <View style={{ flex: 1 }} />

                                    {type === "link" && (
                                        <FeatherIcon
                                            name="chevron-right"
                                            color="#0c0c0c"
                                            size={22}
                                        />
                                    )}
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                ))}

                {/* Delete Account Bottom Sheet */}
                <RBSheet
                    ref={sheetDeleteAccount}
                    customStyles={{ container: styles.sheet }}
                    height={350}
                    openDuration={450}
                    closeDuration={250}
                >
                    <View style={styles.sheetHeader}>
                        <Text style={styles.sheetHeaderTitle}>
                            Excluir Conta
                        </Text>
                    </View>

                    <View style={styles.sheetBody}>
                        <Text style={styles.sheetBodyText}>
                            Tem certeza que deseja{" "}
                            <Text
                                style={{
                                    fontWeight: "700",
                                    color: COLORS.iconRed,
                                }}
                            >
                                excluir a sua conta
                            </Text>
                            ?{"\n"}Esta ação não pode ser desfeita!
                        </Text>

                        <TouchableOpacity
                            onPress={() => {
                                showConfirmDeleteAccountDialog();
                            }}
                        >
                            <View
                                style={[
                                    styles.btn,
                                    { backgroundColor: COLORS.iconRed },
                                ]}
                            >
                                <Text style={styles.btnText}>
                                    Excluir Conta
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => sheetDeleteAccount.current.close()}
                        >
                            <View
                                style={[
                                    styles.btn,
                                    { backgroundColor: COLORS.linkTextGreen },
                                ]}
                            >
                                <Text style={styles.btnText}>Cancelar</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </RBSheet>
            </ScrollView>
            <StatusBar />
        </SafeAreaView>
    );
}

export default AdmNavMenu;

const styles = StyleSheet.create({
    scrollContent: {
        flexGrow: 1,
    },
    container: {
        paddingVertical: 20,
        flexGrow: 1,
    },
    profile: {
        backgroundColor: COLORS.white,
        padding: 18,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: -20,
    },
    profileName: {
        marginTop: 20,
        fontSize: 22,
        fontWeight: "800",
        color: COLORS.linkTextGreen,
        textAlign: "center",
    },
    profileAvatar: {
        width: 120,
        height: 120,
        borderRadius: 99,
        borderColor: COLORS.linkTextGreen,
        borderWidth: 0.2,
    },
    profileAvatarWrapper: {
        position: "relative",
    },
    profileAction: {
        width: 24,
        height: 24,
        borderRadius: 99,
        backgroundColor: COLORS.linkTextGreen,
        position: "absolute",
        right: -4,
        bottom: -10,
        alignItems: "center",
        justifyContent: "center",
    },
    logout: {
        flexDirection: "row",
        backgroundColor: COLORS.white,
        width: 340,
        height: 50,
        marginVertical: 20,

        alignItems: "center",
        justifyContent: "center",
        borderColor: COLORS.iconRed,
        borderRadius: 99,
        borderWidth: 0.2,
    },
    logoutLabel: {
        flexDirection: "row",
        marginHorizontal: 12,
        color: COLORS.iconRed,
        fontSize: 16,
        fontWeight: "600",
    },
    section: {
        backgroundColor: COLORS.white,
        paddingHorizontal: 20,
    },
    sectionHeader: {
        paddingVertical: 8,
        fontSize: 16,
        fontWeight: "600",
        color: COLORS.linkTextGreen,
        textTransform: "uppercase",
        letterSpacing: 1.1,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        height: 50,
        backgroundColor: COLORS.neutralLightGrey,
        borderRadius: 15,
        marginBottom: 12,
        paddingHorizontal: 12,
    },
    rowLabel: {
        fontSize: 18,
        color: COLORS.black,
    },
    rowIcon: {
        width: 32,
        height: 32,
        borderRadius: 99,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 12,
    },
    // Bottom Sheets Styles
    sheet: {
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    sheetHeader: {
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderBottomWidth: 1,
        borderColor: COLORS.greyLineStyle,
        alignItems: "center",
        justifyContent: "center",
    },
    sheetHeaderTitle: {
        fontSize: 28,
        fontWeight: "700",
        color: COLORS.iconRed,
    },
    sheetBody: {
        padding: 24,
    },
    sheetBodyText: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "400",
        color: COLORS.black,
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
        color: COLORS.white,
    },
});
