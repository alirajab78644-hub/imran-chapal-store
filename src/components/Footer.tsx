import React, { useState } from "react";
import { STORE_CONFIG } from "../data/config";
import { AdminGuideModal } from "./AdminGuideModal";
import {
  MessageSquare,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Instagram,
  Facebook,
  ExternalLink,
  BookOpen,
} from "lucide-react";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [isAdminGuideOpen, setIsAdminGuideOpen] = useState(false);

  return (
    <>
      <footer id="contact" className="bg-[#05080E] border-t border-[#C5A059]/20 text-neutral-400 text-xs pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {/* Col 1: Brand & Tagline */}
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="font-heading text-2xl font-bold tracking-wider text-[#FAF7F2]">
                  IMRAN CHAPAL
                </span>
                <p className="text-[#C5A059] text-[11px] font-semibold tracking-widest uppercase">
                  {STORE_CONFIG.domain}
                </p>
              </div>

              <p className="text-neutral-400 text-xs leading-relaxed font-light">
                {STORE_CONFIG.tagline}. Handcrafted traditional Pakistani Chapli Jootis and Peshawari sandals. 
                Delivered across Pakistan with personal WhatsApp customer service.
              </p>

              {/* Social icons */}
              <div className="flex items-center gap-3 pt-1">
                <a
                  href={STORE_CONFIG.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-[#0E1526] border border-[#C5A059]/20 flex items-center justify-center text-neutral-300 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-colors"
                  aria-label="Instagram profile"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={STORE_CONFIG.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-[#0E1526] border border-[#C5A059]/20 flex items-center justify-center text-neutral-300 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-colors"
                  aria-label="Facebook page"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={STORE_CONFIG.socials.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-[#0E1526] border border-[#C5A059]/20 flex items-center justify-center text-neutral-300 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-colors"
                  aria-label="TikTok profile"
                >
                  <span className="font-bold text-xs">TT</span>
                </a>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div className="space-y-3">
              <h4 className="font-heading text-sm font-bold text-[#FAF7F2] tracking-wide">
                Quick Navigation
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <button
                    onClick={() => onNavigate("hero")}
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate("catalog")}
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    Footwear Collection
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate("story")}
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    Our Story (Hamari Kahani)
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate("why-us")}
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    Why Choose Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate("faq")}
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    Frequently Asked Questions
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3: Direct Contact & WhatsApp */}
            <div className="space-y-3">
              <h4 className="font-heading text-sm font-bold text-[#FAF7F2] tracking-wide">
                Contact & Orders
              </h4>
              <ul className="space-y-2.5 text-xs text-neutral-300">
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <span>{STORE_CONFIG.phoneDisplay}</span>
                </li>
                <li className="flex items-center gap-2">
                  <MessageSquare className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                  <a
                    href={`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                      "Salam Imran Chapal! I am reaching out regarding footwear inquiries."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D4AF37] hover:underline"
                  >
                    WhatsApp Chat
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <span>{STORE_CONFIG.email}</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>{STORE_CONFIG.addressSummary}</span>
                </li>
              </ul>
            </div>

            {/* Col 4: Safe Ordering Notice & Owner Guide */}
            <div className="space-y-3">
              <h4 className="font-heading text-sm font-bold text-[#FAF7F2] tracking-wide">
                Order Assurance
              </h4>
              <div className="p-3.5 rounded-xl bg-[#0E1526] border border-[#C5A059]/15 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Zero Fake Checkout</span>
                </div>
                <p className="text-[11px] text-neutral-400 leading-relaxed">
                  We never collect credit card details on this frontend. All orders are reviewed directly on WhatsApp with cash on delivery confirmation.
                </p>
              </div>

              <div className="pt-1">
                <button
                  onClick={() => setIsAdminGuideOpen(true)}
                  className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-[#D4AF37] text-xs transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Store Owner Editing Guide</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
            <p>
              © {new Date().getFullYear()} {STORE_CONFIG.brandTitle} ({STORE_CONFIG.domain}). All rights reserved.
            </p>
            <p className="flex items-center gap-2">
              <span>Har Qadam Mein Riwayat</span>
              <span>·</span>
              <span>Peshawar, Pakistan</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Admin / Owner Guide Modal */}
      <AdminGuideModal
        isOpen={isAdminGuideOpen}
        onClose={() => setIsAdminGuideOpen(false)}
      />
    </>
  );
};
