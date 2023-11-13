import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, { useState } from 'react';
import * as SecureStore from 'expo-secure-store';
import * as Animatable from 'react-native-animatable';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '@/context/UserContext';
import { login } from '@/services/auth.service';
import LottieView from 'lottie-react-native';
import COLORS from '../../constants/colors';
import Button from '../../components/Buttons/Button';
import icon from '../../assets/Comandas-icon.png';
import Checkin from '../../assets/Checkin.json';

function Login() {
  const navigation = useNavigation();
  const { setSigned, setUser } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordHide, setIsPasswordHide] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleLogin() {
    setIsLoading(true);
    login({
      email,
      password,
    })
      .then(async (res) => {
        if (res && res.userInfo && res.userInfo.role === 'customer') {
          setSigned(true);
          setUser(res.userInfo);
          await SecureStore.setItemAsync('TOKEN_KEY', res.accessToken);
          await SecureStore.setItemAsync(
            'USER_ID',
            String(res.userInfo.id),
          ).catch((err) => console.log('ERRO IN handleLogin ', err));
          // Fazer lógica para o que acontecer após Login
          navigation.navigate('Home');
        } else {
          Alert.alert('Usuário ou Senha inválidos!');
        }
      })
      .catch(() => {
        Alert.alert('Usuário ou Senha inválidos!');
      })
      .finally(() => setIsLoading(false));
  }

  return (
    <SafeAreaView style={styles.container}>
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
              height: '55%',
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
              Acessando conta...
            </Text>
            <ActivityIndicator
              color={COLORS.primary}
              style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
              size="large"
            />

            <Animatable.View
              delay={600}
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
                Acessou a Conta com Sucesso.
                <Text style={{ color: COLORS.linkTextGreen }}>
                  {'\n'}Bem Vindo de Volta!
                </Text>
              </Text>
              <Animatable.View
                delay={2200}
                animation="fadeInUp"
                onAnimationEnd={() => navigation.navigate('Home')}
                style={styles.footer}
              >
                {/* <Text style={styles.textFooter}>
                  Caso não seja redirecionado para a tela de Login em alguns
                  instantes
                </Text>
                <Pressable onPress={() => navigation.navigate('Login')}>
                  <Text style={styles.textFooterLink}>Clique Aqui.</Text>
                </Pressable> */}
              </Animatable.View>
            </Animatable.View>
          </Animatable.View>
        </Animatable.View>
      ) : null}

      <View style={styles.body}>
        <View style={styles.wrapper}>
          <View>
            <Text style={styles.textHello}>Olá 🖐️</Text>
            <Text style={styles.textWelcome}>Bem Vindo ao</Text>
            <View style={styles.logoWithText}>
              <Image source={icon} style={styles.imageLogo} />
              <Text style={styles.textLogo}>omandas</Text>
            </View>
          </View>

          <View>
            <View style={styles.textInput}>
              <TextInput
                placeholder="Email"
                placeholderTextColor={COLORS.placeholderText}
                autoCapitalize="none"
                autoCorrect={false}
                style={{ width: '100%' }}
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
            </View>
          </View>
          <View>
            <View style={styles.textInput}>
              <TextInput
                placeholder="Senha"
                placeholderTextColor={COLORS.placeholderText}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={isPasswordHide}
                style={{ width: '85%' }}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />

              <TouchableOpacity
                onPress={() => setIsPasswordHide(!isPasswordHide)}
                style={styles.eye}
              >
                {isPasswordHide === true ? (
                  <Ionicons
                    name="eye"
                    size={24}
                    color={COLORS.placeholderText}
                  />
                ) : (
                  <Ionicons
                    name="eye-off"
                    size={24}
                    color={COLORS.placeholderText}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.checkbox}>
            <Checkbox
              style={{ marginRight: 6 }}
              value={isChecked}
              onValueChange={setIsChecked}
              color={isChecked ? COLORS.primary : undefined}
            />

            <Text style={styles.checkboxText}>Salvar dados</Text>
          </View>
        </View>
        <View>
          <Button title="Login" filled onPress={() => handleLogin()} />
          {/* <SocialLogin /> */}
          <View style={styles.footer}>
            <Text style={styles.textFooter}>Não tem conta? Vamos </Text>
            <Pressable onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.textFooterLink}>criar uma conta.</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  body: {
    flex: 1,
    padding: 20,
  },
  wrapper: {
    flex: 1,
    gap: 25,
  },
  logoWithText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textHello: {
    fontSize: 16,
    fontWeight: '400',
    color: COLORS.black,
    marginBottom: 6,
    marginLeft: 6,
    marginTop: 6,
  },
  textWelcome: {
    fontSize: 32,
    fontWeight: '600',
    color: COLORS.black,
  },
  textInput: {
    width: '100%',
    height: 48,
    backgroundColor: COLORS.neutralLightGrey,
    borderRadius: 8,
    justifyContent: 'center',
    paddingLeft: 22,
  },
  imageLogo: {
    alignSelf: 'center',
    height: 50,
    width: 50,
    aspectRatio: 1 / 1,
    marginRight: -6,
  },
  textLogo: {
    fontSize: 34,
    fontWeight: '600',
    color: COLORS.primary,
  },
  eye: {
    position: 'absolute',
    right: 15,
  },
  checkbox: {
    flexDirection: 'row',
    marginLeft: 6,
    verticalAlign: 'middle',
  },
  checkboxText: {
    marginTop: 2,
    fontSize: 14,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 18,
  },
  textFooter: {
    fontSize: 16,
    color: COLORS.black,
  },
  textFooterLink: {
    fontSize: 16,
    color: COLORS.linkTextGreen,
    fontWeight: 'bold',
  },
  checkInLottie: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    width: 150,
  },

  containerForm: {
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;
