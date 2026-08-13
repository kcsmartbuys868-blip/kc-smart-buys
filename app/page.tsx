import Link from "next/link";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import CategorySection from "@/components/CategorySection";

export default function Home() {
  return (
    <>
      <Hero />

      <CategorySection />

      <FeaturedProducts />

      {/* Why Shop With Us */}
      <section className="bg-white px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">

          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-yellow-600">
              Why KC Smart Buys
            </p>

            <h2 className="mt-2 text-3xl font-extrabold text-blue-950 sm:text-4xl">
              Smart Shopping Starts Here
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              We focus on useful products, competitive prices, and a simple
              ordering experience.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl bg-gray-50 p-6 text-center ring-1 ring-gray-100">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-2xl">
                💰
              </div>

              <h3 className="mt-4 text-lg font-extrabold text-blue-950">
                Real Value
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Competitive prices on products selected with value in mind.
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-6 text-center ring-1 ring-gray-100">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-yellow-100 text-2xl">
                ⭐
              </div>

              <h3 className="mt-4 text-lg font-extrabold text-blue-950">
                Quality Choices
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Discover practical products for everyday life, gifting, and
                more.
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-6 text-center ring-1 ring-gray-100">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl">
                💬
              </div>

              <h3 className="mt-4 text-lg font-extrabold text-blue-950">
                Easy Ordering
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Find what you want and order directly through WhatsApp.
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-6 text-center ring-1 ring-gray-100">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-2xl">
                🇹🇹
              </div>

              <h3 className="mt-4 text-lg font-extrabold text-blue-950">
                Local Business
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Proudly serving customers in Trinidad & Tobago.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-blue-950 px-6 py-14 text-center text-white shadow-xl sm:px-10">

          <p className="text-sm font-bold uppercase tracking-widest text-yellow-400">
            Smart Choices | Real Value
          </p>

          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Find Something You'll Love
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
            Browse our latest products and discover great finds at prices
            designed to give you real value.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              href="/shop"
              className="rounded-xl bg-yellow-500 px-8 py-4 font-extrabold text-blue-950 shadow-md transition hover:bg-yellow-400"
            >
              Shop Now
            </Link>

            <a
              href="https://wa.me/18683071357"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border-2 border-white px-8 py-4 font-extrabold text-white transition hover:bg-white hover:text-blue-950"
            >
              WhatsApp Us
            </a>

          </div>
        </div>
      </section>
    </>
  );
}