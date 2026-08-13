import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white">

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Business */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="KC Smart Buys Logo"
                width={55}
                height={55}
                className="h-12 w-12 object-contain"
              />

              <div>
                <p className="text-lg font-extrabold">
                  KC Smart Buys
                </p>

                <p className="text-xs font-semibold text-yellow-400">
                  Smart Choices | Real Value
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-blue-100">
              Quality products, competitive prices, and smart choices for
              everyday life. Proudly serving customers in Trinidad & Tobago.
            </p>

            <a
              href="https://wa.me/18683071357"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block rounded-xl bg-yellow-500 px-5 py-3 text-sm font-extrabold text-blue-950 transition hover:bg-yellow-400"
            >
              WhatsApp: 307-1357
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-sm font-extrabold uppercase tracking-widest text-yellow-400">
              Quick Links
            </h2>

            <nav className="mt-5 flex flex-col gap-3 text-sm">
              <Link
                href="/"
                className="text-blue-100 transition hover:text-yellow-400"
              >
                Home
              </Link>

              <Link
                href="/shop"
                className="text-blue-100 transition hover:text-yellow-400"
              >
                Shop Products
              </Link>

              <Link
                href="/about"
                className="text-blue-100 transition hover:text-yellow-400"
              >
                About Us
              </Link>

              <Link
                href="/contact"
                className="text-blue-100 transition hover:text-yellow-400"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Customer Service */}
          <div>
            <h2 className="text-sm font-extrabold uppercase tracking-widest text-yellow-400">
              Customer Service
            </h2>

            <div className="mt-5 space-y-4 text-sm text-blue-100">

              <div>
                <p className="font-bold text-white">
                  WhatsApp
                </p>

                <a
                  href="https://wa.me/18683071357"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-yellow-400"
                >
                  307-1357
                </a>
              </div>

              <div>
                <p className="font-bold text-white">
                  Business Hours
                </p>

                <p className="mt-1">
                  Sunday – Friday
                  <br />
                  7:00 AM – 5:00 PM
                </p>

                <p className="mt-1 text-gray-400">
                  Saturday: Closed
                </p>
              </div>

              <div>
                <p className="font-bold text-white">
                  Location
                </p>

                <p className="mt-1">
                  Trinidad & Tobago
                </p>
              </div>

            </div>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-sm font-extrabold uppercase tracking-widest text-yellow-400">
              Follow Us
            </h2>

            <p className="mt-5 text-sm leading-6 text-blue-100">
              Follow KC Smart Buys for new products, special offers, and
              promotions.
            </p>

            <div className="mt-5 grid grid-cols-3 gap-2">

              {/* Facebook */}
              <a
                href="https://www.facebook.com/kcsmartbuys"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow KC Smart Buys on Facebook"
                className="rounded-xl border border-blue-700 px-2 py-3 text-center text-xs font-bold transition hover:border-yellow-400 hover:bg-blue-900 hover:text-yellow-400"
              >
                Facebook
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/kcsmartbuys868"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow KC Smart Buys on Instagram"
                className="rounded-xl border border-blue-700 px-2 py-3 text-center text-xs font-bold transition hover:border-yellow-400 hover:bg-blue-900 hover:text-yellow-400"
              >
                Instagram
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@kcsmartsbuys868"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow KC Smart Buys on TikTok"
                className="rounded-xl border border-blue-700 px-2 py-3 text-center text-xs font-bold transition hover:border-yellow-400 hover:bg-blue-900 hover:text-yellow-400"
              >
                TikTok
              </a>

            </div>

            <p className="mt-4 text-xs text-blue-300">
              @kcsmartbuys868
            </p>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-blue-900">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-center text-xs text-blue-200 sm:flex-row sm:items-center sm:justify-between sm:text-left">

          <p>
            © {new Date().getFullYear()} KC Smart Buys. All rights reserved.
          </p>

          <p className="font-semibold text-yellow-400">
            Smart Choices | Real Value
          </p>

        </div>
      </div>

    </footer>
  );
}