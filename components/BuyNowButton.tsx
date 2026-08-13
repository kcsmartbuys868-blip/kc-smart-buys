"use client";

import { useRouter } from "next/navigation";
import { Product } from "@/lib/products";
import { useCart } from "@/components/CartProvider";

export default function BuyNowButton({
  product,
}: {
  product: Product;
}) {
  const router = useRouter();
  const { addToCart } = useCart();

  const handleBuyNow = () => {
    addToCart(product);
    router.push("/cart");
  };

  return (
    <button
      type="button"
      onClick={handleBuyNow}
      className="mt-3 block w-full rounded-xl bg-yellow-500 px-6 py-4 text-center text-base font-extrabold text-blue-950 shadow-md transition hover:bg-yellow-400 hover:shadow-lg"
    >
      ⚡ Buy Now
    </button>
  );
}