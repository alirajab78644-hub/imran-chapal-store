/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react";
import { CartProvider, useCart } from "./context/CartContext";
import { AnnouncementBar } from "./components/AnnouncementBar";
import { Header } from "./components/Header";
import { WhatsAppSetupBanner } from "./components/WhatsAppSetupBanner";
import { Hero } from "./components/Hero";
import { BestSellersSection } from "./components/BestSellersSection";
import { ProductCatalog } from "./components/ProductCatalog";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { OurStory } from "./components/OurStory";
import { CustomerReviews } from "./components/CustomerReviews";
import { FAQSection } from "./components/FAQSection";
import { Footer } from "./components/Footer";
import { CartDrawer } from "./components/CartDrawer";
import { CheckoutModal } from "./components/CheckoutModal";
import { ProductQuickViewModal } from "./components/ProductQuickViewModal";
import { SizeGuideModal } from "./components/SizeGuideModal";
import { FloatingWhatsAppButton } from "./components/FloatingWhatsAppButton";
import { CheckCircle2 } from "lucide-react";

const MainStoreContent: React.FC = () => {
  const { notification } = useCart();

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Enable keyboard ESC to dismiss modals gracefully
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        // Handled individually inside modal listeners
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="min-h-screen bg-[#080B12] text-[#E8E6E3] flex flex-col font-sans selection:bg-[#C5A059] selection:text-[#080B12]">
      {/* Toast Notification */}
      {notification && (
        <aside
          aria-label="Notification"
          className="fixed top-24 right-4 sm:right-8 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-[#121929] border border-[#C5A059]/50 text-[#FAF7F2] text-xs font-semibold shadow-2xl backdrop-blur-md animate-bounce"
        >
          <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
          <span>{notification}</span>
        </aside>
      )}

      {/* Announcement Bar */}
      <AnnouncementBar />

      {/* Store Owner Setup Notice Banner */}
      <WhatsAppSetupBanner />

      {/* Main Navigation Header */}
      <Header onNavigate={handleNavigate} />

      {/* Page Sections */}
      <main className="flex-1">
        <Hero onShopClick={() => handleNavigate("catalog")} />
        <BestSellersSection />
        <ProductCatalog />
        <WhyChooseUs />
        <OurStory />
        <CustomerReviews />
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Persistent Global Floating WhatsApp Order Button */}
      <FloatingWhatsAppButton />

      {/* Interactive Overlays */}
      <CartDrawer />
      <CheckoutModal />
      <ProductQuickViewModal />
      <SizeGuideModal />
    </div>
  );
};

export default function App() {
  return (
    <CartProvider>
      <MainStoreContent />
    </CartProvider>
  );
}
