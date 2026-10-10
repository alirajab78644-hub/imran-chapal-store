import React from "react";
import { STORE_CONFIG } from "../data/config";
import { MessageSquare, Camera } from "lucide-react";

export const CustomerReviews: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#080B12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-[#C5A059] font-semibold">
            <Camera className="w-4 h-4" />
            <span>Customer Feedback</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#FAF7F2]">
            Authentic Customer Reviews
          </h2>

          <div className="p-8 sm:p-10 rounded-2xl bg-[#0E1526]/80 border border-[#C5A059]/20 backdrop-blur-md space-y-5 text-center mt-6">
            <div className="max-w-xl mx-auto space-y-3">
              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                We believe in genuine, verified feedback. Real customer unboxing photos, size experiences, 
                and reviews from across Pakistan will be published here as delivered orders are completed.
              </p>
              <p className="text-xs text-[#C5A059] font-medium">
                Apna order receive karne ke baad apni tasveer ya review hamare WhatsApp par zaroor share karein!
              </p>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                  "Salam Imran Chapal! I received my Chapli Jooti parcel and would like to share my feedback and pictures."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#141D30] hover:bg-[#1A2640] text-[#FAF7F2] hover:text-[#D4AF37] border border-[#C5A059]/30 text-xs sm:text-sm font-semibold transition-all hover:scale-[1.02]"
              >
                <MessageSquare className="w-4 h-4 text-[#C5A059]" />
                <span>Share Your Review on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
