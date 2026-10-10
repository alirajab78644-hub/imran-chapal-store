import React, { useEffect } from "react";
import { useCart } from "../context/CartContext";
import { formatPKR } from "../utils/whatsapp";
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag } from "lucide-react";

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    setIsCheckoutOpen,
  } = useCart();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsCartOpen(false);
    };
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isCartOpen, setIsCartOpen]);

  if (!isCartOpen) return null;

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm animate-fadeIn">
      {/* Backdrop overlay */}
      <div 
        className="fixed inset-0" 
        onClick={() => setIsCartOpen(false)} 
        aria-hidden="true" 
      />

      {/* Drawer Panel */}
      <div 
        className="relative w-full max-w-md bg-[#0C1220] border-l border-[#C5A059]/25 h-full flex flex-col justify-between shadow-2xl z-10"
        role="dialog"
        aria-label="Shopping Cart"
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-[#C5A059]/15 flex items-center justify-between bg-[#080B12]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#C5A059]" />
            <h2 className="font-heading text-lg font-bold text-[#FAF7F2]">
              Shopping Cart ({cart.reduce((a, b) => a + b.quantity, 0)})
            </h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1.5 text-neutral-400 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Items */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-16">
              <div className="w-16 h-16 rounded-full bg-[#141C2E] flex items-center justify-center text-[#C5A059]/60 border border-[#C5A059]/20">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <p className="font-heading text-base font-semibold text-[#FAF7F2]">
                  Your cart is empty
                </p>
                <p className="text-xs text-neutral-400">
                  Explore our handcrafted Peshawari Chapli Jootis and add your favorite pair.
                </p>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-2 px-5 py-2.5 rounded-lg bg-[#C5A059] text-[#080B12] text-xs font-bold hover:bg-[#D4AF37] transition-colors"
              >
                Browse Collection
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between text-xs text-neutral-400 pb-1 border-b border-[#C5A059]/10">
                <span>Selected Footwear</span>
                <button
                  onClick={clearCart}
                  className="text-red-400/80 hover:text-red-300 text-[11px] underline"
                >
                  Clear all
                </button>
              </div>

              {cart.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedSize}`}
                  className="flex gap-3.5 p-3 rounded-xl bg-[#121929] border border-[#C5A059]/15"
                >
                  {/* Thumbnail */}
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-18 h-18 sm:w-20 sm:h-20 rounded-lg object-cover bg-[#080B12] shrink-0 border border-white/5"
                  />

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h3 className="font-heading text-xs sm:text-sm font-bold text-[#FAF7F2] line-clamp-1">
                          {item.product.name}
                        </h3>
                        <button
                          onClick={() => removeFromCart(item.product.id, item.selectedSize)}
                          className="text-neutral-500 hover:text-red-400 p-1"
                          aria-label={`Remove ${item.product.name}`}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-[11px] text-[#C5A059] mt-0.5">
                        <span>Size: UK {item.selectedSize}</span> · <span>{item.product.color}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <span className="font-heading text-xs sm:text-sm font-bold text-[#F3E7C4]">
                        {formatPKR(item.product.demoPricePKR * item.quantity)}
                      </span>

                      {/* Quantity buttons */}
                      <div className="flex items-center border border-[#C5A059]/30 rounded bg-[#080B12]">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.selectedSize, -1)}
                          className="p-1 text-neutral-400 hover:text-white"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-semibold text-[#FAF7F2]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.selectedSize, 1)}
                          className="p-1 text-neutral-400 hover:text-white"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Drawer Footer */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-[#C5A059]/20 bg-[#080B12] space-y-3">
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs text-neutral-400">
                <span>Estimated Subtotal:</span>
                <span className="font-heading text-lg font-bold text-[#F3E7C4]">
                  {formatPKR(subtotal)}
                </span>
              </div>
              <p className="text-[11px] text-neutral-500">
                Delivery charges confirmed via WhatsApp based on your city.
              </p>
            </div>

            <button
              onClick={handleProceedToCheckout}
              className="w-full py-3.5 px-4 rounded-lg bg-[#C5A059] hover:bg-[#D4AF37] text-[#080B12] font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#C5A059]/20 transition-all"
            >
              <span>Proceed to WhatsApp Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
