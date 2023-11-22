import COLORS from '@/constants/colors';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Switch,
  Alert,
} from 'react-native';
import React from 'react';
import { useUser } from '@/context/UserContext';
import { useNavigation } from '@react-navigation/native';
import { registerUserAddress } from '@/services/auth.service';
import FeatherIcon from 'react-native-vector-icons/Feather';

const SECTIONS = [
  {
    header: 'Endereço e Localização',
    icon: 'map',
    items: [
      {
        id: 'Localization',
        icon: 'map',
        label: 'Usar Localização Atual',
        type: 'toggle',
      },
      {
        id: 'id',
        icon: 'chevron-right',
        label: 'Id',
        type: 'bottom-sheet',
      },
      { id: 'street', icon: 'check', label: 'Rua', type: 'bottom-sheet' },
      { id: 'number', icon: 'check', label: 'No', type: 'bottom-sheet' },
      {
        id: 'neighborhood',
        icon: 'check',
        label: 'Bairro',
        type: 'bottom-sheet',
      },
      {
        id: 'city',
        icon: 'check',
        label: 'Cidade',
        type: 'bottom-sheet',
      },
      {
        id: 'state',
        icon: 'check',
        label: 'Estado',
        type: 'bottom-sheet',
      },
      {
        id: 'country',
        icon: 'check',
        label: 'País',
        type: 'bottom-sheet',
      },
      {
        id: 'zipcode',
        icon: 'check',
        label: 'CEP',
        type: 'bottom-sheet',
      },
    ],
  },
];

function Address() {
  // to get logged user data
  const { user } = useUser();
  const navigation = useNavigation();
  /* const [street, setStreet] = useState('');
  const [number, setNumber] = useState();
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState();
  const [country, setCountry] = useState('');
  const [zipcode, setZipcode] = useState(); */

  const [form, setForm] = React.useState({
    // Initial Data Simulated - because now the DB don't have payment data
    Localization: false,
    id: user.id,
    street: 'Monteiro Lobato',
    number: '795',
    neighborhood: 'Centro',
    city: 'São Paulo',
    state: 'São Paulo',
    country: 'Brasil',
    zipcode: '05614-018',
  });

  const [value] = React.useState(0);
  const { items } = React.useMemo(
    () => ({
      // tabs: SECTIONS.map(() => ({})),
      items: SECTIONS[value].items,
    }),
    [value],
  );

  function handleRegisterUserAddress() {
    registerUserAddress({
      userAddressInfo: {
        street,
        number,
        neighborhood,
        city,
        state,
        country,
        zipcode,
      },
    })
      .then(() => {
        navigation.navigate('UserProfile');
      })
      .catch(() => {
        Alert.alert(
          'Endereço não cadastrado!',
          'Tente novamente ou faça Login novamente',
        );
      });
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.scrollContent}>
        {/* >>>>>>>>>>header<<<<<<<<<<<< */}
        <View style={styles.header}>
          {/* <Text style={styles.title}>Cartões de Pagamento</Text>
          <Text style={styles.subtitle}>
            Gerencie aqui seus cartões de pagamento.
          </Text> */}
        </View>
        {/* >>>>>>>>>>Edit Head<<<<<<<<<<<< */}
        <View style={styles.profile}>
          <View style={styles.profileHeader} />
          {/* >>>>>>>>>>Edit Button<<<<<<<<<<<< */}
          <TouchableOpacity
            onPress={() => {
              // handleRegisterUserAddress
              handleRegisterUserAddress();
            }}
          >
            <View style={styles.profileAction}>
              <Text style={styles.profileActionText}>Editar Endereço</Text>
              <FeatherIcon name="edit-3" size={16} color={COLORS.white} />
            </View>
          </TouchableOpacity>
        </View>

        {/* >>>>>>>>>>Body<<<<<<<<<<<< */}
        <View style={styles.content}>
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
                {type === 'bottom-sheet' && (
                  <Text style={styles.rowValue}>{form[id]}</Text>
                )}
                {type === 'toggle' && (
                  <Switch
                    value={form[id]}
                    onValueChange={(value) => setForm({ ...form, [id]: value })}
                  />
                )}
              </View>
            </View>
          ))}
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Para aprovação de pagamentos com Cartão de Crédito o endereço deve
            ser o mesmo cadastrado para a cobrança do Cartão.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default Address;

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
  },
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
    marginTop: 6,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.placeholderText,
    marginHorizontal: 5,
  },
  profile: {
    paddingTop: 12,
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
  profileAction: {
    marginTop: 16,
    marginHorizontal: 20,
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
  footer: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  footerText: {
    fontSize: 12,
    color: COLORS.linkTextGreen,
    fontWeight: '400',
  },
});
