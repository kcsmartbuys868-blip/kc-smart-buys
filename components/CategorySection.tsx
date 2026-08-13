const categories = [
  "Electronics",
  "Smart Watches",
  "Travel Bags",
  "Kids Products",
  "Mobile Accessories",
  "Gift Ideas",
];

export default function CategorySection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-900">
          Shop by Category
        </h2>

        <p className="text-center text-gray-600 mt-3 mb-10">
          Find exactly what you're looking for.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <button
              key={category}
              className="rounded-2xl bg-blue-900 text-white p-8 text-xl font-semibold hover:bg-yellow-500 hover:text-blue-900 transition duration-300 shadow-lg"
            >
              {category}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}