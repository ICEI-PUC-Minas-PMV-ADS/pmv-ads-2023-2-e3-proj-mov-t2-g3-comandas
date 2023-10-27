import API from '@/services/webapi.service';
import COLORS from '@/constants/colors';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';

function Favoritos() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text style={styles.profileName}>Lista de Restaurantes Favoritos</Text>
      </View>
    </SafeAreaView>
  );
}

export default Favoritos;

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
});
