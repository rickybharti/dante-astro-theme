# Juicy Blog Setup Guide

This Astro blog is configured to be integrated as a subdirectory (`/blog`) of the main Juicy.ag website.

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build the blog:**
   ```bash
   npm run build
   ```
   This will build the blog into `../public/blog` (parent directory's public folder)

3. **Development:**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:4321/blog/` to see your blog

## 📁 Integration Structure

```
your-main-site/
├── public/
│   └── blog/          ← Astro blog builds here
├── dante-astro-theme/ ← This blog project
└── netlify.toml       ← Contains blog routing rules
```

## 🔧 Configuration

### Site Settings
Edit `src/data/site-config.ts` to update:
- Blog title and description
- Social media links
- Navigation menu
- Hero section content

### Decap CMS
- Access CMS at: `https://www.juicy.ag/blog/admin/`
- Configure Netlify Identity for authentication
- Edit `public/admin/config.yml` for CMS fields

## 📝 Creating Content

### Via CMS (Recommended)
1. Go to `/blog/admin/`
2. Log in with Netlify Identity
3. Create new posts with the visual editor

### Via Code
Create markdown files in `src/content/blog/`:

```markdown
---
title: Your Post Title
excerpt: Brief description for SEO
publishDate: 2024-01-20
isFeatured: true
tags:
  - Solana
  - DeFi
seo:
  image:
    src: '/blog/images/your-image.jpg'
    alt: Image description
---

Your content here...
```

## 🎨 Customization

### Styling
- Global styles: `src/styles/global.css`
- Tailwind config: `tailwind.config.mjs`
- Component styles: Individual component files

### SEO
Each post supports:
- Custom meta titles/descriptions
- Open Graph images
- Twitter cards
- Canonical URLs

## 🚢 Deployment

1. **Build Command:** `npm run build`
2. **Publish Directory:** `../public`
3. **Environment Variables:** None required

### Netlify Setup
1. Enable Netlify Identity for CMS access
2. Set up Git Gateway
3. Invite CMS users via Netlify Identity

## 📊 Blog Post Ideas

- "How Juicy Bots Maximize Solana LP Rewards"
- "Avoiding Rugpull Pools with Auto-Pause Strategies"
- "Solana LP Fee Mechanics — Explained Simply"
- "Inside Our PnL Engine: Visualizing Trader Edge"
- "Concentrated Liquidity on Solana: A Deep Dive"
- "Risk Management for DeFi Liquidity Providers"

## 🔗 Useful Links

- [Astro Documentation](https://docs.astro.build)
- [Decap CMS Documentation](https://decapcms.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/)

## ⚠️ Important Notes

1. The blog builds into the parent directory's `public/blog` folder
2. All blog URLs will be prefixed with `/blog/`
3. Images should be placed in `public/images/` and referenced as `/blog/images/...`
4. The RSS feed is available at `/blog/rss.xml`

## 🐛 Troubleshooting

### Build Issues
- Ensure the parent `public` directory exists
- Check that no files conflict with the main site

### CMS Access Issues
- Verify Netlify Identity is enabled
- Check Git Gateway configuration
- Ensure user has proper permissions

### Routing Issues
- Verify `netlify.toml` is in the root of your main site
- Check that redirects are properly configured 