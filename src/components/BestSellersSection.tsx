import React from "react";
import { PRODUCTS } from "../data/products";
import { ProductCard } from "./ProductCard";
import { Flame } from "lucide-react";

export const BestSellersSection: React.FC = () => {
  const bestSellers = PRODUCTS.filter((p) => p.isBestSeller).slice(0, 3);

  return (
    <section className="py-16 sm:py-20 bg-[#0A0F1D] border-y border-[#C5A059]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37] tracking-wider uppercase">
              <Flame className="w-4 h-4 text-[#D4AF37]" />
              <span>Customer Favorites</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#FAF7F2]">
              Best-Selling Chaplis
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-md">
            Our most requested traditional cuts featuring heavy double tyre soles, 
            Zalmi pointed profiles, and midnight navy editions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
