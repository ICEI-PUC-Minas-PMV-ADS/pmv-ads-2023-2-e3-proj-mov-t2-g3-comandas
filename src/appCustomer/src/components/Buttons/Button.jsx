import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import COLORS from '../../constants/colors';

function Button(props) {
  const filledBgColor = props.color || COLORS.primary;
  const outlinedColor = COLORS.primary;
  const bgColor = props.filled ? filledBgColor : outlinedColor;
  const textColor = props.filled ? COLORS.white : COLORS.white;

  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        ...{ backgroundColor: bgColor },
        ...props.style,
      }}
      onPress={props.onPress}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: '600',
          ...{ color: textColor },
        }}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingBottom: 16,
    paddingVertical: 10,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
export default Button;
