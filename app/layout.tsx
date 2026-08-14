import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CartProvider } from "@/components/CartProvider";

export const metadata: Metadata = {
 verification: {
  google: "poMj72mfiLzFoltYIW_fq3eK0fH2qr8Pp7wS7lYQv44",
},
  title: {
    default: "KC Smart Buys | Smart Choices, Real Value",
    template: "%s | KC Smart Buys",
  },

  description:
    "Shop quality products at competitive prices with KC Smart Buys. Discover electronics, smart watches, gift ideas, kids products, travel accessories and more in Trinidad & Tobago.",

  keywords: [
    "KC Smart Buys",
    "Trinidad shopping",
    "Trinidad online store",
    "Trinidad products",
    "Trinidad electronics",
    "smart watches Trinidad",
    "Bluetooth speakers Trinidad",
    "gift ideas Trinidad",
    "online shopping Trinidad",
    "affordable products Trinidad",
  ],

  authors: [{ name: "KC Smart Buys" }],

  openGraph: {
    title: "KC Smart Buys | Smart Choices, Real Value",
    description:
      "Quality products at competitive prices. Shop smart with KC Smart Buys in Trinidad & Tobago.",
    type: "website",
    locale: "en_TT",
    siteName: "KC Smart Buys",
  },

  twitter: {
    card: "summary_large_image",
    title: "KC Smart Buys | Smart Choices, Real Value",
    description:
      "Quality products, competitive prices and real value in Trinidad & Tobago.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 antialiased">
        <CartProvider>
          <Header />

          <main>{children}</main>

          <Footer />

          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  );
}