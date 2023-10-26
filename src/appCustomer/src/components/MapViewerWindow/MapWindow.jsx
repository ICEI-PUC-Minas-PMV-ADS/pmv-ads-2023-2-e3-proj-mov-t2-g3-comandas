import COLORS from '@/constants/colors';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useUser } from '@/context/UserContext';

function MapWindow() {
  const { user } = useUser();
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader} />

      <View style={styles.cardCenter}>
        <View style={styles.microship}>
          <MaterialCommunityIcons
            name="google-maps"
            color={COLORS.iconBlue}
            size={50}
          />
          <Text>Localização de {user.name}.</Text>
        </View>
        <View style={styles.cardBottom}>
          <View>
            <Text style={styles.cardUserName}>...</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default MapWindow;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginHorizontal: 24,
    height: 205,
    backgroundColor: COLORS.neutralMiddGrey,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.linkTextGreen,
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
    marginTop: 50,
    marginLeft: 120,
    paddingLeft: 24,
    opacity: 0.8,
  },
  cardUserName: {
    color: COLORS.linkTextGreen,
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 26,
  },
  cardBottom: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginTop: 24,
  },
});
