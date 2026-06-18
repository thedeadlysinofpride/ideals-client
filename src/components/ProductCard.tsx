import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { formatGHS } from "@/lib/format";
import { useState, useMemo } from "react";

interface Product {
  id: string;
  productId: string;
  name: string;
  tagline: string;
  category: string;
  price: number;
  badge: string | null;
  inStock: boolean;
  colors: Array<{ name: string; hex: string; image: string }> | string;
  gallery: string[];
  highlights: string[];
  model: string;
}

export default function ProductCard({
  product,
  index = 0,
}: {
  product: Product;
  index?: number;
}) {
  const colorsArray = useMemo(() => {
    if (typeof product.colors === "string") {
      try {
        return JSON.parse(product.colors);
      } catch {
        return [];
      }
    }
    return product.colors || [];
  }, [product.colors]);

  const [currentImage, setCurrentImage] = useState(
    colorsArray[0]?.image || product.gallery[0],
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Link
        to={`/product/${product.productId}`}
        className="group block rounded-3xl bg-white border border-gray-100 overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-xl"
      >
        <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-white overflow-hidden">
          <img
            src={currentImage}
            alt={product.name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
          />
          {product.badge && (
            <span
              className={`absolute top-4 left-4 text-[10px] font-medium uppercase tracking-wider px-2.5 py-1 rounded-full z-10 ${
                product.badge === "Installment Available"
                  ? "bg-primary text-white"
                  : "bg-gray-900 text-white"
              }`}
            >
              {product.badge}
            </span>
          )}
          <span
            className={`absolute top-4 right-4 text-[10px] font-medium px-2.5 py-1 rounded-full z-10 ${
              product.inStock
                ? "bg-green-100 text-green-700"
                : "bg-gray-100 text-gray-500"
            }`}
          >
            {product.inStock ? "In stock" : "Out of stock"}
          </span>
        </div>
        <div className="p-5">
          {/* Color circles - Apple style */}
          <div className="flex items-center gap-1.5 mb-2">
            {colorsArray
              .slice(0, 5)
              .map((c: { name: string; hex: string; image: string }) => (
                <button
                  key={c.name}
                  className="relative"
                  onMouseEnter={() => setCurrentImage(c.image)}
                  onMouseLeave={() =>
                    setCurrentImage(colorsArray[0]?.image || product.gallery[0])
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentImage(c.image);
                  }}
                >
                  <span
                    className="h-3.5 w-3.5 rounded-full border border-gray-300 transition-transform hover:scale-110 block"
                    style={{ background: c.hex }}
                  />
                </button>
              ))}
            {colorsArray.length > 5 && (
              <span className="text-[10px] text-gray-400 ml-1">
                +{colorsArray.length - 5}
              </span>
            )}
          </div>
          <h3 className="text-base font-semibold tracking-tight">
            {product.name}
          </h3>
          <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">
            {product.tagline}
          </p>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-lg font-semibold text-primary">
              {formatGHS(product.price)}
            </span>
            <span className="text-xs text-gray-500 group-hover:text-primary transition-colors">
              View →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="rounded-3xl bg-white border border-gray-100 overflow-hidden animate-pulse">
      <div className="aspect-square bg-gray-100" />
      <div className="p-5 space-y-3">
        <div className="h-3 w-16 bg-gray-100 rounded" />
        <div className="h-4 w-32 bg-gray-100 rounded" />
        <div className="h-5 w-20 bg-gray-100 rounded" />
      </div>
    </div>
  );
}
