import React, { useState } from 'react';
import { StyleSheet, View, TextInput, FlatList } from 'react-native';
import ImageIcon from './ImageIcon';
import WardahSeptianiPutri from './WardahSeptianiPutri';
import VectorIcon from './VectorIcon';
import {
  Color,
  Border,
  Padding,
  FontFamily,
  FontSize,
} from '../../GlobalStyles';

function UserRestForm1() {
  const [searchTextInput, setSearchTextInput] = useState('Pesquisar');
  const [frameFlatListData, setFrameFlatListData] = useState([
    <ImageIcon />,
    <WardahSeptianiPutri />,
    <VectorIcon />,
  ]);

  return (
    <View style={[styles.frameParent, styles.searchParentFlexBox]}>
      <View style={[styles.frame, styles.frameLayout]} />
      <View style={[styles.frame1, styles.frameLayout]} />
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
}

const styles = StyleSheet.create({
  frameFlatListContent: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  searchParentFlexBox: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  frameLayout: {
    height: 64,
    overflow: 'hidden',
  },
  searchBg: {
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_base,
    flex: 1,
  },
  frame: {
    width: 342,
    overflow: 'hidden',
  },
  frame1: {
    width: 207,
    overflow: 'hidden',
  },
  search: {
    height: 48,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_sm,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_sm,
    overflow: 'hidden',
    alignItems: 'center',
    flexDirection: 'row',
  },
  frameChild: {
    shadowColor: 'rgba(204, 204, 204, 0.25)',
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
    justifyContent: 'flex-end',
  },
  frameParent: {
    width: 1152,
    height: 72,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default UserRestForm1;
