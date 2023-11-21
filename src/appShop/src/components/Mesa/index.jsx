import COLORS from "@/constants/colors";
import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Tray from "../../assets/Tray.svg";

export default function Mesa({ tableNumber, isOccupied }) {
    return (
        <View style={styles.container}>
            <Tray
                style={styles.trayIcon}
                fill={isOccupied ? "#ff5151" : "#1fc983"}
                width={40}
                height={40}
            />
            <Image
                style={styles.background}
                source={{ uri: "https://imgur.com/0yCWDnb.png" }}
            />
            <Text style={styles.tableLabel}>Mesa {tableNumber}</Text>
            {isOccupied ? (
                <Text style={styles.userLabel}>{tableNumber}</Text>
            ) : (
                <Text style={styles.userLabel}>Esperando Clientes</Text>
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
        fontStyle: "italic",
        fontWeight: "bold",
    },
    userLabel: {
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: [{ translateX: -60 }, { translateY: 10 }],
        fontSize: 20,
        color: COLORS.white,
        fontStyle: "italic",
        fontWeight: "bold",
    },
    trayIcon: {
        position: "absolute",
        top: 2,
        right: 10,
        zIndex: 2,
    },
});
