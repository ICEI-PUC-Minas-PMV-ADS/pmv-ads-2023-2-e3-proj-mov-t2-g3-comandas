import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, { useState, useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { AuthContext } from '../../context/AuthContext';
import COLORS from '../../constants/colors';
import Button from '../../components/Buttons/Button';

function Signup({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const { isLoading, register } = useContext(AuthContext);

  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginVertical: -21 }}>
          <Image
            source={require('../../assets/Comandas-icon.png')}
            style={styles.imageStyle}
          />
        </View>

        <View style={{ marginTop: 30, marginBottom: 12 }}>
          <Text style={styles.textLableInput}>Nome</Text>
          <View style={styles.textInput}>
            <TextInput
              placeholder="Seu Nome"
              placeholderTextColor={COLORS.placeholderText}
              style={{ width: '100%' }}
              value={name}
              setValue={setName}
              onChangeText={(text) => setName(text)}
            />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={styles.textLableInput}>Email address</Text>
          <View style={styles.textInput}>
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
          <Text style={styles.textLableInput}>Senha</Text>

          <View style={styles.textInput}>
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
              style={styles.eye}
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
          <Text style={styles.textLableInput}>Confirmar Senha</Text>

          <View style={styles.textInput}>
            <TextInput
              placeholder="Confirmar a senha"
              placeholderTextColor={COLORS.placeholderText}
              secureTextEntry={isPasswordShown}
              style={{ width: '100%' }}
              value={passwordRepeat}
              onChangeText={(text) => setPasswordRepeat(text)}
            />

            <TouchableOpacity
              onPress={() => setIsPasswordShown(!isPasswordShown)}
              style={styles.eye}
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
        <View style={styles.checkbox}>
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
          onPress={() => {
            register(name, email, password);
          }}
          style={{
            marginTop: 91,
            marginBottom: 4,
          }}
        />

        {/* <SocialLogin /> */}

        <View style={styles.footer}>
          <Text style={styles.textFooter}>Já tem uma conta? Então </Text>
          <Pressable onPress={() => navigation.navigate('Login')}>
            <Text style={styles.textFooterLink}>faça login.</Text>
          </Pressable>
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
  imageStyle: {
    alignSelf: 'center',
    height: 75,
    width: 75,
    aspectRatio: 1 / 1,
  },
  textInput: {
    width: '100%',
    height: 48,
    backgroundColor: COLORS.neutralLightGrey,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 22,
  },
  textLableInput: {
    fontSize: 16,
    fontWeight: 400,
    marginVertical: 8,
  },
  eye: {
    position: 'absolute',
    right: 15,
  },
  checkbox: {
    flexDirection: 'row',
    marginVertical: 6,
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
    marginLeft: 6,
  },
});

export default Signup;
