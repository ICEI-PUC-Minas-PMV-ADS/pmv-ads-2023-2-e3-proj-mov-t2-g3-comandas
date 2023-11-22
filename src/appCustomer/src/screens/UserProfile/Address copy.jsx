import COLORS from '@/constants/colors';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
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
  const { user } = useUser();
  const navigation = useNavigation();
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState();
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [zipcode, setZipcode] = useState();

  const [form, setForm] = React.useState({
    // Initial Data Simulated - because now the DB don't have payment data
    Localization: true,
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
      street,
      number: Number(),
      neighborhood,
      city,
      state,
      country,
      zipcode: Number(),
    })
      .then(() => {
        Alert.alert('Endereço cadastrado com Sucesso!');
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
        {/* >>>>>>>>>>Edit Head<<<<<<<<<<<< */}
        <View style={styles.profile}>
          <View style={styles.profileHeader} />
        </View>
        {/* >>>>>>>>>>Body<<<<<<<<<<<< */}
        <View style={styles.content}>
          <View style={styles.row}>
            <View
              style={[
                styles.rowIcon,
                { backgroundColor: COLORS.placeholderText },
              ]}
            >
              <FeatherIcon name="edit-3" color="#fff" size={15} />
            </View>
            <View style={styles.rowLabel}>
              <TextInput
                placeholder="Rua"
                placeholderTextColor={COLORS.placeholderText}
                autoCorrect={false}
                style={{ width: '100%' }}
                value={street}
                setValue={setStreet}
                onChangeText={(text) => setStreet(text)}
              />
            </View>
          </View>
          <View style={styles.row}>
            <View
              style={[
                styles.rowIcon,
                { backgroundColor: COLORS.placeholderText },
              ]}
            >
              <FeatherIcon name="edit-3" color="#fff" size={15} />
            </View>
            <View style={styles.rowLabel}>
              <TextInput
                placeholder="No"
                placeholderTextColor={COLORS.placeholderText}
                keyboardType="numeric"
                autoCorrect={false}
                style={{ width: '100%' }}
                value={number}
                setValue={setNumber}
                onChangeText={() => setNumber(Number)}
              />
            </View>
          </View>
          <View style={styles.row}>
            <View
              style={[
                styles.rowIcon,
                { backgroundColor: COLORS.placeholderText },
              ]}
            >
              <FeatherIcon name="edit-3" color="#fff" size={15} />
            </View>
            <View style={styles.rowLabel}>
              <TextInput
                placeholder="Bairro"
                placeholderTextColor={COLORS.placeholderText}
                autoCorrect={false}
                style={{ width: '100%' }}
                value={neighborhood}
                setValue={setNeighborhood}
                onChangeText={(text) => setNeighborhood(text)}
              />
            </View>
          </View>
          <View style={styles.row}>
            <View
              style={[
                styles.rowIcon,
                { backgroundColor: COLORS.placeholderText },
              ]}
            >
              <FeatherIcon name="edit-3" color="#fff" size={15} />
            </View>
            <View style={styles.rowLabel}>
              <TextInput
                placeholder="Cidade"
                placeholderTextColor={COLORS.placeholderText}
                autoCorrect={false}
                style={{ width: '100%' }}
                value={city}
                setValue={setCity}
                onChangeText={(text) => setCity(text)}
              />
            </View>
          </View>
          <View style={styles.row}>
            <View
              style={[
                styles.rowIcon,
                { backgroundColor: COLORS.placeholderText },
              ]}
            >
              <FeatherIcon name="edit-3" color="#fff" size={15} />
            </View>
            <View style={styles.rowLabel}>
              <TextInput
                placeholder="Estado"
                placeholderTextColor={COLORS.placeholderText}
                autoCorrect={false}
                style={{ width: '100%' }}
                value={state}
                setValue={setState}
                onChangeText={(text) => setState(text)}
              />
            </View>
          </View>
          <View style={styles.row}>
            <View
              style={[
                styles.rowIcon,
                { backgroundColor: COLORS.placeholderText },
              ]}
            >
              <FeatherIcon name="edit-3" color="#fff" size={15} />
            </View>
            <View style={styles.rowLabel}>
              <TextInput
                placeholder="País"
                placeholderTextColor={COLORS.placeholderText}
                autoCorrect={false}
                style={{ width: '100%' }}
                value={country}
                setValue={setCountry}
                onChangeText={(text) => setCountry(text)}
              />
            </View>
          </View>
          <View style={styles.row}>
            <View
              style={[
                styles.rowIcon,
                { backgroundColor: COLORS.placeholderText },
              ]}
            >
              <FeatherIcon name="edit-3" color="#fff" size={15} />
            </View>
            <View style={styles.rowLabel}>
              <TextInput
                placeholder="CEP"
                placeholderTextColor={COLORS.placeholderText}
                keyboardType="numeric"
                autoCorrect={false}
                style={{ width: '100%' }}
                value={zipcode}
                setValue={setZipcode}
                onChangeText={() => setZipcode(Number)}
              />
            </View>
          </View>
          {/* >>>>>>>>>>Edit Button<<<<<<<<<<<< */}
          <View style={styles.profile}>
            <TouchableOpacity
              onPress={() => {
                // handleRegisterUserAddress
                handleRegisterUserAddress();
              }}
            >
              <View style={styles.profileAction}>
                <Text style={styles.profileActionText}>Adicionar Endereço</Text>
                <FeatherIcon name="save" size={18} color={COLORS.white} />
              </View>
            </TouchableOpacity>
          </View>
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
  mapContainer: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
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
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 8,
    color: COLORS.placeholderText,
  },
  rowValue: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.linkTextGreen,
    marginRight: 8,
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
