/* eslint-disable no-param-reassign */
import React, { createContext, useState, useContext, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  async function addCartItem(
    shopInfo,
    itemId,
    itemName,
    itemQuantity,
    itemPrice,
    itemPhoto,
  ) {
    setCart((prev) => {
      const existingShopIndex = prev.findIndex(
        (cartShop) => cartShop.id === shopInfo.userInfo.id,
      );

      if (existingShopIndex !== -1) {
        const existingItemIndex = prev[existingShopIndex].items.findIndex(
          (cartItem) => cartItem.id === itemId,
        );

        if (existingItemIndex !== -1) {
          prev[existingShopIndex].items[existingItemIndex].quantity +=
            itemQuantity;
          prev[existingShopIndex].items[existingItemIndex].total = Number(
            prev[existingShopIndex].items[existingItemIndex].quantity *
              itemPrice,
          ).toFixed(2);
        } else {
          prev[existingShopIndex].items.push({
            id: itemId,
            name: itemName,
            photoUrl: itemPhoto,
            quantity: itemQuantity,
            total: Number(itemQuantity * itemPrice).toFixed(2),
          });
        }
      } else {
        prev.push({
          id: shopInfo.userInfo.id,
          name: shopInfo.userInfo.name,
          phoneNumber: shopInfo.userInfo.phoneNumber,
          rating: shopInfo.rating,
          photoUrl: shopInfo.photoUrl,
          tableId: 0,
          note: 'nothing',
          items: [
            {
              id: itemId,
              name: itemName,
              photoUrl: itemPhoto,
              quantity: itemQuantity,
              total: Number(itemQuantity * itemPrice).toFixed(2),
            },
          ],
        });
      }

      return [...prev];
    });

    await SecureStore.setItemAsync('CART', JSON.stringify(cart));
  }
  //   async function addCartItem(
  //     shopInfo,
  //     itemId,
  //     itemName,
  //     itemQuantity,
  //     itemPrice,
  //     itemShopId,
  //   ) {
  //     await SecureStore.deleteItemAsync('CART');

  //     console.log(JSON.stringify(cart, null, 2));
  //   }

  useEffect(() => {
    // Função assíncrona para carregar o carrinho
    const loadCart = async () => {
      const secureCart = await SecureStore.getItemAsync('CART');
      const openCart =
        secureCart && secureCart.length > 0 ? await JSON.parse(secureCart) : [];
      setCart(openCart);
    };

    loadCart();
  }, []);

  return (
    <CartContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        cart,
        addCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  const { cart, addCartItem } = context;
  return { cart, addCartItem };
}
