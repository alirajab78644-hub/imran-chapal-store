import React from "react";
import { Compass, Hammer, Sparkles, MessageSquare } from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: Compass,
      title: "Traditional Design",
      description:
        "Time-honored Peshawari cuts, iconic Zalmi pointed arches, and classic broad front silhouettes shaped according to regional footwear heritage.",
    },
    {
      icon: Hammer,
      title: "Quality Craftsmanship",
      description:
        "Careful hand-cut patterns, reinforced edge stitching with contrast white threads, and durable tyre rubber soles fitted with sturdy metal buckles.",
    },
    {
      icon: Sparkles,
      title: "Comfortable Fit",
      description:
        "Soft inner footbed lining, adjustable heel buckle straps, and balanced weight distribution designed for comfortable daily wear with traditional attire.",
    },
    {
      icon: MessageSquare,
      title: "Easy WhatsApp Ordering",
      description:
        "No complex accounts or checkout hurdles. Order directly on WhatsApp, get one-on-one size assistance, and receive personal order confirmation.",
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-[#080B12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
            Kyun Chunein Imran Chapal
          </p>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-[#FAF7F2]">
            Why Choose Us
          </h2>
          <p className="text-sm text-neutral-400">
            Dedicated to traditional craftsmanship and straightforward customer service on every step.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0E1526]/70 border border-[#C5A059]/15 hover:border-[#D4AF37]/40 transition-all hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#141C2E] border border-[#C5A059]/25 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform mb-5">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#FAF7F2] group-hover:text-[#D4AF37] transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
