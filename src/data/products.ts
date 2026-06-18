export type ColorVariant = {
  name: string;
  hex: string;
  image: string;
};

export type Product = {
  id: string;
  name: string;
  tagline: string;
  category: "iPhone" | "MacBook" | "AirPods" | "Watch" | "Accessory" | "iPad";
  price: number;
  badge?: "Installment Available" | "Cash Only";
  inStock: boolean;
  colors: ColorVariant[];
  gallery: string[];
  highlights: string[];
  model: string;
};

export const products: Product[] = [
  // iPhone 17 Pro
  {
    id: "iphone-17-pro",
    name: "iPhone 17 Pro",
    tagline: "So powerful. So intelligent. So Pro.",
    category: "iPhone",
    price: 16500,
    badge: "Installment Available",
    inStock: true,
    model: "17",
    colors: [
      {
        name: "Cosmic Orange",
        hex: "#ff6b35",
        image: "/src/assets/17/17-Pro-cosmic-orange.jpg",
      },
      {
        name: "Deep Blue",
        hex: "#003366",
        image: "/src/assets/17/17-Pro-deep-blue.jpg",
      },
      {
        name: "Silver",
        hex: "#f5f5f7",
        image: "/src/assets/17/17-Pro-silver.jpg",
      },
      {
        name: "Black",
        hex: "#1d1d1f",
        image: "/src/assets/17/17-black.jpg",
      },
    ],
    gallery: [
      "/src/assets/17/17-Pro-silver.jpg",
      "/src/assets/17/17-Pro-deep-blue.jpg",
    ],
    highlights: [
      "A19 Pro chip",
      "48MP Main camera",
      "Apple Intelligence",
      "Up to 33 hrs battery",
    ],
  },
  // iPhone 16 Pro
  {
    id: "iphone-16-pro",
    name: "iPhone 16 Pro",
    tagline: "Hello, Apple Intelligence.",
    category: "iPhone",
    price: 15500,
    badge: "Installment Available",
    inStock: true,
    model: "16",
    colors: [
      {
        name: "Natural Titanium",
        hex: "#e8e8e8",
        image: "/src/assets/16/16-Pro-natural-titanium.jpg",
      },
      {
        name: "Black Titanium",
        hex: "#1d1d1f",
        image: "/src/assets/16/16-Pro-black-titanium.jpg",
      },
      {
        name: "White Titanium",
        hex: "#f5f5f7",
        image: "/src/assets/16/16-Pro-white-titanium.png",
      },
      {
        name: "Desert Titanium",
        hex: "#d4a574",
        image: "/src/assets/16/16-Pro-desert-titanium.jpg",
      },
    ],
    gallery: [
      "/src/assets/16/16-Pro-white-titanium.png",
      "/src/assets/16/16-Pro-natural-titanium.jpg",
    ],
    highlights: [
      "A18 Pro chip",
      "Camera Control",
      "48MP Fusion camera",
      "Up to 29 hrs battery",
    ],
  },
  // iPhone 15 Pro
  {
    id: "iphone-15-pro",
    name: "iPhone 15 Pro",
    tagline: "Titanium. So strong. So light. So Pro.",
    category: "iPhone",
    price: 14500,
    badge: "Installment Available",
    inStock: true,
    model: "15",
    colors: [
      {
        name: "Blue Titanium",
        hex: "#2322e0",
        image: "/src/assets/15/15-Pro-blue-titanium.jpg",
      },
      {
        name: "Black Titanium",
        hex: "#1d1d1f",
        image: "/src/assets/15/15-Pro-black-titanium.jpg",
      },
      {
        name: "White Titanium",
        hex: "#f5f5f7",
        image: "/src/assets/15/15-Pro-white-titanium.jpg",
      },
      {
        name: "Natural Titanium",
        hex: "#e8e8e8",
        image: "/src/assets/15/15-Pro-natural-titanium.jpg",
      },
    ],
    gallery: [
      "/src/assets/15/15-Pro-white-titanium.jpg",
      "/src/assets/15/15-Pro-blue-titanium.jpg",
    ],
    highlights: [
      "A17 Pro chip",
      "48MP Main camera",
      "Action Button",
      "Up to 29 hrs video playback",
    ],
  },
  // iPhone 15
  {
    id: "iphone-15",
    name: "iPhone 15",
    tagline: "Newphoria. The everyday iPhone, redesigned.",
    category: "iPhone",
    price: 10800,
    badge: "Installment Available",
    inStock: true,
    model: "15",
    colors: [
      { name: "Black", hex: "#1d1d1f", image: "/src/assets/15/15-black.jpg" },
      { name: "Blue", hex: "#4a90e2", image: "/src/assets/15/15-blue.jpg" },
      { name: "Green", hex: "#34c759", image: "/src/assets/15/15-green.webp" },
      { name: "Yellow", hex: "#ffcc00", image: "/src/assets/15/15-yellow.jpg" },
      { name: "Pink", hex: "#ff9cc9", image: "/src/assets/15/15-pink.jpg" },
    ],
    gallery: ["/src/assets/15/15-blue.jpg", "/src/assets/15/15-pink.jpg"],
    highlights: ["A16 Bionic", "48MP Main camera", "Dynamic Island", "USB-C"],
  },
  // iPhone 14 Pro
  {
    id: "iphone-14-pro",
    name: "iPhone 14 Pro",
    tagline: "Pro. Beyond.",
    category: "iPhone",
    price: 9200,
    badge: "Installment Available",
    inStock: true,
    model: "14",
    colors: [
      { name: "Gold", hex: "#f5bf9d", image: "/src/assets/14/14-Pro-gold.jpg" },
      {
        name: "Space Black",
        hex: "#1d1d1f",
        image: "/src/assets/14/14-Pro-space-black.png",
      },
      {
        name: "Silver",
        hex: "#f5f5f7",
        image: "/src/assets/14/14-Pro-silver.jpg",
      },
      {
        name: "Deep Purple",
        hex: "#5a4b8c",
        image: "/src/assets/14/14-Pro-deep-purple.jpg",
      },
    ],
    gallery: [
      "/src/assets/14/14-Pro-silver.jpg",
      "/src/assets/14/14-Pro-deep-purple.jpg",
    ],
    highlights: [
      "A16 Bionic",
      "Always-On display",
      "Dynamic Island",
      "48MP Pro camera",
    ],
  },
  // iPhone 14
  {
    id: "iphone-14",
    name: "iPhone 14",
    tagline: "Wonderfull.",
    category: "iPhone",
    price: 7800,
    badge: "Installment Available",
    inStock: true,
    model: "14",
    colors: [
      {
        name: "Midnight",
        hex: "#1d1d1f",
        image: "/src/assets/14/14-midnight.jpg",
      },
      {
        name: "Starlight",
        hex: "#f5f5f0",
        image: "/src/assets/14/14-starlight.jpg",
      },
      { name: "Blue", hex: "#4a90e2", image: "/src/assets/14/14-blue.jpg" },
      { name: "Purple", hex: "#af8fcf", image: "/src/assets/14/14-purple.jpg" },
      { name: "Red", hex: "#ff3b30", image: "/src/assets/14/14-red.jpg" },
    ],
    gallery: ["/src/assets/14/14-blue.jpg", "/src/assets/14/14-purple.jpg"],
    highlights: [
      "A15 Bionic",
      "Emergency SOS",
      "Crash Detection",
      "Improved battery",
    ],
  },
  // iPhone 13 Pro
  {
    id: "iphone-13-pro",
    name: "iPhone 13 Pro",
    tagline: "Oh. So. Pro.",
    category: "iPhone",
    price: 6500,
    badge: "Installment Available",
    inStock: true,
    model: "13",
    colors: [
      {
        name: "Graphite",
        hex: "#4a4a4a",
        image: "/src/assets/13/13-Pro-graphite.jpg",
      },
      {
        name: "Silver",
        hex: "#f5f5f7",
        image: "/src/assets/13/13-Pro-silver.jpg",
      },
      { name: "Gold", hex: "#f5bf9d", image: "/src/assets/13/13-Pro-gold.jpg" },
      {
        name: "Sierra Blue",
        hex: "#5e7b9c",
        image: "/src/assets/13/13-Pro-sierra-blue.jpg",
      },
      {
        name: "Alpine Green",
        hex: "#4a7c59",
        image: "/src/assets/13/13-Pro-alpine-green.png",
      },
    ],
    gallery: [
      "/src/assets/13/13-Pro-silver.jpg",
      "/src/assets/13/13-Pro-sierra-blue.jpg",
    ],
    highlights: [
      "A15 Bionic",
      "ProMotion display",
      "Cinematic mode",
      "Macro photography",
    ],
  },
  // iPhone 13
  {
    id: "iphone-13",
    name: "iPhone 13",
    tagline: "Your new superpower.",
    category: "iPhone",
    price: 5500,
    badge: "Installment Available",
    inStock: true,
    model: "13",
    colors: [
      {
        name: "Midnight",
        hex: "#1d1d1f",
        image: "/src/assets/13/13-midinight.webp",
      },
      {
        name: "Starlight",
        hex: "#f5f5f0",
        image: "/src/assets/13/13-starlight.webp",
      },
      { name: "Blue", hex: "#4a90e2", image: "/src/assets/13/13-blue.jpg" },
      { name: "Pink", hex: "#ff9cc9", image: "/src/assets/13/13-pink.webp" },
      { name: "Red", hex: "#ff3b30", image: "/src/assets/13/13-red.jpg" },
      { name: "Green", hex: "#34c759", image: "/src/assets/13/13-green.jpg" },
    ],
    gallery: ["/src/assets/13/13-blue.jpg", "/src/assets/13/13-pink.webp"],
    highlights: [
      "A15 Bionic",
      "Super Retina XDR",
      "Cinematic mode",
      "Longer battery life",
    ],
  },
  // iPhone 12 Pro
  {
    id: "iphone-12-pro",
    name: "iPhone 12 Pro",
    tagline: "It's a leap year.",
    category: "iPhone",
    price: 4800,
    badge: "Installment Available",
    inStock: true,
    model: "12",
    colors: [
      {
        name: "Graphite",
        hex: "#4a4a4a",
        image: "/src/assets/12/12-Pro-graphite.png",
      },
      {
        name: "Silver",
        hex: "#f5f5f7",
        image: "/src/assets/12/12-Pro-silver.jpg",
      },
      { name: "Gold", hex: "#f5bf9d", image: "/src/assets/12/12-Pro-gold.jpg" },
      {
        name: "Pacific Blue",
        hex: "#5b9eb8",
        image: "/src/assets/12/12-Pro-pacific-blue.png",
      },
    ],
    gallery: [
      "/src/assets/12/12-Pro-silver.jpg",
      "/src/assets/12/12-Pro-pacific-blue.png",
    ],
    highlights: ["A14 Bionic", "Ceramic Shield", "5G capable", "LiDAR Scanner"],
  },
  // iPhone 12
  {
    id: "iphone-12",
    name: "iPhone 12",
    tagline: "Blast past fast.",
    category: "iPhone",
    price: 4200,
    badge: "Installment Available",
    inStock: true,
    model: "12",
    colors: [
      { name: "Black", hex: "#1d1d1f", image: "/src/assets/12/12-black.png" },
      { name: "White", hex: "#f5f5f7", image: "/src/assets/12/12-white.jpg" },
      { name: "Blue", hex: "#4a90e2", image: "/src/assets/12/12-blue.jpg" },
      { name: "Green", hex: "#34c759", image: "/src/assets/12/12-green.jpg" },
      { name: "Red", hex: "#ff3b30", image: "/src/assets/12/12-red.jpg" },
      { name: "Purple", hex: "#af8fcf", image: "/src/assets/12/12-purple.png" },
    ],
    gallery: ["/src/assets/12/12-blue.jpg", "/src/assets/12/12-purple.png"],
    highlights: [
      "A14 Bionic",
      "Ceramic Shield",
      "5G capable",
      "Dual-camera system",
    ],
  },
  // iPhone 11 Pro
  {
    id: "iphone-11-pro",
    name: "iPhone 11 Pro",
    tagline: "Pro cameras. Pro display. Pro performance.",
    category: "iPhone",
    price: 3800,
    badge: "Installment Available",
    inStock: true,
    model: "11",
    colors: [
      {
        name: "Space Gray",
        hex: "#4a4a4a",
        image: "/src/assets/11/11-Pro-space-gray.jpg",
      },
      {
        name: "Silver",
        hex: "#f5f5f7",
        image: "/src/assets/11/11-Pro-silver.jpg",
      },
      { name: "Gold", hex: "#f5bf9d", image: "/src/assets/11/11-Pro-gold.png" },
      {
        name: "Midnight Green",
        hex: "#4a5d4e",
        image: "/src/assets/11/11-Pro-midnight-green.jpg",
      },
    ],
    gallery: [
      "/src/assets/11/11-Pro-silver.jpg",
      "/src/assets/11/11-Pro-midnight-green.jpg",
    ],
    highlights: [
      "A13 Bionic",
      "Triple-camera system",
      "Super Retina XDR",
      "Up to 18 hrs battery",
    ],
  },
  // iPhone 11
  {
    id: "iphone-11",
    name: "iPhone 11",
    tagline: "Just the right amount of everything.",
    category: "iPhone",
    price: 3200,
    badge: "Installment Available",
    inStock: true,
    model: "11",
    colors: [
      { name: "Black", hex: "#1d1d1f", image: "/src/assets/11/11-black.png" },
      { name: "White", hex: "#f5f5f7", image: "/src/assets/11/11-white.webp" },
      { name: "Green", hex: "#34c759", image: "/src/assets/11/11-green.jpg" },
      { name: "Yellow", hex: "#ffcc00", image: "/src/assets/11/11-yellow.jpg" },
      { name: "Red", hex: "#ff3b30", image: "/src/assets/11/11-red.jpg" },
      { name: "Purple", hex: "#af8fcf", image: "/src/assets/11/11-purple.jpg" },
    ],
    gallery: ["/src/assets/11/11-green.jpg", "/src/assets/11/11-purple.jpg"],
    highlights: [
      "A13 Bionic",
      "Dual-camera system",
      "All-day battery",
      "Dolby Atmos",
    ],
  },
  // iPhone XR
  {
    id: "iphone-xr",
    name: "iPhone XR",
    tagline: "Brilliant. In every way.",
    category: "iPhone",
    price: 2800,
    badge: "Installment Available",
    inStock: true,
    model: "XR",
    colors: [
      { name: "Black", hex: "#1d1d1f", image: "/src/assets/XR/xr-black.jpg" },
      { name: "White", hex: "#f5f5f7", image: "/src/assets/XR/xr-white.jpg" },
      { name: "Blue", hex: "#4a90e2", image: "/src/assets/XR/xr-blue.jpg" },
      { name: "Yellow", hex: "#ffcc00", image: "/src/assets/XR/xr-yellow.jpg" },
      { name: "Coral", hex: "#ff6b61", image: "/src/assets/XR/xr-coral.jpg" },
      { name: "Red", hex: "#ff3b30", image: "/src/assets/XR/xr-red.jpg" },
    ],
    gallery: ["/src/assets/XR/xr-blue.jpg", "/src/assets/XR/xr-coral.jpg"],
    highlights: [
      "A12 Bionic",
      "Liquid Retina HD display",
      "12MP camera",
      "Face ID",
    ],
  },
  // Apple Watch Series 9
  {
    id: "apple-watch-s9",
    name: "Apple Watch Series 9",
    tagline: "Smarter. Brighter. Mightier.",
    category: "Watch",
    price: 3800,
    badge: "Installment Available",
    inStock: true,
    model: "watch",
    colors: [
      {
        name: "Silver",
        hex: "#c9c9ce",
        image: "/src/assets/Series/series-9.jpg",
      },
    ],
    gallery: ["/src/assets/Series/series-9.jpg"],
    highlights: [
      "S9 SiP",
      "Double tap gesture",
      "Brighter display",
      "Faster on-device Siri",
    ],
  },
  // MagSafe Charger
  {
    id: "magsafe-charger",
    name: "MagSafe Charger",
    tagline: "Snap, attach, charge. Effortless.",
    category: "Accessory",
    price: 450,
    badge: "Cash Only",
    inStock: true,
    model: "charger",
    colors: [
      {
        name: "White",
        hex: "#ffffff",
        image: "/src/assets/accesories/charger.jpg",
      },
    ],
    gallery: ["/src/assets/accesories/charger.jpg"],
    highlights: [
      "Fast wireless charging",
      "Magnetic alignment",
      "Compatible with iPhone 12 and later",
      "Works with AirPods",
    ],
  },
  // iPad Air (A16)
  {
    id: "ipad-air-a16",
    name: "iPad Air (A16)",
    tagline: "Supercharged by the A16 chip.",
    category: "iPad",
    price: 5200,
    badge: "Installment Available",
    inStock: true,
    model: "ipad",
    colors: [
      {
        name: "Blue",
        hex: "#4a90e2",
        image: "/src/assets/iPad/A16-blue.jpg",
      },
    ],
    gallery: ["/src/assets/iPad/A16-blue.jpg"],
    highlights: [
      "A16 chip",
      "10.9-inch Liquid Retina display",
      "Apple Pencil hover",
      "Up to 10 hrs battery",
    ],
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);
