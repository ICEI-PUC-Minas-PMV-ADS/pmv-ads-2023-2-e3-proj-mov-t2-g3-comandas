import COLORS from '@/constants/colors';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React, { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';
import { BASE_URL } from '@/services/urls';

export default function DadosPessoais() {
  const [userId, setUserId] = useState();

  useFocusEffect(
    useCallback(() => {
      async function fetchUsers() {
        try {
          const { data } = await axios.get(`${BASE_URL}user/${userId}`, {
            headers: {
              Authorization: process.env.ADMIN_TOKEN,
              'x-api-key': process.env.API_KEY,
            },
          });
          setUserId(data);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      }
      fetchUsers();
    }, []),
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {userId && userId.map((user) => <Text key={user.id}>{user.name}</Text>)}
      </View>
    </SafeAreaView>
  );
}

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
  profileAvatar: {
    width: 120,
    height: 120,
    borderRadius: 9999,
    borderColor: COLORS.linkTextGreen,
    borderWidth: 0.2,
  },
  profileAvatarWrapper: {
    position: 'relative',
  },
  profileAction: {
    width: 24,
    height: 24,
    borderRadius: 9999,
    backgroundColor: COLORS.linkTextGreen,
    position: 'absolute',
    right: -4,
    bottom: -10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logout: {
    backgroundColor: COLORS.iconRed,
    width: 60,
    height: 60,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.iconRed,
    borderRadius: 9999,
    borderWidth: 3,
  },
  logoutLabel: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: '600',
  },
  section: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    paddingVertical: 8,
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.linkTextGreen,
    textTransform: 'uppercase',
    letterSpacing: 1.1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 50,
    backgroundColor: COLORS.neutralLightGrey,
    borderRadius: 15,
    marginBottom: 12,
    paddingHorizontal: 12,
  },
  rowLabel: {
    fontSize: 18,
    color: COLORS.black,
  },
  rowIcon: {
    width: 32,
    height: 32,
    borderRadius: 9999,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
});
