import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { STORE_CONFIG, isPlaceholderWhatsAppNumber } from "../data/config";
import {
  formatPKR,
  generateCartOrderMessage,
  createWhatsAppOrderLink,
  CheckoutCustomerInfo,
} from "../utils/whatsapp";
import {
  X,
  MessageSquare,
  ShieldCheck,
  AlertTriangle,
  Copy,
  Check,
  MapPin,
  User,
  Phone,
  FileText,
} from "lucide-react";

export const CheckoutModal: React.FC = () => {
  const { cart, subtotal, isCheckoutOpen, setIsCheckoutOpen } = useCart();

  const [formData, setFormData] = useState<CheckoutCustomerInfo>({
    fullName: "",
    phone: "",
    city: "",
    fullAddress: "",
    orderNotes: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof CheckoutCustomerInfo, string>>>({});
  const [orderSent, setOrderSent] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);
  const [generatedUrl, setGeneratedUrl] = useState("");
  const [generatedText, setGeneratedText] = useState("");

  const isPlaceholder = isPlaceholderWhatsAppNumber();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsCheckoutOpen(false);
    };
    if (isCheckoutOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isCheckoutOpen, setIsCheckoutOpen]);

  if (!isCheckoutOpen) return null;

  const validate = () => {
    const newErrors: Partial<Record<keyof CheckoutCustomerInfo, string>> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Please enter your full name";
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number";
    } else if (formData.phone.replace(/[^0-9]/g, "").length < 10) {
      newErrors.phone = "Please enter a valid phone number (at least 10 digits)";
    }
    if (!formData.city.trim()) newErrors.city = "Please enter your delivery city";
    if (!formData.fullAddress.trim()) newErrors.fullAddress = "Please enter your street address";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = generateCartOrderMessage(cart, formData, subtotal);
    const { url, rawText } = createWhatsAppOrderLink(message);

    setGeneratedUrl(url);
    setGeneratedText(rawText);
    setOrderSent(true);

    // Open WhatsApp in new tab
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCopyMessage = () => {
    if (generatedText) {
      navigator.clipboard.writeText(generatedText);
      setCopiedMessage(true);
      setTimeout(() => setCopiedMessage(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-[#0E1526] border border-[#C5A059]/35 rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[92vh] overflow-y-auto"
        role="dialog"
        aria-labelledby="checkout-modal-title"
      >
        <button
          onClick={() => {
            setIsCheckoutOpen(false);
            setOrderSent(false);
          }}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
          aria-label="Close checkout"
        >
          <X className="w-5 h-5" />
        </button>

        {!orderSent ? (
          <div className="space-y-6">
            {/* Header */}
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                <span>WhatsApp Order Request</span>
              </div>
              <h2 id="checkout-modal-title" className="font-heading text-2xl sm:text-3xl font-bold text-[#FAF7F2]">
                Delivery Details
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400">
                Enter your details to generate your order summary. You will be redirected to WhatsApp to confirm directly with Imran Chapal.
              </p>
            </div>

            {/* Store Owner Placeholder Alert if applicable */}
            {isPlaceholder && (
              <div className="p-3.5 rounded-xl bg-amber-950/40 border border-amber-600/35 text-amber-200 text-xs flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-semibold text-amber-100">
                    Store Owner Notice (Setup Mode):
                  </p>
                  <p className="text-[11px] text-amber-200/90 leading-relaxed">
                    The WhatsApp receiver number is currently the placeholder{" "}
                    <code className="bg-black/50 px-1 py-0.5 rounded font-mono">{STORE_CONFIG.whatsappNumber}</code>. 
                    The message link will still generate properly so you can test it. Replace with your actual number in{" "}
                    <code className="bg-black/50 px-1 py-0.5 rounded font-mono">src/data/config.ts</code> before official launch.
                  </p>
                </div>
              </div>
            )}

            {/* Order Items Snapshot */}
            <div className="p-4 rounded-xl bg-[#141C2E]/60 border border-[#C5A059]/15 space-y-2 text-xs">
              <div className="flex items-center justify-between font-semibold text-neutral-200 border-b border-white/5 pb-1.5">
                <span>Items ({cart.reduce((a, b) => a + b.quantity, 0)})</span>
                <span className="font-heading text-sm text-[#F3E7C4]">{formatPKR(subtotal)}</span>
              </div>
              <div className="space-y-1 text-neutral-400 max-h-24 overflow-y-auto">
                {cart.map((item) => (
                  <div key={`${item.product.id}-${item.selectedSize}`} className="flex justify-between">
                    <span>
                      {item.product.name} (UK {item.selectedSize}) × {item.quantity}
                    </span>
                    <span>{formatPKR(item.product.demoPricePKR * item.quantity)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Checkout Form */}
            <form onSubmit={handleCheckoutSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-neutral-300 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Full Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Muhammad Ali"
                    className="w-full px-3.5 py-2.5 bg-[#080B12] border border-[#C5A059]/25 rounded-lg text-xs sm:text-sm text-[#FAF7F2] placeholder-neutral-500 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]"
                  />
                  {errors.fullName && <p className="text-[11px] text-red-400">{errors.fullName}</p>}
                </div>

                {/* Phone Number */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-neutral-300 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>WhatsApp / Contact Number *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 0300-1234567"
                    className="w-full px-3.5 py-2.5 bg-[#080B12] border border-[#C5A059]/25 rounded-lg text-xs sm:text-sm text-[#FAF7F2] placeholder-neutral-500 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]"
                  />
                  {errors.phone && <p className="text-[11px] text-red-400">{errors.phone}</p>}
                </div>
              </div>

              {/* City */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-neutral-300 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>City / Town *</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="e.g. Lahore, Peshawar, Karachi, Islamabad, Rawalpindi"
                  className="w-full px-3.5 py-2.5 bg-[#080B12] border border-[#C5A059]/25 rounded-lg text-xs sm:text-sm text-[#FAF7F2] placeholder-neutral-500 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]"
                />
                {errors.city && <p className="text-[11px] text-red-400">{errors.city}</p>}
              </div>

              {/* Full Address */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-neutral-300 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Complete Street Delivery Address *</span>
                </label>
                <textarea
                  rows={2}
                  required
                  value={formData.fullAddress}
                  onChange={(e) => setFormData({ ...formData, fullAddress: e.target.value })}
                  placeholder="House / Flat #, Street, Sector, Mohallah, Area Landmark"
                  className="w-full px-3.5 py-2.5 bg-[#080B12] border border-[#C5A059]/25 rounded-lg text-xs sm:text-sm text-[#FAF7F2] placeholder-neutral-500 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]"
                />
                {errors.fullAddress && <p className="text-[11px] text-red-400">{errors.fullAddress}</p>}
              </div>

              {/* Order Notes */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-neutral-300 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Order Notes / Custom Size Request (Optional)</span>
                </label>
                <input
                  type="text"
                  value={formData.orderNotes}
                  onChange={(e) => setFormData({ ...formData, orderNotes: e.target.value })}
                  placeholder="e.g. Wide feet fit, deliver after 2 PM, urgent Eid gift"
                  className="w-full px-3.5 py-2.5 bg-[#080B12] border border-[#C5A059]/25 rounded-lg text-xs sm:text-sm text-[#FAF7F2] placeholder-neutral-500 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]"
                />
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-[#C5A059] hover:bg-[#D4AF37] text-[#080B12] font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-xl shadow-[#C5A059]/25 transition-all"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Send Order Request on WhatsApp</span>
                </button>
                <p className="text-[11px] text-center text-neutral-400 mt-2">
                  No payment collected here. Imran Chapal will manually verify your order and discuss Cash on Delivery on WhatsApp.
                </p>
              </div>
            </form>
          </div>
        ) : (
          /* Order Link Generated confirmation screen */
          <div className="space-y-6 text-center py-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 mx-auto flex items-center justify-center">
              <Check className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#FAF7F2]">
                Order Request Prepared!
              </h2>
              <p className="text-sm text-neutral-300 max-w-md mx-auto">
                Your WhatsApp message was generated and opened. If your browser blocked the popup, click the button below to open it directly:
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={generatedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#C5A059] hover:bg-[#D4AF37] text-[#080B12] font-bold text-xs sm:text-sm flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open in WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={handleCopyMessage}
                className="w-full sm:w-auto px-5 py-3 rounded-lg bg-[#141C2E] text-neutral-200 hover:text-white border border-[#C5A059]/30 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2"
              >
                {copiedMessage ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copiedMessage ? "Message Copied!" : "Copy Order Text"}</span>
              </button>
            </div>

            {/* Message Preview Box */}
            <div className="text-left bg-[#080B12] p-4 rounded-xl border border-[#C5A059]/20 space-y-2">
              <p className="text-[11px] text-[#C5A059] font-semibold uppercase tracking-wider">
                Formatted Message Sent:
              </p>
              <pre className="text-xs text-neutral-300 font-sans whitespace-pre-wrap leading-relaxed max-h-48 overflow-y-auto">
                {generatedText}
              </pre>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setIsCheckoutOpen(false);
                  setOrderSent(false);
                }}
                className="text-xs text-neutral-400 hover:text-white underline"
              >
                Return to Store
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
