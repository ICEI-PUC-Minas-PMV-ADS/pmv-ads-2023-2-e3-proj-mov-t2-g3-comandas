import React, { createContext, useState, useContext, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [signed, setSigned] = useState(false);
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  async function addCartItem(itemId, itemQuantity, itemPrice, itemShopId) {
    setCart((prev) => {
      // Verificando se item já exsite no carrinho
      const existingItemIndex = prev.findIndex(
        (cartItem) => cartItem.itemId === itemId,
      );

      if (existingItemIndex !== -1) {
        const updatedCart = [...prev];
        updatedCart[existingItemIndex].quantity += itemQuantity;
        updatedCart[existingItemIndex].total = Number(
          updatedCart[existingItemIndex].quantity * itemPrice,
        ).toFixed(2);
        return updatedCart;
      }

      return [
        ...prev,
        {
          shopId: itemShopId,
          customerId: user.id,
          itemId,
          quantity: itemQuantity,
          total: Number(itemQuantity * itemPrice).toFixed(2),
          tableId: 0,
          note: 'nothing',
        },
      ];
    });

    await SecureStore.setItemAsync('CART', JSON.stringify(cart));
  }

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
    <UserContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        signed,
        setSigned,
        user,
        setUser,
        cart,
        addCartItem,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  const { signed, setSigned, user, setUser, cart, addCartItem } = context;
  return { signed, setSigned, user, setUser, cart, addCartItem };
}
