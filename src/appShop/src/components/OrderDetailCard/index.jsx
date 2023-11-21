// src/components/OrderDetailCard/index.jsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import COLORS from "@/constants/colors"; // Atualize o caminho de acordo com a estrutura do seu projeto

function OrderDetailCard({ order }) {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>Order #{order.id}</Text>
            <Text style={styles.status}>Status: {order.status}</Text>
            {/* Usando item.id como chave, se disponível */}
            {order.items.map((item) => (
                <Text key={item.id}>
                    {item.name} ({item.quantity})
                </Text>
            ))}
            {/* Adicione a descrição aqui */}
            {order.note && <Text style={styles.note}>Nota: {order.note}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.white,
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
        marginHorizontal: 20,
        shadowColor: COLORS.black,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        borderColor: COLORS.grayLineStyle,
        borderWidth: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
        color: COLORS.blueDark,
    },
    status: {
        color: COLORS.accentDarkGreen,
        marginBottom: 10,
    },
    total: {
        fontSize: 18,
        color: COLORS.iconRed,
        fontWeight: "bold",
        marginTop: 10,
    },
    note: {
        marginTop: 4, // Espaçamento acima da nota
        fontStyle: "italic", // Estilo da fonte para notas
        color: "#333", // Cor do texto para a nota
        fontSize: 14, // Tamanho da fonte para a nota
    },
});

export default OrderDetailCard;
