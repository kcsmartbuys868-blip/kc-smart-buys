import Link from "next/link";

export default function ContactPage() {
  const whatsappNumber = "18683071357";

  return (
    <main className="bg-gray-50">

      {/* Hero */}
      <section className="bg-blue-950 px-6 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-yellow-400">
            KC Smart Buys
          </p>

          <h1 className="text-4xl font-extrabold sm:text-5xl">
            Get In Touch
          </h1>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100">
            Have a question about a product or ready to place an order?
            We're here to help.
          </p>
        </div>
      </section>

      {/* Contact options */}
      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl bg-white p-7 text-center shadow-sm ring-1 ring-gray-100 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">
              💬
            </div>

            <h2 className="mt-5 text-xl font-extrabold text-blue-950">
              WhatsApp
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Message us directly to ask questions or place an order.
            </p>

            <p className="mt-4 font-extrabold text-blue-900">
              307-1357
            </p>

            <span className="mt-5 inline-block rounded-xl bg-blue-900 px-5 py-3 text-sm font-bold text-white transition group-hover:bg-blue-800">
              Chat on WhatsApp
            </span>
          </a>

          {/* Phone */}
          <a
            href="tel:+18683071357"
            className="group rounded-3xl bg-white p-7 text-center shadow-sm ring-1 ring-gray-100 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100 text-3xl">
              📞
            </div>

            <h2 className="mt-5 text-xl font-extrabold text-blue-950">
              Call Us
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Prefer to speak with us? Give us a call.
            </p>

            <p className="mt-4 font-extrabold text-blue-900">
              307-1357
            </p>

            <span className="mt-5 inline-block rounded-xl border-2 border-blue-900 px-5 py-3 text-sm font-bold text-blue-900 transition group-hover:bg-blue-900 group-hover:text-white">
              Call Now
            </span>
          </a>

          {/* Location */}
          <div className="rounded-3xl bg-white p-7 text-center shadow-sm ring-1 ring-gray-100">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-3xl">
              🇹🇹
            </div>

            <h2 className="mt-5 text-xl font-extrabold text-blue-950">
              Location
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Proudly serving customers in Trinidad & Tobago.
            </p>

            <p className="mt-4 font-extrabold text-blue-900">
              Trinidad & Tobago
            </p>
          </div>

        </div>
      </section>

      {/* Business hours */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-3xl">

          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-yellow-600">
              When We're Available
            </p>

            <h2 className="mt-2 text-3xl font-extrabold text-blue-950">
              Business Hours
            </h2>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl bg-gray-50 ring-1 ring-gray-100">
            <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
              <span className="font-semibold text-gray-700">
                Sunday – Friday
              </span>

              <span className="font-bold text-blue-900">
                7:00 AM – 5:00 PM
              </span>
            </div>

            <div className="flex items-center justify-between px-5 py-4">
              <span className="font-semibold text-gray-700">
                Saturday
              </span>

              <span className="font-bold text-red-600">
                Closed
              </span>
            </div>
          </div>

          <p className="mt-5 text-center text-sm text-gray-500">
            Messages received outside business hours will be answered as
            soon as possible.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-blue-950 px-6 py-12 text-center text-white sm:px-10">

          <p className="text-sm font-bold uppercase tracking-widest text-yellow-400">
            Ready to Order?
          </p>

          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Let's find your next smart buy
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-blue-100">
            Browse our products or message us directly on WhatsApp.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              href="/shop"
              className="rounded-xl bg-yellow-500 px-7 py-3.5 font-extrabold text-blue-950 transition hover:bg-yellow-400"
            >
              Shop Products
            </Link>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border-2 border-white px-7 py-3.5 font-extrabold text-white transition hover:bg-white hover:text-blue-950"
            >
              WhatsApp Us
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}