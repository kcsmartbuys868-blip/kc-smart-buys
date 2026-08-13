export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">

        {/* Left Side */}
        <div className="flex-1">
          <span className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-full font-bold">
            Trusted Across Trinidad & Tobago
          </span>

          <h1 className="text-5xl font-extrabold mt-6 leading-tight">
            Smart Choices.
            <br />
            Real Value.
          </h1>

          <p className="mt-6 text-xl text-blue-100">
            Quality electronics, travel accessories, gifts and everyday essentials at prices you'll love.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/shop"
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
            >
              Shop Now
            </a>

            <a
              href="https://wa.me/18683071357"
              target="_blank"
              className="border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-900 transition"
            >
              WhatsApp Order
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex justify-center">
          <img
            src="/hero-products.png"
            alt="KC Smart Buys"
            className="w-full max-w-lg"
          />
        </div>

      </div>
    </section>
  );
}