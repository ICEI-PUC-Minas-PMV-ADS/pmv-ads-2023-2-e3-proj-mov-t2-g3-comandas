import React, { useContext } from 'react';

import { SafeAreaView, StatusBar, Text, StyleSheet } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { AuthContext } from '../../context/AuthContext';
import TopBar from '../../components/TopBar/Index';
import BottomBar from '../../components/BottomBar/Index';
import Button from '../../components/Buttons/Button';

export default function LandingPage() {
  const { userInfo, isLoading, logout } = useContext(AuthContext);

  return (
    <SafeAreaView>
      <TopBar />
      <Spinner visible={isLoading} />
      <Text style={styles.welcome}>Bem vindo! {userInfo.user.name}</Text>
      <Button title="Logout" color="red" onPress={logout} />
      <BottomBar />
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 24,
    marginBottom: 8,
  },
});
