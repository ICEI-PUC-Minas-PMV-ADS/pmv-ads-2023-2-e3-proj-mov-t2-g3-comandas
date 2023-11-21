// src/screens/OrderSummaryScreen/index.jsx
import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import OrderDetailCard from "../../components/OrderDetailCard"; // Certifique-se de que o caminho está correto

// Substitua este array de mockOrders por seus dados reais, se necessário
const mockOrders = [
    {
        id: "45",
        status: "Finalizado",
        total: "105",
        note: "Sem cebola, por favor",
        items: [
            { id: "a1", name: "Batata Frita", quantity: "1" },
            { id: "b2", name: "Suco de laranja", quantity: "2" },
            { id: "c3", name: "Hamburguer", quantity: "2" },
        ],
    },
    // ... mais pedidos
];

function OrderSummaryScreen() {
    return (
        <>
            <Text style={styles.header}>Resumo dos Pedidos</Text>
            <ScrollView style={styles.container}>
                {mockOrders.map((order) => (
                    <OrderDetailCard key={order.id} order={order} />
                ))}
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f8f8", // Um fundo neutro que não ofusque os cards
        padding: 10, // Espaçamento ao redor do ScrollView para que os cards não toquem as bordas
    },
    // Se você tiver um cabeçalho ou outro conteúdo, você pode querer estilizá-los também:
    header: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 20, // Dá um espaço no topo e embaixo do cabeçalho
    },
    // ... Adicione mais estilos conforme necessário
});

export default OrderSummaryScreen;
