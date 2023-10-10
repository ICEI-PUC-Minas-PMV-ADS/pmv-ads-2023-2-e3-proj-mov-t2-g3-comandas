import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
  AsyncStorage,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackActions, NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types'
import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import COLORS from '../../constants/colors';
import Button from '../../components/Buttons/Button';
import api from '../../services/api';

function Login({ navigation, props }) {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  async function saveUser(user) {
    await AsyncStorage.setItem('@ListApp:userToken', JSON.stringify(user));
  }

  async function signIn() {
    if (username.length === 0) return;

    setLoading(true);

    try {
      const credentials = {
        email: username,
        password,
      };
      const response = await api.post('/sessions', credentials);
      const user = response.data;
      await saveUser(user);

      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Home' })],
      });

      setLoading(false);

      props.navigation.dispatch(resetAction);
    } catch (err) {
      // console.log(err);
      setLoading(false);
      setErrorMessage('Usuário não cadastrado');
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, marginHorizontal: 22, marginTop: 1 }}>
        <View style={{ marginVertical: 1 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,

              color: COLORS.black,
            }}
          >
            Hello 🖐️
          </Text>

          <Text
            style={{
              fontSize: 32,
              fontWeight: 600,
              color: COLORS.black,
            }}
          >
            Bem Vindo ao
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={require('../../assets/Comandas-icon.png')}
              style={{
                alignSelf: 'center',
                height: 50,
                width: 50,
                aspectRatio: 1 / 1,
                marginRight: -6,
              }}
            />
            <Text
              style={{
                fontSize: 34,
                fontWeight: 600,
                color: COLORS.primary,
              }}
            >
              omandas
            </Text>
          </View>
        </View>

        {!!errorMessage && <Error>{errorMessage}</Error>}

        <View style={{ marginTop: 30, marginBottom: 20 }}>
          <View
            style={{
              width: '100%',
              height: 48,
              backgroundColor: COLORS.neutralLightGrey,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
              paddingLeft: 22,
            }}
          >
            <TextInput
              placeholder="Email"
              placeholderTextColor={COLORS.placeholderText}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              style={{ width: '100%' }}
              value={username}
              onChangeText={(username) => setUsername(username)}
            />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <View
            style={{
              width: '100%',
              height: 48,
              backgroundColor: COLORS.neutralLightGrey,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
              paddingLeft: 22,
            }}
          >
            <TextInput
              placeholder="Senha"
              placeholderTextColor={COLORS.placeholderText}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={isPasswordShown}
              style={{ width: '100%' }}
              value={password}
              onChangeText={(password) => setPassword(password)}
            />

            <TouchableOpacity
              onPress={() => setIsPasswordShown(!isPasswordShown)}
              style={{
                position: 'absolute',
                right: 15,
              }}
            >
              {isPasswordShown === true ? (
                <Ionicons
                  name="eye-off"
                  size={24}
                  color={COLORS.placeholderText}
                />
              ) : (
                <Ionicons name="eye" size={24} color={COLORS.placeholderText} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginVertical: 9,
          }}
        >
          <Checkbox
            style={{ marginRight: 10 }}
            value={isChecked}
            onValueChange={setIsChecked}
            color={isChecked ? COLORS.primary : undefined}
          />

          <Text>Salvar dados</Text>
        </View>

        <Button
          title="Login"
          filled
          onPress={signIn}
          style={{
            marginTop: 260,
            marginBottom: 4,
          }}
        />

        {/* PARA LOGIN COM AS REDES SOCIAIS */}
        {/* Quando ativado alterar marginTop do Buttom para 150 */}
        {/* <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: COLORS.grey,
                            marginHorizontal: 10
                        }}
                    />
                    <Text style={{ fontSize: 14 }}>Ou faça Login com</Text>
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: COLORS.neutralMiddGrey,
                            marginHorizontal: 10
                        }}
                    />
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    <TouchableOpacity
                        onPress={() => console.log("Pressed")}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            height: 52,
                            borderWidth: 1,
                            borderColor: COLORS.neutralMiddGrey,
                            marginRight: 4,
                            borderRadius: 50
                        }}
                    >
                        <Image
                            source={require("../assets/facebook.png")}
                            style={{
                                height: 36,
                                width: 36,
                                marginRight: 8
                            }}
                            resizeMode='contain'
                        />

                        <Text>Facebook</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => console.log("Pressed")}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            height: 52,
                            borderWidth: 1,
                            borderColor: COLORS.neutralMiddGrey,
                            marginRight: 4,
                            borderRadius: 50
                        }}
                    >
                        <Image
                            source={require("../assets/google.png")}
                            style={{
                                height: 36,
                                width: 36,
                                marginRight: 8
                            }}
                            resizeMode='contain'
                        />

                        <Text>Google</Text>
                    </TouchableOpacity>
                </View>
 */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: 18,
          }}
        >
          <Text style={{ fontSize: 16, color: COLORS.black }}>
            Não tem conta? Vamos{' '}
          </Text>
          <Pressable onPress={() => navigation.navigate('Signup')}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.linkTextGreen,
                fontWeight: 'bold',
                marginLeft: 6,
              }}
            >
              criar uma conta.
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

Login.navigationOptions = () => ({
  header: null,
});

Login.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
  }).isRequired,
};

export default Login;
