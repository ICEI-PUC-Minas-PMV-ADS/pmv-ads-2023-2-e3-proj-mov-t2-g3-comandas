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
      // Verificando se item já exsite no carrinho
      const existingShopIndex = prev.findIndex(
        (cartShop) => cartShop.id === shopInfo.userInfo.id,
      );

      if (existingShopIndex !== -1) {
        const updatedCart = [...prev];

        const existingItemIndex = updatedCart[
          existingShopIndex
        ].items.findIndex((cartItem) => cartItem.id === itemId);

        if (existingItemIndex !== -1) {
          updatedCart[existingShopIndex].items[existingItemIndex].quantity +=
            itemQuantity;
          updatedCart[existingShopIndex].items[existingItemIndex].total =
            Number(
              updatedCart[existingShopIndex].items[existingItemIndex].quantity *
                itemPrice,
            ).toFixed(2);

          return updatedCart;
        }

        return updatedCart[existingShopIndex].items.push({
          id: itemId,
          name: itemName,
          photoUrl: itemPhoto,
          quantity: itemQuantity,
          total: Number(itemQuantity * itemPrice).toFixed(2),
        });
      }

      return [
        ...prev,
        {
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
        },
      ];
    });

    await SecureStore.setItemAsync('CART', JSON.stringify(cart));

    // console.log(JSON.stringify(cart, null, 2));
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
