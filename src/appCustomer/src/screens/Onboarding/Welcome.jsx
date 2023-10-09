import { View, Image, StyleSheet, Text, Dimensions } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Buttons/Button';
import COLORS from '../../constants/colors';

const { width, height } = Dimensions.get('window');

function Welcome({ navigation }) {
  return (
    <View style={{ backgroundColor: COLORS.white }}>
      <View style={styles.container}>
        <Image
          // eslint-disable-next-line global-require
          source={require('../../assets/onBoarding_img01.png')}
          style={styles.image}
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
            marginTop: 90,
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
  image: {
    width,
    height: 400,
    resizeMode: 'cover',
  },
  textHeader: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 410,
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
