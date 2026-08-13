"use client";

import { useState } from "react";
import { Product } from "@/lib/products";
import { useCart } from "@/components/CartProvider";

export default function BuyNowSection({
  product,
}: {
  product: Product;
}) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const stock = product.stock ?? 0;

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setAdded(false);
    }
  };

  const increaseQuantity = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
      setAdded(false);
    }
  };

  const total = product.price * quantity;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi KC Smart Buys, I'd like to place an order.

PRODUCT
${product.name}

QUANTITY
${quantity}

PRICE
$${product.price} each

TOTAL
$${total}

Please confirm availability.`
  );

  return (
    <div className="mt-6">

      {/* Quantity Selector */}
      <div>
        <p className="mb-2 text-sm font-bold text-blue-950">
          Quantity
        </p>

        <div className="flex w-fit items-center overflow-hidden rounded-xl border-2 border-gray-200 bg-white">
          <button
            type="button"
            onClick={decreaseQuantity}
            disabled={quantity <= 1}
            className="px-5 py-3 text-xl font-bold text-blue-900 transition hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            −
          </button>

          <span className="min-w-14 border-x-2 border-gray-200 px-4 py-3 text-center font-extrabold text-blue-950">
            {quantity}
          </span>

          <button
            type="button"
            onClick={increaseQuantity}
            disabled={stock === 0 || quantity >= stock}
            className="px-5 py-3 text-xl font-bold text-blue-900 transition hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            +
          </button>
        </div>

        {stock > 0 && (
          <p className="mt-2 text-xs font-medium text-gray-500">
            {stock} available
          </p>
        )}
      </div>

      {/* Total */}
      <div className="mt-5 flex items-center justify-between rounded-xl bg-blue-50 px-4 py-3">
        <span className="font-bold text-blue-950">
          Your Total
        </span>

        <span className="text-xl font-extrabold text-blue-900">
          ${total}
        </span>
      </div>

      {/* Buy Now */}
      <a
        href={`https://wa.me/18683071357?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 block rounded-xl bg-blue-900 px-6 py-4 text-center text-base font-extrabold text-white shadow-md transition hover:bg-blue-800"
      >
        Buy Now — {quantity} for ${total}
      </a>

      {/* Add Selected Quantity to Cart */}
      <button
        type="button"
        onClick={handleAddToCart}
        disabled={stock === 0 || added}
        className="mt-4 block w-full rounded-xl border-2 border-blue-900 bg-white px-6 py-4 text-center text-base font-extrabold text-blue-900 shadow-sm transition hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {added
          ? `✓ ${quantity} Added to Cart`
          : `🛒 Add ${quantity} to Cart`}
      </button>

    </div>
  );
}