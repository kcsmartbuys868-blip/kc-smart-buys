"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { Product } from "@/lib/products";

type CartItem = Product & {
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product) => boolean;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load saved cart
  useEffect(() => {
    const savedCart = localStorage.getItem("kc-smart-buys-cart");

    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch {
        localStorage.removeItem("kc-smart-buys-cart");
      }
    }
  }, []);

  // Save cart
  useEffect(() => {
    localStorage.setItem("kc-smart-buys-cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    let addedSuccessfully = false;

    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (item) => item.id === product.id
      );

      const currentQuantity = existingItem?.quantity ?? 0;
      const availableStock = product.stock ?? 0;

      // Prevent adding if there is no stock
      if (availableStock <= 0) {
        return currentCart;
      }

      // Prevent exceeding available stock
      if (currentQuantity >= availableStock) {
        return currentCart;
      }

      addedSuccessfully = true;

      if (existingItem) {
        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...currentCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });

    return addedSuccessfully;
  };

  const removeFromCart = (productId: string) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== productId)
    );
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setCart((currentCart) =>
      currentCart.map((item) => {
        if (item.id !== productId) {
          return item;
        }

        const availableStock = item.stock ?? 0;

        if (quantity <= 0) {
          return item;
        }

        return {
          ...item,
          quantity: Math.min(quantity, availableStock),
        };
      })
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}