import COLORS from "@/constants/colors";
import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

export default function Mesa({ tableNumber, isOccupied }) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.background}
                source={{ uri: "https://imgur.com/woA8r8I.png" }}
            />
            <Text style={styles.tableLabel}>Mesa {tableNumber}</Text>
            {isOccupied ? (
                <Text style={styles.tableLabel}>Francisco Peregrine</Text>
            ) : (
                <Text style={styles.tableLabel}>Mesa {tableNumber}</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    background: {
        width: "100%",
        aspectRatio: 500 / 147,
    },
    tableLabel: {
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: [{ translateX: -100 }, { translateY: -25 }],
        fontSize: 30,
        color: COLORS.white,
        // fontFamily: "poppins",
        fontStyle: "italic",
        fontWeight: "bold",
    },
});
