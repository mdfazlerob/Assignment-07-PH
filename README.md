# 🛒 BazarDor (বাজার দর) — Daily Commodity Price Tracker

**BazarDor** is a modern, responsive, and full-stack web application designed to help consumers, merchants, and market observers in Bangladesh track daily essential commodity prices. It offers real-time price updates, daily inflation/deflation insights, regional market breakdowns, and secure personalized profiles.

---

## 🌐 Project Links

- **Live Deployment (Vercel):** [https://bazardor-for-ph.vercel.app](https://bazardor-jet.vercel.app)
- **Localhost URL:** [http://localhost:3000](http://localhost:3000)

---

## 📖 Description

In today's fast-moving market, everyday food and grocery prices fluctuate constantly. **BazarDor** bridges the information gap by providing transparent, up-to-date market rates across all major divisions in Bangladesh. Built with Next.js 16 App Router, React 19, and Better Auth with MongoDB, the application delivers a seamless experience with localized Bengali number and date formatting, protected member routes, and interactive price comparisons.

---

## 🛠️ Technologies Used

- **Framework:** Next.js 16 (App Router)
- **Library:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4, DaisyUI
- **Authentication:** Better Auth (Email/Password, Google OAuth, GitHub OAuth)
- **Database:** MongoDB (Native Driver & Better Auth Adapter)
- **Icons & Notifications:** Lucide React, React Hot Toast
- **Deployment & Hosting:** Vercel

---

## ✨ Key Features (Minimum 5)

### 1. 📈 Real-Time Price Ticker & Category Navigation
- Features an infinite scrolling marquee ticker displaying commodity names, current rates, and live price movements (▲ / ▼).
- Quick category bar with Bengali date integration to browse through 8 essential food groups: Rice, Lentils, Oil, Vegetables, Fish, Meat, Eggs & Milk, and Spices.

### 2. ⚖️ Daily Top Risers & Fallers (আজ দাম বেড়েছে / কমেছে)
- **Top Risers (আজ দাম বেড়েছে):** Spotlights products with the highest price increases compared to yesterday.
- **Top Fallers (আজ দাম কমেছে):** Displays budget-friendly items with maximum price drops.
- Clean presentation with color-coded badges, percentage indicators, and formatted Bengali numerals (e.g., ১৪৮ টাকা).

### 3. 🔒 Protected Product Details & Division-Wise Comparison
- Secure `/product/[slug]` route accessible exclusively to authenticated users.
- Highlights essential metrics including lowest price, highest price, and national average rate.
- Interactive table comparing regional prices across Dhaka, Chittagong, Rajshahi, Khulna, Sylhet, and Mymensingh with instant search filtering.

### 4. 🔀 Smart Numeric Sorting & Category Filtering
- Dynamic category pages with intelligent sorting:
  - **ডিফল্ট (Default)**
  - **দাম: কম থেকে বেশি (Price: Low to High)**
  - **দাম: বেশি থেকে কম (Price: High to Low)**
- Pure numeric sorting logic preventing string-based order discrepancies, paired with responsive skeleton loaders and empty states.

### 5. 👤 User Authentication & Profile Management
- Powered by Better Auth with session management and route protection.
- Secure user profile dashboard at `/profile` showcasing user details, join date, and avatar.
- Functional profile editing route at `/profile/edit` allowing users to update their display name with instant toast feedback.

### 6. 🔑 Multi-Provider OAuth Sign-In
- Supports seamless one-click sign-in with **Google** and **GitHub** alongside standard Email & Password registration.
- Includes automatic account linking for hassle-free login across multiple providers.
