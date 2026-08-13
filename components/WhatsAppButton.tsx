"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/18683071357"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with KC Smart Buys on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-green-500 px-4 py-3 text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-green-600 hover:shadow-xl sm:bottom-6 sm:right-6"
    >
      <FaWhatsapp className="text-2xl" />

      <span className="hidden text-sm font-extrabold sm:inline">
        Chat on WhatsApp
      </span>
    </a>
  );
}