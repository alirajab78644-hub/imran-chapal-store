import React, { useEffect } from "react";
import { STORE_CONFIG } from "../data/config";
import { X, CheckSquare, Cloud, Terminal, AlertCircle, FileCode } from "lucide-react";

interface AdminGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminGuideModal: React.FC<AdminGuideModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-[#0E1526] border border-[#C5A059]/40 rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto space-y-6 text-xs sm:text-sm text-neutral-300"
        role="dialog"
        aria-labelledby="admin-guide-title"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
          aria-label="Close owner guide"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
            <FileCode className="w-4 h-4 text-[#C5A059]" />
            <span>Store Owner Documentation</span>
          </div>
          <h2 id="admin-guide-title" className="font-heading text-2xl font-bold text-[#FAF7F2]">
            Catalog & Deployment Guide
          </h2>
          <p className="text-xs text-neutral-400">
            Because this store has no complex backend or database, your catalog and settings live in clean TypeScript files.
          </p>
        </div>

        {/* Pre-Launch Checklist */}
        <div className="p-4 rounded-xl bg-[#141C2E] border border-[#C5A059]/20 space-y-3">
          <div className="flex items-center gap-2 text-[#D4AF37] font-semibold text-xs uppercase tracking-wider">
            <CheckSquare className="w-4 h-4" />
            <span>Pre-Launch Checklist (Must-Replace Values)</span>
          </div>
          <ul className="space-y-2 text-xs">
            <li className="flex items-start gap-2">
              <span className="text-amber-400 font-bold">1.</span>
              <span>
                <strong>WhatsApp Number:</strong> Open <code className="text-[#D4AF37] font-mono">src/data/config.ts</code> and replace <code className="text-amber-300">"{STORE_CONFIG.whatsappNumber}"</code> with your real phone number (e.g. <code className="text-emerald-400">"923001234567"</code>).
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400 font-bold">2.</span>
              <span>
                <strong>Product Prices:</strong> Open <code className="text-[#D4AF37] font-mono">src/data/products.ts</code> and update the <code className="text-[#D4AF37]">demoPricePKR</code> fields with your real selling prices.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400 font-bold">3.</span>
              <span>
                <strong>Sizes & Inventory:</strong> In <code className="text-[#D4AF37] font-mono">src/data/products.ts</code>, modify the <code className="text-[#D4AF37]">sizes: [7, 8, 9, 10, 11, 12]</code> arrays to reflect your actual stock.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400 font-bold">4.</span>
              <span>
                <strong>Social Links:</strong> In <code className="text-[#D4AF37] font-mono">src/data/config.ts</code>, replace the sample Instagram, Facebook, and TikTok URLs with your brand's official profiles.
              </span>
            </li>
          </ul>
        </div>

        {/* Free Cloudflare Pages Deployment */}
        <div className="p-4 rounded-xl bg-[#121929] border border-white/10 space-y-2">
          <div className="flex items-center gap-2 text-[#D4AF37] font-semibold text-xs uppercase tracking-wider">
            <Cloud className="w-4 h-4" />
            <span>Deploy Free to Cloudflare Pages</span>
          </div>
          <ol className="list-decimal list-inside space-y-1.5 text-xs text-neutral-300">
            <li>Download or push this codebase to a GitHub repository.</li>
            <li>Log into the Cloudflare Dashboard and navigate to <strong>Workers & Pages &gt; Create &gt; Pages &gt; Connect to Git</strong>.</li>
            <li>Select your repository.</li>
            <li>
              Set <strong>Framework preset</strong> to <code className="text-[#D4AF37]">Vite</code>, <strong>Build command</strong> to <code className="text-[#D4AF37]">npm run build</code>, and <strong>Build output directory</strong> to <code className="text-[#D4AF37]">dist</code>.
            </li>
            <li>Click <strong>Save and Deploy</strong>. Cloudflare Pages builds and deploys your site globally in seconds for free!</li>
          </ol>
        </div>

        {/* Custom Domain imranchapal.store */}
        <div className="p-4 rounded-xl bg-[#121929] border border-white/10 space-y-2">
          <div className="flex items-center gap-2 text-[#D4AF37] font-semibold text-xs uppercase tracking-wider">
            <Terminal className="w-4 h-4" />
            <span>Connecting your domain (imranchapal.store)</span>
          </div>
          <ol className="list-decimal list-inside space-y-1.5 text-xs text-neutral-300">
            <li>In your Cloudflare Pages project, click the <strong>Custom domains</strong> tab.</li>
            <li>Click <strong>Set up a custom domain</strong> and enter <code className="text-[#D4AF37]">imranchapal.store</code>.</li>
            <li>If your domain is already managed in Cloudflare DNS, it configures automatically. If registered elsewhere (e.g. Namecheap, GoDaddy), update your CNAME DNS record to point to your Cloudflare Pages domain.</li>
            <li>Free SSL/TLS certificate will be issued automatically within minutes.</li>
          </ol>
        </div>

        <div className="pt-2 text-center">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-lg bg-[#C5A059] text-[#080B12] font-bold text-xs uppercase tracking-wider hover:bg-[#D4AF37] transition-colors"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};
