import axios from "axios";
import React, { useEffect, useState } from "react";
// eslint-disable-next-line import/no-unresolved
import { BASE_URL, API_KEY, ADMIN_TOKEN } from "@env";
import {
    SafeAreaView,
    StyleSheet,
    FlatList,
    View,
    TouchableOpacity,
    Text,
    Image,
} from "react-native";
import COLORS from "@/constants/colors";
import Mesa from "../../components/Mesa";

const filterStructure = [
    {
        id: 1,
        title: "Todos",
        urlIcon: "https://imgur.com/DGSpfJo.png",
    },
    {
        id: 2,
        title: "Ocupada",
        urlIcon: "https://imgur.com/FtF9Eg6.png",
    },
    {
        id: 3,
        title: "Desocupados",
        urlIcon: "https://imgur.com/Tuk9owE.png",
    },
];

export default function Mesas({ navigation }) {
    const [activeFilter, setActiveFilter] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [qrCodes, setQrCodes] = useState({});

    const shopId = 1;

    async function fetchQrCodes(filterId) {
        try {
            const { data } = await axios.get(
                `${BASE_URL}shop/${shopId}/qrcode`,
                {
                    headers: {
                        "x-api-key": API_KEY,
                        Authorization: ADMIN_TOKEN,
                    },
                },
            );

            if (filterId === 2) setQrCodes(data.filter((qr) => qr.isOccupied));
            else if (filterId === 3)
                setQrCodes(data.filter((qr) => !qr.isOccupied));
            else setQrCodes(data);

            setIsLoading(true);
        } catch (error) {
            // eslint-disable-next-line no-undef
            alert(error);
        } finally {
            setIsLoading(false);
        }
    }

    const toggleActiveFilter = (newActiveFilter) => {
        setActiveFilter(newActiveFilter);
    };

    const updateCurrentTables = (filter) => {
        fetchQrCodes(filter.id);
    };

    const handleFilterClick = (filter) => {
        toggleActiveFilter(filter.id);
        updateCurrentTables(filter);
    };

    useEffect(() => {
        fetchQrCodes(1);
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.filtersView}>
                <FlatList
                    data={filterStructure}
                    keyExtractor={(item) => item.id.toString()}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ gap: 8 }}
                    horizontal
                    fadingEdgeLength={30}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => handleFilterClick(item)}
                            style={{
                                minWidth: 160,
                                borderRadius: 10,
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: 30,
                                paddingHorizontal: 15,
                                opacity: activeFilter === item.id ? 1 : 0.3,
                            }}
                        >
                            <Image
                                source={{ uri: item.urlIcon }}
                                width={30}
                                height={30}
                            />
                            <Text style={{ fontWeight: "bold" }}>
                                {item.title}
                            </Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
            <FlatList
                data={qrCodes}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                fadingEdgeLength={50}
                contentContainerStyle={{ gap: 20, padding: 12 }}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate("MesaInfo", {
                                tableId: item.table,
                                shopId: item.shopId,
                            })
                        }
                    >
                        <Mesa
                            tableNumber={item.table}
                            isOccupied={item.isOccupied}
                        />
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.neutralWhite,
    },
    button: {
        width: "100%",
        height: 100,
    },
    filtersView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        height: "10%",
        padding: 12,
    },
});
