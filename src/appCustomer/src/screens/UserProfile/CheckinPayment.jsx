import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';
import RBSheet from 'react-native-raw-bottom-sheet';
import COLORS from '../../constants/colors';
import Checkin from '../../assets/Checkin.json';

export default function CheckinPayment() {
  const navigation = useNavigation();

  const sheetCheckinPayment = React.useRef();

  return (
    <RBSheet
      ref={sheetCheckinPayment}
      customStyles={{ container: styles.sheet }}
      height={650}
      openDuration={450}
      closeDuration={250}
    >
      <View style={styles.sheetHeader}>
        <Text style={styles.sheetHeaderTitle}>Atenção!</Text>
      </View>

      <View style={styles.sheetBody}>
        <View style={styles.container}>
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
              <Text style={{ color: COLORS.linkTextGreen }}>
                {'\n'}Obrigado!
              </Text>
            </Text>
            <Animatable.View
              delay={2000}
              animation="fadeInUp"
              onAnimationEnd={() => {
                sheetCheckinPayment.current.close();
                navigation.navigate('PedidosAcompanhamento');
              }}
              style={styles.footer}
            >
              <Text style={styles.textFooter}>
                Caso não seja redirecionado para a tela de Acompanhamento de
                Pedidos em alguns instantes
              </Text>
              <Pressable onPress={() => navigation.navigate('CarteiraDigital')}>
                <Text style={styles.textFooterLink}>Clique Aqui.</Text>
              </Pressable>
            </Animatable.View>
          </Animatable.View>
        </View>
      </View>
    </RBSheet>
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
  // Bottom Sheets Styles
  sheet: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  sheetHeader: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderColor: COLORS.greyLineStyle,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sheetHeaderTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.iconRed,
  },
  sheetBody: {
    padding: 24,
  },
  sheetBodyText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    color: COLORS.black,
    marginBottom: 24,
    textAlign: 'center',
  },
});
