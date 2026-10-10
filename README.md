# IMRAN CHAPAL (imranchapal.store)
### Premium Pakistani Peshawari Chapli Jooti Frontend Web Store

A mobile-first, high-performance e-commerce frontend designed specifically for **IMRAN CHAPAL** (`imranchapal.store`), showcasing traditional Pakistani Chapli Jootis and Peshawari sandals with direct WhatsApp ordering and Cash on Delivery support.

---

## 📋 PRE-LAUNCH CHECKLIST (Values You Must Replace)

Because this website does not require an expensive backend, database, or fake admin panel, all store data is maintained in clean, well-commented TypeScript files. 

Before opening your store to the public, update these exact values:

### 1. Store Configuration & WhatsApp Number
📁 **File:** `src/data/config.ts`
- **`whatsappNumber`**: Set to `"923446754249"` (`0344-6754249`). All WhatsApp ordering buttons and checkout redirects now directly message this number.
- **`phoneDisplay`**: Set to `"+92 344 6754249"`.
- **`email`**: Replace `"orders@imranchapal.store"` with your active email address if needed.
- **`socials`**: Replace the sample Instagram, Facebook, and TikTok links with your brand's accounts.
- **`deliveryTime`**: Update standard delivery window (e.g., `"3 to 5 business days"`).

### 2. Product Catalog & Retail Prices
📁 **File:** `src/data/products.ts`
- **`demoPricePKR`**: Replace all demo prices (currently 4,200 – 5,200 PKR) with your actual retail selling prices.
- **`isPricePlaceholder`**: Set to `false` once you have entered your final retail prices.
- **`sizes`**: Adjust available size arrays (`[7, 8, 9, 10, 11, 12]`) according to your actual workshop stock.
- **`details` & `features`**: Customize descriptions, sole types (e.g., double tyre sole, crepe sole), and colors.

### 3. Brand Story (Hamari Kahani)
📁 **File:** `src/components/OurStory.tsx`
- Edit the Roman English brand introduction narrative to reflect your workshop's personal history, craftsmen background, and heritage.

---

## 🚀 How to Run Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open `http://localhost:3000` in your browser.

4. To test a production build:
   ```bash
   npm run build
   ```

---

## 🌐 Free Deployment to Cloudflare Pages

You can host **imranchapal.store** 100% free on **Cloudflare Pages** with high speed, global edge caching, and free SSL:

### Step 1: Push Code to GitHub
1. Create a free account on [GitHub.com](https://github.com).
2. Create a new repository (e.g. `imran-chapal-store`).
3. Commit and push your project files to this repository:
   ```bash
   git init
   git add .
   git commit -m "Initial launch of Imran Chapal store"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/imran-chapal-store.git
   git push -u origin main
   ```

### Step 2: Deploy on Cloudflare Pages
1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com).
2. On the left sidebar, click **Workers & Pages**.
3. Click **Create Application** > select the **Pages** tab > click **Connect to Git**.
4. Select your GitHub repository (`imran-chapal-store`).
5. Configure the build settings:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node.js Version**: 18 or 20 (set Environment variable `NODE_VERSION` to `20` if prompted)
6. Click **Save and Deploy**. Cloudflare Pages will build and deploy your site in less than 60 seconds.

---

## 🔗 Connecting Your Custom Domain (`imranchapal.store`)

Once your Cloudflare Pages deployment finishes:

1. In the Cloudflare Dashboard, go to your Pages project.
2. Click on the **Custom domains** tab at the top.
3. Click **Set up a custom domain**.
4. Enter your domain: `imranchapal.store` (and optionally `www.imranchapal.store`).
5. **If your domain DNS is managed by Cloudflare:**
   - Cloudflare will automatically add the required CNAME record and configure routing instantly.
6. **If your domain was purchased elsewhere (Namecheap, GoDaddy, Porkbun, etc.):**
   - Cloudflare will prompt you with the CNAME record (e.g., pointing to `<your-project>.pages.dev`).
   - Add this CNAME record into your domain registrar's DNS settings.
7. Cloudflare automatically provisions and renews a free **SSL/TLS certificate** for your domain.

---

## 📱 How WhatsApp Ordering Works

1. **Cart Checkout:** Customers add desired footwear models, select their UK/PK size, and enter their name, phone, city, and address in the checkout drawer.
2. **URL Generation:** The application compiles an order summary and converts it into a WhatsApp click-to-chat link (`https://wa.me/PHONE_NUMBER?text=ENCODED_MESSAGE`).
3. **Manual Confirmation:** When the customer taps "Send Order Request", WhatsApp opens with the pre-filled order text. Imran Chapal receives the message and manually confirms:
   - Exact size fit and measurement guidance
   - Stock availability
   - Standard delivery charges and Cash on Delivery verification
4. **Zero Risk:** No fake online credit card processing or payment gateways are used. All transactions are securely coordinated one-on-one between you and your customer.

---

## 🛠️ Technology Stack
- **Framework:** React 19, TypeScript
- **Bundler:** Vite
- **Styling:** Tailwind CSS v4, Lucide Icons
- **Palette:** Dark Navy (`#080B12`, `#0E1526`), Rich Black, Warm Cream (`#FAF7F2`), Metallic Gold (`#C5A059`, `#D4AF37`)
- **Assets:** Local footwear assets matching original reference models (tyre double soles, Zalmi cut, heritage burlap scene, royal navy edition)
