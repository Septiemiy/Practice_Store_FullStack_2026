"use client";

import { useState } from "react";
import { useCart } from "@/storage/cartContext";
import { Good } from "@/interfaces/interfaces";
import { useRouter } from "next/navigation"

interface ProductActionsProps {
  maxQuantity: number | undefined;
  good: Good;
}

export default function ProductActions({ maxQuantity = 1, good }: ProductActionsProps) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();
  const router = useRouter();

  function decrease() {
    if (quantity > 1) setQuantity(quantity - 1);
  }

  function increase() {
    if (quantity < maxQuantity) setQuantity(quantity + 1);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = Number(e.target.value);
    if (value >= 1 && value <= maxQuantity) setQuantity(value);
  }

  function handleAddToCart() {
    addToCart(good, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  function handleBuyNow() {
    addToCart(good, quantity);
    router.push("/checkout");
  }

  return (
    <div className="flex flex-col gap-4">
      <div>
        <p className="text-sm text-gray-500 mb-2">Quantity:</p>
        <div className="flex items-center gap-3">
          <button onClick={decrease} disabled={quantity <= 1} className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:border-orange-400 hover:text-orange-500 disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
            −
          </button>
          <input type="number" value={quantity} onChange={handleChange} min={1} max={maxQuantity} className="w-14 h-9 text-center border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-orange-400" />
          <button onClick={increase} disabled={quantity >= maxQuantity} className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:border-orange-400 hover:text-orange-500 disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
            +
          </button>
        </div>
      </div>
      <div className="text-2xl font-bold text-gray-900">
        {(good.price * quantity).toLocaleString("uk-UA")} ₴
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={handleAddToCart} 
          className={`flex-1 font-medium py-3 px-6 rounded-xl transition-colors ${
            added
              ? "bg-green-500 text-white"
              : "bg-orange-500 hover:bg-orange-600 text-white"
          }`}
        >
          {added ? "Added to cart" : "Add to cart"}
        </button>
        <button
          type="button"
          onClick={handleBuyNow}
          className="flex-1 border-2 border-orange-500 text-orange-500 hover:bg-orange-50 font-medium py-3 px-6 rounded-xl transition-colors"
        >
          Buy now
        </button>
      </div>
    </div>
  );
}