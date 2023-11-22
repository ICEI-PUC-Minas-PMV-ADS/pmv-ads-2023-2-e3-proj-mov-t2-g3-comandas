import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { StackActions } from '@react-navigation/native';

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
        // eslint-disable-next-line no-alert, no-undef
        const myData = JSON.parse(data);
        navigation.dispatch(StackActions.replace('Scan'));
        navigation.navigate('Shop', {
          shopId: myData.shopId,
          tableId: myData.table,
        });
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

  const delimiterSize = Dimensions.get('window').width / 1.8;

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
        style={styles.camera}
      />
      <View style={styles.overlay}>
        <View
          style={{
            width: delimiterSize,
            height: delimiterSize,
            borderWidth: 2, // Espessura da borda
            borderColor: '#FFF', // Cor da borda transparente
            borderStyle: 'solid',
            position: 'absolute',
            top: -580,
            left: 95,
          }}
        />
      </View>
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
  overlay: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  camera: {
    width: 2.2 * Dimensions.get('window').width,
    aspectRatio: 1 / 1,
    backgroundColor: 'orange',
  },
});
