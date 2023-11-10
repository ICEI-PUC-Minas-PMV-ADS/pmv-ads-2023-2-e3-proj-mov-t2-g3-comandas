import React, { useState } from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';

export default function PaymentConfirmation() {
  const [showBox, setShowBox] = useState(true);

  const showConfirmDialog = () =>
    Alert.alert(
      'Are your sure?',
      'Are you sure you want to remove this beautiful box?',
      [
        // The "Yes" button
        {
          text: 'Yes',
          onPress: () => {
            setShowBox(false);
          },
        },
        // The "No" button
        // Does nothing but dismiss the dialog when tapped
        {
          text: 'No',
        },
      ],
    );

  return (
    <View style={styles.screen}>
      {showBox && <View style={styles.box} />}
      <Button title="Delete" onPress={() => showConfirmDialog()} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 300,
    height: 300,
    backgroundColor: 'red',
    marginBottom: 30,
  },
});
