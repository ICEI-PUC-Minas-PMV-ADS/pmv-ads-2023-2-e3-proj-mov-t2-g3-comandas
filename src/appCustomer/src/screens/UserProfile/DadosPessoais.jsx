import COLORS from '@/constants/colors';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Switch,
  TextInput,
  Alert,
} from 'react-native';
import React, { useState, useMemo } from 'react';
import { useUser } from '@/context/UserContext';
import RBSheet from 'react-native-raw-bottom-sheet';
import FeatherIcon from 'react-native-vector-icons/Feather';

import RNDateTimePicker from '@react-native-community/datetimepicker';
import { UpdateUser } from '@/services/user.services';
import AvatarExemple from '../../assets/UserAvatar.png';

const SECTIONS = [
  {
    header: 'Dados Pessoais',
    icon: 'user',
    items: [
      { id: 'id', icon: 'bookmark', label: 'Id', type: 'input' },
      { id: 'name', icon: 'user', label: 'Nome', type: 'input' },
      { id: 'email', icon: 'mail', label: 'Email', type: 'input' },
      {
        id: 'phoneNumber',
        icon: 'phone',
        label: 'Celular',
        type: 'input',
      },
      {
        id: 'birthday',
        icon: 'calendar',
        label: 'Aniversário',
        type: 'input',
      },
    ],
  },
  {
    header: 'Preferencias',
    icon: 'settings',
    items: [
      {
        id: 'security',
        icon: 'lock',
        label: 'Segurança',
        type: 'toggle',
      },
      {
        id: 'notifications',
        icon: 'bell',
        label: 'Notificações',
        type: 'toggle',
      },
      {
        id: 'address',
        icon: 'compass',
        label: 'Permitir Usar Localização',
        type: 'toggle',
      },
      {
        id: 'addsPolicy',
        icon: 'gift',
        label: 'Publicidade',
        type: 'toggle',
      },
    ],
  },
];

