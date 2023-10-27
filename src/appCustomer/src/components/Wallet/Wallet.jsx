import COLORS from '@/constants/colors';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';
import { useUser } from '@/context/UserContext';

function Wallet() {
  const { user } = useUser();
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader} />
      <View style={styles.cardBrand}>
        <Fontisto name="wallet" size={50} color="#e7e7e7" />
      </View>

      <View style={styles.cardCenter}>
        <View style={styles.microship}>
          <MaterialCommunityIcons
            name="integrated-circuit-chip"
            color={COLORS.goldMetalic}
            size={50}
          />
          <MaterialCommunityIcons
            name="contactless-payment"
            color="#e7e7e7"
            size={30}
            style={{ marginTop: 10, marginLeft: 5, opacity: 0.6 }}
          />
        </View>
        <View style={styles.cardBottom}>
          <View>
            <Text style={styles.cardUserName}>
              {user.name} {'\n'}
              <Text style={styles.cardNumber}>UserID: {user.id}</Text>
            </Text>
          </View>
          <View>
            <Text style={styles.cardBalance}>
              {' '}
              <Text style={styles.cardCurrencySymbol}>$ </Text>
              212,00
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Wallet;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginHorizontal: 24,
    height: 205,
    backgroundColor: COLORS.blueDark,
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
    flexDirection: 'row',
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

  cardBalance: {
    color: '#e7e7e7',
    fontSize: 26,
    fontWeight: '500',
    marginTop: 8,
    marginLeft: 36,
  },
  cardCurrencySymbol: {
    color: '#e7e7e7',
    fontSize: 26,
    fontWeight: '500',
  },
  cardBottom: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginTop: 14,
  },
});
