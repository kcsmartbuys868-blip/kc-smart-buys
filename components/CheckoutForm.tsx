"use client";

import { FormEvent, useState } from "react";

type CheckoutFormProps = {
  onSubmit: (details: {
    name: string;
    phone: string;
    orderType: "Delivery" | "Pickup";
    address: string;
    note: string;
  }) => void;
};

export default function CheckoutForm({
  onSubmit,
}: CheckoutFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [orderType, setOrderType] = useState<"Delivery" | "Pickup">(
    "Delivery"
  );
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim() || !phone.trim()) {
      return;
    }

    if (orderType === "Delivery" && !address.trim()) {
      return;
    }

    onSubmit({
      name: name.trim(),
      phone: phone.trim(),
      orderType,
      address: address.trim(),
      note: note.trim(),
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 space-y-5 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100"
    >
      <div>
        <h2 className="text-xl font-extrabold text-blue-950">
          Customer Details
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Enter your details so we can process your order.
        </p>
      </div>

      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-bold text-gray-700"
        >
          Full Name
        </label>

        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your full name"
          required
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-900 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="mb-2 block text-sm font-bold text-gray-700"
        >
          WhatsApp / Phone Number
        </label>

        <input
          id="phone"
          type="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          placeholder="e.g. 868-123-4567"
          required
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-900 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-bold text-gray-700">
          Order Method
        </label>

        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setOrderType("Delivery")}
            className={`rounded-xl border-2 px-4 py-3 font-bold transition ${
              orderType === "Delivery"
                ? "border-blue-900 bg-blue-50 text-blue-900"
                : "border-gray-200 text-gray-600 hover:border-blue-300"
            }`}
          >
            🚚 Delivery
          </button>

          <button
            type="button"
            onClick={() => setOrderType("Pickup")}
            className={`rounded-xl border-2 px-4 py-3 font-bold transition ${
              orderType === "Pickup"
                ? "border-blue-900 bg-blue-50 text-blue-900"
                : "border-gray-200 text-gray-600 hover:border-blue-300"
            }`}
          >
            📍 Pickup
          </button>
        </div>
      </div>

      {orderType === "Delivery" && (
        <div>
          <label
            htmlFor="address"
            className="mb-2 block text-sm font-bold text-gray-700"
          >
            Delivery Location
          </label>

          <textarea
            id="address"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            placeholder="Enter your delivery location"
            required
            rows={3}
            className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-900 focus:ring-2 focus:ring-blue-100"
          />
        </div>
      )}

      <div>
        <label
          htmlFor="note"
          className="mb-2 block text-sm font-bold text-gray-700"
        >
          Order Note
          <span className="ml-1 font-normal text-gray-400">
            (Optional)
          </span>
        </label>

        <textarea
          id="note"
          value={note}
          onChange={(event) => setNote(event.target.value)}
          placeholder="Any special instructions?"
          rows={3}
          className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-900 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-blue-900 px-5 py-4 font-extrabold text-white shadow-md transition hover:bg-blue-800"
      >
        Continue to WhatsApp
      </button>
    </form>
  );
}