export default function DadosPessoais() {
  const { user } = useUser();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [birthday, setBirthday] = useState(new Date());

  const [form, setForm] = useState({
    id: user.id,
    name: user.name,
    email: user.email,
    phoneNumber: user.phoneNumber,
    birthday: user.birthday,
  });
  const [value, setValue] = useState(0);
  const { tabs, items } = useMemo(
    () => ({
      tabs: SECTIONS.map(({ header, icon }) => ({
        header,
        icon,
      })),
      items: SECTIONS[value].items,
    }),
    [value],
  );
  // Action Bottom Sheets
  const sheetEditProfile = React.useRef();

  function handleUpdateUser() {
    UpdateUser({
      customerInfo: {
        birthday,
      },

      userInfo: {
        name,
        email,
        phoneNumber: Number(phoneNumber),
      },
    })
      .then(() => {
        Alert.alert('Alterações realizadas com Sucesso!');
        sheetEditProfile.current.close();
      })
      .catch(() => {
        Alert.alert('Alterações não foram salvas!', 'Tente novamente.');
      });
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* >>>>>>>>>>header<<<<<<<<<<<< */}
        <View style={styles.header}>
          <Text style={styles.title}>Conta de Usuário</Text>
          <Text style={styles.subtitle}>
            Gerencie aqui seus dados e preferências.
          </Text>
        </View>
        {/* >>>>>>>>>>Edit Head<<<<<<<<<<<< */}
        <View style={styles.profile}>
          <View style={styles.profileHeader}>
            <Image
              alt="Profile Picture"
              source={AvatarExemple}
              style={styles.profileAvatar}
            />
            <View>
              <Text style={styles.profileName}>{user.name}</Text>
              <Text style={styles.profileHandle}>{user.email}</Text>
            </View>
          </View>
          {/* >>>>>>>>>>Edit Button<<<<<<<<<<<< */}
          <TouchableOpacity
            onPress={() => {
              // handleEditUserProfile
              sheetEditProfile.current.open();
            }}
          >
            <View style={styles.profileAction}>
              <Text style={styles.profileActionText}>Editar Perfil</Text>
              <FeatherIcon name="edit-3" size={16} color={COLORS.white} />
            </View>
          </TouchableOpacity>
        </View>

        {/* >>>>>>>>>>Body<<<<<<<<<<<< */}
        <View style={styles.content}>
          <View style={styles.tabs}>
            {tabs.map(({ header, icon }, index) => {
              const isActive = value === index;

              return (
                <View
                  key={index}
                  style={[
                    styles.tabWrapper,
                    isActive && {
                      borderBottomColor: COLORS.linkTextGreen,
                    },
                  ]}
                >
                  <TouchableOpacity onPress={() => setValue(index)}>
                    <View style={styles.tab}>
                      <FeatherIcon
                        style={{ padding: 8 }}
                        name={icon}
                        color={isActive ? COLORS.linkTextGreen : '#6b7280'}
                        size={18}
                      />
                      <Text
                        style={
                          (styles.tabText,
                          {
                            color: isActive ? COLORS.linkTextGreen : '#6b7280',
                          })
                        }
                      >
                        {header}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
          {items.map(({ label, type, id, icon }, index) => (
            <View key={index} style={styles.rowWrapper}>
              <View style={styles.row}>
                <FeatherIcon
                  style={{ padding: 8 }}
                  name={icon}
                  size={18}
                  color={COLORS.placeholderText}
                />
                <Text style={styles.rowLabel}>{label}</Text>

                <View style={{ flex: 1 }} />
                {type === 'input' && (
                  <Text style={styles.rowValue}>{form[id]}</Text>
                )}

                {type === 'toggle' && (
                  <Switch
                    trackColor={{
                      true: COLORS.linkTextGreen,
                    }}
                    value={form[id]}
                    onValueChange={(val) => setForm({ ...form, [id]: val })}
                  />
                )}
              </View>
            </View>
          ))}
        </View>

        {/* Bottom Sheets */}
        {/* Edit/UpDate Profile Bottom Sheet */}
        <RBSheet
          ref={sheetEditProfile}
          customStyles={{ container: styles.sheet }}
          height={600}
          openDuration={350}
          closeDuration={250}
        >
          <View style={styles.sheetHeader}>
            <Text style={styles.sheetHeaderTitle}>Editar Conta</Text>
          </View>

          <View style={styles.sheetBody}>
            {items.map(({ label, type, id, icon }, index) => (
              <View key={index}>
                <View style={styles.rowEditSheet}>
                  <FeatherIcon
                    style={{ padding: 8 }}
                    name={icon}
                    size={18}
                    color={COLORS.placeholderText}
                  />
                  <Text style={styles.rowLabel}>{label}</Text>

                  <View style={{ flex: 1 }} />
                  {type === 'input' && label === 'Nome' && (
                    <TextInput
                      style={styles.rowValue}
                      autoCorrect={false}
                      value={name}
                      setValue={setName}
                      onChangeText={(text) => setName(text)}
                    >
                      {form[id]}
                    </TextInput>
                  )}
                  {type === 'input' && label === 'Email' && (
                    <TextInput
                      style={styles.rowValue}
                      autoCorrect={false}
                      value={email}
                      setValue={setEmail}
                      onChangeText={(text) => setEmail(text)}
                    >
                      {form[id]}
                    </TextInput>
                  )}
                  {type === 'input' && label === 'Celular' && (
                    <TextInput
                      style={styles.rowValue}
                      autoCorrect={false}
                      keyboardType="phone-pad"
                      value={phoneNumber}
                      onChangeText={setPhoneNumber}
                    >
                      {form[id]}
                    </TextInput>
                  )}
                  {type === 'input' && label === 'Aniversário' && (
                    <RNDateTimePicker
                      mode="date"
                      value={birthday}
                      onChange={(event, date) => setBirthday(date)}
                    />
                  )}
                </View>
              </View>
            ))}
          </View>
          <View style={styles.profile}>
            <TouchableOpacity
              onPress={() => {
                // handleUpdateUserProfile
                handleUpdateUser();
                sheetEditProfile.current.close();
              }}
            >
              <View style={styles.profileAction}>
                <Text style={styles.profileActionText}>Salvar Alterações</Text>
                <FeatherIcon name="save" size={16} color={COLORS.white} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => sheetEditProfile.current.close()}>
              <View style={[styles.btn, { backgroundColor: COLORS.iconRed }]}>
                <Text style={styles.btnText}>Cancelar</Text>
              </View>
            </TouchableOpacity>
          </View>
        </RBSheet>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
  },
  header: {
    paddingHorizontal: 24,
    marginBottom: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: COLORS.linkTextGreen,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.placeholderText,
  },
  profile: {
    paddingTop: 12,
    paddingHorizontal: 24,
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
  profileName: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.linkTextGreen,
  },
  profileHandle: {
    marginTop: 4,
    fontSize: 15,
    color: COLORS.greyDark,
  },
  profileAvatar: {
    width: 120,
    height: 120,
    borderRadius: 99,
    borderColor: COLORS.linkTextGreen,
    borderWidth: 0.2,
    marginRight: 12,
  },
  profileAction: {
    marginTop: 16,
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
  content: {
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderColor: COLORS.greyLineStyle,
  },
  tabs: {
    flexDirection: 'row',
    padding: 16,
  },
  tabWrapper: {
    flex: 1,
    borderBottomWidth: 2,
    borderColor: COLORS.greyLineStyle,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    position: 'relative',
    overflow: 'hidden',
  },
  tabText: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.placeholderText,
    marginLeft: 5,
  },
  rowWrapper: {
    borderTopWidth: 1,
    borderColor: COLORS.greyLineStyle,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    height: 60,
  },
  rowEditSheet: {
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
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.placeholderText,
  },
  rowValue: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.linkTextGreen,
    marginRight: 4,
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
