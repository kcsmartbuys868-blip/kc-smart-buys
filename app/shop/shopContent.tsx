"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import type { Product } from "@/lib/products";

type ShopContentProps = {
  products: Product[];
};

export default function ShopContent({
  products,
}: ShopContentProps) {
  const searchParams = useSearchParams();

  const searchFromUrl = searchParams.get("search") || "";

  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...Array.from(
      new Set(products.map((product) => product.category))
    ),
  ];

  const searchTerm = searchFromUrl.trim().toLowerCase();

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    const searchableText = [
      product.name,
      product.category,
      product.description,
      ...(product.features || []),
    ]
      .join(" ")
      .toLowerCase();

    const matchesSearch =
      searchTerm === "" ||
      searchableText.includes(searchTerm);

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="bg-gray-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6">

        {/* Page heading */}
        <div className="mb-8 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-yellow-600">
            KC Smart Buys
          </p>

          <h1 className="text-3xl font-extrabold text-blue-950 sm:text-4xl">
            Shop Our Products
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Smart choices, real value. Browse our latest products and find
            something you'll love.
          </p>
        </div>

        {/* Search result message */}
        {searchTerm && (
          <div className="mb-6 rounded-xl bg-blue-50 px-4 py-3 text-center">
            <p className="text-sm font-semibold text-blue-900">
              Search results for:{" "}
              <span className="font-extrabold">
                "{searchFromUrl}"
              </span>
            </p>
          </div>
        )}

        {/* Category filters */}
        <div className="mb-10 overflow-x-auto pb-2">
          <div className="flex min-w-max justify-center gap-2 sm:flex-wrap">
            {categories.map((category) => {
              const active = selectedCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() =>
                    setSelectedCategory(category)
                  }
                  className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                    active
                      ? "bg-blue-900 text-white shadow-md"
                      : "bg-white text-blue-900 ring-1 ring-gray-200 hover:bg-blue-50"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product count */}
        <div className="mb-5">
          <p className="text-sm font-semibold text-gray-500">
            Showing {filteredProducts.length}{" "}
            {filteredProducts.length === 1
              ? "product"
              : "products"}
          </p>
        </div>

        {/* Product grid */}
        {filteredProducts.length > 0 && (
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {filteredProducts.map((product) => {
              const savings = product.originalPrice
                ? product.originalPrice - product.price
                : 0;

              const stock = product.stock ?? 0;

              const whatsappMessage = encodeURIComponent(
                `Hi KC Smart Buys, I'm interested in the ${product.name} for $${product.price}.`
              );

              return (
                <div
                  key={product.id}
                  className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Product link */}
                  <Link
                    href={`/shop/${product.id}`}
                    className="block"
                  >
                    {/* Image */}
                    <div className="relative aspect-square overflow-hidden bg-gray-100">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 280px"
                        className="object-contain p-3 transition duration-500 group-hover:scale-105 sm:p-5"
                      />

                      {/* Sale badge */}
                      {product.originalPrice && (
                        <div className="absolute left-2 top-2 rounded-full bg-yellow-500 px-2.5 py-1 text-xs font-extrabold text-blue-950 shadow-md sm:left-3 sm:top-3 sm:px-3 sm:py-1.5">
                          SALE
                        </div>
                      )}

                      {/* Stock badge */}
                      {stock === 0 ? (
                        <div className="absolute right-2 top-2 rounded-full bg-red-600 px-2.5 py-1 text-xs font-extrabold text-white shadow-md">
                          SOLD OUT
                        </div>
                      ) : stock <= 3 ? (
                        <div className="absolute right-2 top-2 rounded-full bg-orange-500 px-2.5 py-1 text-xs font-extrabold text-white shadow-md">
                          ONLY {stock} LEFT
                        </div>
                      ) : (
                        <div className="absolute right-2 top-2 rounded-full bg-green-600 px-2.5 py-1 text-xs font-extrabold text-white shadow-md">
                          IN STOCK
                        </div>
                      )}
                    </div>

                    {/* Product information */}
                    <div className="p-3 sm:p-5">
                      <p className="mb-1 text-xs font-medium text-gray-500">
                        {product.category}
                      </p>

                      <h2 className="line-clamp-2 min-h-[40px] text-sm font-bold text-blue-950 sm:text-base">
                        {product.name}
                      </h2>

                      <p className="mt-2 text-xs font-bold text-blue-700">
                        View Product →
                      </p>

                      {/* Price */}
                      <div className="mt-3 flex flex-wrap items-center gap-2">
                        <span className="text-lg font-extrabold text-blue-900 sm:text-xl">
                          ${product.price}
                        </span>

                        {product.originalPrice && (
                          <>
                            <span className="text-xs text-gray-400 line-through sm:text-sm">
                              ${product.originalPrice}
                            </span>

                            <span className="text-xs font-bold text-green-600">
                              Save ${savings}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </Link>

                  {/* WhatsApp button */}
                  <div className="px-3 pb-3 sm:px-5 sm:pb-5">
                    <a
                      href={`https://wa.me/18683071357?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-xl bg-blue-900 px-3 py-3 text-center text-xs font-bold text-white transition hover:bg-blue-800 sm:text-sm"
                    >
                      Order on WhatsApp
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* No products */}
        {filteredProducts.length === 0 && (
          <div className="rounded-2xl bg-white px-6 py-16 text-center">
            <div className="text-5xl">🔍</div>

            <h2 className="mt-4 text-xl font-bold text-blue-950">
              No products found
            </h2>

            <p className="mt-2 text-gray-600">
              We couldn't find any products matching{" "}
              <span className="font-bold">
                "{searchFromUrl}"
              </span>
              .
            </p>

            <Link
              href="/shop"
              className="mt-6 inline-block rounded-xl bg-blue-900 px-6 py-3 font-bold text-white transition hover:bg-blue-800"
            >
              View All Products
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}