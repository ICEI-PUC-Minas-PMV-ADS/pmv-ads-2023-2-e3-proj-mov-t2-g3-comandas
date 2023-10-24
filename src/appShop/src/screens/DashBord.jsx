import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Frame from '../components/Frame';
import UserRestForm1 from '../components/UserRestForm1';
import ContainerFrame from '../components/ContainerFrame';
import TransactionContainer from '../components/TransactionContainer';
import { Color } from '../../GlobalStyles';

function DashBord() {
  const [frameFlatListData, setFrameFlatListData] = useState([<Frame />]);

  return (
    <View style={[styles.dashbord, styles.frameFlexBox]}>
      <FlatList
        style={styles.dashbordChild}
        data={frameFlatListData}
        renderItem={({ item }) => item}
        contentContainerStyle={styles.frameFlatListContent}
      />
      <View style={[styles.frame, styles.frameFlexBox]}>
        <UserRestForm1 />
        <ContainerFrame />
        <TransactionContainer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  frameFlatListContent: {
    flexDirection: 'row',
    paddingTop: 32,
  },
  frameFlexBox: {
    alignItems: 'center',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  dashbordChild: {
    alignSelf: 'stretch',
    backgroundColor: Color.colorWhite,
    width: 206,
    maxWidth: 206,
    flex: 1,
  },
  frame: {
    width: 1154,
    height: 820,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginLeft: 36,
  },
  dashbord: {
    backgroundColor: Color.colorWhitesmoke_200,
    width: '100%',
    height: 900,
    flex: 1,
  },
});

export default DashBord;
