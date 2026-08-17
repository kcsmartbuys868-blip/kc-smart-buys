import { getProducts } from "@/lib/api";

export default async function ApiTestPage() {
  const products = await getProducts();

  return (
    <main className="p-8">
      <h1 className="mb-6 text-2xl font-bold">
        API Test
      </h1>

      <pre className="overflow-auto rounded-lg bg-gray-100 p-4 text-sm">
        {JSON.stringify(products, null, 2)}
      </pre>
    </main>
  );
}