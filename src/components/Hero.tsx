import React from "react";
import { STORE_CONFIG } from "../data/config";
import { ArrowRight, MessageSquare, Shield, Award, Truck } from "lucide-react";

interface HeroProps {
  onShopClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopClick }) => {
  return (
    <section id="hero" className="relative min-h-[85vh] sm:min-h-[88vh] flex items-center overflow-hidden bg-[#080B12]">
      {/* Background imagery with dark navy and gold gradient overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-chapli-heritage.jpg"
          alt="Traditional handcrafted Pakistani Peshawari Chapli Jooti in leather workshop"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.42] contrast-110"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080B12] via-[#080B12]/80 to-[#0B132B]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#C5A059]/10 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-3xl space-y-6 sm:space-y-8">
          {/* Subtle Tagline Kicker */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#101726]/80 border border-[#C5A059]/30 backdrop-blur-sm text-[#E5C158] text-xs font-semibold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-ping" />
            <span>Asli Peshawari & Charsadda Craft</span>
          </div>

          {/* Headline */}
          <div className="space-y-2">
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#FAF7F2] leading-[1.1]">
              Har Qadam Mein <br />
              <span className="gold-gradient-text">Riwayat</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-[#D1CECA] leading-relaxed max-w-2xl font-light">
            Discover timeless Pakistani craftsmanship with our premium Chapli Jooti collection. 
            Handcrafted with traditional tyre soles, comfort footbeds, and time-honored artisanal dedication.
          </p>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
            <button
              onClick={onShopClick}
              className="px-7 py-3.5 rounded-lg bg-[#C5A059] hover:bg-[#D4AF37] active:bg-[#AA8232] text-[#080B12] font-bold text-sm sm:text-base tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-[#C5A059]/20 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
            >
              <span>Shop Collection</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                "Salam Imran Chapal! I saw your collection on imranchapal.store and would like to order a Chapli Jooti."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-lg bg-[#101726]/90 hover:bg-[#162136] text-[#FAF7F2] hover:text-[#D4AF37] border border-[#C5A059]/40 font-semibold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
            >
              <MessageSquare className="w-4 h-4 text-[#C5A059]" />
              <span>Order on WhatsApp</span>
            </a>
          </div>

          {/* Trust Highlights Grid */}
          <div className="pt-8 sm:pt-10 grid grid-cols-3 gap-3 sm:gap-6 border-t border-[#C5A059]/15">
            <div className="flex items-center gap-2 sm:gap-3 text-left">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-[#C5A059] shrink-0" />
              <div>
                <p className="text-xs sm:text-sm font-semibold text-[#FAF7F2]">Direct WhatsApp</p>
                <p className="text-[10px] sm:text-xs text-neutral-400">Personal order verification</p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 text-left">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#C5A059] shrink-0" />
              <div>
                <p className="text-xs sm:text-sm font-semibold text-[#FAF7F2]">Tyre Sole Grip</p>
                <p className="text-[10px] sm:text-xs text-neutral-400">Authentic double sole</p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 text-left">
              <Truck className="w-4 h-4 sm:w-5 sm:h-5 text-[#C5A059] shrink-0" />
              <div>
                <p className="text-xs sm:text-sm font-semibold text-[#FAF7F2]">All Pakistan</p>
                <p className="text-[10px] sm:text-xs text-neutral-400">Cash on Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
