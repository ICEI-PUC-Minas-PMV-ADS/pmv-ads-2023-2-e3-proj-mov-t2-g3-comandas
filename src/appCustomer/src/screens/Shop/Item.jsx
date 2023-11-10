import COLORS from '@/constants/colors';
import React from 'react';
import { TouchableOpacity, StyleSheet, Image, Text, View } from 'react-native';
import ImgPlaceholder from '../../assets/ItemImgPlaceholder.svg';

export default function Item({
  title,
  description,
  price,
  image,
  item,
  navigation,
}) {
  return (
    <>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        onPress={() =>
          navigation.navigate('ItemDetails', {
            item,
          })
        }
      >
        <View style={{ gap: 5 }}>
          <Text style={styles.itemTitle}>{title}</Text>
          <Text
            numberOfLines={3}
            textBreakStrategy="highQuality"
            style={styles.itemDescription}
          >
            {description}
          </Text>
          <Text style={styles.itemPrice}>R$ {price}</Text>
        </View>

        {image ? (
          <Image source={{ uri: image }} style={styles.itemImage} />
        ) : (
          <View style={styles.itemPlaceholder}>
            <ImgPlaceholder />
          </View>
        )}
      </TouchableOpacity>
      <View
        style={{
          borderWidth: StyleSheet.hairlineWidth,
          borderColor: '#00000020',
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  itemTitle: {
    fontFamily: 'MontserratSemiBold',
    fontSize: 16,
    color: COLORS.secondary,
  },
  itemDescription: {
    textAlign: 'left',
    fontFamily: 'MontserratSemiBold',
    fontSize: 12,
    color: COLORS.neutralBlue,
    width: 200,
  },
  itemPrice: {
    textAlign: 'left',
    fontFamily: 'MontserratSemiBold',
    fontSize: 14,
    color: COLORS.iconGreen,
    width: 200,
  },
  itemImage: {
    width: 80,
    resizeMode: 'cover',
    borderRadius: 15,
    aspectRatio: 1 / 1,
  },
  itemPlaceholder: {
    backgroundColor: COLORS.neutralLightGrey,
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
