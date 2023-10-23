import COLORS from '@/constants/colors';
import React from 'react';
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  Switch,
} from 'react-native';
import { View, Text } from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AvatarExemple from '../../assets/UserAvatar.png';

const SECTIONS = [
  {
    header: 'Carteira Digital',
    icon: 'align-center',
    items: [
      {
        icon: 'dollar-sign',
        color: COLORS.iconGreen,
        label: 'Saldo',
        type: 'link',
      },
      {
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
        icon: 'user',
        color: COLORS.iconBlue,
        label: 'Dados Pessoais',
        type: 'link',
      },
      {
        icon: 'navigation',
        color: COLORS.iconBlue,
        label: 'Usar Localização',
        type: 'toggle',
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
        icon: 'mail',
        color: COLORS.iconBlue,
        label: 'Fale Conosco',
        type: 'link',
      },
      {
        icon: 'alert-circle',
        color: COLORS.iconRed,
        label: 'Informe um Problema',
        type: 'link',
      },
    ],
  },
];

export default function UserProfile({ navigation }) {
  const [form, setForm] = React.useState({
    darkMode: true,
    usarLocalizacao: true,
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={{ width: '100%' }}
        contentContainerStyle={styles.scrollContent}
      >
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

          <Text style={styles.profileName}>Carlos Reinis</Text>

          <TouchableOpacity
            onPress={() => {
              // handle logout
              AsyncStorage.clear();
              navigation.navigate('CheckoutLogout');
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
                        setForm({ ...form, [id]: value })
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
      </ScrollView>
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1, // Permite que o ScrollView cresça para preencher o espaço disponível
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
    borderRadius: 9999,
    borderColor: COLORS.linkTextGreen,
    borderWidth: 0.2,
  },
  profileAvatarWrapper: {
    position: 'relative',
  },
  profileAction: {
    width: 24,
    height: 24,
    borderRadius: 9999,
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
    borderRadius: 9999,
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
    borderRadius: 9999,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
});
