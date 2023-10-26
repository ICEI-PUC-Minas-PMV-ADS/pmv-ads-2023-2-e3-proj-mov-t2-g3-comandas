import COLORS from '@/constants/colors';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';
import { useUser } from '@/context/UserContext';

function Cartoes() {
  // to get logged user data
  const { user } = useUser();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.scrollContent}>
        <Text style={styles.title}>Cartões de Pagamento</Text>
        <View style={styles.card}>
          <View style={styles.cardHeader} />
          <View style={styles.cardBrand}>
            <Fontisto name="visa" size={40} color="#e7e7e7" />
          </View>

          <View style={styles.cardCenter}>
            <View style={styles.microship}>
              <MaterialCommunityIcons
                name="integrated-circuit-chip"
                color={COLORS.goldMetalic}
                size={50}
              />
            </View>
            <View style={styles.cardBottom}>
              <View>
                <Text style={styles.cardUserName}>
                  {user.name} {'\n'}
                  <Text style={styles.cardNumber}>4343 5768 1234 8998</Text>
                </Text>
              </View>
              <View>
                <Text style={styles.cardExpDate}>
                  {' '}
                  <Text style={styles.cardExpDateSmallText}>Exp. </Text>
                  12 / 29
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Cartoes;

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1, // Permite que o ScrollView cresça para preencher o espaço disponível
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
  card: {
    marginHorizontal: 24,
    height: 210,
    backgroundColor: '#8451b8',
    borderRadius: 20,
  },
  cardHeader: {
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardBrand: {
    position: 'relative',
    alignItems: 'flex-end',
    padding: 12,
    marginRight: 6,
    marginTop: 3,
    opacity: 0.65,
  },
  microship: {
    paddingLeft: 24,
    opacity: 0.8,
  },
  cardUserName: {
    color: '#e7e7e7',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 26,
  },
  cardNumber: {
    color: '#e7e7e7',
    fontSize: 17,
    fontWeight: '500',
  },

  cardExpDate: {
    color: '#e7e7e7',
    fontSize: 13,
    fontWeight: '500',
    marginTop: 34,
    marginLeft: 44,
  },
  cardExpDateSmallText: {
    color: '#e7e7e7',
    fontSize: 7,
    fontWeight: '500',
  },
  cardBottom: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginTop: 26,
  },
});
