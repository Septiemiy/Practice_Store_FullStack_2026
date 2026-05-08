"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Good, CartItem, CartContextType } from "@/interfaces/interfaces";

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window === "undefined") return [];
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });
  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  function addToCart(good: Good, quantity: number) {
    setItems((prev) => {
      const existing = prev.find((item) => item.good.id === good.id);
      if (existing) {
        return prev.map((item) =>
          item.good.id === good.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { good, quantity }];
    });
  }

  function removeFromCart(goodId: string) {
    setItems((prev) => prev.filter((item) => item.good.id !== goodId));
  }

  function clearCart() {
    setItems([]);
  }

  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.good.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, clearCart, totalCount, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}