# EDGECASE LLC - Corporate Website

Professional website for EDGECASE LLC, showcasing the work and expertise of founder Ali Emami.

## Overview

This is a modern, responsive website built with Next.js 15, TypeScript, and Tailwind CSS. The site features:

- **Hero Section**: Introduction with profile and company branding
- **About Section**: Professional summary and key metrics
- **Experience Section**: Detailed work history with major clients (U.S. Air Force, American Express, Amazon)
- **Skills Section**: Technical expertise across full-stack development and AI
- **Projects Section**: Notable projects including Nayra, AMEX OPEN Platform, and more
- **Contact Section**: Direct contact information and social links

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Features**: SEO optimized, responsive design, modern UI

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, pnpm, or bun

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project"
4. Import your repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 3: Deploy from this directory

```bash
# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

## Project Structure

```
edgecase/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   ├── globals.css         # Global styles
│   └── favicon.ico         # Site icon
├── public/
│   └── images/             # Static assets
├── package.json
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## Customization

### Adding Profile Photo

To add Ali's profile photo:

1. Place the image in `public/images/` directory (e.g., `ali-emami.png`)
2. Update line 54-57 in `app/page.tsx`:

```tsx
<Image
  src="/images/ali-emami.png"
  alt="Ali Emami"
  fill
  className="object-cover"
/>
```

### Updating Content

All content is in `app/page.tsx`. Key sections:

- **Hero**: Lines 24-62
- **About**: Lines 65-101
- **Experience**: Lines 104-176
- **Skills**: Lines 179-209
- **Projects**: Lines 212-275
- **Contact**: Lines 278-322

### Updating Metadata

Edit `app/layout.tsx` to modify SEO metadata, Open Graph tags, and site title.

## Environment Variables

No environment variables required for the basic site. If you add features like analytics or forms, create a `.env.local` file:

```bash
# Example for future use
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## Performance

- Optimized fonts with `next/font`
- Responsive images with Next.js Image component
- Modern CSS with Tailwind
- Static generation for fast loading

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 EDGECASE LLC. All rights reserved.

## Contact

**Ali Emami**
- Email: ali.emami@gmail.com
- Phone: (917) 257-4316
- LinkedIn: [linkedin.com/in/aliemami](https://linkedin.com/in/aliemami)
- Location: New York, NY

---

Built with Next.js and deployed on Vercel.
