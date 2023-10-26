import {
  View,
  Image,
  StyleSheet,
  Text,
  Dimensions,
  Pressable,
  ScrollView,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Buttons/Button';
import COLORS from '../../constants/colors';
import OnBoardingImg from '../../assets/onBoarding_img01.png';

const { width } = Dimensions.get('window');

function Welcome({ navigation }) {
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <ScrollView contentContainerStyle={{ gap: 15 }}>
        <View style={styles.container}>
          <Image
            // eslint-disable-next-line global-require
            source={OnBoardingImg}
            style={styles.image}
          />
        </View>
        <Text style={styles.textHeader}>Agilidade e facilidade</Text>
        <Text style={styles.textBody}>
          Adicionar texto comercial explicativo sobre o app
        </Text>
        <SafeAreaView style={{ marginHorizontal: 22 }}>
          <Button
            title="Começar"
            onPress={() => navigation.navigate('Signup')}
            filled
            style={{
              position: 'fixed',
              marginTop: 70,
              marginBottom: 4,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginVertical: 18,
            }}
          >
            <Text style={{ fontSize: 16, color: COLORS.black }}>
              Já tem uma conta? Então{' '}
            </Text>
            <Pressable onPress={() => navigation.navigate('Login')}>
              <Text
                style={{
                  fontSize: 16,
                  color: COLORS.linkTextGreen,
                  fontWeight: 'bold',
                  marginLeft: 6,
                }}
              >
                faça login.
              </Text>
            </Pressable>
          </View>
        </SafeAreaView>
      </ScrollView>
    </SafeAreaView>
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
    // marginTop: 410,
    color: COLORS.black,
    marginHorizontal: 22,
  },
  textBody: {
    fontSize: 20,
    fontWeight: '400',
    marginTop: 8,
    color: COLORS.grey,
    marginHorizontal: 22,
  },
});

export default Welcome;
