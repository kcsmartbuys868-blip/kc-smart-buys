import { Suspense } from "react";
import { getProducts } from "@/lib/api";
import ShopContent from "./shopContent";

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <Suspense fallback={null}>
      <ShopContent products={products} />
    </Suspense>
  );
}