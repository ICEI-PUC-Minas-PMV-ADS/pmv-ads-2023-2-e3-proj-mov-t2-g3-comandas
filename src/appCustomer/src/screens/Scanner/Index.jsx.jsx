import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function Scanner({ navigation }) {
    const [hasPermission, setHasPermission] = useState(null);

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };

        getBarCodeScannerPermissions();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        if (type === 256) {
            try {
                navigation.navigate('Home');
                // eslint-disable-next-line no-alert, no-undef
                alert(JSON.parse(data));
            } catch (e) {
                // eslint-disable-next-line no-alert, no-undef
                alert('Este não é um qr code válido');
            }
        }
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={handleBarCodeScanned}
                style={styles.camera}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    camera: {
        width: 2.2 * Dimensions.get('window').width,
        aspectRatio: 1 / 1,
        backgroundColor: 'orange',
    },
    reScan: {},
});
