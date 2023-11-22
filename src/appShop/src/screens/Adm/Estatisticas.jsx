import colors from "@/constants/colors";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";

function Estatisticas() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View>
                <Text style={styles.profileName}>Estatísticas</Text>
            </View>
            <View>
                <Text style={styles.profileText}>
                    Volumes de Vendas Totais
                    {"\n"}
                </Text>
            </View>
            <View>
                <Text style={styles.profileText}>
                    Total de Vendas Diárias
                    {"\n"}
                </Text>
            </View>
            <View>
                <Text style={styles.profileText}>
                    Vendas Semanais
                    {"\n"}
                </Text>
            </View>
            <View>
                <Text style={styles.profileText}>
                    Vendas Mensais
                    {"\n"}
                </Text>
            </View>
            <View>
                <Text style={styles.profileText}>
                    Taxa Média de Ocupação das Mesas
                    {"\n"}
                </Text>
            </View>
            <View>
                <Text style={styles.profileText}>
                    Ticket Médio por Cliente
                    {"\n"}
                </Text>
            </View>
        </SafeAreaView>
    );
}

export default Estatisticas;

const styles = StyleSheet.create({
    scrollContent: {
        flexGrow: 1, // Permite que o ScrollView cresça para preencher o espaço disponível
    },
    container: {
        paddingVertical: 20,
        flexGrow: 1,
    },
    profile: {
        backgroundColor: colors.white,
        padding: 18,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: -20,
    },
    profileName: {
        marginTop: 20,
        marginHorizontal: 24,
        fontSize: 22,
        fontWeight: "700",
        color: colors.blueDark,
        textAlign: "center",
    },
    profileText: {
        marginTop: 20,
        marginHorizontal: 24,
        fontSize: 17,
        fontWeight: "500",
        color: colors.placeholderText,
        textAlign: "left",
    },
});
