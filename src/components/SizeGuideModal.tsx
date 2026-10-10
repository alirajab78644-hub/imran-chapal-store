import React, { useEffect } from "react";
import { useCart } from "../context/CartContext";
import { SIZE_CHART } from "../data/products";
import { X, Ruler, Footprints } from "lucide-react";

export const SizeGuideModal: React.FC = () => {
  const { isSizeGuideOpen, setIsSizeGuideOpen } = useCart();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsSizeGuideOpen(false);
    };
    if (isSizeGuideOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isSizeGuideOpen, setIsSizeGuideOpen]);

  if (!isSizeGuideOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-[#0E1526] border border-[#C5A059]/30 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-labelledby="size-guide-title"
      >
        <button
          onClick={() => setIsSizeGuideOpen(false)}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-[#FAF7F2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
          aria-label="Close size guide"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
            <Ruler className="w-4 h-4" />
            <span>Size Conversion Guide</span>
          </div>
          <h2 id="size-guide-title" className="font-heading text-2xl font-bold text-[#FAF7F2]">
            Pakistani & UK Shoe Sizing
          </h2>
          <p className="text-xs text-neutral-400">
            Peshawari Chapli Jootis follow standard Pakistani / UK footwear sizes.
          </p>
        </div>

        {/* Size Chart Table */}
        <div className="overflow-x-auto border border-[#C5A059]/20 rounded-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-[#141C2E] text-[#D4AF37] font-semibold">
              <tr>
                <th className="py-3 px-3 sm:px-4">Size (UK/PK)</th>
                <th className="py-3 px-3 sm:px-4">EU Size</th>
                <th className="py-3 px-3 sm:px-4">Foot Length (cm)</th>
                <th className="py-3 px-3 sm:px-4">Foot Length (in)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#C5A059]/10 text-neutral-300">
              {SIZE_CHART.map((row) => (
                <tr key={row.sizeUK} className="hover:bg-[#121A2B] transition-colors">
                  <td className="py-2.5 px-3 sm:px-4 font-bold text-[#FAF7F2]">{row.sizeUK}</td>
                  <td className="py-2.5 px-3 sm:px-4">{row.sizeEU}</td>
                  <td className="py-2.5 px-3 sm:px-4">{row.lengthCm}</td>
                  <td className="py-2.5 px-3 sm:px-4">{row.lengthInches}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Helpful Measurement Tips */}
        <div className="p-4 rounded-xl bg-[#141C2E]/60 border border-[#C5A059]/15 space-y-2 text-xs text-neutral-300">
          <div className="flex items-center gap-2 text-[#D4AF37] font-semibold">
            <Footprints className="w-4 h-4" />
            <span>How to Measure Your Foot:</span>
          </div>
          <ol className="list-decimal list-inside space-y-1 text-neutral-400">
            <li>Place a white sheet of paper on a flat floor against a wall.</li>
            <li>Stand upright with your heel touching the wall.</li>
            <li>Mark the tip of your longest toe on the paper.</li>
            <li>Measure the distance from the wall to your mark with a ruler.</li>
            <li>For broad feet, we recommend choosing your normal size and mentioning "Broad Feet" in your order notes.</li>
          </ol>
        </div>

        <div className="pt-2 text-center">
          <button
            onClick={() => setIsSizeGuideOpen(false)}
            className="w-full py-3 rounded-lg bg-[#C5A059] text-[#080B12] font-bold text-xs uppercase tracking-wider hover:bg-[#D4AF37] transition-colors"
          >
            I Know My Size
          </button>
        </div>
      </div>
    </div>
  );
};
