import React, { useState } from "react";
import { FAQS } from "../data/products";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { STORE_CONFIG } from "../data/config";

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx((curr) => (curr === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#0A0F1D] border-t border-[#C5A059]/15">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-[#C5A059] font-semibold">
            <HelpCircle className="w-4 h-4" />
            <span>Sawaal Aur Jawaab</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-[#FAF7F2]">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-neutral-400">
            Have questions about sizes, delivery in Pakistan, or WhatsApp orders? Find answers below.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-[#0E1526]/80 border border-[#C5A059]/15 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-5 sm:px-6 py-4.5 text-left flex items-center justify-between gap-4 text-sm sm:text-base font-semibold text-[#FAF7F2] hover:text-[#D4AF37] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]"
                  aria-expanded={isOpen}
                >
                  <span className="leading-snug">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#C5A059] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed border-t border-[#C5A059]/10">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center pt-4">
          <p className="text-xs text-neutral-400">
            Still have a question? Contact Imran Chapal directly:
          </p>
          <a
            href={`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
              "Salam Imran Chapal! I have a question about placing an order."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-2 text-xs sm:text-sm text-[#D4AF37] hover:underline font-medium"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat with us on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
