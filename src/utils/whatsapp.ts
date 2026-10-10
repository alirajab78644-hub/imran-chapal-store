import { STORE_CONFIG, isPlaceholderWhatsAppNumber } from "../data/config";
import { Product } from "../data/products";

export interface CartItem {
  product: Product;
  selectedSize: number;
  quantity: number;
}

export interface CheckoutCustomerInfo {
  fullName: string;
  phone: string;
  city: string;
  fullAddress: string;
  orderNotes?: string;
}

/**
 * Format currency in Pakistani Rupees (PKR)
 */
export function formatPKR(amount: number): string {
  return `Rs. ${amount.toLocaleString("en-PK")}`;
}

/**
 * Creates the formatted WhatsApp message text for a complete cart checkout order
 */
export function generateCartOrderMessage(
  items: CartItem[],
  customer: CheckoutCustomerInfo,
  subtotal: number
): string {
  const lineSeparator = "------------------------------";
  
  const productList = items
    .map(
      (item, idx) =>
        `${idx + 1}. *${item.product.name}*\n` +
        `   • Size: UK ${item.selectedSize}\n` +
        `   • Color: ${item.product.color}\n` +
        `   • Qty: ${item.quantity}\n` +
        `   • Price: ${formatPKR(item.product.demoPricePKR)} each\n` +
        `   • Item Subtotal: ${formatPKR(item.product.demoPricePKR * item.quantity)}`
    )
    .join("\n\n");

  const addressBlock = customer.fullAddress.trim()
    ? `\n*Delivery Address:*\n${customer.fullAddress}, ${customer.city}`
    : `\n*City:* ${customer.city || "Not specified"}`;

  const notesBlock = customer.orderNotes?.trim()
    ? `\n*Order Notes / Custom Size Request:*\n${customer.orderNotes.trim()}`
    : "";

  const message = 
`Assalam-o-Alaikum Imran Chapal! 
I would like to place an order request via *imranchapal.store*:

*ORDER SUMMARY:*
${lineSeparator}
${productList}
${lineSeparator}
*Estimated Subtotal:* ${formatPKR(subtotal)}
*(Standard delivery charges to be confirmed via WhatsApp)*

*CUSTOMER DETAILS:*
• Name: ${customer.fullName}
• Phone: ${customer.phone}${addressBlock}${notesBlock}

Please verify availability and let me know the final delivery details to confirm my order. Shukriya!`;

  return message;
}

/**
 * Creates the formatted WhatsApp message text for a single product fast order
 */
export function generateSingleProductOrderMessage(
  product: Product,
  selectedSize: number,
  quantity: number = 1,
  customerName?: string
): string {
  const total = product.demoPricePKR * quantity;
  const greeting = customerName
    ? `Assalam-o-Alaikum Imran Chapal, my name is ${customerName}.`
    : `Assalam-o-Alaikum Imran Chapal!`;

  const message =
`${greeting}
I would like to order this Chapli Jooti from *imranchapal.store*:

• *Product:* ${product.name}
• *Color:* ${product.color}
• *Selected Size:* UK ${selectedSize}
• *Quantity:* ${quantity}
• *Price:* ${formatPKR(product.demoPricePKR)} each
• *Total:* ${formatPKR(total)}

Please let me know availability, delivery charges, and how to confirm this order. Shukriya!`;

  return message;
}

/**
 * Generates the WhatsApp URL or handles placeholder warning
 */
export function createWhatsAppOrderLink(messageText: string): {
  url: string;
  isPlaceholder: boolean;
  number: string;
  rawText: string;
} {
  const isPlaceholder = isPlaceholderWhatsAppNumber();
  const encodedText = encodeURIComponent(messageText);
  const number = STORE_CONFIG.whatsappNumber;
  const url = `https://wa.me/${number}?text=${encodedText}`;

  return {
    url,
    isPlaceholder,
    number,
    rawText: messageText,
  };
}
