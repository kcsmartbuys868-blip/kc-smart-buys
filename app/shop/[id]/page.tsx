import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getProducts } from "@/lib/api";
import AddToCartButton from "@/components/AddToCartButton";
import ProductImageGallery from "@/components/ProductImageGallery";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const products = await getProducts();

  const product = products.find((item) => item.id === id);

  if (!product) {
    notFound();
  }

  const savings = product.originalPrice
    ? product.originalPrice - product.price
    : 0;

  const relatedProducts = products
    .filter(
      (item) =>
        item.category === product.category && item.id !== product.id
    )
    .slice(0, 4);

  const whatsappMessage = encodeURIComponent(
    `Hi KC Smart Buys, I'm interested in the ${product.name} for $${product.price}.`
  );

  return (
    <main className="bg-gray-50 py-8 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Back to Shop */}
        <Link
          href="/shop"
          className="mb-6 inline-flex items-center text-sm font-bold text-blue-900 transition hover:text-blue-700"
        >
          ← Back to Shop
        </Link>

        {/* Product */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-gray-100">
          <div className="grid md:grid-cols-2">

            {/* Product Image Gallery */}
            <div className="relative">
              {product.images.length > 0 ? (
                <ProductImageGallery
                  images={product.images}
                  productName={product.name}
                />
              ) : (
                <div className="flex aspect-square items-center justify-center bg-gray-100 text-sm font-semibold text-gray-400">
                  Image unavailable
                </div>
              )}

              {product.originalPrice && (
                <div className="absolute left-6 top-6 rounded-full bg-yellow-500 px-4 py-2 text-sm font-extrabold text-blue-950 shadow-md">
                  SALE
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="p-6 sm:p-10">

              {/* Category */}
              <p className="text-sm font-bold uppercase tracking-widest text-yellow-600">
                {product.category}
              </p>

              {/* Product Name */}
              <h1 className="mt-2 text-3xl font-extrabold leading-tight text-blue-950 sm:text-4xl">
                {product.name}
              </h1>

              {/* Price */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="text-3xl font-extrabold text-blue-900">
                  ${product.price}
                </span>

                {product.originalPrice && (
                  <>
                    <span className="text-lg text-gray-400 line-through">
                      ${product.originalPrice}
                    </span>

                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-bold text-green-700">
                      Save ${savings}
                    </span>
                  </>
                )}
              </div>

              {/* Description */}
              <div className="mt-8">
                <h2 className="text-lg font-bold text-blue-950">
                  About This Product
                </h2>

                <p className="mt-3 leading-7 text-gray-600">
                  {product.description ||
                    "A practical choice offering great value for your money."}
                </p>
              </div>

              {/* Why You'll Love It */}
              <div className="mt-8 rounded-2xl bg-blue-50 p-5">
                <h2 className="text-xl font-extrabold text-blue-950">
                  Why You'll Love It
                </h2>

                <ul className="mt-4 space-y-3">
                  {product.features && product.features.length > 0 ? (
                    product.features.map((feature, index) => (
                      <li
                        key={`${product.id}-feature-${index}`}
                        className="flex items-start gap-3 text-sm leading-6 text-gray-700"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 font-bold text-green-600">
                          ✓
                        </span>

                        <span>{feature}</span>
                      </li>
                    ))
                  ) : (
                    <li className="text-sm text-gray-600">
                      A practical choice offering great value for your money.
                    </li>
                  )}
                </ul>
              </div>

              {/* Availability */}
              <div className="mt-7 rounded-2xl bg-gray-50 p-4">
                {product.stock === 0 ? (
                  <>
                    <p className="font-bold text-red-600">
                      ✕ Currently Sold Out
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Contact us on WhatsApp to ask about restock
                      availability.
                    </p>
                  </>
                ) : product.stock !== undefined && product.stock <= 3 ? (
                  <>
                    <p className="font-bold text-orange-600">
                      ⚡ Only {product.stock} left
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Message us on WhatsApp to reserve yours.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="font-bold text-green-600">
                      ✓ Available for Order
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Message us on WhatsApp to confirm availability and
                      place your order.
                    </p>
                  </>
                )}
              </div>

              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/18683071357?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block rounded-xl bg-blue-900 px-6 py-4 text-center text-base font-extrabold text-white shadow-md transition hover:bg-blue-800"
              >
                Order Now on WhatsApp
              </a>

              {/* Add to Cart */}
              <AddToCartButton product={product} />

              {/* Continue Shopping */}
              <Link
                href="/shop"
                className="mt-3 block rounded-xl border-2 border-blue-900 px-6 py-3 text-center text-sm font-bold text-blue-900 transition hover:bg-blue-50"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16">
            <div className="mb-7">
              <p className="text-sm font-bold uppercase tracking-widest text-yellow-600">
                You May Also Like
              </p>

              <h2 className="mt-1 text-2xl font-extrabold text-blue-950 sm:text-3xl">
                More From This Category
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
              {relatedProducts.map((item) => (
                <Link
                  key={item.id}
                  href={`/shop/${item.id}`}
                  className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-square overflow-hidden bg-gray-100">
                    {item.images.length > 0 ? (
                      <Image
                        src={item.images[0]}
                        alt={item.name}
                        fill
                        sizes="(max-width: 640px) 50vw, 25vw"
                        className="object-contain p-3 transition duration-500 group-hover:scale-105 sm:p-5"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-xs font-semibold text-gray-400">
                        Image unavailable
                      </div>
                    )}
                  </div>

                  <div className="p-3 sm:p-4">
                    <p className="line-clamp-2 text-sm font-bold text-blue-950">
                      {item.name}
                    </p>

                    <p className="mt-2 text-lg font-extrabold text-blue-900">
                      ${item.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}