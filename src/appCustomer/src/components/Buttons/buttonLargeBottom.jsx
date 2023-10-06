import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import COLORS from '@/constants/colors';

function ButtonLargeBottom(props) {
  const filledBgColor = props.color || COLORS.primary;
  const outLinedColor = COLORS.neutralMiddGrey;
  const bgColor = props.filled ? filledBgColor : outLinedColor;
  const textColor = props.filled ? COLORS.neutrlWhite : COLORS.primary;

  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        ...{ backgroundColor: bgColor },
        ...props.style,
      }}
      onPress={props.onPress}
    >
      <Text style={{ fontSize: 20, ...{ color: textColor } }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingBottom: 16,
    paddingVertical: 10,
    borderColor: COLORS.primary,
    borderWidth: 2,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default buttonLargeBottom;
