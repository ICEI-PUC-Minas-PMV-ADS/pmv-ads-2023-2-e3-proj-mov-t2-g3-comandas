import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const ConteinerSuperior = () => {
  return (
    <View style={styles.frame}>
      <View style={styles.frameParent}>
        <View style={styles.frameGroup}>
          <View style={styles.frame1}>
            <Text style={styles.totalOrders}>Total Orders</Text>
            <View style={styles.parent}>
              <Text style={styles.text}>521</Text>
              <View style={styles.group}>
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../assets/122.png")}
                />
                <Text style={styles.text1}>4.2%</Text>
              </View>
            </View>
          </View>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/group-48096203.png")}
          />
        </View>
        <View style={styles.frameGroup}>
          <View style={styles.frame2}>
            <Text style={styles.totalOrders}>Total Canceled</Text>
            <View style={styles.container}>
              <Text style={styles.text}>128</Text>
              <View style={styles.frameView}>
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../assets/1221.png")}
                />
                <Text style={styles.text3}>3.2%</Text>
              </View>
            </View>
          </View>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/group-48096207.png")}
          />
        </View>
        <View style={styles.frameParent1}>
          <View style={styles.frame3}>
            <Text style={styles.totalOrders}>Total Profit</Text>
            <View style={styles.parent1}>
              <Text style={styles.text4}>146</Text>
              <View style={styles.frameView}>
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../assets/1222.png")}
                />
                <Text style={styles.text5}>1.8%</Text>
              </View>
            </View>
          </View>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/group-48096204.png")}
          />
        </View>
        <View style={styles.frameParent1}>
          <View style={styles.frame4}>
            <Text style={styles.totalOrders}>Total Pre-Orders</Text>
            <View style={styles.parent3}>
              <Text style={styles.text4}>257</Text>
              <View style={styles.group}>
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../assets/1223.png")}
                />
                <Text style={styles.text7}>6.2%</Text>
              </View>
            </View>
          </View>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/group-48096206.png")}
          />
        </View>
      </View>
      <View style={styles.frameParent3}>
        <View style={styles.maskGroupWrapper}>
          <View style={styles.maskGroup}>
            <Image
              style={styles.maskGroupChild}
              contentFit="cover"
              source={require("../assets/group-48095786.png")}
            />
            <View style={styles.estatsticasDoRestauranteParent}>
              <Text
                style={styles.estatsticasDoRestaurante}
              >{`Estatísticas do restaurante `}</Text>
              <View style={styles.ellipseParent}>
                <Image
                  style={styles.ellipseIcon}
                  contentFit="cover"
                  source={require("../assets/ellipse-140.png")}
                />
                <Text style={styles.totalOrder}>Total Order</Text>
              </View>
              <View style={styles.ellipseParent}>
                <Image
                  style={styles.ellipseIcon}
                  contentFit="cover"
                  source={require("../assets/ellipse-1401.png")}
                />
                <Text style={styles.totalOrder}>Pre-Order</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.frameChild2} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  totalOrders: {
    position: "relative",
    fontSize: FontSize.size_sm,
    lineHeight: 16,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray_300,
    textAlign: "left",
  },
  text: {
    position: "relative",
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray_200,
    textAlign: "left",
    width: 49,
    height: 42,
  },
  icon: {
    position: "relative",
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  text1: {
    position: "relative",
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorDarkslateblue,
    textAlign: "left",
    marginLeft: 4,
  },
  group: {
    width: 37,
    height: 17,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 20,
    marginLeft: 8,
  },
  parent: {
    width: 105,
    height: 42,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 24,
  },
  frame1: {
    width: 105,
    height: 82,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameChild: {
    position: "relative",
    width: 56,
    height: 56,
  },
  frameGroup: {
    borderRadius: Border.br_base,
    backgroundColor: Color.colorWhite,
    width: 263,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: Padding.p_5xl,
  },
  text3: {
    position: "relative",
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorCrimson,
    textAlign: "left",
    marginLeft: 4,
  },
  frameView: {
    width: 37,
    height: 17,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingBottom: Padding.p_12xs,
    marginTop: 20,
    marginLeft: 8,
  },
  container: {
    width: 104,
    height: 42,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 24,
  },
  frame2: {
    width: 107,
    height: 82,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text4: {
    position: "relative",
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray_200,
    textAlign: "left",
  },
  text5: {
    position: "relative",
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.accent,
    textAlign: "left",
    marginLeft: 4,
  },
  parent1: {
    width: 104,
    height: 48,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 24,
  },
  frame3: {
    width: 104,
    height: 88,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameParent1: {
    borderRadius: Border.br_base,
    backgroundColor: Color.colorWhite,
    width: 264,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_5xl,
    paddingTop: Padding.p_5xl,
    paddingBottom: Padding.p_lg,
  },
  text7: {
    position: "relative",
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorForestgreen,
    textAlign: "left",
    marginLeft: 4,
  },
  parent3: {
    width: 112,
    height: 48,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 24,
  },
  frame4: {
    width: 115,
    height: 88,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameParent: {
    width: 555,
    height: 318,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_base,
  },
  maskGroupChild: {
    position: "absolute",
    top: 85,
    left: 0,
    width: 571,
    height: 199,
  },
  estatsticasDoRestaurante: {
    position: "relative",
    fontSize: FontSize.title1_size,
    textTransform: "capitalize",
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorGray_200,
    textAlign: "left",
  },
  ellipseIcon: {
    position: "relative",
    width: 8,
    height: 8,
  },
  totalOrder: {
    position: "relative",
    fontSize: FontSize.size_sm,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorGray_100,
    textAlign: "left",
    marginLeft: 8,
  },
  ellipseParent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  estatsticasDoRestauranteParent: {
    position: "absolute",
    top: 24,
    left: 24,
    width: 488,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
  maskGroup: {
    position: "relative",
    width: 571,
    height: 284,
  },
  maskGroupWrapper: {
    borderRadius: Border.br_base,
    backgroundColor: Color.colorWhite,
    width: 571,
    height: 284,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  frameChild2: {
    width: 190,
    height: 105,
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 85,
  },
  frameParent3: {
    width: 571,
    height: 284,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  frame: {
    width: 1154,
    height: 316,
    overflow: "hidden",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default ConteinerSuperior;
