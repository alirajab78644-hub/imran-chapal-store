import React, { useState } from "react";
import { STORE_CONFIG, getWhatsAppUrl } from "../data/config";
import { MessageSquare, X } from "lucide-react";

export const FloatingWhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMessage = encodeURIComponent(
    "Salam Imran Chapal! I am browsing imranchapal.store and would like some assistance."
  );
  const whatsappLink = getWhatsAppUrl(defaultMessage);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Friendly floating callout bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0E1526]/95 border border-[#C5A059]/40 text-[#FAF7F2] text-xs shadow-xl backdrop-blur-md animate-bounce">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="font-medium">Need size advice or ready to order? Chat with us!</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-neutral-400 hover:text-white p-0.5 ml-1"
            aria-label="Dismiss chat tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group p-4 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-2xl shadow-[#25D366]/40 transition-all hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/50 flex items-center justify-center"
        aria-label="Open WhatsApp chat with Imran Chapal"
        title="Chat on WhatsApp"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping -z-10" />
        <MessageSquare className="w-7 h-7 fill-white stroke-[#25D366]" />
        
        {/* Mobile quick badge */}
        <span className="sr-only">Order on WhatsApp</span>
      </a>
    </div>
  );
};
