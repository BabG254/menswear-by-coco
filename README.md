# Menswear by Coco

A modern men's clothing store demo built with Next.js 14, Tailwind CSS, and TypeScript. Features a clean black/white theme with red brand accents.

## Features

- **Responsive Design**: Mobile-first approach with modern UI
- **Product Catalog**: Complete shopping experience with product pages, cart, and checkout
- **Clean Architecture**: Well-structured components and clean code organization
- **Modern Stack**: Next.js 14 App Router, Tailwind CSS, TypeScript

## Pages

- **Home**: Hero banners, featured categories, new arrivals
- **Shop**: Product grid with filtering by category, size, and price
- **Product**: Detailed product pages with image carousel and related products
- **Cart**: Shopping cart with quantity management and total calculation
- **Checkout**: Simple checkout form with order simulation
- **About/Contact**: Store information and contact details

## Getting Started

First, install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── shop/           # Shop page
│   ├── product/        # Product detail pages
│   ├── cart/           # Shopping cart
│   ├── checkout/       # Checkout flow
│   ├── about/          # About page
│   └── contact/        # Contact page
├── components/         # Reusable UI components
│   ├── Navbar.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   └── ProductCard.tsx # Product display card
└── data/
    └── products.ts     # Product catalog data
```

## Customization

- Update product data in `src/data/products.ts`
- Modify brand colors in `src/app/globals.css`
- Replace placeholder images in `public/images/`
- Update contact information in components

## Deployment

Deploy easily on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-repo/menswear-by-coco)

Or build for production:

```bash
npm run build
npm start
```
