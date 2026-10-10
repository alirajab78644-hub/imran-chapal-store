import React, { useState } from "react";
import { STORE_CONFIG } from "../data/config";
import { useCart } from "../context/CartContext";
import { ShoppingBag, Menu, X, MessageSquare, ShieldCheck } from "lucide-react";

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", id: "hero" },
    { label: "Shop", id: "catalog" },
    { label: "Our Story", id: "story" },
    { label: "Why Us", id: "why-us" },
    { label: "FAQs", id: "faq" },
    { label: "Contact", id: "contact" },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#080B12]/95 backdrop-blur-md border-b border-[#C5A059]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-neutral-300 hover:text-[#C5A059] focus:outline-none focus:ring-2 focus:ring-[#C5A059] rounded-lg"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Brand Logo Text */}
        <div 
          onClick={() => handleNavClick("hero")}
          className="cursor-pointer group flex flex-col items-center md:items-start"
        >
          <div className="flex items-center gap-2">
            <span className="font-heading text-2xl sm:text-3xl font-extrabold tracking-widest text-[#FAF7F2] group-hover:text-[#D4AF37] transition-colors">
              IMRAN CHAPAL
            </span>
          </div>
          <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#C5A059] font-medium -mt-1">
            imranchapal.store
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="text-sm font-medium text-neutral-300 hover:text-[#D4AF37] transition-colors relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] rounded"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Actions: WhatsApp quick link + Cart Trigger */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href={`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
              "Salam Imran Chapal! I am browsing your store and would like to ask a question."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-[#101726] bg-[#C5A059] hover:bg-[#D4AF37] active:bg-[#AA8232] rounded-md transition-all shadow-sm shadow-[#C5A059]/20"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Order on WhatsApp</span>
          </a>

          {/* Cart Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2.5 text-neutral-200 hover:text-[#C5A059] bg-[#101726] hover:bg-[#152035] border border-[#C5A059]/30 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
            aria-label={`Open shopping cart with ${totalItems} items`}
          >
            <ShoppingBag className="w-5 h-5 text-[#FAF7F2]" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 bg-[#D4AF37] text-[#080B12] text-xs font-bold rounded-full flex items-center justify-center shadow-md">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0C1220] border-b border-[#C5A059]/20 px-4 pt-3 pb-6 space-y-3 transition-all">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-left py-2.5 px-3 text-sm font-medium text-neutral-200 hover:text-[#D4AF37] hover:bg-[#141C30] rounded-md transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-[#C5A059]/15 flex flex-col gap-2.5">
            <a
              href={`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                "Salam Imran Chapal! I am browsing your store and would like to ask a question."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#C5A059] text-[#080B12] font-semibold text-sm rounded-md shadow"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Order on WhatsApp</span>
            </a>
            <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-400">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Manual WhatsApp Order Confirmation</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
