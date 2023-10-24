import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, FlatList } from "react-native";
import ImageIcon from "./ImageIcon";
import WardahSeptianiPutri from "./WardahSeptianiPutri";
import VectorIcon from "./VectorIcon";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const MensagemPesquisaPerfil = () => {
  const [searchTextInput, setSearchTextInput] = useState("Pesquisar");
  const [frameFlatListData, setFrameFlatListData] = useState([
    <ImageIcon />,
    <WardahSeptianiPutri />,
    <VectorIcon />,
  ]);

  return (
    <View style={[styles.frameParent, styles.searchParentFlexBox]}>
      <View style={[styles.olUserrestParent, styles.userrestLayout]}>
        <Text style={[styles.olUserrest, styles.userrestLayout]}>{`Olá, UserRest
`}</Text>
        <Text style={styles.boraFazerGrana}>Bora fazer grana hj?</Text>
      </View>
      <View style={[styles.searchParent, styles.searchParentFlexBox]}>
        <TextInput
          style={[styles.search, styles.searchBg]}
          value={searchTextInput}
          onChangeText={setSearchTextInput}
          autoCapitalize="words"
          placeholderTextColor="#888"
        />
        <FlatList
          style={[styles.frameChild, styles.searchBg]}
          data={frameFlatListData}
          renderItem={({ item }) => item}
          contentContainerStyle={styles.frameFlatListContent}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlatListContent: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  searchParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  userrestLayout: {
    width: 214,
    height: 72,
  },
  searchBg: {
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_base,
    flex: 1,
  },
  olUserrest: {
    fontSize: FontSize.size_13xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorGray_200,
    textAlign: "left",
  },
  boraFazerGrana: {
    fontSize: FontSize.size_base,
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
  },
  olUserrestParent: {
    justifyContent: "space-between",
  },
  search: {
    height: 48,
    overflow: "hidden",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_sm,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsRegular,
    alignItems: "center",
    flexDirection: "row",
  },
  frameChild: {
    shadowColor: "rgba(204, 204, 204, 0.25)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 94,
    elevation: 94,
    shadowOpacity: 1,
    width: 158,
    maxWidth: 158,
    marginLeft: 10,
  },
  searchParent: {
    width: 547,
    justifyContent: "flex-end",
  },
  frameParent: {
    width: 1152,
    flexWrap: "wrap",
    justifyContent: "space-between",
    height: 72,
    flexDirection: "row",
  },
});

export default MensagemPesquisaPerfil;
