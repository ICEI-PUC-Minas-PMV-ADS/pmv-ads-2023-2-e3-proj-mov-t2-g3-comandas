import COLORS from '@/constants/colors';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useUser } from '@/context/UserContext';
import FeatherIcon from 'react-native-vector-icons/Feather';
import CartaoCredito from '@/components/CartaoCredito/CartaoCredito';

const SECTIONS = [
  {
    header: 'Cartão de Crédito',
    icon: 'credit-card',
    items: [
      {
        id: 'cardBrand',
        icon: '',
        label: '',
        type: 'bottom-sheet',
      },
      { id: 'nome', icon: 'user', label: 'Nome', type: 'bottom-sheet' },
      {
        id: 'cardNumber',
        icon: 'credit-card',
        label: 'Número',
        type: 'bottom-sheet',
      },
      {
        id: 'expDate',
        icon: 'calendar',
        label: 'Validade',
        type: 'bottom-sheet',
      },
      { id: 'csv', icon: 'lock', label: 'CSV', type: 'bottom-sheet' },
    ],
  },
];

function Cartoes() {
  // to get logged user data
  const { user } = useUser();
  const [form] = React.useState({
    // Initial Data Simulated - because now the DB don't have payment data
    cardBrand: 'Visa',
    nome: user.name,
    cardNumber: '4343 5768 1234 8998',
    expDate: '12/29',
    csv: '***',
  });

  const [value] = React.useState(0);
  const { items } = React.useMemo(
    () => ({
      // tabs: SECTIONS.map(() => ({})),
      items: SECTIONS[value].items,
    }),
    [value],
  );

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
          <View style={styles.profileHeader}>
            <CartaoCredito />
          </View>
          {/* >>>>>>>>>>Edit Button<<<<<<<<<<<< */}
          <TouchableOpacity
            onPress={() => {
              // handleUploadPicture
            }}
          >
            <View style={styles.profileAction}>
              <Text style={styles.profileActionText}>
                Editar Dados do Cartão
              </Text>
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
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default Cartoes;

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
});
