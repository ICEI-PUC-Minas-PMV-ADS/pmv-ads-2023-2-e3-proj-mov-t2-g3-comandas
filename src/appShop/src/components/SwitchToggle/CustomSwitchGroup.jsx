import colors from "@/constants/colors";
import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";

export default function CustomSwitchGroup({ values, onPress }) {
    const [currentSelectedProduct, setCurrentSelectedProduct] = useState(0);

    const onSwitch = (idx) => {
        onPress(idx);
        setCurrentSelectedProduct(idx);
    };

    const renderSwitchGroup = () =>
        (values || []).map((items, idx) => {
            const isChecked = currentSelectedProduct === idx;

            return (
                <View style={styles.container}>
                    <View style={styles.section}>
                        <View style={styles.row}>
                            <View style={styles.rowIcon}>
                                <FeatherIcon
                                    name={items.icon}
                                    color={colors.linkTextGreen}
                                    size={20}
                                />
                            </View>
                            <Text style={styles.rowLabel}>{items.text}</Text>
                            <View style={{ flex: 1 }} />
                            <Switch
                                key={idx}
                                trackColor={{
                                    true: colors.primary,
                                }}
                                onValueChange={() => onSwitch(idx)}
                                value={isChecked}
                            />
                        </View>
                    </View>
                </View>
            );
        });
    return <View>{renderSwitchGroup()}</View>;
}

const styles = StyleSheet.create({
    scrollContent: {
        flexGrow: 1,
    },
    container: {
        backgroundColor: colors.white,
        paddingVertical: 5,
        flexGrow: 1,
    },
    header: {
        paddingHorizontal: 24,
        marginBottom: 12,
    },
    section: {
        backgroundColor: colors.white,
        paddingHorizontal: 20,
    },
    sectionHeader: {
        paddingVertical: 8,
        fontSize: 16,
        fontWeight: "600",
        color: colors.linkTextGreen,
        textTransform: "uppercase",
        letterSpacing: 1.1,
    },
    rowWrapper: {
        borderTopWidth: 1,
        borderColor: colors.greyLineStyle,
    },
    row: {
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
        fontSize: 18,
        fontWeight: "600",
        color: colors.placeholderText,
    },
    rowValue: {
        fontSize: 16,
        fontWeight: "500",
        color: colors.linkTextGreen,
    },
    rowIcon: {
        width: 32,
        height: 32,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 6,
    },
});
