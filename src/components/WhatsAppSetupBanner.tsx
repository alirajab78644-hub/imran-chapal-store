import React, { useState } from "react";
import { STORE_CONFIG, isPlaceholderWhatsAppNumber } from "../data/config";
import { AlertCircle, ChevronDown, ChevronUp, Copy, Check } from "lucide-react";

export const WhatsAppSetupBanner: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);
  const isPlaceholder = isPlaceholderWhatsAppNumber();

  if (!isPlaceholder) return null;

  const handleCopyPath = () => {
    navigator.clipboard.writeText("src/data/config.ts");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <aside aria-label="Store Owner Setup Alert" className="bg-[#121929] border-b border-[#D4AF37]/30 px-4 py-2.5 text-xs text-[#E5E2DC]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <span className="p-1 rounded bg-[#D4AF37]/20 text-[#D4AF37] shrink-0">
            <AlertCircle className="w-4 h-4" />
          </span>
          <p className="leading-snug">
            <strong className="text-[#F3E7C4] font-semibold">Store Owner Notice:</strong>{" "}
            WhatsApp number is currently set to placeholder{" "}
            <code className="bg-[#080B12] px-1.5 py-0.5 rounded text-[#D4AF37] font-mono">
              {STORE_CONFIG.whatsappNumber}
            </code>
            . Test ordering works for link preview.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0 self-end md:self-auto">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-[#D4AF37] hover:text-[#F3E7C4] underline flex items-center gap-1 font-medium"
          >
            <span>{expanded ? "Hide instructions" : "How to update"}</span>
            {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {expanded && (
        <div className="max-w-7xl mx-auto mt-2.5 pt-2.5 border-t border-[#D4AF37]/20 text-[11px] text-neutral-300 space-y-1.5">
          <p>
            To connect your live WhatsApp account, open{" "}
            <span className="font-mono text-[#D4AF37]">src/data/config.ts</span> and replace{" "}
            <code className="text-[#D4AF37] font-mono">"923XXXXXXXXX"</code> with your real phone number 
            in international format (e.g., <code className="text-[#D4AF37] font-mono">"923001234567"</code> without <code className="text-neutral-400">+</code> or spaces).
          </p>
          <div className="flex items-center gap-2 pt-1">
            <button
              onClick={handleCopyPath}
              className="inline-flex items-center gap-1 px-2 py-1 bg-[#080B12] hover:bg-[#152035] rounded border border-[#D4AF37]/30 text-[#D4AF37] transition-colors"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? "Copied path" : "Copy file path: src/data/config.ts"}</span>
            </button>
            <span className="text-neutral-400">
              Then push/redeploy to Cloudflare Pages to take changes live.
            </span>
          </div>
        </div>
      )}
    </aside>
  );
};
