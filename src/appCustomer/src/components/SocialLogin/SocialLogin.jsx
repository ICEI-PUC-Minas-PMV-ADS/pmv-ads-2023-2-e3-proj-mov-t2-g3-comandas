import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import COLORS from '../../constants/colors';

/* PARA LOGIN COM AS REDES SOCIAIS */

export default function SocialLogin() {
  <>
    <View
      style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}
    >
      <View
        style={{
          flex: 1,
          height: 1,
          backgroundColor: COLORS.grey,
          marginHorizontal: 10,
        }}
      />
      <Text style={{ fontSize: 14 }}>Ou faça Login com</Text>
      <View
        style={{
          flex: 1,
          height: 1,
          backgroundColor: COLORS.neutralMiddGrey,
          marginHorizontal: 10,
        }}
      />
    </View>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <TouchableOpacity
        onPress={() => console.log('Pressed')}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          height: 52,
          borderWidth: 1,
          borderColor: COLORS.neutralMiddGrey,
          marginRight: 4,
          borderRadius: 50,
        }}
      >
        <Image
          source={require('../../assets/facebook.png')}
          style={{
            height: 36,
            width: 36,
            marginRight: 8,
          }}
          resizeMode="contain"
        />

        <Text>Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => console.log('Pressed')}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          height: 52,
          borderWidth: 1,
          borderColor: COLORS.neutralMiddGrey,
          marginRight: 4,
          borderRadius: 50,
        }}
      >
        <Image
          source={require('../../assets/google.png')}
          style={{
            height: 36,
            width: 36,
            marginRight: 8,
          }}
          resizeMode="contain"
        />

        <Text>Google</Text>
      </TouchableOpacity>
    </View>
  </>;
}
