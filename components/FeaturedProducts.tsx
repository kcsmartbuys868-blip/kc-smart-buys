import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";

export default function FeaturedProducts() {
  const featuredProducts = products.filter(
    (product) => product.featured === true
  );

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-yellow-600">
            Customer Favourites
          </p>

          <h2 className="text-3xl font-extrabold text-blue-950 sm:text-4xl">
            Featured Products
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Quality products at prices that give you real value.
          </p>
        </div>

        {featuredProducts.length > 0 && (
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {featuredProducts.map((product) => {
              const savings = product.originalPrice
                ? product.originalPrice - product.price
                : 0;
              const stock = product.stock ?? 0;

              return (
                <div
                  key={product.id}
                  className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <Link href={`/shop/${product.id}`} className="block">

                    <div className="relative aspect-square overflow-hidden bg-gray-100">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 280px"
                        className="object-contain p-3 transition duration-500 group-hover:scale-105 sm:p-5"
                      />

                      {product.originalPrice && (
                        <div className="absolute left-2 top-2 rounded-full bg-yellow-500 px-2.5 py-1 text-xs font-extrabold text-blue-950 shadow-md">
                          SALE
                        </div>
                      )}

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

                    <div className="p-3 sm:p-5">
                      <p className="mb-1 text-xs font-medium text-gray-500">
                        {product.category}
                      </p>

                      <h3 className="line-clamp-2 min-h-[40px] text-sm font-bold text-blue-950 sm:text-base">
                        {product.name}
                      </h3>

                      <p className="mt-2 text-xs font-bold text-blue-700">
                        View Product →
                      </p>

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

                  <div className="px-3 pb-3 sm:px-5 sm:pb-5">
                    <a
                      href={`https://wa.me/18683071357?text=${encodeURIComponent(
                        `Hi KC Smart Buys, I'm interested in the ${product.name} for $${product.price}.`
                      )}`}
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

        <div className="mt-10 text-center">
          <Link
            href="/shop"
            className="inline-block rounded-xl border-2 border-blue-900 px-7 py-3 font-bold text-blue-900 transition hover:bg-blue-900 hover:text-white"
          >
            View All Products
          </Link>
        </div>

      </div>
    </section>
  );
}