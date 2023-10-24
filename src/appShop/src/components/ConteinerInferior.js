import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const ConteinerInferior = () => {
  return (
    <View style={styles.frame}>
      <View style={styles.frameParent}>
        <View style={styles.frame1}>
          <Text style={styles.novasTransaes}>Novas Transações</Text>
          <Image
            style={styles.frameIcon}
            contentFit="cover"
            source={require("../assets/frame.png")}
          />
        </View>
        <View style={styles.frame2}>
          <View style={styles.frameInner}>
            <View style={styles.nomeDosClientesParent}>
              <Text style={styles.nomeDosClientes}>Nome dos Clientes</Text>
              <Text style={styles.numOrder}>Num order</Text>
              <Text style={styles.numOrder}>Montante</Text>
              <Text style={styles.numOrder}>Status</Text>
            </View>
          </View>
          <View style={styles.frameGroup}>
            <View style={styles.frameWrapper}>
              <View style={styles.ellipseParent}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-240.png")}
                />
                <Text style={styles.bobMarley}>Bob marley</Text>
                <Text style={styles.text}>2311-103</Text>
                <Text style={styles.text}>$430</Text>
                <View style={styles.pendenteWrapper}>
                  <Text style={styles.pendente}>Pendente</Text>
                </View>
              </View>
            </View>
            <View style={styles.frameContainer}>
              <View style={styles.ellipseParent}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-240.png")}
                />
                <Text style={styles.postmalone}>PostMalone</Text>
                <Text style={styles.text2}>2311-104</Text>
                <Text style={styles.text2}>$3431</Text>
                <View style={styles.finalizadoWrapper}>
                  <Text style={styles.pendente}>Finalizado</Text>
                </View>
              </View>
            </View>
            <View style={styles.frameContainer}>
              <View style={styles.ellipseParent}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-240.png")}
                />
                <Text style={styles.oliviaRodrigo}>Olivia Rodrigo</Text>
                <Text style={styles.text4}>2311-105</Text>
                <Text style={styles.text4}>$292</Text>
                <View style={styles.pendenteContainer}>
                  <Text style={styles.pendente}>Pendente</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.frame3}>
        <View style={styles.groupParent}>
          <Image
            style={styles.groupIcon}
            contentFit="cover"
            source={require("../assets/group-48096172.png")}
          />
          <Text style={styles.activeValue}>Active Value</Text>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector-23.png")}
          />
          <Image
            style={styles.frameChild1}
            contentFit="cover"
            source={require("../assets/vector-24.png")}
          />
          <Image
            style={styles.frameChild2}
            contentFit="cover"
            source={require("../assets/vector-25.png")}
          />
          <Text style={styles.text6}>1,431</Text>
          <Text style={styles.text7}>257</Text>
          <Text style={styles.text8}>521</Text>
          <View style={styles.frameParent1}>
            <View style={styles.ellipseParent1}>
              <Image
                style={styles.frameChild3}
                contentFit="cover"
                source={require("../assets/ellipse-140.png")}
              />
              <Text style={styles.totalOrder}>Total Order</Text>
            </View>
            <View style={styles.frameParent2}>
              <View style={styles.ellipseParent2}>
                <Image
                  style={styles.frameChild3}
                  contentFit="cover"
                  source={require("../assets/ellipse-1401.png")}
                />
                <Text style={styles.totalOrder}>Total Profit</Text>
              </View>
              <View style={styles.ellipseParent3}>
                <Image
                  style={styles.frameChild3}
                  contentFit="cover"
                  source={require("../assets/ellipse-1402.png")}
                />
                <Text style={styles.totalOrder}>Total Pre-Orders</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.groupParent}>
          <Image
            style={styles.groupIcon}
            contentFit="cover"
            source={require("../assets/group-48096172.png")}
          />
          <Text style={styles.activeValue}>Cliente status</Text>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector-23.png")}
          />
          <Image
            style={styles.frameChild1}
            contentFit="cover"
            source={require("../assets/vector-24.png")}
          />
          <Image
            style={styles.frameChild2}
            contentFit="cover"
            source={require("../assets/vector-25.png")}
          />
          <Text style={styles.text6}>1,431</Text>
          <Text style={styles.text7}>257</Text>
          <Text style={styles.text8}>521</Text>
          <View style={styles.frameParent3}>
            <View style={styles.ellipseParent1}>
              <Image
                style={styles.frameChild3}
                contentFit="cover"
                source={require("../assets/ellipse-140.png")}
              />
              <Text style={styles.totalOrder}>Satisfeito</Text>
            </View>
            <View style={styles.frameParent4}>
              <View style={styles.ellipseParent2}>
                <Image
                  style={styles.frameChild3}
                  contentFit="cover"
                  source={require("../assets/ellipse-1403.png")}
                />
                <Text style={styles.totalOrder}>Muito Satisfeito</Text>
              </View>
              <View style={styles.ellipseParent6}>
                <Image
                  style={styles.frameChild3}
                  contentFit="cover"
                  source={require("../assets/ellipse-1404.png")}
                />
                <Text style={styles.totalOrder}>Insatisfeito</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  novasTransaes: {
    position: "relative",
    fontSize: FontSize.title1_size,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorGray_200,
    textAlign: "left",
    width: 205,
    height: 28,
  },
  frameIcon: {
    position: "relative",
    width: 4,
    height: 18,
    overflow: "hidden",
    marginLeft: 332,
  },
  frame1: {
    width: 541,
    height: 28,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  nomeDosClientes: {
    position: "relative",
    fontSize: FontSize.size_base,
    textTransform: "capitalize",
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorWhite,
    textAlign: "left",
  },
  numOrder: {
    position: "relative",
    fontSize: FontSize.size_base,
    textTransform: "capitalize",
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorWhite,
    textAlign: "left",
    marginLeft: 26,
  },
  nomeDosClientesParent: {
    width: 450,
    height: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameInner: {
    borderRadius: Border.br_base,
    backgroundColor: Color.colorDarkslateblue,
    width: 550,
    height: 72,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: 0,
  },
  frameChild: {
    position: "relative",
    width: 40,
    height: 40,
  },
  bobMarley: {
    position: "relative",
    fontSize: FontSize.size_base,
    textTransform: "capitalize",
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorGray_200,
    textAlign: "left",
    marginLeft: 35,
  },
  text: {
    position: "relative",
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorGray_100,
    textAlign: "left",
    marginLeft: 35,
  },
  pendente: {
    position: "relative",
    fontSize: FontSize.size_xs,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorWhite,
    textAlign: "left",
  },
  pendenteWrapper: {
    borderRadius: Border.br_base,
    backgroundColor: Color.colorCrimson,
    width: 103,
    height: 32,
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingHorizontal: Padding.p_3xl,
    paddingVertical: 0,
    marginLeft: 35,
  },
  ellipseParent: {
    width: 480,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameWrapper: {
    borderRadius: Border.br_base,
    backgroundColor: Color.colorWhite,
    width: 550,
    height: 72,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: 0,
  },
  postmalone: {
    position: "relative",
    fontSize: FontSize.size_base,
    textTransform: "capitalize",
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorGray_200,
    textAlign: "left",
    width: 118,
    height: 24,
    marginLeft: 27,
  },
  text2: {
    position: "relative",
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorGray_100,
    textAlign: "left",
    marginLeft: 27,
  },
  finalizadoWrapper: {
    borderRadius: Border.br_base,
    backgroundColor: Color.colorForestgreen,
    width: 103,
    height: 32,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 27,
  },
  frameContainer: {
    borderRadius: Border.br_base,
    backgroundColor: Color.colorWhite,
    width: 550,
    height: 72,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: 0,
    marginTop: 16,
  },
  oliviaRodrigo: {
    position: "relative",
    fontSize: FontSize.size_base,
    textTransform: "capitalize",
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorGray_200,
    textAlign: "left",
    width: 118,
    height: 22,
    marginLeft: 28,
  },
  text4: {
    position: "relative",
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorGray_100,
    textAlign: "left",
    marginLeft: 28,
  },
  pendenteContainer: {
    borderRadius: Border.br_base,
    backgroundColor: Color.colorCrimson,
    width: 103,
    height: 32,
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingHorizontal: Padding.p_3xl,
    paddingVertical: 0,
    marginLeft: 28,
  },
  frameGroup: {
    width: 550,
    height: 248,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 16,
  },
  frame2: {
    width: 550,
    height: 336,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 24,
  },
  frameParent: {
    width: 550,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  groupIcon: {
    position: "absolute",
    top: 92,
    left: 56,
    width: 161,
    height: 161,
  },
  activeValue: {
    position: "absolute",
    top: 24,
    left: 73,
    fontSize: FontSize.title1_size,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorGray_200,
    textAlign: "left",
  },
  vectorIcon: {
    position: "absolute",
    top: 108,
    left: 41,
    width: 13,
    height: 21,
  },
  frameChild1: {
    position: "absolute",
    top: 208,
    left: 220,
    width: 13,
    height: 21,
  },
  frameChild2: {
    position: "absolute",
    top: 239,
    left: 66,
    width: 13,
    height: 21,
  },
  text6: {
    position: "absolute",
    top: 78,
    left: 21,
    fontSize: FontSize.size_lg,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorCrimson,
    textAlign: "left",
  },
  text7: {
    position: "absolute",
    top: 237,
    left: 213,
    fontSize: FontSize.size_lg,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorForestgreen,
    textAlign: "left",
  },
  text8: {
    position: "absolute",
    top: 268,
    left: 41,
    fontSize: FontSize.size_lg,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorDarkslateblue,
    textAlign: "left",
  },
  frameChild3: {
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
  ellipseParent1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 24,
    alignSelf: "start",
    marginLeft: 66,
  },
  ellipseParent2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  ellipseParent3: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 12,
  },
  frameParent2: {
    width: 237,
    height: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 8,
  },
  frameParent1: {
    position: "absolute",
    top: 308,
    left: 24,
    width: 237,
    height: 56,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  groupParent: {
    position: "relative",
    borderRadius: Border.br_base,
    backgroundColor: Color.colorWhite,
    width: 274,
    height: 388,
  },
  ellipseParent6: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 7,
  },
  frameParent4: {
    width: 226,
    height: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 7,
  },
  frameParent3: {
    position: "absolute",
    top: 308,
    left: 24,
    width: 226,
    height: 56,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  frame3: {
    width: 571,
    height: 388,
    overflow: "hidden",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
  frame: {
    width: 1154,
    height: 388,
    overflow: "hidden",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default ConteinerInferior;
