import { getProducts } from "@/lib/api";
import ShopContent from "./shopContent";

export default async function ShopPage() {
  const products = await getProducts();

  return <ShopContent products={products} />;
}