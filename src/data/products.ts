/**
 * PRODUCT CATALOG DATA FILE - imranchapal.store
 * 
 * ⚠️ OWNER ACTION REQUIRED BEFORE LAUNCH:
 * - Update the placeholder prices (demoPricePKR) to your actual retail prices.
 * - Adjust available sizes and stock descriptions to match your actual workshop inventory.
 * - All products use local imagery matching your Peshawari Chapli Jooti footwear references.
 * - To update your catalog after launch, edit this file and redeploy to Cloudflare Pages.
 */

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  demoPricePKR: number; // Placeholder price in PKR
  isPricePlaceholder: boolean;
  image: string;
  galleryImages: string[];
  color: string;
  category: "Black Chapli" | "Navy Blue Chapli" | "Classic Peshawari" | "Premium Collection";
  collections: string[];
  sizes: number[]; // e.g. 7, 8, 9, 10, 11, 12 (standard Pakistani/UK shoe sizes)
  soleType: string;
  details: string;
  features: string[];
  isBestSeller?: boolean;
}

export const CATEGORIES = [
  "All",
  "Black Chapli",
  "Navy Blue Chapli",
  "Classic Peshawari",
  "Premium Collection",
] as const;

export type CategoryType = typeof CATEGORIES[number];

export const PRODUCTS: Product[] = [
  {
    id: "black-tire-sole-chapli",
    name: "Classic Tyre Sole Black Chapli",
    subtitle: "Traditional Double Sole with White Border Stitching",
    demoPricePKR: 4200,
    isPricePlaceholder: true,
    image: "/images/black-tire-sole.jpg",
    galleryImages: [
      "/images/black-tire-sole.jpg",
      "/images/peshawari-zalmi-black.jpg",
    ],
    color: "Classic Jet Black",
    category: "Black Chapli",
    collections: ["Black Chapli", "Classic Peshawari"],
    sizes: [7, 8, 9, 10, 11, 12],
    soleType: "Authentic Recycled Tyre Rubber Double Sole",
    details: "Masterfully constructed traditional Peshawari Chapli Jooti featuring a rugged tire sole engineered for all-day grip, accented with neat white perimeter welt stitching and polished black leather crossover straps.",
    features: [
      "Traditional crossover open-toe silhouette",
      "Reinforced heavy-duty tyre tread bottom sole",
      "Signature white contrast perimeter hand-stitching",
      "Adjustable brass buckle heel strap for custom fit",
      "Comfort padded inner footbed",
    ],
    isBestSeller: true,
  },
  {
    id: "peshawari-zalmi-black",
    name: "Zalmi Cut Peshawari Sandal",
    subtitle: "Sharply Sculpted Pointed Toe Silhouette",
    demoPricePKR: 4800,
    isPricePlaceholder: true,
    image: "/images/peshawari-zalmi-black.jpg",
    galleryImages: [
      "/images/peshawari-zalmi-black.jpg",
      "/images/black-tire-sole.jpg",
    ],
    color: "Polished Deep Black",
    category: "Classic Peshawari",
    collections: ["Black Chapli", "Classic Peshawari", "Premium Collection"],
    sizes: [7, 8, 9, 10, 11],
    soleType: "Lightweight High-Density Grooved Sole",
    details: "The renowned Zalmi pointed front cut handcrafted for formal and festive occasions. Blends iconic Peshawari heritage with a sleek, polished profile and clean edge finishes.",
    features: [
      "Pointed Zalmi front arch cut",
      "Supple polished leather straps with soft edge beveling",
      "Rust-resistant metallic buckle hardware",
      "Flexible tread sole providing stability",
      "Ideal for Shalwar Kameez and Kurta ensembles",
    ],
    isBestSeller: true,
  },
  {
    id: "heritage-black-chapli",
    name: "Heritage Charsadda Chapli Jooti",
    subtitle: "Time-Honored Broad Cut with Brass Crest Buckle",
    demoPricePKR: 4500,
    isPricePlaceholder: true,
    image: "/images/heritage-black-chapli.jpg",
    galleryImages: [
      "/images/heritage-black-chapli.jpg",
      "/images/hero-chapli-heritage.jpg",
    ],
    color: "Antiqued Matte Black",
    category: "Premium Collection",
    collections: ["Black Chapli", "Premium Collection"],
    sizes: [7, 8, 9, 10, 11, 12],
    soleType: "Classic Heavy-Duty Tyre Base",
    details: "Inspired by centuries of Charsadda shoe-crafting traditions. Broad comfort front, sturdy leather strap overlays, antiqued crest buckle, and deeply grooved tyre rubber.",
    features: [
      "Broad front fit suited for wide feet",
      "Antiqued brass crest ornament on side strap",
      "Heavy-duty tyre sole with shock-dampening heel",
      "Double reinforced strap stitching",
      "Authentic artisanal rustic finish",
    ],
    isBestSeller: false,
  },
  {
    id: "navy-blue-chapli",
    name: "Royal Navy Blue Chapli Jooti",
    subtitle: "Deep Midnight Blue with Camel Tan Leather Lining",
    demoPricePKR: 5200,
    isPricePlaceholder: true,
    image: "/images/navy-blue-chapli.jpg",
    galleryImages: [
      "/images/navy-blue-chapli.jpg",
      "/images/hero-chapli-heritage.jpg",
    ],
    color: "Midnight Navy Blue & Tan",
    category: "Navy Blue Chapli",
    collections: ["Navy Blue Chapli", "Premium Collection"],
    sizes: [7, 8, 9, 10, 11],
    soleType: "Double Tyre Sole with White Contrast Welt",
    details: "A distinguished modern classic. Features deep navy blue textured leather straps complemented by an exquisite camel tan inner lining, solid golden brass buckle, and prominent perimeter stitch.",
    features: [
      "Exclusive navy blue textured leather finish",
      "Contrasting camel tan leather interior lining",
      "Solid gold-finish brass buckle fastener",
      "Heavy tyre sole with durable welt stitch",
      "Perfect statement piece for weddings and Eid festivals",
    ],
    isBestSeller: true,
  },
  {
    id: "charsadda-navy-special",
    name: "Charsadda Special Navy Edition",
    subtitle: "Hand-Crafted Navy Blue Traditional Cut",
    demoPricePKR: 5000,
    isPricePlaceholder: true,
    image: "/images/navy-blue-chapli.jpg",
    galleryImages: [
      "/images/navy-blue-chapli.jpg",
    ],
    color: "Deep Ocean Navy",
    category: "Navy Blue Chapli",
    collections: ["Navy Blue Chapli", "Classic Peshawari"],
    sizes: [7, 8, 9, 10, 11, 12],
    soleType: "Tyre Sole with Cushion Footbed",
    details: "Specially formulated navy tone crafted in the Charsadda workshop style. Offers an ergonomic heel fit, breathable side openings, and durable everyday wear.",
    features: [
      "Deep matte navy blue tone",
      "Light tan breathable inner bed",
      "Reinforced buckle anchor",
      "Hand-trimmed tyre sole",
    ],
    isBestSeller: false,
  },
  {
    id: "kaptaan-black-signature",
    name: "Signature Kaptaan Cut Black Chapli",
    subtitle: "Bold High-Profile Arch with Tyre Tread",
    demoPricePKR: 4600,
    isPricePlaceholder: true,
    image: "/images/black-tire-sole.jpg",
    galleryImages: [
      "/images/black-tire-sole.jpg",
      "/images/heritage-black-chapli.jpg",
    ],
    color: "Glossy Jet Black",
    category: "Black Chapli",
    collections: ["Black Chapli", "Premium Collection", "Classic Peshawari"],
    sizes: [8, 9, 10, 11, 12],
    soleType: "Double Tyre High Arch Sole",
    details: "The iconic high-arch Kaptaan cut favored across Khyber Pakhtunkhwa and Punjab. Thick rubber sole base, prominent top straps, and timeless presence.",
    features: [
      "High arch Kaptaan cut",
      "Thick double layer tyre sole",
      "White perimeter running stitch",
      "Full comfort back strap",
    ],
    isBestSeller: true,
  },
];

