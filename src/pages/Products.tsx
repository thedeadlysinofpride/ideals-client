import { useState } from "react";
import { products, type Product } from "@/data/products";
import ProductCard, { ProductCardSkeleton } from "@/components/ProductCard";

const categories: Array<Product["category"] | "All"> = [
  "All",
  "iPhone",
  "Accessory",
  "Watch",
];

export default function Products() {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const [loading, setLoading] = useState(false);

  const items =
    cat === "All" ? products : products.filter((p) => p.category === cat);

  // Simulate loading for demo
  const handleCategoryChange = (category: (typeof categories)[number]) => {
    setLoading(true);
    setCat(category);
    setTimeout(() => setLoading(false), 300);
  };

  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-24">
      <h1 className="text-4xl sm:text-6xl font-semibold">Shop.</h1>
      <p className="mt-3 text-gray-500 max-w-xl">
        Premium devices. Flexible payment. Backed by the iDeals warranty.
      </p>

      <div className="mt-10 flex gap-2 overflow-x-auto no-scrollbar -mx-5 px-5 sm:mx-0 sm:px-0">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => handleCategoryChange(c)}
            className={`shrink-0 h-9 px-4 rounded-full text-sm font-medium border transition-all ${
              cat === c
                ? "bg-gray-900 text-white border-gray-900"
                : "border-gray-200 bg-white text-gray-600 hover:text-gray-900"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {loading
          ? Array.from({ length: 8 }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))
          : items.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
      </div>
    </section>
  );
}
