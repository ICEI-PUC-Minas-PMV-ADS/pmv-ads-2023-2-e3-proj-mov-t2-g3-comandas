import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Menulatereal = () => {
  return (
    <View style={styles.frameParent}>
      <View style={styles.frameGroup}>
        <View style={styles.frame}>
          <View style={[styles.frameChild, styles.frameLayout]} />
          <View style={[styles.frameItem, styles.frameLayout]} />
          <View style={[styles.frameInner, styles.frameInnerLayout]} />
          <View style={[styles.rectangleView, styles.frameInnerLayout]} />
        </View>
        <Text style={[styles.dashboard, styles.clientesTypo]}>Dashboard</Text>
      </View>
      <View style={[styles.parent, styles.parentFlexBox]}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/16.png")}
        />
        <Text style={[styles.clientes, styles.clientesTypo]}>Clientes</Text>
      </View>
      <View style={[styles.group, styles.parentFlexBox]}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/44.png")}
        />
        <Text style={[styles.clientes, styles.clientesTypo]}>Menu</Text>
      </View>
      <View style={[styles.container, styles.parentFlexBox]}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/17.png")}
        />
        <Text style={[styles.clientes, styles.clientesTypo]}>Reservas</Text>
      </View>
      <View style={[styles.frameView, styles.parentFlexBox]}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/3.png")}
        />
        <Text style={[styles.clientes, styles.clientesTypo]}>Notificações</Text>
      </View>
      <View style={[styles.parent1, styles.parentFlexBox]}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/4.png")}
        />
        <Text style={[styles.clientes, styles.clientesTypo]}>
          Configurações
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    height: 8,
    width: 8,
    backgroundColor: Color.colorDarkslateblue,
    borderRadius: Border.br_11xs,
    top: 9,
    position: "absolute",
  },
  frameInnerLayout: {
    top: 0,
    height: 8,
    width: 8,
    backgroundColor: Color.colorDarkslateblue,
    borderRadius: Border.br_11xs,
    position: "absolute",
  },
  clientesTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.size_sm,
  },
  parentFlexBox: {
    marginTop: 41,
    height: 24,
    alignItems: "center",
    flexDirection: "row",
  },
  frameChild: {
    left: 0,
  },
  frameItem: {
    left: 10,
  },
  frameInner: {
    left: 0,
  },
  rectangleView: {
    left: 10,
  },
  frame: {
    width: 18,
    height: 18,
    overflow: "hidden",
  },
  dashboard: {
    color: Color.colorDarkslateblue,
    marginLeft: 22,
  },
  frameGroup: {
    width: 119,
    height: 20,
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  clientes: {
    color: Color.colorSlategray,
    marginLeft: 16,
  },
  parent: {
    width: 98,
  },
  group: {
    width: 80,
  },
  container: {
    width: 105,
  },
  frameView: {
    width: 128,
  },
  parent1: {
    width: 145,
  },
  frameParent: {
    width: 206,
    height: 362,
    paddingHorizontal: Padding.p_9xl,
    paddingTop: Padding.p_mini,
    paddingBottom: Padding.p_11xs,
  },
});

export default Menulatereal;
