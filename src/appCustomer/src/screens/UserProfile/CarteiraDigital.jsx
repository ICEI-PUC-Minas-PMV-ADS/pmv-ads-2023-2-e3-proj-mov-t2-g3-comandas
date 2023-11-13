import COLORS from '@/constants/colors';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';
import Wallet from '@/components/Wallet/Wallet';
import CustomSwitchGroup from '@/components/SwitchToggle/CustomSwitchGroup';
import Checkin from '../../assets/Checkin.json';

const data = [
  {
    header: 'Carteira',
    id: 'carteira',
    icon: 'dollar-sign',
    text: 'Carteira Digital',
    type: 'toggle',
  },
  {
    header: 'Cartão de Crédito',
    id: 'visa',
    icon: 'credit-card',
    text: 'Visa',
    type: 'toggle',
  },
  {
    header: 'Cartão de Crédito',
    id: 'mastercard',
    icon: 'credit-card',
    text: 'MasterCard',
    type: 'toggle',
  },
  {
    header: 'Chamar Garçom',
    id: 'contaNaMesaCartao',
    icon: 'check-square',
    text: 'Cartão',
    type: 'toggle',
  },
  {
    header: 'Chamar Garçom',
    id: 'contaNaMesaDinheiro',
    icon: 'dollar-sign',
    text: 'Dinheiro',
    type: 'toggle',
  },
];

function CarteiraDigital() {
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(false);

  const onSwitchChange = (itemIdx) => {
    console.log('Clicked', itemIdx);
  };

  const showConfirmDialog = () =>
    Alert.alert('Atenção!', 'Você confirma o Pagamento?', [
      {
        text: 'Sim',
        onPress: () => {
          setIsLoading(true);
        },
      },
      {
        text: 'Não',
      },
    ]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.scrollContent}>
        {/* >>>>>>>>>>Header<<<<<<<<<<<< */}
        <View style={styles.header} />
        {/* >>>>>>>>>> Bank Card <<<<<<<<<<<< */}
        <View style={styles.profile}>
          <View style={styles.profileHeader}>
            <Wallet />
          </View>
          {/* >>>>>>>>>>Payment Button<<<<<<<<<<<< */}

          <TouchableOpacity
            onPress={() => {
              // handle payment
              showConfirmDialog();
            }}
          >
            <View style={styles.profileAction}>
              <Text style={styles.profileActionText}>Pagar</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* >>>>>>>>>>Body<<<<<<<<<<<< */}
        <View style={styles.container}>
          <View style={styles.switchGroupHeader}>
            <Text style={styles.switchGroupTextHeader}>
              {' '}
              Selecione a forma de Pagamento Desejada
            </Text>
          </View>
          <CustomSwitchGroup values={data} onPress={onSwitchChange} />
        </View>
        {/* >>>>CheckIn Payment Animation Bottom Sheet<<<< */}
        {isLoading ? (
          <Animatable.View
            animation="fadeIn"
            style={{
              flex: 1,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              justifyContent: 'flex-end',
              position: 'absolute',
              width: '100%',
              height: '110%',
              zIndex: 100,
            }}
          >
            <Animatable.View
              delay={250}
              animation="fadeInUp"
              style={{
                height: '75%',
                backgroundColor: COLORS.neutralWhite,
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50,
                padding: 15,
                gap: 50,
              }}
            >
              <Text
                style={{
                  fontFamily: 'MontserratRegular',
                  fontSize: 24,
                  textAlign: 'center',
                }}
              >
                Aguarde confirmação...
              </Text>
              <ActivityIndicator
                color={COLORS.primary}
                style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
                size="large"
              />

              <Animatable.View
                delay={1000}
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
                  Pagamento Realizado com Sucesso.
                  <Text style={{ color: COLORS.linkTextGreen }}>
                    {'\n'}Obrigado!
                  </Text>
                </Text>
                <Animatable.View
                  delay={1800}
                  animation="fadeInUp"
                  onAnimationEnd={() =>
                    navigation.navigate('PedidosAcompanhamento')
                  }
                  style={styles.footer}
                />
              </Animatable.View>
            </Animatable.View>
          </Animatable.View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
}
export default CarteiraDigital;

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
  },
  container: {
    paddingVertical: 5,
    flexGrow: 1,
  },
  switchGroupHeader: {
    backgroundColor: COLORS.white,

    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  switchGroupTextHeader: {
    color: COLORS.linkTextGreen,
    fontSize: 16,
    lineHeight: 24,
  },
  containerLogo: {
    flex: 2,
    opacity: 0.5,
  },
  image: {
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
  header: {
    paddingHorizontal: 24,
    marginBottom: 12,
  },
  profile: {
    paddingTop: 12,
    paddingBottom: 24,
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.greyLineStyle,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  profileAction: {
    marginTop: 16,
    marginHorizontal: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
    flexDirection: 'row',
    backgroundColor: COLORS.linkTextGreen,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  profileActionText: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.white,
    marginRight: 8,
  },

  section: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    paddingVertical: 8,
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.linkTextGreen,
    textTransform: 'uppercase',
    letterSpacing: 1.1,
  },
  rowWrapper: {
    borderTopWidth: 1,
    borderColor: COLORS.greyLineStyle,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 50,
    backgroundColor: COLORS.neutralLightGrey,
    borderRadius: 15,
    marginBottom: 12,
    paddingHorizontal: 12,
  },
  rowLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.placeholderText,
  },
  rowValue: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.linkTextGreen,
  },
  rowIcon: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
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
    color: COLORS.linkTextGreen,
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
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 20,
  },
  btnText: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '700',
    color: COLORS.white,
  },

  // CheckIn Payment Bottom Sheet
  containerBottonSheet: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkInLottie: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    width: 150,
  },
  textForm: {
    fontSize: 22,
    marginHorizontal: 12,
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
