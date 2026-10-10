import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { formatPKR, generateSingleProductOrderMessage, createWhatsAppOrderLink } from "../utils/whatsapp";
import { X, ShoppingBag, MessageSquare, Plus, Minus, Ruler, Info, Check } from "lucide-react";

export const ProductQuickViewModal: React.FC = () => {
  const {
    quickViewProduct,
    setQuickViewProduct,
    addToCart,
    setIsSizeGuideOpen,
  } = useCart();

  const [activeImage, setActiveImage] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<number>(8);
  const [quantity, setQuantity] = useState<number>(1);
  const [addedJustNow, setAddedJustNow] = useState(false);

  useEffect(() => {
    if (quickViewProduct) {
      setActiveImage(quickViewProduct.image);
      setSelectedSize(quickViewProduct.sizes[0] || 8);
      setQuantity(1);
      setAddedJustNow(false);
    }
  }, [quickViewProduct]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setQuickViewProduct(null);
    };
    if (quickViewProduct) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [quickViewProduct, setQuickViewProduct]);

  if (!quickViewProduct) return null;

  const handleAddToCart = () => {
    addToCart(quickViewProduct, selectedSize, quantity);
    setAddedJustNow(true);
    setTimeout(() => setAddedJustNow(false), 2200);
  };

  const handleWhatsAppOrder = () => {
    const message = generateSingleProductOrderMessage(
      quickViewProduct,
      selectedSize,
      quantity
    );
    const { url } = createWhatsAppOrderLink(message);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-3xl bg-[#0E1526] border border-[#C5A059]/30 rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[92vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="quick-view-product-title"
      >
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-[#FAF7F2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
          aria-label="Close product preview"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Images Area */}
          <div className="space-y-3">
            <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#080B12] border border-[#C5A059]/20">
              <img
                src={activeImage || quickViewProduct.image}
                alt={quickViewProduct.name}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Gallery thumbnails */}
            {quickViewProduct.galleryImages.length > 1 && (
              <div className="flex gap-2">
                {quickViewProduct.galleryImages.map((thumb, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(thumb)}
                    className={`relative w-16 h-16 rounded-lg overflow-hidden border transition-all ${
                      activeImage === thumb
                        ? "border-[#D4AF37] ring-2 ring-[#D4AF37]/40 scale-105"
                        : "border-white/10 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={thumb}
                      alt={`View ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details & Controls Area */}
          <div className="space-y-5 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs text-[#C5A059] font-medium tracking-wide">
                <span>{quickViewProduct.color}</span>
                <span aria-hidden="true" className="text-neutral-600">·</span>
                <span>{quickViewProduct.category}</span>
              </div>

              <h2
                id="quick-view-product-title"
                className="font-heading text-2xl sm:text-3xl font-bold text-[#FAF7F2]"
              >
                {quickViewProduct.name}
              </h2>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                {quickViewProduct.details}
              </p>

              {/* Price */}
              <div className="pt-2 border-t border-[#C5A059]/15">
                <div className="flex items-baseline gap-3">
                  <span className="font-heading text-3xl font-bold text-[#F3E7C4]">
                    {formatPKR(quickViewProduct.demoPricePKR)}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-amber-300 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-600/30">
                    <Info className="w-3.5 h-3.5" />
                    <span>Demo Price</span>
                  </div>
                </div>
                <p className="text-[11px] text-neutral-500 mt-1">
                  Editable demo price in <code className="text-[#D4AF37]">src/data/products.ts</code>
                </p>
              </div>

              {/* Feature bullet list */}
              <ul className="space-y-1 text-xs text-neutral-300 pt-1">
                {quickViewProduct.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#C5A059] mt-0.5">•</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Interactive Selectors */}
            <div className="space-y-4 pt-3 border-t border-[#C5A059]/15">
              {/* Size Selector */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-neutral-200">
                    Select Size (UK/PK):
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsSizeGuideOpen(true)}
                    className="flex items-center gap-1 text-[#C5A059] hover:underline"
                  >
                    <Ruler className="w-3.5 h-3.5" />
                    <span>View Size Guide</span>
                  </button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {quickViewProduct.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`w-10 h-10 rounded-lg text-xs font-semibold flex items-center justify-center transition-all ${
                        selectedSize === sz
                          ? "bg-[#C5A059] text-[#080B12] font-bold shadow-md scale-105"
                          : "bg-[#141C2E] text-neutral-200 hover:bg-[#1A253C] border border-white/5"
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-300 font-semibold">
                  Quantity:
                </span>
                <div className="flex items-center border border-[#C5A059]/30 rounded-lg bg-[#080B12]">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="p-2 text-neutral-400 hover:text-white"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-10 text-center text-sm font-semibold text-[#FAF7F2]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="p-2 text-neutral-400 hover:text-white"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  onClick={handleAddToCart}
                  className="py-3 px-4 rounded-lg bg-[#141D30] hover:bg-[#1A2640] text-[#FAF7F2] hover:text-[#D4AF37] border border-[#C5A059]/40 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  {addedJustNow ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>Added to Cart!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4 text-[#C5A059]" />
                      <span>Add to Cart</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleWhatsAppOrder}
                  className="py-3 px-4 rounded-lg bg-[#C5A059] hover:bg-[#D4AF37] text-[#080B12] text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-md shadow-[#C5A059]/20"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Order on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
