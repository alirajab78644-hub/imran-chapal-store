import React from "react";
import { STORE_CONFIG } from "../data/config";
import { Sparkles, MessageCircle } from "lucide-react";

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-[#0C1220] border-b border-[#C5A059]/20 text-xs py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-[#D8D2C5]">
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A059] animate-pulse" />
          <span className="font-medium tracking-wide">
            {STORE_CONFIG.announcementText}
          </span>
          <span className="hidden md:inline text-[#C5A059]">·</span>
          <span className="hidden md:inline text-neutral-400">
            Cash on Delivery Available · Manual WhatsApp Confirmation
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-4 text-xs">
          <a
            href={`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
              "Salam Imran Chapal! I would like to inquire about your footwear collection."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#C5A059] hover:text-[#E5C158] transition-colors font-medium"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Direct WhatsApp Help</span>
          </a>
        </div>
      </div>
    </div>
  );
};
