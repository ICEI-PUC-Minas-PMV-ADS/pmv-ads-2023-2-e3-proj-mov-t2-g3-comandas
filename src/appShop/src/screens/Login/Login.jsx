import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  Platform,
} from 'react-native';
import React, { useState } from 'react';
import * as SecureStore from 'expo-secure-store';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '@/context/UserContext';
import { login } from '@/services/auth.service';
import LoadingBSheet from '@/components/LoadingBSheet';
import Button from '@/components/Button';
import COLORS from '../../constants/colors';
import icon from '../../assets/Comandas-icon.png';

function Login() {
  const navigation = useNavigation();
  const { setSigned, setUser } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordHide, setIsPasswordHide] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  function handleLogin() {
    setIsLoading(true);
    login({
      email,
      password,
    })
      .then(async (res) => {
        if (res && res.userInfo && res.userInfo.role === 'shop') {
          setSigned(true);
          setUser(res.userInfo);

          await SecureStore.setItemAsync('TOKEN_KEY', res.accessToken);
          await SecureStore.setItemAsync(
            'USER_ID',
            String(res.userInfo.id),
          ).catch((err) => console.log('ERRO IN handleLogin ', err));
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
    <SafeAreaView
      style={[
        {
          flex: 1,
          paddingTop: Platform.OS === 'android' ? 16 : 0,
          backgroundColor: COLORS.neutralWhite,
        },
        styles.container,
      ]}
    >
      {isLoading ? <LoadingBSheet welcomeBackText="Bem vindo!" /> : null}

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

          <View style={styles.textInputWrapper}>
            <TextInput
              placeholder="Email"
              placeholderTextColor={COLORS.placeholderText}
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.textInput}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>

          <View style={styles.textInputWrapper}>
            <TextInput
              placeholder="Senha"
              placeholderTextColor={COLORS.placeholderText}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={isPasswordHide}
              style={styles.textInput}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />

            <TouchableOpacity
              onPress={() => setIsPasswordHide(!isPasswordHide)}
              style={styles.eye}
            >
              {isPasswordHide === true ? (
                <Ionicons name="eye" size={24} color={COLORS.placeholderText} />
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
        <View>
          <Button title="Login" filled onPress={() => handleLogin()} />
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
  textInputWrapper: {
    height: 48,
    justifyContent: 'center',
  },
  textInput: {
    width: '100%',
    backgroundColor: COLORS.neutralLightgray,
    padding: 10,
    borderRadius: 10,
    fontFamily: 'MontserratRegular',
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
});

export default Login;
