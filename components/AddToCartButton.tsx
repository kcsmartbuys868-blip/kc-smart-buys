"use client";

import { useState } from "react";
import { Product } from "@/lib/products";
import { useCart } from "@/components/CartProvider";

export default function AddToCartButton({
  product,
}: {
  product: Product;
}) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const stock = product.stock ?? 0;

  const increaseQuantity = () => {
    setQuantity((current) =>
      current < stock ? current + 1 : current
    );
  };

  const decreaseQuantity = () => {
    setQuantity((current) =>
      current > 1 ? current - 1 : current
    );
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <div className="mt-4">
      {/* Quantity selector */}
      <div className="mb-3 flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 p-2">
        <span className="px-2 text-sm font-bold text-blue-950">
          Quantity
        </span>

        <div className="flex items-center rounded-lg border border-gray-200 bg-white">
          <button
            type="button"
            onClick={decreaseQuantity}
            disabled={quantity <= 1}
            className="px-4 py-2 text-lg font-bold text-blue-900 transition hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            −
          </button>

          <span className="min-w-10 text-center font-extrabold text-blue-950">
            {quantity}
          </span>

          <button
            type="button"
            onClick={increaseQuantity}
            disabled={quantity >= stock}
            className="px-4 py-2 text-lg font-bold text-blue-900 transition hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            +
          </button>
        </div>
      </div>

      {/* Add to cart */}
      <button
        type="button"
        onClick={handleAddToCart}
        disabled={stock === 0}
        className="block w-full rounded-xl border-2 border-blue-900 bg-white px-6 py-4 text-center text-base font-extrabold text-blue-900 shadow-sm transition hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {stock === 0
          ? "Sold Out"
          : added
          ? "✓ Added to Cart"
          : `🛒 Add ${quantity} to Cart`}
      </button>
    </div>
  );
}