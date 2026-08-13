"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/components/CartProvider";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const { cart } = useCart();

  const cartItemCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const searchTerm = search.trim();

    if (!searchTerm) return;

    setMenuOpen(false);

    window.location.href = `/shop?search=${encodeURIComponent(searchTerm)}`;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">

        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex items-center gap-3"
        >
          <Image
            src="/logo.png"
            alt="KC Smart Buys Logo"
            width={60}
            height={60}
            priority
            className="h-12 w-12 object-contain sm:h-14 sm:w-14"
          />

          <div>
            <h1 className="text-lg font-extrabold leading-tight text-blue-900 sm:text-xl">
              KC Smart Buys
            </h1>

            <p className="text-[10px] font-semibold text-yellow-600 sm:text-xs">
              Smart Choices | Real Value
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 text-sm font-semibold text-blue-900 md:flex">
          <Link
            href="/"
            className="transition hover:text-yellow-600"
          >
            Home
          </Link>

          <Link
            href="/shop"
            className="transition hover:text-yellow-600"
          >
            Shop
          </Link>

          <Link
            href="/about"
            className="transition hover:text-yellow-600"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="transition hover:text-yellow-600"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop Search */}
        <form
          onSubmit={handleSearch}
          className="hidden items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-2 lg:flex"
        >
          <span className="mr-2 text-gray-400">🔍</span>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="w-40 bg-transparent text-sm outline-none placeholder:text-gray-400"
          />
        </form>

        {/* Cart */}
        <Link
          href="/cart"
          aria-label={`Shopping cart with ${cartItemCount} items`}
          className="relative ml-3 rounded-full p-2 text-2xl text-blue-900 transition hover:bg-blue-50"
        >
          🛒

          {cartItemCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-yellow-500 px-1 text-[10px] font-extrabold text-blue-950 shadow-sm">
              {cartItemCount > 99 ? "99+" : cartItemCount}
            </span>
          )}
        </Link>

        {/* Desktop WhatsApp */}
        <a
          href="https://wa.me/18683071357"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-3 hidden rounded-full bg-yellow-500 px-5 py-2.5 text-sm font-extrabold text-blue-950 shadow-sm transition hover:bg-yellow-400 hover:shadow-md md:block"
        >
          Order on WhatsApp
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="ml-2 rounded-lg p-2 text-2xl text-blue-900 transition hover:bg-gray-100 md:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-5 shadow-lg md:hidden">
          <nav className="flex flex-col gap-1 font-semibold text-blue-900">

            {/* Mobile Search */}
            <form
              onSubmit={handleSearch}
              className="mb-3 flex items-center rounded-xl border border-gray-200 bg-gray-50 px-3 py-2"
            >
              <span className="mr-2 text-gray-400">🔍</span>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="w-full bg-transparent py-2 text-sm outline-none placeholder:text-gray-400"
              />

              <button
                type="submit"
                className="ml-2 rounded-lg bg-blue-900 px-3 py-2 text-xs font-bold text-white"
              >
                Search
              </button>
            </form>

            {/* Mobile Cart */}
            <Link
              href="/cart"
              onClick={closeMenu}
              className="flex items-center justify-between rounded-lg px-3 py-3 transition hover:bg-gray-50"
            >
              <span className="flex items-center gap-2">
                <span className="text-xl">🛒</span>
                Shopping Cart
              </span>

              {cartItemCount > 0 && (
                <span className="rounded-full bg-yellow-500 px-2.5 py-1 text-xs font-extrabold text-blue-950">
                  {cartItemCount}{" "}
                  {cartItemCount === 1 ? "item" : "items"}
                </span>
              )}
            </Link>

            {/* Navigation Links */}
            <Link
              href="/"
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 transition hover:bg-gray-50"
            >
              Home
            </Link>

            <Link
              href="/shop"
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 transition hover:bg-gray-50"
            >
              Shop
            </Link>

            <Link
              href="/about"
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 transition hover:bg-gray-50"
            >
              About
            </Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 transition hover:bg-gray-50"
            >
              Contact
            </Link>

            {/* Mobile WhatsApp */}
            <a
              href="https://wa.me/18683071357"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-3 rounded-xl bg-yellow-500 px-4 py-3 text-center font-extrabold text-blue-950 shadow-sm transition hover:bg-yellow-400"
            >
              Order on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}