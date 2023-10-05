import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import icon from '../../assets/icon.png';

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Image style={styles.logo} source={icon} />
      </View>
      <StatusBar />
      <View>
        <TouchableOpacity />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  main: {
    width: '100%',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
  search: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'orange',
    padding: 10,
  },
});
