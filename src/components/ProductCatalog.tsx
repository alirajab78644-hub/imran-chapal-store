import React, { useState, useMemo } from "react";
import { PRODUCTS, CATEGORIES, CategoryType } from "../data/products";
import { ProductCard } from "./ProductCard";
import { Search, X, SlidersHorizontal } from "lucide-react";

export const ProductCatalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSizeFilter, setSelectedSizeFilter] = useState<number | null>(null);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      const matchesCategory =
        selectedCategory === "All" ||
        product.collections.includes(selectedCategory);

      // Search query
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.color.toLowerCase().includes(query) ||
        product.subtitle.toLowerCase().includes(query) ||
        product.details.toLowerCase().includes(query);

      // Size filter
      const matchesSize =
        selectedSizeFilter === null ||
        product.sizes.includes(selectedSizeFilter);

      return matchesCategory && matchesSearch && matchesSize;
    });
  }, [selectedCategory, searchQuery, selectedSizeFilter]);

  const allAvailableSizes = [7, 8, 9, 10, 11, 12];

  return (
    <section id="catalog" className="py-16 sm:py-24 bg-[#080B12] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <p className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
            Dastkaari Aur Riwayat
          </p>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-[#FAF7F2]">
            Our Footwear Collection
          </h2>
          <p className="text-sm sm:text-base text-neutral-400">
            Authentic Peshawari Chapli Jootis crafted with heavy tyre soles, pure dedication, and timeless cuts. 
            Choose your size and order directly on WhatsApp.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="space-y-4 bg-[#0E1526]/80 p-4 sm:p-6 rounded-2xl border border-[#C5A059]/20 backdrop-blur-md">
          {/* Category Tabs (Segmented Control per Frontend Design guidelines) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] ${
                    isActive
                      ? "bg-[#C5A059] text-[#080B12] shadow-md shadow-[#C5A059]/20"
                      : "bg-[#141C2E] text-neutral-300 hover:text-white hover:bg-[#1C263D] border border-white/5"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Search Input & Size Quick Filter */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2 border-t border-[#C5A059]/10">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, color, cut (e.g. Zalmi, Navy)..."
                className="w-full pl-10 pr-9 py-2 bg-[#080B12] border border-[#C5A059]/25 rounded-lg text-xs sm:text-sm text-[#FAF7F2] placeholder-neutral-500 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-200"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Size Quick Filter */}
            <div className="flex items-center gap-2 overflow-x-auto">
              <div className="flex items-center gap-1 text-xs text-neutral-400 shrink-0">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Size:</span>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setSelectedSizeFilter(null)}
                  className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                    selectedSizeFilter === null
                      ? "bg-[#C5A059] text-[#080B12] font-semibold"
                      : "bg-[#121929] text-neutral-400 hover:text-white"
                  }`}
                >
                  All
                </button>
                {allAvailableSizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={() =>
                      setSelectedSizeFilter(selectedSizeFilter === sz ? null : sz)
                    }
                    className={`w-7 h-7 rounded text-xs font-medium transition-colors flex items-center justify-center ${
                      selectedSizeFilter === sz
                        ? "bg-[#C5A059] text-[#080B12] font-semibold shadow-sm"
                        : "bg-[#121929] text-neutral-400 hover:text-white hover:bg-[#1A2338]"
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#0E1526]/50 rounded-2xl border border-white/5 space-y-3">
            <p className="text-base text-neutral-300">No footwear found matching your filter criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
                setSelectedSizeFilter(null);
              }}
              className="px-4 py-2 rounded-lg bg-[#C5A059] text-[#080B12] text-xs font-bold hover:bg-[#D4AF37] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
