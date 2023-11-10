import COLORS from '@/constants/colors';
import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  useWindowDimensions,
  View,
  TouchableOpacity,
} from 'react-native';
import { useCart } from '@/context/CartContext';
import imgPlaceholder from '../../assets/PizzariaBackground.jpg';
import BannerPlaceholder from '../../assets/ItemBannerPlaceholder.svg';
import Plus from '../../assets/Plus.svg';
import Minus from '../../assets/Minus.svg';
import CartPlus from '../../assets/CartPlus.svg';

export default function ItemDetails({ navigation, route }) {
  // TODO Verificar se existe tableId nos params (usuário entrou pelo qrCode, se sim, adicionar ao tableId lá em baixo)
  const { item, shop } = route.params;
  const { addCartItem } = useCart();
  const { width, height } = useWindowDimensions();
  const [intervalId, setIntervalId] = useState(null);
  const [itemQuantity, setItemQuantity] = useState(1);

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
        {item?.image ? (
          <Image source={imgPlaceholder} style={styles.modalBanner(width)} />
        ) : (
          <View style={styles.modalBannerPlaceholder(width)}>
            <BannerPlaceholder />
          </View>
        )}
        <View style={{ padding: 16, gap: 15 }}>
          <Text style={styles.itemTitle}>{item?.name}</Text>
          <Text style={styles.itemDescription}>{item?.description}</Text>
          <Text style={styles.itemPrice}>R$ {item?.price}</Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.modalPlus}
                onPress={() => setItemQuantity((prev) => prev + 1)}
                onPressIn={() => {
                  const id = setInterval(() => {
                    setItemQuantity((prev) => prev + 1);
                  }, 200);
                  setIntervalId(id);
                }}
                onPressOut={() => {
                  clearInterval(intervalId);
                  setIntervalId(null);
                }}
              >
                <Plus />
              </TouchableOpacity>
              <Text style={styles.modalQuantity}>{itemQuantity}</Text>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.modalMinus}
                onPress={() =>
                  setItemQuantity((prev) => (prev > 1 ? prev - 1 : 1))
                }
                onPressIn={() => {
                  const id = setInterval(() => {
                    setItemQuantity((prev) => (prev > 1 ? prev - 1 : 1));
                  }, 200);
                  setIntervalId(id);
                }}
                onPressOut={() => {
                  clearInterval(intervalId);
                  setIntervalId(null);
                }}
              >
                <Minus />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.modalAddCart}
              onPress={async () =>
                addCartItem(
                  shop,
                  item.id,
                  item.name,
                  itemQuantity,
                  item.price,
                  item.photo_url,
                )
              }
            >
              <Text style={styles.modalTotalCart}>
                R$ {Number(itemQuantity * item.price).toFixed(2)}
              </Text>
              <CartPlus />
            </TouchableOpacity>
          </View>
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
  },
  itemDescription: {
    textAlign: 'left',
    fontFamily: 'MontserratSemiBold',
    fontSize: 14,
    color: COLORS.neutralBlue,
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
  modalBanner: (width) => ({
    width,
    resizeMode: 'cover',
    borderTopLeftRadius: 20,
    aspectRatio: 16 / 10,
    height: 210,
  }),
  modalBannerPlaceholder: (width) => ({
    backgroundColor: COLORS.neutralLightGrey,
    height: 100,
    width,
    borderTopLeftRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  modalPlus: {
    backgroundColor: COLORS.primary,
    borderRadius: 999,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalMinus: {
    backgroundColor: COLORS.neutralMiddGrey,
    borderRadius: 999,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalQuantity: {
    color: COLORS.primary,
    fontFamily: 'MontserratBold',
    textAlign: 'center',
    margin: 10,
    fontSize: 16,
  },
  modalAddCart: {
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  modalTotalCart: {
    fontFamily: 'MontserratBold',
    color: COLORS.neutralWhite,
    textAlign: 'center',
    fontSize: 16,
  },
});
