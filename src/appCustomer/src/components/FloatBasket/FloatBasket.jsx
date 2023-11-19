import COLORS from '@/constants/colors';
import React, { useEffect, useRef } from 'react';
import * as Animatable from 'react-native-animatable';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Animated from 'react-native-reanimated';
import BasketImg from '../../assets/Basket.svg';

export default function FloatBasket({ basketSize, bottom }) {
  const navigation = useNavigation();
  const $animatableView = useRef(null);
  const initialBasketSize = useRef(basketSize);

  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

  useEffect(() => {
    // Verifica se a propriedade desejada mudou
    if ($animatableView.current && basketSize !== initialBasketSize.current) {
      // Aciona a animação
      $animatableView.current.bounce(500);
    }
  }, [basketSize]);

  return (
    <AnimatedTouchable
      ref={$animatableView}
      delay={250}
      animation="slideInLeft"
      style={styles.container(bottom)}
      onPress={() => navigation.navigate('Cart')}
    >
      <Animatable.Text easing="ease-in-out" style={styles.count}>
        {basketSize ?? 0}
      </Animatable.Text>
      <BasketImg />
    </AnimatedTouchable>
  );
}

const styles = StyleSheet.create({
  container: (bottom) => ({
    flex: 1,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '10%',
    height: '5%',
    zIndex: 100,
    bottom: bottom ?? 70,
    left: 15,
    backgroundColor: COLORS.primary,
    borderRadius: 35,
    padding: 30,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 1,

    elevation: 10,
  }),
  count: {
    position: 'absolute',
    color: COLORS.neutralWhite,
    fontFamily: 'MontserratBold',
    top: 0,
    right: 0,
    backgroundColor: COLORS.iconRed,
    borderRadius: 25,
    padding: 2,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 1,

    elevation: 2,
  },
});
