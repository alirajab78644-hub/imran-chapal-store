/**
 * STORE CONFIGURATION FILE - imranchapal.store
 * 
 * ⚠️ OWNER ACTION REQUIRED BEFORE LAUNCH:
 * 1. Replace WHATSAPP_NUMBER below with your actual WhatsApp business number.
 *    Format: Country code + digits without "+" or spaces (e.g. "923001234567").
 * 2. Update social media links and contact details.
 * 3. Every change here requires saving and redeploying your site to Cloudflare Pages.
 */

export interface StoreConfig {
  storeName: string;
  brandTitle: string;
  domain: string;
  tagline: string;
  announcementText: string;
  whatsappNumber: string;
  phoneDisplay: string;
  email: string;
  addressSummary: string;
  deliveryTime: string;
  deliveryChargesNote: string;
  socials: {
    instagram: string;
    facebook: string;
    tiktok: string;
  };
}

export const STORE_CONFIG: StoreConfig = {
  storeName: "imranchapal.store",
  brandTitle: "IMRAN CHAPAL",
  domain: "imranchapal.store",
  tagline: "Har Qadam Mein Riwayat",
  announcementText: "Premium Chapli Jooti Collection · Delivery Across Pakistan",
  // Store WhatsApp number provided by owner:
  whatsappNumber: "923446754249",
  phoneDisplay: "+92 344 6754249",
  email: "orders@imranchapal.store",
  addressSummary: "Peshawar & Nationwide Delivery, Pakistan",
  deliveryTime: "3 to 5 business days across Pakistan",
  deliveryChargesNote: "Standard Delivery (charges calculated upon WhatsApp confirmation)",
  socials: {
    instagram: "https://instagram.com/imranchapal",
    facebook: "https://facebook.com/imranchapal",
    tiktok: "https://tiktok.com/@imranchapal",
  },
};

/**
 * Checks if the store owner is still using the placeholder WhatsApp number
 */
export function isPlaceholderWhatsAppNumber(num: string = STORE_CONFIG.whatsappNumber): boolean {
  return !num || num.includes("X") || num.includes("x") || num.length < 11;
}

/**
 * Generates an official WhatsApp click-to-chat URL
 */
export function getWhatsAppUrl(encodedMessage: string, customNumber?: string): string {
  const numberToUse = customNumber || STORE_CONFIG.whatsappNumber;
  return `https://wa.me/${numberToUse}?text=${encodedMessage}`;
}
