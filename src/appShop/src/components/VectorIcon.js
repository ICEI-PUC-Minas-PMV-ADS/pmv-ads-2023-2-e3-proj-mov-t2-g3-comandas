import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet } from "react-native";
import { Image } from "expo-image";

const VectorIcon = ({ style }) => {
  return (
    <Image
      style={[styles.vectorIcon, style]}
      contentFit="cover"
      source={require("../assets/vector.png")}
    />
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    width: 11,
    height: 7,
  },
});

export default VectorIcon;
