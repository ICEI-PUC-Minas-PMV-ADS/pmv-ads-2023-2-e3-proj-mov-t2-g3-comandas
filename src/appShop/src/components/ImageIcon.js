import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet } from "react-native";
import { Image } from "expo-image";

const ImageIcon = ({ style }) => {
  return (
    <Image
      style={[styles.imageIcon, style]}
      contentFit="center"
      source={require("../assets/image.png")}
    />
  );
};

const styles = StyleSheet.create({
  imageIcon: {
    width: 32,
    height: 32,
  },
});

export default ImageIcon;
