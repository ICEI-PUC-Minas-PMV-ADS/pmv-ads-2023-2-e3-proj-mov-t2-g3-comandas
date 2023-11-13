import COLORS from '@/constants/colors';
import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  Switch,
  Alert,
} from 'react-native';
import { View, Text } from 'react-native-animatable';
import { useUser } from '@/context/UserContext';
// eslint-disable-next-line import/no-extraneous-dependencies
import RBSheet from 'react-native-raw-bottom-sheet';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FeatherIcon from 'react-native-vector-icons/Feather';
import LoadingBSheet from '@/components/BottomSheet/LoadingBSheet';
import AvatarExemple from '../../assets/UserAvatar.png';

const SECTIONS = [
  {
    header: 'Pagamento',
    icon: 'align-center',
    items: [
      {
        id: 'carteiraDigital',
        icon: 'dollar-sign',
        color: COLORS.iconGreen,
        label: 'Carteira Digital',
        type: 'link',
      },
      {
        id: 'cartoes',
        icon: 'credit-card',
        color: COLORS.iconGreen,
        label: 'Cartões',
        type: 'link',
      },
    ],
  },
  {
    header: 'Preferências',
    icon: 'settings',
    items: [
      {
        id: 'dadosPessoais',
        icon: 'user',
        color: COLORS.iconBlue,
        label: 'Dados Pessoais',
        type: 'link',
      },
      {
        id: 'address',
        icon: 'navigation',
        color: COLORS.iconBlue,
        label: 'Endereço & Localização',
        type: 'link',
      },
      {
        id: 'favorites',
        icon: 'heart',
        color: COLORS.iconBlue,
        label: 'Restaurantes Favoritos',
        type: 'link',
      },
      {
        id: 'darkMode',
        icon: 'moon',
        color: COLORS.black,
        label: 'Dark Mode',
        type: 'toggle',
      },
    ],
  },
  {
    header: 'Ajuda',
    icon: 'help-circle',
    items: [
      {
        id: 'faleConosco',
        icon: 'mail',
        color: COLORS.iconBlue,
        label: 'Fale Conosco',
        type: 'link',
      },
      {
        id: 'problemas',
        icon: 'alert-circle',
        color: COLORS.iconRed,
        label: 'Informe um Problema',
        type: 'link',
      },
    ],
  },
  {
    header: 'Excluir',
    icon: 'align-center',
    items: [
      {
        id: 'delete',
        icon: 'x',
        color: COLORS.iconRed,
        label: 'Excluir Conta',
        type: 'BottomSheet',
      },
    ],
  },
];

