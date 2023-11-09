import COLORS from '@/constants/colors';
import { MotiView } from 'moti';
import React, { useMemo } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Layout } from 'react-native-reanimated';
import Star from '../../assets/Star.svg';

export default function ResultCard({ navigation, item, index }) {
  // TODO Trocar essa atrocidade aqui
  const distance = useMemo(
    () => Number(1 + Math.random() * 5).toPrecision(2),
    [],
  );

  return (
    <MotiView
      layout={Layout.stiffness()}
      from={{
        opacity: 0,
        translateY: 100,
      }}
      animate={{
        opacity: 1,
        translateY: 0,
      }}
      transition={{ delay: 150 * index + 50 }}
      style={styles.wrapperContainer}
    >
      <TouchableOpacity
        style={styles.cardContainer}
        activeOpacity={0.25}
        onPress={() =>
          navigation.navigate('Shop', {
            shopId: item.user_id,
          })
        }
      >
        <Image style={styles.cardImage} source={{ uri: item.photo_url }} />

        <View style={{ flex: 1, gap: 5 }}>
          <Text style={styles.cardTitle}>{item.name}</Text>

          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              flex: 1,
              alignItems: 'center',
            }}
          >
            <Text numberOfLines={1} style={styles.cardStar}>
              {item.rating > 0 ? item.rating : 'Novidade '}
              <Star width={10} height={10} />
            </Text>
            <Text numberOfLines={1} style={styles.cardText}>
              {item.category_name}
            </Text>

            <Text numberOfLines={1} style={styles.cardText}>
              {distance} km
            </Text>
          </View>

          <View>
            <Text style={styles.cardText}>{item.neighborhood}</Text>
            <Text style={styles.cardText}>{item.street}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </MotiView>
  );
}

const styles = StyleSheet.create({
  wrapperContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    borderRadius: 15,
    backgroundColor: COLORS.neutralWhite,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 1,

    elevation: 2,
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 15,
  },
  cardImage: {
    width: '20%',
    height: 80,
    resizeMode: 'contain',
    borderRadius: 25,
    marginRight: 10,
  },
  cardTitle: {
    fontSize: 16,
    // color: COLORS.primary,
    fontFamily: 'MontserratBold',
  },
  cardText: {
    fontSize: 11,
  },
  cardStar: {
    fontSize: 11,
    fontFamily: 'MontserratBold',
    // textShadowColor: '#ff9900',
    // textShadowOffset: {
    //   width: 0,
    //   height: 0,
    // },
    // textShadowRadius: 1,

    // elevation: 1,
    color: COLORS.primary,
  },
});
