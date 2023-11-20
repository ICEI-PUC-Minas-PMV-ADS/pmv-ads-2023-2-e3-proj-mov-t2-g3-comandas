import axios from "axios";
import React, { useEffect, useState } from "react";
// eslint-disable-next-line import/no-unresolved
import { BASE_URL, API_KEY, ADMIN_TOKEN } from "@env";
import {
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    Text,
    ActivityIndicator,
    View,
} from "react-native";
import COLORS from "@/constants/colors";
import Order from "../../components/Order";

export default function MesaInfo({ route, navigation }) {
    const { shopId, tableId } = route.params;
    const [isLoading, setIsLoading] = useState(true);
    const [tableInfo, setTableInfo] = useState(undefined);

    // Escondendo a header do drawer
    useEffect(() => {
        navigation.getParent()?.setOptions({
            headerShown: false,
        });
        navigation.setOptions({
            headerShown: true,
            headerTitle: `Mesa ${tableId}`,
        });
        return () => {
            navigation.getParent()?.setOptions({
                headerShown: true,
            });
            navigation.setOptions({
                headerShown: true,
                headerTitle: `Mesa ${tableId}`,
            });
        };
    }, [navigation, tableId]);

    useEffect(() => {
        async function getOrderInfo() {
            try {
                const { data } = await axios.get(
                    `${BASE_URL}/order/shop/${shopId}/table/${tableId}`,
                    {
                        headers: {
                            "x-api-key": API_KEY,
                            Authorization: ADMIN_TOKEN,
                        },
                    },
                );

                setTableInfo(data);
                setIsLoading(true);
            } catch (error) {
                // eslint-disable-next-line no-undef
            } finally {
                setIsLoading(false);
            }
        }

        getOrderInfo(1);
    }, [shopId, tableId]);

    return isLoading ? (
        <View
            style={{
                backgroundColor: "rgba(0, 0, 0, 0)",
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
            }}
        >
            <ActivityIndicator color={COLORS.primary} size="large" />
        </View>
    ) : (
        <SafeAreaView style={styles.container}>
            {tableInfo ? (
                <Order OrderData={tableInfo} />
            ) : (
                <Text style={styles.textMesaVazia}>Mesa Vazia</Text>
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.neutralWhite,
        alignItems: "center",
        paddingVertical: 10,
    },
    button: {
        position: "absolute",
        bottom: 20,
        backgroundColor: COLORS.iconRed,
        width: "90%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
    },
    textMesaVazia: {
        fontSize: 16,
        fontFamily: "MontserratLight",
        color: COLORS.secondary,
    },
});
