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

const data = [
    {
        header: "Combo",
        id: "entrada",
        icon: "arrow-right-circle",
        text: "Entrada",
        type: "toggle",
    },
    {
        header: "Combo",
        id: "pratoPrincipal",
        icon: "arrow-right-circle",
        text: "Prato Principal",
        type: "toggle",
    },
    {
        header: "Combo",
        id: "sobremesa",
        icon: "arrow-right-circle",
        text: "Sobremesa",
        type: "toggle",
    },
    {
        header: "Combo",
        id: "bebida",
        icon: "arrow-right-circle",
        text: "Babida",
        type: "toggle",
    },
    {
        header: "Combo",
        id: "cafe",
        icon: "arrow-right-circle",
        text: "Café",
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
        Alert.alert("Atenção!", "Você confirma o Pagamento?", [
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
                {/* >>>>>>>>>> Bank Card <<<<<<<<<<<< */}
                <View style={styles.profile}>
                    <View style={styles.profileHeader}>
                        <Text style={styles.profileHeader}>Header</Text>
                    </View>
                    {/* >>>>>>>>>>Payment Button<<<<<<<<<<<< */}

                    <TouchableOpacity
                        onPress={() => {
                            // handle payment
                            showConfirmDialog();
                        }}
                    >
                        <View style={styles.profileAction}>
                            <Text style={styles.profileActionText}>Pagar</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* >>>>>>>>>>Body<<<<<<<<<<<< */}
                <View style={styles.container}>
                    <View style={styles.switchGroupHeader}>
                        <Text style={styles.switchGroupTextHeader}>
                            {" "}
                            Selecione a forma de Pagamento Desejada
                        </Text>
                    </View>
                    <CustomSwitchGroup values={data} onPress={onSwitchChange} />
                </View>
                {/* >>>>CheckIn Payment Animation Bottom Sheet<<<< */}
                {isLoading ? (
                    <LoadingBSheet
                        headerText="Processando Pagamento..."
                        welcomeBackText="Aprovado!"
                        route={() =>
                            navigation.navigate("PedidosAcompanhamento")
                        }
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
        backgroundColor: colors.linkTextGreen,
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
