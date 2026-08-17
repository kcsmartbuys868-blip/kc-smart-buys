import type { Product } from "./products";

const API_URL =
  "https://script.google.com/macros/s/AKfycbyJhOcQMfH2Cs9RQfMAjSiyNQQmTNtIyWG3gYbi6WvfQmAS3-q3fqND1IkJDPijmcWmJg/exec";

type ApiProduct = {
  "Product ID": string;
  "Product Name": string;
  Category: string;
  "Price (TTD)": number | string;
  "Original Price (TTD)"?: number | string;
  Stock?: number | string;
  Featured?: boolean | string;
  "Image Path"?: string | string[];
  Description?: string;
  Features?: string;
  Active?: boolean | string;
};

function toArray(value?: string | string[]) {
  if (!value) return [];

  if (Array.isArray(value)) {
    return value;
  }

  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function toFeatures(value?: string) {
  if (!value) return [];

  return value
    .split("|")
    .map((item) => item.trim())
    .filter(Boolean);
}

function isYes(value?: boolean | string) {
  return (
    value === true ||
    String(value).trim().toLowerCase() === "yes" ||
    String(value).trim().toLowerCase() === "true"
  );
}

export async function getProducts(): Promise<Product[]> {
 const response = await fetch(API_URL, {
  next: {
    revalidate: 60,
  },
});

  if (!response.ok) {
    throw new Error("Failed to fetch products from API");
  }

  const data: ApiProduct[] = await response.json();

  return data
    .filter((product) => isYes(product.Active))
    .map((product) => ({
      id: product["Product ID"],
      name: product["Product Name"],
      category: product.Category,

      price: Number(product["Price (TTD)"]),

      originalPrice:
        product["Original Price (TTD)"] !== undefined &&
        product["Original Price (TTD)"] !== ""
          ? Number(product["Original Price (TTD)"])
          : undefined,

      images: toArray(product["Image Path"]),

      featured: isYes(product.Featured),

      description: product.Description || "",

      features: toFeatures(product.Features),

      stock:
        product.Stock !== undefined &&
        product.Stock !== ""
          ? Number(product.Stock)
          : undefined,
    }));
}