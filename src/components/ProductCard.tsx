import React, { useState } from "react";
import { Product } from "../data/products";
import { useCart } from "../context/CartContext";
import { formatPKR, generateSingleProductOrderMessage, createWhatsAppOrderLink } from "../utils/whatsapp";
import { ShoppingBag, MessageSquare, Eye, Plus, Minus, Info } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, setQuickViewProduct, setIsSizeGuideOpen } = useCart();
  const [selectedSize, setSelectedSize] = useState<number>(product.sizes[0] || 8);
  const [quantity, setQuantity] = useState<number>(1);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleWhatsAppDirectOrder = () => {
    const message = generateSingleProductOrderMessage(product, selectedSize, quantity);
    const { url } = createWhatsAppOrderLink(message);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleAddToCart = () => {
    addToCart(product, selectedSize, quantity);
  };

  return (
    <div className="group relative bg-[#0E1526] rounded-xl border border-[#C5A059]/20 hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#C5A059]/10">
      {/* Product Image Area with quick view overlay */}
      <div className="relative aspect-square w-full overflow-hidden bg-[#0A0E1A]">
        {/* Placeholder skeleton loader */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-[#12192B] animate-pulse flex items-center justify-center text-xs text-neutral-500">
            Loading imagery...
          </div>
        )}

        <img
          src={product.image}
          alt={product.name}
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          loading="lazy"
        />

        {/* Quick View Button overlay */}
        <button
          onClick={() => setQuickViewProduct(product)}
          className="absolute top-3 right-3 p-2 rounded-lg bg-[#080B12]/80 hover:bg-[#C5A059] text-neutral-200 hover:text-[#080B12] backdrop-blur-md border border-[#C5A059]/20 transition-all opacity-90 sm:opacity-0 sm:group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
          title="Quick View Details"
          aria-label={`Quick view details for ${product.name}`}
        >
          <Eye className="w-4 h-4" />
        </button>

        {/* Best Seller or Collection Text (Anti-slop: clean text badge with quiet background) */}
        {product.isBestSeller && (
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#080B12]/85 backdrop-blur-md border border-[#D4AF37]/40 text-[#D4AF37] text-[11px] font-semibold tracking-wider uppercase">
            Best Seller
          </div>
        )}
      </div>

      {/* Card Content Area */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
        {/* Header & Metadata */}
        <div>
          {/* Metadata line without pill bubbles */}
          <div className="flex items-center gap-2 text-xs text-[#C5A059] font-medium tracking-wide">
            <span>{product.color}</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-neutral-400">{product.soleType.split(" ")[0]} Sole</span>
          </div>

          {/* Title */}
          <h3 
            onClick={() => setQuickViewProduct(product)}
            className="font-heading text-lg sm:text-xl font-bold text-[#FAF7F2] hover:text-[#D4AF37] cursor-pointer transition-colors mt-1 line-clamp-1"
          >
            {product.name}
          </h3>

          <p className="text-xs text-neutral-400 line-clamp-2 mt-1 leading-relaxed">
            {product.details}
          </p>
        </div>

        {/* Price & Demo Notice */}
        <div className="pt-1 border-t border-[#C5A059]/10">
          <div className="flex items-baseline justify-between">
            <span className="font-heading text-xl sm:text-2xl font-bold text-[#F3E7C4]">
              {formatPKR(product.demoPricePKR)}
            </span>
            <div className="flex items-center gap-1 text-[10px] text-amber-300/80 bg-amber-950/40 px-1.5 py-0.5 rounded border border-amber-600/30">
              <Info className="w-3 h-3" />
              <span>Demo Price</span>
            </div>
          </div>
          <p className="text-[10px] text-neutral-500 mt-0.5">
            Placeholder price · Replace before launch in products.ts
          </p>
        </div>

        {/* Size Selection */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <label className="text-neutral-300 font-medium">Select Size (UK):</label>
            <button
              type="button"
              onClick={() => setIsSizeGuideOpen(true)}
              className="text-[#C5A059] hover:underline text-[11px]"
            >
              Size Guide
            </button>
          </div>

          <div className="flex flex-wrap gap-1.5" role="radiogroup" aria-label="Available shoe sizes">
            {product.sizes.map((sz) => {
              const isSelected = selectedSize === sz;
              return (
                <button
                  key={sz}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  onClick={() => setSelectedSize(sz)}
                  className={`w-8 h-8 rounded text-xs font-semibold flex items-center justify-center transition-all ${
                    isSelected
                      ? "bg-[#C5A059] text-[#080B12] shadow-sm font-bold scale-105"
                      : "bg-[#141C2E] text-neutral-300 hover:text-white hover:bg-[#1A253C] border border-white/5"
                  } focus:outline-none focus:ring-1 focus:ring-[#C5A059]`}
                >
                  {sz}
                </button>
              );
            })}
          </div>
        </div>

        {/* Quantity and Actions */}
        <div className="space-y-2 pt-2 border-t border-[#C5A059]/10">
          {/* Quantity Selector */}
          <div className="flex items-center justify-between">
            <span className="text-xs text-neutral-400">Quantity:</span>
            <div className="flex items-center border border-[#C5A059]/30 rounded bg-[#101726]">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="p-1 text-neutral-400 hover:text-[#FAF7F2] transition-colors focus:outline-none"
                aria-label="Decrease quantity"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="w-8 text-center text-xs font-medium text-[#FAF7F2]">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="p-1 text-neutral-400 hover:text-[#FAF7F2] transition-colors focus:outline-none"
                aria-label="Increase quantity"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Buttons: Add to Cart and Order on WhatsApp */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              onClick={handleAddToCart}
              className="py-2.5 px-3 rounded-lg bg-[#141D30] hover:bg-[#1A2640] active:bg-[#0E1524] text-[#FAF7F2] hover:text-[#D4AF37] border border-[#C5A059]/30 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Add to Cart</span>
            </button>

            <button
              onClick={handleWhatsAppDirectOrder}
              className="py-2.5 px-3 rounded-lg bg-[#C5A059] hover:bg-[#D4AF37] active:bg-[#AA8232] text-[#080B12] text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
              title="Order this product directly on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
