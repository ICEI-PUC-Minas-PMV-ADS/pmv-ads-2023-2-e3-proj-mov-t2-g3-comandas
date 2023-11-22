import COLORS from '@/constants/colors';
import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  SafeAreaView,
  StyleSheet,
  useWindowDimensions,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useCart } from '@/context/CartContext';

export default function DefineTable({ navigation }) {
  const { setTable } = useCart();
  const { height } = useWindowDimensions();
  const [newTable, setNewTable] = useState(null);

  return (
    <SafeAreaView
      style={styles.container}
      // Ao tocar no background esconda o modal
      onTouchEnd={() => navigation.goBack()}
    >
      <ScrollView
        onTouchEnd={(e) => e.stopPropagation()}
        style={styles.wrapper(height)}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity
          style={styles.modalClose}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.modalCloseText}>X</Text>
        </TouchableOpacity>

        <View style={{ padding: 16, gap: 15 }}>
          <Text style={styles.itemTitle}>
            Número da mesa ainda não definido!
          </Text>
          <Text style={styles.itemDescription}>Defina um número de mesa</Text>

          <TextInput
            style={styles.searchbar}
            cursorColor={COLORS.primary}
            keyboardType="numeric"
            maxLength={3}
            onChangeText={(text) => setNewTable(text.replace(/[^0-9]/g, ''))}
            value={newTable}
            placeholder="Número da mesa..."
            onSubmitEditing={(event) => {
              setTable(event.nativeEvent.text);
              navigation.goBack();
            }}
          />

          <TouchableOpacity
            style={styles.footerBtn}
            onPress={() => {
              setTable(newTable);
              navigation.goBack();
            }}
          >
            <Text style={styles.footerBtnText}>Confirmar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: (height) => ({
    width: '90%',
    maxHeight: height * 0.8,
    flexGrow: 0,
    backgroundColor: COLORS.neutralWhite,
    borderRadius: 20,
  }),
  itemTitle: {
    fontFamily: 'MontserratBold',
    fontSize: 22,
    color: COLORS.secondary,
    textAlign: 'center',
  },
  itemDescription: {
    fontFamily: 'MontserratSemiBold',
    fontSize: 14,
    color: COLORS.neutralBlue,
    textAlign: 'center',
  },
  searchbar: {
    fontFamily: 'MontserratBold',
    fontSize: 20,
    color: COLORS.primary,
    textAlign: 'center',
    marginTop: 30,
  },
  itemPrice: {
    textAlign: 'left',
    fontFamily: 'MontserratBold',
    fontSize: 14,
    color: COLORS.iconGreen,
  },
  modalClose: {
    position: 'absolute',
    zIndex: 100,
    right: 10,
    top: 10,
    width: 25,
    height: 25,
    backgroundColor: COLORS.neutralWhite,
    borderRadius: 999,
    borderTopRightRadius: 450,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCloseText: {
    fontFamily: 'MontserratBold',
    color: COLORS.primary,
    textAlign: 'center',
  },
  footerBtn: {
    width: '60%',
    backgroundColor: COLORS.primary,
    borderRadius: 50,
    padding: 10,
    alignSelf: 'center',
    marginTop: 30,
  },
  footerBtnText: {
    textAlign: 'center',
    color: COLORS.neutralWhite,
    fontSize: 16,
    fontFamily: 'MontserratSemiBold',
  },
});
