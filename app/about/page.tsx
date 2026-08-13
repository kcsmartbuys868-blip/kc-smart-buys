import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-gray-50">

      {/* Hero */}
      <section className="bg-blue-950 px-6 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-yellow-400">
            About KC Smart Buys
          </p>

          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            Smart Choices. Real Value.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
            We make it easier to find useful, quality products at prices that
            offer real value.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">

          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-yellow-600">
              Our Story
            </p>

            <h2 className="mt-2 text-3xl font-extrabold text-blue-950 sm:text-4xl">
              Shopping made smarter
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              KC Smart Buys is a Trinidad & Tobago small business focused on
              bringing customers practical, affordable, and interesting
              products for everyday life.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              From useful electronics and accessories to gift ideas and
              everyday essentials, our goal is simple: offer products worth
              buying without making shopping complicated.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              We carefully select products with value, usefulness, and
              affordability in mind so that every purchase can be a smart buy.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-100 sm:p-10">
            <div className="grid gap-6 sm:grid-cols-3 md:grid-cols-1">

              <div>
                <p className="text-3xl font-extrabold text-blue-900">
                  Quality
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  Products selected with value and usefulness in mind.
                </p>
              </div>

              <div>
                <p className="text-3xl font-extrabold text-blue-900">
                  Value
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  Competitive prices designed to give customers more.
                </p>
              </div>

              <div>
                <p className="text-3xl font-extrabold text-blue-900">
                  Service
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  Friendly, convenient ordering through WhatsApp.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">

          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-yellow-600">
              Why Shop With Us
            </p>

            <h2 className="mt-2 text-3xl font-extrabold text-blue-950 sm:text-4xl">
              A better way to shop
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl bg-gray-50 p-6">
              <div className="text-3xl">💰</div>
              <h3 className="mt-4 font-extrabold text-blue-950">
                Great Value
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                We look for products that provide useful features at
                competitive prices.
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-6">
              <div className="text-3xl">🛍️</div>
              <h3 className="mt-4 font-extrabold text-blue-950">
                Useful Products
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Our collection focuses on products customers can actually
                use and enjoy.
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-6">
              <div className="text-3xl">📱</div>
              <h3 className="mt-4 font-extrabold text-blue-950">
                Easy Ordering
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Browse online and contact us directly through WhatsApp to
                place your order.
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-6">
              <div className="text-3xl">⭐</div>
              <h3 className="mt-4 font-extrabold text-blue-950">
                Customer Focused
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                We aim to make every customer's shopping experience simple
                and worthwhile.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-blue-950 px-6 py-12 text-center text-white sm:px-10">

          <p className="text-sm font-bold uppercase tracking-widest text-yellow-400">
            Ready to Shop?
          </p>

          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Find your next smart buy
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-blue-100">
            Browse our collection and discover quality products at prices
            designed to give you real value.
          </p>

          <Link
            href="/shop"
            className="mt-7 inline-block rounded-xl bg-yellow-500 px-7 py-3.5 font-extrabold text-blue-950 shadow-md transition hover:bg-yellow-400"
          >
            Shop Now
          </Link>

        </div>
      </section>

    </main>
  );
}