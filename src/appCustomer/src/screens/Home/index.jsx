import React from 'react';
import {
  Image,
  StyleSheet,
  ScrollView,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Pressable
} from 'react-native';
import TopBar from '../../components/TopBar/Index';
import BottomBar from '../../components/BottomBar/Index';
import banner from '../../assets/banner-2.png';
import COLORS from '../../constants/colors';

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <TopBar navigation={navigation} />
      <ScrollView
        style={{ width: '100%' }}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.main}>
          <Image style={styles.banner} source={banner} />
        </View>
        

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: 18,
          }}
        >
          <Text style={{ fontSize: 16, color: COLORS.black }}>
            Não tem conta? Vamos{' '}
          </Text>
          <Pressable onPress={() => navigation.navigate('Signup')}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.linkTextGreen,
                fontWeight: 'bold',
                marginLeft: 6,
              }}
            >
              criar uma conta.
            </Text>
          </Pressable>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: 18,
          }}
        >
          <Text style={{ fontSize: 16, color: COLORS.black }}>
            Já tem uma conta? Então{' '}
          </Text>
          <Pressable onPress={() => navigation.navigate('Login')}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.linkTextGreen,
                fontWeight: 'bold',
                marginLeft: 6,
              }}
            >
              faça login.
            </Text>
          </Pressable>
        </View>
        
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: 18,
          }}
        >
          <Text style={{ fontSize: 16, color: COLORS.black }}>
            Não tem conta. Então veja a {' '}
          </Text>
          <Pressable onPress={() => navigation.navigate('Welcome')}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.linkTextGreen,
                fontWeight: 'bold',
                marginLeft: 6,
              }}
            >
              onBoarding page.
            </Text>
            </Pressable>
        </View>
      </ScrollView>
      <BottomBar />
      <StatusBar />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  scrollContent: {
    flexGrow: 1, // Permite que o ScrollView cresça para preencher o espaço disponível
  },
  main: {
    width: '100%',
    alignItems: 'center',
  },
  banner: {
    width: '95%',
    height: 200,
    marginTop: 10,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  logo: {
    width: 150,
    height: 150,
  },
  search: {
    width: '100%',
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'orange',
    padding: 10,
  },
});
