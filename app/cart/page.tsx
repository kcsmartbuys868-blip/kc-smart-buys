"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/components/CartProvider";
import CheckoutForm from "@/components/CheckoutForm";

const STOCK_API_URL =
  "https://script.google.com/macros/s/AKfycbyJhOcQMfH2Cs9RQfMAjSiyNQQmTNtIyWG3gYbi6WvfQmAS3-q3fqND1IkJDPijmcWmJg/exec";

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
  } = useCart();

  const [processing, setProcessing] = useState(false);
  const [orderError, setOrderError] = useState("");

  const handleCheckout = async (details: {
    name: string;
    phone: string;
    orderType: "Delivery" | "Pickup";
    address: string;
    note: string;
  }) => {
    if (processing) {
      return;
    }

    setProcessing(true);
    setOrderError("");

    try {
      /*
       * Send the order to Google Apps Script
       * so stock can be deducted.
       */
      const response = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          items: cart.map((item) => ({
            id: item.id,
            quantity: item.quantity,
          })),
        }),
      });

      if (!response.ok) {
  const errorText = await response.text();
  throw new Error(
    `Stock API error: ${response.status} ${errorText}`
  );
}

      const result = await response.json();

      if (!result.success) {
        throw new Error(
          result.message || "Unable to update stock."
        );
      }

      /*
       * Build the WhatsApp order message.
       */
      const orderItems = cart
        .map(
          (item) =>
            `${item.name} x${item.quantity} - $${
              item.price * item.quantity
            }`
        )
        .join("\n");

      const message = `Hi KC Smart Buys, I'd like to place an order.

CUSTOMER DETAILS
Name: ${details.name}
Phone: ${details.phone}
Order Method: ${details.orderType}${
        details.orderType === "Delivery"
          ? `\nDelivery Location: ${details.address}`
          : ""
      }

ORDER
${orderItems}

TOTAL: $${cartTotal}${
        details.note ? `\n\nNOTE: ${details.note}` : ""
      }`;

      const whatsappUrl = `https://wa.me/18683071357?text=${encodeURIComponent(
  message
)}`;

      /*
       * Clear the cart after the stock update succeeds.
       */
      clearCart();

      /*
       * Open WhatsApp.
       */
      window.open(whatsappUrl, "_blank");
    } catch (error) {
      console.error("Checkout error:", error);

      setOrderError(
        "We couldn't process your order right now. Please try again."
      );
    } finally {
      setProcessing(false);
    }
  };

  if (cart.length === 0) {
    return (
      <main className="min-h-[60vh] bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="rounded-3xl bg-white p-10 shadow-sm ring-1 ring-gray-100 sm:p-16">
            <div className="text-6xl">🛒</div>

            <h1 className="mt-5 text-3xl font-extrabold text-blue-950">
              Your Cart Is Empty
            </h1>

            <p className="mx-auto mt-3 max-w-md text-gray-600">
              Looks like you haven't added anything to your cart yet.
              Browse our products and find something you'll love.
            </p>

            <Link
              href="/shop"
              className="mt-7 inline-block rounded-xl bg-blue-900 px-7 py-3.5 font-extrabold text-white transition hover:bg-blue-800"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-gray-50 py-10 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-widest text-yellow-600">
            KC Smart Buys
          </p>

          <h1 className="mt-1 text-3xl font-extrabold text-blue-950 sm:text-4xl">
            Your Shopping Cart
          </h1>

          <p className="mt-2 text-gray-600">
            Review your items before placing your order.
          </p>
        </div>

        {orderError && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-4 text-center">
            <p className="font-semibold text-red-700">
              {orderError}
            </p>
          </div>
        )}

        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          {/* Cart items */}
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100 sm:p-5"
              >
                <div className="flex gap-4">
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-gray-100 sm:h-28 sm:w-28">
                    <Image
                      src={item.images[0]}
                      alt={item.name}
                      fill
                      sizes="112px"
                      className="object-contain p-2"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-xs font-semibold text-gray-500">
                          {item.category}
                        </p>

                        <h2 className="mt-1 text-sm font-extrabold text-blue-950 sm:text-base">
                          {item.name}
                        </h2>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          removeFromCart(item.id)
                        }
                        disabled={processing}
                        className="text-xs font-bold text-red-500 hover:text-red-700 disabled:opacity-50"
                      >
                        Remove
                      </button>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center rounded-lg border border-gray-200">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.quantity - 1
                            )
                          }
                          disabled={processing}
                          className="px-3 py-2 font-bold text-blue-900 hover:bg-gray-50 disabled:opacity-50"
                        >
                          −
                        </button>

                        <span className="min-w-8 text-center text-sm font-bold">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.quantity + 1
                            )
                          }
                          disabled={processing}
                          className="px-3 py-2 font-bold text-blue-900 hover:bg-gray-50 disabled:opacity-50"
                        >
                          +
                        </button>
                      </div>

                      <p className="text-lg font-extrabold text-blue-900">
                        ${item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={clearCart}
              disabled={processing}
              className="text-sm font-bold text-red-500 hover:text-red-700 disabled:opacity-50"
            >
              Clear Cart
            </button>
          </div>

          {/* Order summary */}
          <div className="h-fit">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 lg:sticky lg:top-28">
              <h2 className="text-xl font-extrabold text-blue-950">
                Order Summary
              </h2>

              <div className="mt-5 flex items-center justify-between border-b border-gray-100 pb-4">
                <span className="text-gray-600">
                  Items (
                  {cart.reduce(
                    (total, item) =>
                      total + item.quantity,
                    0
                  )}
                  )
                </span>

                <span className="font-bold text-blue-950">
                  ${cartTotal}
                </span>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-lg font-bold text-blue-950">
                  Total
                </span>

                <span className="text-2xl font-extrabold text-blue-900">
                  ${cartTotal}
                </span>
              </div>
            </div>

            <CheckoutForm
              onSubmit={handleCheckout}
            />

            {processing && (
              <div className="mt-4 rounded-xl bg-blue-50 px-4 py-3 text-center">
                <p className="text-sm font-bold text-blue-900">
                  Processing your order...
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}