import COLORS from '@/constants/colors';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';
// import { useUser } from '@/context/UserContext';
// import { useNavigation } from '@react-navigation/native';
import { registerUserAddress } from '@/services/auth.service';
import FeatherIcon from 'react-native-vector-icons/Feather';

function Address() {
  function handleRegisterUserAddress() {
    registerUserAddress({})
      .then(() => {
        Alert.alert('Endereço cadastrado com Sucesso!');
        // navigation.navigate('UserProfile');
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
        <View style={styles.mapContainer}>
          <MapView style={styles.map} />
        </View>
        {/* >>>>>>>>>>Body<<<<<<<<<<<< */}
        <View style={styles.content}>
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