export default function UserProfile({ navigation }) {
  const [form, setForm] = React.useState({
    // fake - não tem Dark Mode criado
    darkMode: false,
  });
  // to get logged user data
  const { user } = useUser();

  const [isLoading, setIsLoading] = useState(false);

  const showConfirmDialog = () =>
    Alert.alert('Atenção!', 'Deseja Sair da sua Conta?', [
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
      <ScrollView
        style={{ width: '100%' }}
        contentContainerStyle={styles.scrollContent}
      >
        {/* >>>>>Logout Bottom Sheet<<<<< */}
        {isLoading ? (
          <LoadingBSheet
            headerText="Saindo da Conta..."
            welcomeBackText="Sua conta esta segura!"
            route={() => navigation.navigate('Login')}
          />
        ) : null}

        <View style={styles.profile}>
          <TouchableOpacity
            onPress={() => {
              // handleUploadPicture
            }}
          >
            <View style={styles.profileAvatarWrapper}>
              <Image
                alt="Profile Picture"
                source={AvatarExemple}
                style={styles.profileAvatar}
              />
              <View style={styles.profileAction}>
                <FeatherIcon name="edit-3" size={15} color={COLORS.white} />
              </View>
            </View>
          </TouchableOpacity>

          <Text style={styles.profileName}>{user.name}</Text>

          <TouchableOpacity
            onPress={() => {
              // handle logout
              // AsyncStorage.clear();
              showConfirmDialog();
            }}
          >
            <View style={styles.logout}>
              <FeatherIcon
                name="log-out"
                size={24}
                label="Sair"
                color={COLORS.white}
              />
              <Text style={styles.logoutLabel}>Sair</Text>
            </View>
          </TouchableOpacity>
        </View>

        {SECTIONS.map(({ header, items }) => (
          <View style={styles.section} key={header}>
            <Text style={styles.sectionHeader}>{header}</Text>

            {items.map(({ id, label, type, icon, color }) => (
              <TouchableOpacity
                key={icon}
                onPress={() => {
                  // handle onPress
                  if (id === 'carteiraDigital') {
                    navigation.navigate('CarteiraDigital');
                  }
                  if (id === 'cartoes') {
                    navigation.navigate('Cartoes');
                  }
                  if (id === 'dadosPessoais') {
                    navigation.navigate('DadosPessoais');
                  }
                  if (id === 'address') {
                    navigation.navigate('Address');
                  }
                  if (id === 'favorites') {
                    navigation.navigate('Favoritos');
                  }
                  if (id === 'faleConosco') {
                    navigation.navigate('FaleConosco');
                  }
                  if (id === 'problemas') {
                    navigation.navigate('Problemas');
                  }
                  if (id === 'delete') {
                    sheetDeleteAccount.current.open();
                  }
                }}
              >
                <View style={styles.row}>
                  <View style={[styles.rowIcon, { backgroundColor: color }]}>
                    <FeatherIcon name={icon} color="#fff" size={18} />
                  </View>

                  <Text style={styles.rowLabel}>{label}</Text>

                  <View style={{ flex: 1 }} />

                  {type === 'toggle' && (
                    <Switch
                      value={form[id]}
                      onValueChange={(value) =>
                        setForm({
                          ...form,
                          [id]: value,
                        })
                      }
                    />
                  )}
                  {type === 'link' && (
                    <FeatherIcon
                      name="chevron-right"
                      color="#0c0c0c"
                      size={22}
                    />
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ))}
        {/* Code for Bottom Sheets */}
        {/* Delete Account Bottom Sheet */}
        <RBSheet
          ref={sheetDeleteAccount}
          customStyles={{ container: styles.sheet }}
          height={350}
          openDuration={450}
          closeDuration={250}
        >
          <View style={styles.sheetHeader}>
            <Text style={styles.sheetHeaderTitle}>Excluir Conta</Text>
          </View>

          <View style={styles.sheetBody}>
            <Text style={styles.sheetBodyText}>
              Tem certeza que deseja{' '}
              <Text
                style={{
                  fontWeight: '700',
                  color: COLORS.iconRed,
                }}
              >
                excluir a sua conta
              </Text>
              ?{'\n'}Esta ação não pode ser desfeita!
            </Text>

            <TouchableOpacity
              onPress={() => {
                // Handle onPress Delete Conta
                // Falta metodo DELETE em User
                sheetDeleteAccount.current.close();
                AsyncStorage.clear();
                navigation.navigate('Welcome');
              }}
            >
              <View style={[styles.btn, { backgroundColor: COLORS.iconRed }]}>
                <Text style={styles.btnText}>Excluir Conta</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => sheetDeleteAccount.current.close()}
            >
              <View
                style={[styles.btn, { backgroundColor: COLORS.linkTextGreen }]}
              >
                <Text style={styles.btnText}>Cancelar</Text>
              </View>
            </TouchableOpacity>
          </View>
        </RBSheet>
      </ScrollView>
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
  },
  container: {
    paddingVertical: 20,
    flexGrow: 1,
  },
  profile: {
    backgroundColor: COLORS.white,
    padding: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: -20,
  },
  profileName: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: '800',
    color: COLORS.linkTextGreen,
    textAlign: 'center',
  },
  profileAvatar: {
    width: 120,
    height: 120,
    borderRadius: 99,
    borderColor: COLORS.linkTextGreen,
    borderWidth: 0.2,
  },
  profileAvatarWrapper: {
    position: 'relative',
  },
  profileAction: {
    width: 24,
    height: 24,
    borderRadius: 99,
    backgroundColor: COLORS.linkTextGreen,
    position: 'absolute',
    right: -4,
    bottom: -10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logout: {
    backgroundColor: COLORS.iconRed,
    width: 60,
    height: 60,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.iconRed,
    borderRadius: 99,
    borderWidth: 3,
  },
  logoutLabel: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: '600',
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
    color: COLORS.black,
  },
  rowIcon: {
    width: 32,
    height: 32,
    borderRadius: 99,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
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
});
