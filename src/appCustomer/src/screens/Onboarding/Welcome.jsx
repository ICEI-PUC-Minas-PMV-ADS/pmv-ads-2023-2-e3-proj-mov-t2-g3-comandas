import { View, Image, StyleSheet, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Buttons/Button';
import COLORS from '../../constants/colors';

function Welcome({ navigation }) {
  return (
    <View style={{ backgroundColor: COLORS.white }}>
      <View style={styles.container}>
        <Image
          // eslint-disable-next-line global-require
          source={require('../../assets/onBoarding_img01.png')}
          style={{

            justifyContent: 'center',
            resizeMode: 'center',
          }}
        />
      </View>
      <Text style={styles.textHeader}>Agilidade e facilidade</Text>
      <Text style={styles.textBody}>sasasassasaaa</Text>
      <SafeAreaView style={{ marginHorizontal: 22 }}>
        <Button
          title="Começar"
          onPress={() => navigation.navigate('Signup')}
          filled
          style={{
            position: 'fixed',
            marginTop: 160,
            marginBottom: 4,
          }}
        />
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textHeader: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 340,
    color: COLORS.black,
    marginHorizontal: 22,
  },
  textBody: {
    fontSize: 24,
    fontWeight: '400',
    marginTop: 8,
    color: COLORS.grey,
    marginHorizontal: 22,
  },
});

export default Welcome;
