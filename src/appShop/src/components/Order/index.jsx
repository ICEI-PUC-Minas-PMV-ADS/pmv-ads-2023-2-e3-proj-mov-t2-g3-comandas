import COLORS from "@/constants/colors";
import React from "react";
import { View, StyleSheet, Text } from "react-native";

function formattedDate(data) {
    const myDate = new Date(data);
    myDate.setMinutes(myDate.getMinutes() + myDate.getTimezoneOffset());

    const options = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    };

    return myDate.toLocaleDateString("pt-BR", options);
}

export default function Order({ OrderData }) {
    return (
        <View style={styles.container}>
            <View style={styles.orderHeader}>
                <Text style={[styles.textH1, { fontSize: 16 }]}>
                    Order #{OrderData.groupId}
                </Text>
                <Text style={styles.textH2}>
                    {formattedDate(OrderData.updatedAt)}
                </Text>
            </View>
            <View style={{ display: "flex", flexDirection: "row" }}>
                <Text>Status: </Text>
                <Text
                    style={{
                        fontWeight: "bold",
                        color:
                            OrderData.status === "open"
                                ? COLORS.iconGreen
                                : COLORS.iconRed,
                    }}
                >
                    {OrderData.status}
                </Text>
            </View>
            <View>
                {OrderData &&
                    OrderData.items.map((item) => (
                        <View style={{ paddingVertical: 5 }}>
                            <View
                                style={[styles.item, { paddingVertical: 5 }]}
                                key={item.id}
                            >
                                <Text style={styles.textH2}>
                                    {item.quantity}x - {item.name}
                                </Text>
                                <Text style={styles.textH2}>
                                    R$ {item.total}
                                </Text>
                            </View>
                            <Text numberOfLines={3} style={styles.description}>
                                {item.description}
                            </Text>
                        </View>
                    ))}
            </View>
            <View style={styles.orderFooter}>
                <Text style={styles.textH1}>Total: </Text>
                <Text style={{ color: COLORS.primary, fontWeight: "bold" }}>
                    R$ {OrderData.total}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        gap: 5,
        padding: 20,
        backgroundColor: "white",
        borderRadius: 2,
        shadowColor: "#000",
        elevation: 8, // Adiciona sombra no Android
    },
    item: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    textH1: {
        color: COLORS.secondary,
        fontWeight: "bold",
    },
    textH2: {
        color: COLORS.secondary,
        fontWeight: "500",
    },
    description: {
        color: COLORS.grayDark,
        paddingHorizontal: 25,
        lineHeight: 19,
    },
    orderHeader: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        color: COLORS.primary,
        fontWeight: "bold",
    },
    orderFooter: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        borderTopWidth: 2,
        borderTopColor: "#ccc",
        borderStyle: "dashed",
        paddingTop: 10,
    },
});
