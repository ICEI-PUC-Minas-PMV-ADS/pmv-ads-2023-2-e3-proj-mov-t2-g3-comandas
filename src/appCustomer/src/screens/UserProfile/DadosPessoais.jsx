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
} from 'react-native';
import React from 'react';
import { useUser } from '@/context/UserContext';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AvatarExemple from '../../assets/UserAvatar.png';

const SECTIONS = [
  {
    header: 'Dados Pessoais',
    icon: 'user',
    items: [
      { id: 'id', icon: 'bookmark', label: 'Id', type: 'input' },
      { id: 'name', icon: 'user', label: 'Nome', type: 'input' },
      { id: 'email', icon: 'mail', label: 'Email', type: 'input' },
      { id: 'phoneNumber', icon: 'phone', label: 'Celular', type: 'input' },
    ],
  },
  {
    header: 'Preferencias',
    icon: 'settings',
    items: [
      { id: 'security', icon: 'lock', label: 'Segurança', type: 'toggle' },
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
      { id: 'addsPolicy', icon: 'gift', label: 'Publicidade', type: 'toggle' },
    ],
  },
];

export default function DadosPessoais() {
  const { user } = useUser();
  const [form, setForm] = React.useState({
    id: user.id,
    name: user.name,
    email: user.email,
    phoneNumber: user.phoneNumber,
  });
  const [value, setValue] = React.useState(0);
  const { tabs, items } = React.useMemo(
    () => ({
      tabs: SECTIONS.map(({ header, icon }) => ({
        header,
        icon,
      })),
      items: SECTIONS[value].items,
    }),
    [value],
  );

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
              // handleUploadPicture
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
                    isActive && { borderBottomColor: COLORS.linkTextGreen },
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
                    trackColor={{ true: COLORS.linkTextGreen }}
                    value={form[id]}
                    onValueChange={(val) => setForm({ ...form, [id]: val })}
                  />
                )}

                {['links', 'input'].includes(type) && (
                  <FeatherIcon
                    name="chevron-right"
                    color={COLORS.placeholderText}
                    size={20}
                  />
                )}
              </View>
            </View>
          ))}
        </View>
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
});
