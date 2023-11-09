import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  SafeAreaView,
  useWindowDimensions,
} from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { register } from '@/services/auth.service';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import COLORS from '../../constants/colors';
import Button from '../../components/Buttons/Button';
import icon from '../../assets/Comandas-icon.png';

function Signup() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [photoUrl, setPhotoUrl] = useState(null);
  const [birthday, setBirthday] = useState(new Date());

  const [isPasswordHide, setIsPasswordHide] = useState(true);

  const { height } = useWindowDimensions();

  function handleRegister() {
    register({
      customerInfo: {
        birthday,
        photoUrl,
      },

      userInfo: {
        name,
        email,
        phoneNumber: Number(phoneNumber),
        password,
      },
    })
      .then(() => {
        navigation.navigate('CheckinRegister');
      })
      .catch(() => {
        Alert.alert('Usuário não cadastrado!', 'Tente novamente ou faça Login');
      });
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <View>
              <Image source={icon} style={styles.imageStyle} />
            </View>

            <View>
              <Text style={styles.textLableInput}>
                Nome <Text style={{ color: COLORS.primary }}>*</Text>
              </Text>
              <View style={styles.textInput}>
                <TextInput
                  placeholder="Nome"
                  placeholderTextColor={COLORS.placeholderText}
                  autoCapitalize="none"
                  autoCorrect={false}
                  style={{ width: '100%' }}
                  value={name}
                  setValue={setName}
                  onChangeText={(text) => setName(text)}
                />
              </View>
            </View>

            <View>
              <Text style={styles.textLableInput}>
                Email <Text style={{ color: COLORS.primary }}>*</Text>
              </Text>
              <View style={styles.textInput}>
                <TextInput
                  placeholder="Email"
                  placeholderTextColor={COLORS.placeholderText}
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="email-address"
                  style={{ width: '100%' }}
                  value={email}
                  setValue={setEmail}
                  onChangeText={(text) => setEmail(text)}
                />
              </View>
            </View>

            <View>
              <Text style={styles.textLableInput}>Celular</Text>
              <View style={styles.textInput}>
                <TextInput
                  placeholder="Celular"
                  placeholderTextColor={COLORS.placeholderText}
                  keyboardType="phone-pad"
                  autoCorrect={false}
                  style={{ width: '100%' }}
                  value={phoneNumber}
                  setValue={setPhoneNumber}
                  onChangeText={setPhoneNumber}
                />
              </View>
            </View>

            <View>
              <Text style={styles.textLableInput}>Aniversário</Text>
              <View style={styles.textInput}>
                <RNDateTimePicker
                  mode="date"
                  value={birthday}
                  onChange={(event, date) => setBirthday(date)}
                />
              </View>
            </View>

            <View>
              <Text style={styles.textLableInput}>Foto Avatar</Text>
              <View style={styles.textInput}>
                <TextInput
                  placeholder="Upload da foto do perfíl"
                  placeholderTextColor={COLORS.placeholderText}
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="url"
                  style={{ width: '100%' }}
                  value={photoUrl}
                  setValue={setPhotoUrl}
                  onChangeText={(text) => setPhotoUrl(text)}
                />
              </View>
            </View>
          </View>

          <View>
            <View>
              <Text style={styles.textLableInput}>
                Senha <Text style={{ color: COLORS.primary }}>*</Text>
              </Text>

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
          </View>

          <View style={styles.checkbox}>
            <Text style={{ width: '100%' }}>
              Registrando-se você concordo com os termos e condições.
              <Text style={styles.obsText}>{'\n'}* Campos obrigatórios.</Text>
            </Text>
          </View>

          <Button
            title="Criar Conta"
            filled
            onPress={() => handleRegister()}
            style={{
              marginTop: height < 1300 ? '5%' : '35%',
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
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 20,
    gap: 15,
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
    justifyContent: 'center',
    paddingLeft: 22,
  },
  textLableInput: {
    fontSize: 16,
    fontWeight: '400',
    marginVertical: 8,
  },
  eye: {
    position: 'absolute',
    right: 15,
  },
  checkbox: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 22,
  },
  obsText: {
    fontSize: 12,
    color: COLORS.primary,
    flexDirection: 'row',
    marginVertical: 10,
    lineHeight: 24,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
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

export default Signup;
