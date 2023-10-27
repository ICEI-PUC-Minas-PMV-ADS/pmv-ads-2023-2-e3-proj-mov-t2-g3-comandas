import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';
import COLORS from '../../constants/colors';
import Checkin from '../../assets/Checkin.json';
import Logo from '../../assets/Comandas-icon.png';

export default function CheckinFaleConosco() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          style={styles.image}
          delay={100}
          animation="flipInY"
          source={Logo}
          resizeMode="contain"
        />
      </View>

      <Animatable.View
        delay={700}
        animation="fadeInUp"
        style={styles.containerForm}
      >
        <LottieView
          style={styles.checkInLottie}
          source={Checkin}
          autoPlay
          loop={false}
          marginTop={10}
        />
        <Text style={styles.textForm}>
          Pagamento Efetuado com Sucesso.
          <Text style={{ color: COLORS.linkTextGreen }}>{'\n'}Obrigado!</Text>
        </Text>
        <Animatable.View
          delay={2000}
          animation="fadeInUp"
          onAnimationEnd={() => navigation.navigate('UserProfile')}
          style={styles.footer}
        >
          <Text style={styles.textFooter}>
            Caso não seja redirecionado para a sua tela de Perfil de Usuário em
            alguns instantes
          </Text>
          <Pressable onPress={() => navigation.navigate('UserProfile')}>
            <Text style={styles.textFooterLink}>Clique Aqui.</Text>
          </Pressable>
        </Animatable.View>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLogo: {
    flex: 2,
    opacity: 0.5,
  },
  image: {
    // height: 120,
    alignSelf: 'center',
    height: 75,
    width: 75,
    aspectRatio: 1 / 1,
    marginTop: 70,
  },
  containerForm: {
    flex: 5,
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  checkInLottie: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    width: 150,
  },
  textForm: {
    fontSize: 26,
    fontWeight: '600',
    color: COLORS.black,
    textAlign: 'center',
  },
  footer: {
    justifyContent: 'center',
    marginHorizontal: 40,
    marginTop: 200,
  },
  textFooter: {
    fontSize: 14,
    color: COLORS.black,
  },
  textFooterLink: {
    fontSize: 16,
    color: COLORS.linkTextGreen,
    fontWeight: 'bold',
  },
});
