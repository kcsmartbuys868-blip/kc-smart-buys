export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  images: string[];
  featured: boolean;
  description: string;
  features: string[];
  stock?: number;
};

export const products: Product[] = [
  {
    id: "toiletry-bag",
    name: "Men's Toiletry Travel Bag",
    category: "Travel Bags",
    price: 130,
    originalPrice: 150,
    images: [
      "/products/toiletry-bag-1.jpeg",
      "/products/toiletry-bag-2.jpeg",
      "/products/toiletry-bag-3.jpeg",
      "/products/toiletry-bag-4.jpeg"],
    featured: true,
    stock: 5,
    description:
      "A practical and stylish toiletry travel bag designed to keep your grooming essentials organized at home or while travelling.",
    features: [
      "Keeps grooming essentials neatly organized",
      "Ideal for travel and everyday use",
      "Compact design makes packing easier",
      "Helps keep personal items in one convenient place",
      "Great practical gift for men",
    ],
  },

  {
    id: "smartwatch",
    name: "OKOP Smart Watch",
    category: "Smart Watches",
    price: 175,
    images: [
    "/products/smartwatch-1.jpeg",
    "/products/smartwatch-2.jpeg",
    "/products/smartwatch-3.jpeg",
    ],
    featured: true,
    stock: 5,
    description:
      "A stylish smart watch designed for everyday use, combining useful features with a modern look at an affordable price.",
    features: [
      "Modern and stylish design",
      "Convenient for everyday use",
      "Helps keep you connected on the go",
      "Great addition to your everyday accessories",
      "Affordable way to enjoy smart-watch functionality",
    ],
  },

  {
    id: "portable-juicer",
    name: "Portable Juicer/Blender",
    category: "Electronics",
    price: 120,
    originalPrice: 150,
    images: ["/products/juicer.jpeg"],
    featured: true,
    stock: 5,
    description:
      "A convenient portable juicer and blender for making smoothies and drinks wherever you go.",
    features: [
      "Portable and convenient design",
      "Great for smoothies and fresh drinks",
      "Easy to take with you on the go",
      "Ideal for home, work, travel, or the gym",
      "Practical choice for everyday use",
    ],
  },

  {
    id: "writing-pad",
    name: '10" LCD Writing Pad',
    category: "Kids Products",
    price: 50,
    images: ["/products/writing-pad.jpeg"],
    featured: true,
    stock: 5,
    description:
      "A reusable LCD writing pad that gives children a fun way to draw, practise writing, and create without constantly using paper.",
    features: [
      "Fun way for children to draw and write",
      "Reusable for repeated use",
      "Helps reduce paper waste",
      "Great for practising letters, numbers, and drawing",
      "Portable and easy for children to use",
    ],
  },

  {
    id: "tumbler",
    name: "Premium 40oz Tumbler Gift Set",
    category: "Gift Ideas",
    price: 150,
    images: ["/products/premium-40oz-tumbler-gift-set-1.jpeg",
            "/products/premium-40oz-tumbler-gift-set-2.jpeg",
            "/products/premium-40oz-tumbler-gift-set-3.jpeg",
    ],
    featured: true,
    stock: 1,
    description:
      "A premium 40oz tumbler gift set that's practical, stylish, and suitable for gifting or everyday use.",
    features: [
      "Large 40oz capacity",
      "Stylish choice for everyday use",
      "Great for keeping drinks within reach",
      "Suitable for home, work, or travel",
      "Makes a thoughtful and practical gift",
    ],
  },

  {
    id: "massager",
    name: "Shoulder & Neck Massager",
    category: "Electronics",
    price: 250,
    images: ["/products/massager.jpeg"],
    featured: false,
    stock: 5,
    description:
      "A convenient shoulder and neck massager designed to provide a relaxing experience after a long day.",
    features: [
      "Designed for relaxing shoulder and neck sessions",
      "Convenient for use at home",
      "Great for unwinding after a long day",
      "Easy addition to your personal relaxation routine",
      "Practical gift idea",
    ],
  },

  {
    id: "ms-3634bt-speaker",
    name: "MS-3634BT Bluetooth Speaker",
    category: "Electronics",
    price: 150,
    images: ["/products/ms-3634bt-speaker.jpeg"],
    featured: false,
    stock: 5,
    description:
      "A Bluetooth speaker for enjoying your favourite music, videos, and entertainment at home or on the go.",
    features: [
      "Wireless Bluetooth connectivity",
      "Enjoy music and entertainment without cables",
      "Convenient for home or outdoor use",
      "Great for parties and casual gatherings",
      "Compact entertainment solution",
    ],
  },

  {
    id: "emergency-led-light",
    name: "Rechargeable Emergency LED Light",
    category: "Electronics",
    price: 100,
    images: ["/products/emergency-led-light.jpeg"],
    featured: false,
    stock: 4,
    description:
      "A rechargeable LED light designed to provide convenient illumination when you need it most.",
    features: [
      "Rechargeable for convenient use",
      "Useful during power outages",
      "Provides convenient emergency lighting",
      "Practical for home use",
      "Useful addition to your emergency supplies",
    ],
  },

  {
    id: "lilo-stitch-cup",
    name: "Lilo & Stitch Cup",
    category: "Kids Products",
    price: 100,
    images: ["/products/lilo-stitch-cup.jpeg"],
    featured: false,
    stock: 5,
    description:
      "A fun Lilo & Stitch themed cup that's a great choice for fans and makes a practical gift.",
    features: [
      "Fun Lilo & Stitch design",
      "Great choice for fans",
      "Practical for everyday drinks",
      "Fun addition to a child's collection",
      "Makes a great gift idea",
    ],
  },

  {
    id: "four-head-handheld-massager",
    name: "4 Head Handheld Massager",
    category: "Electronics",
    price: 225,
    images: ["/products/4-head-handheld-massager.jpeg",
            "/products/4-head-handheld-massager-2.jpeg",
            "/products/4-head-handheld-massager-3.jpeg",
            "/products/4-head-handheld-massager-4.jpeg",
            "/products/4-head-handheld-massager-5.jpeg",
    ],
    featured: false,
    stock: 1,
    description:
      "A handheld massager designed for convenient relaxation and everyday use at home.",
    features: [
      "Four-head design",
      "Convenient handheld design",
      "Easy to use at home",
      "Great for relaxing after a long day",
      "Compact and practical",
    ],
  },

  {
    id: "40oz-tumbler-straw",
    name: "40oz Tumbler with Straw",
    category: "Gift Ideas",
    price: 100,
    images: ["/products/40oz-tumbler-straw.jpeg"],
    featured: false,
    stock: 3,
    description:
      "A practical 40oz tumbler with straw, perfect for keeping your favourite drinks close throughout the day.",
    features: [
      "Large 40oz capacity",
      "Includes straw",
      "Convenient for everyday use",
      "Suitable for home, work, or travel",
      "Great practical gift idea",
    ],
  },

  {
    id: "six-tier-shoe-rack",
    name: "6 Tier Shoe Rack",
    category: "Home & Storage",
    price: 100,
    images: ["/products/6-tier-shoe-rack.jpeg"],
    featured: false,
    stock: 2,
    description:
      "A practical six-tier shoe rack designed to help keep footwear organized and your space neat.",
    features: [
      "Six storage tiers",
      "Helps keep shoes organized",
      "Space-saving storage solution",
      "Suitable for bedrooms and entryways",
      "Practical home organization solution",
    ],
  },

  {
    id: "bluetooth-speaker-wireless-charger",
    name: "Bluetooth Speaker with Wireless Phone Charger",
    category: "Electronics",
    price: 200,
    images: ["/products/bluetooth-speaker-wireless-charger.jpeg"],
    featured: false,
    stock: 2,
    description:
      "A convenient Bluetooth speaker combined with wireless phone charging for entertainment and everyday convenience.",
    features: [
      "Wireless Bluetooth connectivity",
      "Built-in wireless phone charging",
      "Convenient entertainment solution",
      "Suitable for home or office use",
      "Combines two useful functions in one device",
    ],
  },

  {
    id: "rd-noise-bluetooth-headset",
    name: "RD Noise Bluetooth Headset",
    category: "Electronics",
    price: 100,
    images: ["/products/rd-noise-bluetooth-headset.jpeg"],
    featured: false,
    stock: 3,
    description:
      "A Bluetooth headset designed for convenient wireless listening and everyday entertainment.",
    features: [
      "Wireless Bluetooth connectivity",
      "Convenient for everyday listening",
      "No tangled audio cables",
      "Suitable for music and entertainment",
      "Portable and easy to use",
    ],
  },

  {
    id: "jbl-m10-bluetooth-headset",
    name: "JBL by Harman M10 Bluetooth Headset",
    category: "Electronics",
    price: 150,
    images: ["/products/jbl-m10-bluetooth-headset.jpeg"],
    featured: false,
    stock: 1,
    description:
      "A JBL by Harman M10 Bluetooth headset offering convenient wireless listening for everyday use.",
    features: [
      "Wireless Bluetooth connectivity",
      "Convenient for everyday listening",
      "Portable headset design",
      "Suitable for music and entertainment",
      "Great everyday audio accessory",
    ],
  },

  {
    id: "rechargeable-led-headlight",
    name: "Rechargeable LED Headlight",
    category: "Electronics",
    price: 50,
    images: ["/products/rechargeable-led-headlight.jpeg"],
    featured: false,
    stock: 6,
    description:
      "A rechargeable LED headlight that provides hands-free illumination for convenient everyday use.",
    features: [
      "Rechargeable design",
      "Hands-free lighting",
      "Useful for outdoor activities",
      "Convenient during power outages",
      "Compact and easy to carry",
    ],
  },

  {
    id: "pilot-power-bank",
    name: "Pilot Power Bank",
    category: "Electronics",
    price: 50,
    images: ["/products/pilot-power-bank-1.jpeg",
            "/products/pilot-power-bank-2.jpeg",
            "/products/pilot-power-bank-3.jpeg",
    ],
    featured: false,
    stock: 2,
    description:
      "A portable power bank designed to provide convenient backup power for compatible devices while you're on the go.",
    features: [
      "Portable backup power",
      "Convenient for travel and everyday use",
      "Easy to carry",
      "Useful when you're away from a power outlet",
      "Practical everyday accessory",
    ],
  },

  {
    id: "juicer-power-bank-combo",
    name: "Portable Juicer & Pilot Power Bank Combo",
    category: "Combo Deals",
    price: 150,
    images: ["/products/combo-deal.jpeg"],
    featured: true,
    description:
      "Get two practical everyday essentials together with this value-packed Portable Juicer and Pilot Power Bank combo.",
    features: [
      "Portable Juicer/Blender included",
      "Pilot Power Bank included",
      "Great value combo deal",
      "Perfect for everyday convenience",
      "Ideal gift or personal-use combination",
    ],
  },

  {
    id: "toiletry-smartwatch-combo",
    name: "Men's Toiletry Travel Bag & Smart Watch Combo",
    category: "Combo Deals",
    price: 250,
    images: ["/products/combo-deal.jpeg"],
    featured: true,
    description:
      "Save with this practical combo featuring a Men's Toiletry Travel Bag and an OKOP Smart Watch.",
    features: [
      "Men's Toiletry Travel Bag included",
      "OKOP Smart Watch included",
      "Great value compared with buying separately",
      "Perfect practical gift combination",
      "Ideal for travel and everyday use",
    ],
  },

  {
    id: "writing-pad-lilo-stitch-combo",
    name: '10" LCD Writing Pad & Lilo & Stitch Cup Combo',
    category: "Combo Deals",
    price: 130,
    images: ["/products/combo-deal.jpeg"],
    featured: true,
    description:
      "A fun and practical combo featuring a 10-inch LCD Writing Pad and a Lilo & Stitch Cup.",
    features: [
      '10" LCD Writing Pad included',
      "Lilo & Stitch Cup included",
      "Fun combination for children",
      "Great value combo deal",
      "Excellent gift idea",
    ],
  },
];