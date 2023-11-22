import colors from "@/constants/colors";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Alert,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import CustomSwitchGroup from "@/components/SwitchToggle/CustomSwitchGroup";
import LoadingBSheet from "@/components/LoadingBSheet";

const dataFst = [
    {
        header: "Combo",
        id: "entrada",
        icon: "arrow-right",
        text: "Salada",
        type: "toggle",
    },
    {
        header: "Combo",
        id: "entrada",
        icon: "arrow-right",
        text: "Batatas Fritas",
        type: "toggle",
    },
    {
        header: "Combo",
        id: "entrada",
        icon: "arrow-right",
        text: "Onion Rings",
        type: "toggle",
    },
    {
        header: "Combo",
        id: "entrada",
        icon: "arrow-right",
        text: "Não incluir",
        type: "toggle",
    },
];

const dataSnd = [
    {
        header: "Combo",
        id: "Main",
        icon: "arrow-right",
        text: "Prato do Dia",
        type: "toggle",
    },
    {
        header: "Combo",
        id: "Main",
        icon: "arrow-right",
        text: "Feijoada Completa",
        type: "toggle",
    },
    {
        header: "Combo",
        id: "Main",
        icon: "arrow-right",
        text: "Feijoada Light",
        type: "toggle",
    },
    {
        header: "Combo",
        id: "Main",
        icon: "arrow-right",
        text: "Feijoada Vegetariana",
        type: "toggle",
    },
    {
        header: "Combo",
        id: "Main",
        icon: "arrow-right",
        text: "Não incluir",
        type: "toggle",
    },
];

const dataTrd = [
    {
        header: "Combo",
        id: "bebida",
        icon: "arrow-right",
        text: "Suco Natural 330ml",
        type: "toggle",
    },
    {
        header: "Combo",
        id: "bebida",
        icon: "arrow-right",
        text: "Refrigerante 330ml",
        type: "toggle",
    },
    {
        header: "Combo",
        id: "bebida",
        icon: "arrow-right",
        text: "Cerveja 330ml",
        type: "toggle",
    },
    {
        header: "Combo",
        id: "bebida",
        icon: "arrow-right",
        text: "Café",
        type: "toggle",
    },
    {
        header: "Combo",
        id: "bebida",
        icon: "arrow-right",
        text: "Não incluir",
        type: "toggle",
    },
];
function CombosOfertas() {
    const navigation = useNavigation();

    const [isLoading, setIsLoading] = useState(false);

    const onSwitchChange = (itemIdx) => {
        console.log("Clicked", itemIdx);
    };

    const showConfirmDialog = () =>
        Alert.alert("Atenção!", "Você confirma a Promoção?", [
            {
                text: "Sim",
                onPress: () => {
                    setIsLoading(true);
                },
            },
            {
                text: "Não",
            },
        ]);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={styles.scrollContent}>
                {/* >>>>>>>>>>Header<<<<<<<<<<<< */}
                <View style={styles.header} />

                {/* >>>>>>>>>>Body<<<<<<<<<<<< */}
                <View style={styles.container}>
                    <View style={styles.switchGroupHeader}>
                        <Text style={styles.switchGroupTextHeader}>
                            {" "}
                            ENTRADAS
                        </Text>
                    </View>
                    <CustomSwitchGroup
                        values={dataFst}
                        onPress={onSwitchChange}
                    />
                </View>

                <View style={styles.container}>
                    <View style={styles.switchGroupHeader}>
                        <Text style={styles.switchGroupTextHeader}>
                            {" "}
                            PRATO PRINCIPAL
                        </Text>
                    </View>
                    <CustomSwitchGroup
                        values={dataSnd}
                        onPress={onSwitchChange}
                    />
                </View>

                <View style={styles.container}>
                    <View style={styles.switchGroupHeader}>
                        <Text style={styles.switchGroupTextHeader}>
                            {" "}
                            BEBIDA
                        </Text>
                    </View>
                    <CustomSwitchGroup
                        values={dataTrd}
                        onPress={onSwitchChange}
                    />
                </View>
                {/* >>>>>>>>>> Bank Card <<<<<<<<<<<< */}
                <View style={styles.profile}>
                    <View style={styles.profileHeader}>
                        <Text style={styles.profileHeader}>{dataFst.text}</Text>
                    </View>
                    {/* >>>>>>>>>>Payment Button<<<<<<<<<<<< */}

                    <TouchableOpacity
                        onPress={() => {
                            // handle create sale
                            showConfirmDialog();
                        }}
                    >
                        <View style={styles.profileAction}>
                            <Text style={styles.profileActionText}>
                                Criar Promoção
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {/* >>>>CheckIn Payment Animation Bottom Sheet<<<< */}
                {isLoading ? (
                    <LoadingBSheet
                        headerText="Criando Promoção..."
                        welcomeBackText="Pronto!"
                        route={() => navigation.navigate("AdmNavMenu")}
                    />
                ) : null}
            </ScrollView>
        </SafeAreaView>
    );
}
export default CombosOfertas;

const styles = StyleSheet.create({
    scrollContent: {
        flexGrow: 1,
    },
    container: {
        paddingVertical: 5,
        flexGrow: 1,
    },
    header: {
        paddingHorizontal: 24,
        marginBottom: 12,
    },
    profile: {
        paddingTop: 12,
        paddingBottom: 24,
        backgroundColor: colors.white,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: colors.grayLineStyle,
    },
    profileHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    profileAction: {
        marginTop: 16,
        marginHorizontal: 20,
        paddingVertical: 10,
        paddingHorizontal: 12,
        flexDirection: "row",
        backgroundColor: colors.iconBlue,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
    },
    profileActionText: {
        fontSize: 18,
        fontWeight: "600",
        color: colors.white,
        marginRight: 8,
    },
    switchGroupHeader: {
        backgroundColor: colors.white,
        paddingHorizontal: 24,
        paddingVertical: 12,
    },
    switchGroupTextHeader: {
        color: colors.linkTextGreen,
        fontSize: 16,
        lineHeight: 24,
    },
});
