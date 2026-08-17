"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import type { Product } from "@/lib/products";
import { getProducts } from "@/lib/api";

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

const CART_STORAGE_KEY = "kc-smart-buys-cart";

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartLoaded, setCartLoaded] = useState(false);

  // Load saved cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);

    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch {
        localStorage.removeItem(CART_STORAGE_KEY);
      }
    }

    setCartLoaded(true);
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    if (!cartLoaded) return;

    localStorage.setItem(
      CART_STORAGE_KEY,
      JSON.stringify(cart)
    );
  }, [cart, cartLoaded]);

  // Synchronize cart with Google Sheets API
  useEffect(() => {
    if (!cartLoaded) return;

    const synchronizeCart = async () => {
      try {
        const latestProducts = await getProducts();

        setCart((currentCart) => {
          return currentCart
            .map((cartItem) => {
              const latestProduct = latestProducts.find(
                (product) => product.id === cartItem.id
              );

              // Product was removed or made inactive
              if (!latestProduct) {
                return null;
              }

              // Product is now sold out
              if ((latestProduct.stock ?? 0) <= 0) {
                return null;
              }

              // Keep customer's quantity but don't allow it
              // to exceed the current stock
              const updatedQuantity = Math.min(
                cartItem.quantity,
                latestProduct.stock ?? 0
              );

              return {
                ...latestProduct,
                quantity: updatedQuantity,
              };
            })
            .filter(
              (item): item is CartItem =>
                item !== null && item.quantity > 0
            );
        });
      } catch (error) {
        console.error(
          "Unable to synchronize cart with product API:",
          error
        );
      }
    };

    synchronizeCart();
  }, [cartLoaded]);

  const addToCart = (product: Product) => {
    let addedSuccessfully = false;

    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (item) => item.id === product.id
      );

      const currentQuantity = existingItem?.quantity ?? 0;
      const availableStock = product.stock ?? 0;

      // Product is sold out
      if (availableStock <= 0) {
        return currentCart;
      }

      // Already reached available stock
      if (currentQuantity >= availableStock) {
        return currentCart;
      }

      addedSuccessfully = true;

      if (existingItem) {
        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                ...product,
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
      currentCart.filter(
        (item) => item.id !== productId
      )
    );
  };

  const updateQuantity = (
    productId: string,
    quantity: number
  ) => {
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
          quantity: Math.min(
            quantity,
            availableStock
          ),
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
    (total, item) =>
      total + item.price * item.quantity,
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
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}