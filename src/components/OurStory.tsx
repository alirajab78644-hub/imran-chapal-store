import React from "react";
import { STORE_CONFIG } from "../data/config";
import { History, HeartHandshake, CheckCircle2 } from "lucide-react";

export const OurStory: React.FC = () => {
  return (
    <section id="story" className="py-16 sm:py-24 bg-[#0A0F1D] border-t border-[#C5A059]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Story Imagery Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#C5A059]/30 shadow-2xl">
              <img
                src="/images/heritage-black-chapli.jpg"
                alt="Artisan crafting traditional Peshawari Chapli Jooti"
                className="w-full h-[400px] sm:h-[460px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B12]/90 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#080B12]/80 backdrop-blur-md border border-[#C5A059]/25">
                <p className="font-heading text-sm text-[#F3E7C4] font-bold">
                  Asli Riwayat, Modern Andaaz
                </p>
                <p className="text-xs text-neutral-400 mt-0.5">
                  Handcrafted with care for festive wear, Eid, weddings & everyday grace.
                </p>
              </div>
            </div>
            
            {/* Decorative Gold Corner Accent */}
            <div className="hidden sm:block absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-[#D4AF37]/40 rounded-tl-xl pointer-events-none" />
            <div className="hidden sm:block absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-[#D4AF37]/40 rounded-br-xl pointer-events-none" />
          </div>

          {/* Story Narrative in Roman English */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#D4AF37] uppercase tracking-[0.2em]">
                <History className="w-4 h-4 text-[#C5A059]" />
                <span>Hamari Kahani · Our Story</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-5xl font-bold text-[#FAF7F2] leading-tight">
                Peshawar Ki Dastkaari, <br />
                <span className="gold-gradient-text">Aapke Qadmon Tak</span>
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
              <p>
                <strong className="text-[#FAF7F2] font-semibold">IMRAN CHAPAL</strong> ki bunyaad 
                Peshawari Chapli Jooti ki sadiyon purani riwayat ko zinda rakhnay ke jazbay par rakhi gayi. 
                Peshawar aur Charsadda ke maahir dastkaar har ek jooti ko nihayat tawajjoh aur mehnat se tayyar karte hain.
              </p>
              <p>
                Har jooti mein mazboot tyre sole ki grip, bareek haath ki silai, aur pur-waqar design ka intikhab shamil hai. 
                Hamara maqsad yeh hai ke Pakistan ke har sheher tak asli, aaraam-deh aur riwayati Peshawari Chapli pohanchai jaye bina kisi pareshani ke.
              </p>
              <p>
                Direct WhatsApp ordering ke zariye hum har customer ke sath rabta qaim rakhtay hain taake sahi size aur pasandeeda model ki tassali bakhash confirmation ho sakay.
              </p>
            </div>

            {/* Highlights */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Hand-stitched perimeter detailing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Heavy-duty tyre sole traction</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Custom size consultation on WhatsApp</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Cash on Delivery across Pakistan</span>
              </div>
            </div>

            {/* Quick Action */}
            <div className="pt-2">
              <a
                href={`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                  "Salam Imran Chapal! I read your story and want to discuss an order."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#141C2E] hover:bg-[#1C263D] text-[#D4AF37] border border-[#C5A059]/40 text-xs sm:text-sm font-semibold transition-all hover:scale-[1.02]"
              >
                <HeartHandshake className="w-4 h-4" />
                <span>Rabta Karein Imran Chapal Se</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
