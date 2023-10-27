import COLORS from '@/constants/colors';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';

function Favoritos() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text style={styles.profileName}>Dashboard do Usuário</Text>
      </View>
      <View>
        <Text style={styles.profileText}>
          Os restaurantes que o usuário favoritou devem ser exibidos aqui.
        </Text>
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
    marginHorizontal: 24,
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.linkTextGreen,
    textAlign: 'center',
  },
  profileText: {
    marginTop: 20,
    marginHorizontal: 24,
    fontSize: 17,
    fontWeight: '400',
    color: COLORS.placeholderText,
    textAlign: 'center',
  },
});
