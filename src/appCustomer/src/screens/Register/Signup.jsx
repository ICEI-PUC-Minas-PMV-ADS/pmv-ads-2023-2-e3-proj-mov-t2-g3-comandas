import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { AuthContext } from '../../context/AuthContext';
import COLORS from '../../constants/colors';
import Button from '../../components/Buttons/Button';
import SocialLogin from '../../components/SocialLogin/SocialLogin';

function Signup({ navigation }) {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const { isLoading, register } = useContext(AuthContext);

  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginVertical: -21 }}>
          <Image
            source={require('../../assets/Comandas-icon.png')}
            style={{
              alignSelf: 'center',
              height: 75,
              width: 75,
              aspectRatio: 1 / 1,
            }}
          />
        </View>

        <View style={{ marginTop: 30, marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 8,
            }}
          >
            Nome
          </Text>
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
              placeholder="Seu Nome"
              placeholderTextColor={COLORS.placeholderText}
              style={{ width: '100%' }}
              value={name}
              onChangeText={(text) => setName(text)}
            />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 8,
            }}
          >
            Email address
          </Text>
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
              keyboardType="email-address"
              style={{ width: '100%' }}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 8,
            }}
          >
            Senha
          </Text>

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
              placeholder="Sua senha"
              placeholderTextColor={COLORS.placeholderText}
              secureTextEntry={isPasswordShown}
              style={{ width: '100%' }}
              value={password}
              onChangeText={(text) => setPassword(text)}
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
        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 8,
            }}
          >
            Confirmar Senha
          </Text>

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
              placeholder="Confirmar a senha"
              placeholderTextColor={COLORS.placeholderText}
              secureTextEntry={isPasswordShown}
              style={{
                width: '100%',
              }}
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
            marginVertical: 6,
          }}
        >
          <Checkbox
            style={{ marginRight: 8 }}
            value={isChecked}
            onValueChange={setIsChecked}
            color={isChecked ? COLORS.primary : undefined}
          />

          <Text>Eu concordo com os termos e condições.</Text>
        </View>

        <Button
          title="Criar Conta"
          filled
          // onPress={() => navigation.navigate('Home')}
          onPress={() => {
            register(name, email, password);
          }}
          style={{
            marginTop: 91,
            marginBottom: 4,
          }}
        />

        {/* <SocialLogin /> */}

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
      </View>
    </SafeAreaView>
  );
}

export default Signup;