/**
 * Size Guide Chart (Pakistani / UK shoe sizes with foot length)
 */
export const SIZE_CHART = [
  { sizeUK: 7, sizeEU: 40, lengthCm: "25.0 cm", lengthInches: '9.8"' },
  { sizeUK: 8, sizeEU: 41, lengthCm: "25.8 cm", lengthInches: '10.1"' },
  { sizeUK: 9, sizeEU: 42, lengthCm: "26.7 cm", lengthInches: '10.5"' },
  { sizeUK: 10, sizeEU: 43, lengthCm: "27.5 cm", lengthInches: '10.8"' },
  { sizeUK: 11, sizeEU: 44, lengthCm: "28.3 cm", lengthInches: '11.1"' },
  { sizeUK: 12, sizeEU: 45, lengthCm: "29.2 cm", lengthInches: '11.5"' },
];

/**
 * Frequently Asked Questions (FAQ) Data
 */
export const FAQS = [
  {
    question: "How do I place an order on WhatsApp?",
    answer: "Simply select your desired Chapli Jooti model, choose your shoe size, and click 'Order on WhatsApp' or checkout through your cart. A pre-formatted message will open in WhatsApp with your footwear selection and details. Imran Chapal will personally verify your size, address, and confirm your order before dispatch.",
  },
  {
    question: "How do I choose the correct size?",
    answer: "Our sizes follow standard Pakistani / UK footwear sizing (Sizes 7 to 12). If you usually wear size 9 in standard dress shoes, order size 9. If you have broad feet or fall between sizes, you can mention it in the order notes and we will advise you on WhatsApp.",
  },
  {
    question: "Do you offer Cash on Delivery (COD)?",
    answer: "Yes, we support Cash on Delivery across Pakistan. Once you send your order details on WhatsApp, we verify the delivery address and dispatch your parcel via registered courier.",
  },
  {
    question: "How long does delivery take in Pakistan?",
    answer: "Deliveries typically take 3 to 5 business days for major cities (Karachi, Lahore, Islamabad, Rawalpindi, Peshawar, Multan, Faisalabad) and 4 to 6 days for remote areas.",
  },
  {
    question: "Can I inspect the parcel upon delivery?",
    answer: "Courier policies vary by city, but we provide parcel tracking details and manual WhatsApp support for every single dispatch to ensure you are 100% satisfied with your pair.",
  },
];
