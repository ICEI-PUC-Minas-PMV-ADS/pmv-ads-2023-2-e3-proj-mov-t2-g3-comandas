/* eslint-disable react/destructuring-assignment */
import { StyleSheet, Text } from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import COLORS from '@/constants/colors';
import LottieView from 'lottie-react-native';
// eslint-disable-next-line import/no-unresolved
import Checkin from '../../assets/Checkin.json';

export default function LoadingBSheet(props) {
  return (
    <Animatable.View animation="fadeIn" style={styles.backgroundScreen}>
      <Animatable.View
        delay={250}
        animation="fadeInUp"
        style={styles.bottomSheetWrap}
      >
        <Animatable.View
          delay={600}
          animation="fadeInUp"
          style={styles.containerForm}
        >
          <LottieView
            style={styles.checkInLottie}
            source={Checkin}
            autoPlay
            loop={false}
            marginTop={10}
          />
          <Text style={styles.welcomeBackText}>{props.welcomeBackText}</Text>
          <Animatable.View
            delay={2200}
            animation="fadeInUp"
            onAnimationEnd={props.route}
            style={styles.footer}
          />
        </Animatable.View>
      </Animatable.View>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  backgroundScreen: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
    position: 'absolute',
    width: '100%',
    height: '110%',
    zIndex: 100,
  },
  bottomSheetWrap: {
    height: '65%',
    backgroundColor: COLORS.neutralWhite,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 15,
    gap: 50,
  },
  headerText: {
    fontFamily: 'MontserratRegular',
    fontSize: 24,
    textAlign: 'center',
  },
  checkInLottie: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    width: 150,
  },
  containerForm: {
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeBackText: {
    fontFamily: 'MontserratRegular',
    color: COLORS.linkTextGreen,
    fontSize: 20,
    alignContent: 'center',
  },
});
