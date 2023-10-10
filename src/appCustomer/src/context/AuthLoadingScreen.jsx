import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  AsyncStorage,
  ActivityIndicator,
} from 'react-native';
import COLORS from '../constants/colors';

export default function AuthLoadingScreen(props) {
  useEffect(() => {
    async function handleUserNextScreen() {
      const userToken = await AsyncStorage.getItem('@ListApp:userToken');

      props.navigation.navigate(userToken ? 'App' : 'Auth');
    }

    handleUserNextScreen();
  }, []);

  return (
    <View style={styles.activityIndicator}>
      <ActivityIndicator size="large" color={COLORS.primary} />
    </View>
  );
}

AuthLoadingScreen.navigationOptions = () => ({
  header: null,
});

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
