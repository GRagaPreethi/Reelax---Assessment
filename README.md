# Reelax Billing Dashboard

A pixel-perfect billing and payment dashboard built with React, Vite, and Tailwind CSS, based on a Figma UI design.

## Tech Stack

- **React 18** — UI library
- **Vite** — Build tool and dev server
- **Tailwind CSS** — Utility-first styling
- **Lucide React** — Icon library
- **TypeScript** — Type safety
- **shadcn/ui** — Accessible component primitives
- **Wouter** — Lightweight client-side routing
- **React Query** — Server state management

## Features

- Responsive two-column billing layout (desktop, tablet, mobile)
- Billing information form with controlled inputs
- Order summary sidebar with pricing breakdown
- Wallet balance section with apply/remove toggle
- Coupon selection with radio cards (WELCOME20, ANNUAL50)
- Tax calculation display (18% GST)
- Proceed to Payment call-to-action

## Folder Structure

```
src/
├── assets/
├── components/
│   ├── common/
│   │   ├── Button.tsx          # Reusable button component
│   │   ├── InputField.tsx      # Labeled input with optional badge
│   │   ├── SelectField.tsx     # Labeled dropdown/select
│   │   └── SearchBar.tsx       # Search input with icon
│   ├── layout/
│   │   ├── Navbar.tsx          # Top navigation bar
│   │   └── LayoutWrapper.tsx   # Page layout wrapper
│   └── billing/
│       ├── BillingForm.tsx     # Left-side billing info form
│       ├── OrderSummary.tsx    # Right-side order sidebar
│       ├── PricingCard.tsx     # Plan pricing header
│       ├── WalletCard.tsx      # Wallet balance section
│       └── CouponCard.tsx      # Coupon selection with radio
├── hooks/
│   └── useBillingForm.ts       # Custom form state hook
├── utils/
│   └── formatCurrency.ts       # Currency formatting helpers
├── pages/
│   └── BillingPage.tsx         # Main billing page
├── App.tsx
├── main.tsx
└── index.css
```

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Local Setup

1. Clone the repository
2. Run `npm install`
3. Run `npm run dev`
4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Build for Production

```bash
npm run build
```

The production files will be output to the `dist/` folder.

## Deployment on Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Vercel auto-detects Vite — no configuration needed
4. Click **Deploy**

Your app will be live on a `.vercel.app` domain.

## Design

The UI matches a Figma billing/payment dashboard design with:
- White card backgrounds
- Blue primary action buttons (`#2563EB`)
- Soft rounded corners (`8px` radius)
- Subtle box shadows
- Inter font family
- Light gray borders and backgrounds
