# Gustavo Del Prato Portfolio

A professional portfolio website showcasing web design projects, visual art, and music.

## Tech Stack

- **Framework:** Next.js 16 with App Router
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deployment:** Vercel
- **Organization:** OpenSpec

## Project Structure

```
portfolio/
├── src/
│   └── app/
│       ├── page.tsx           # Homepage
│       ├── web-projects/      # Web design portfolio
│       ├── art/               # Visual art gallery
│       ├── music/             # Music with SoundCloud
│       ├── about/             # About & resume
│       └── contact/           # Contact form
├── openspec/                  # OpenSpec configuration
└── public/                    # Static assets
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for production:**
   ```bash
   npm run build
   ```

## Content Setup

### Web Projects
Edit `src/app/web-projects/page.tsx` to update project descriptions and URLs.

### Visual Art
- Add TouchDesigner videos to `/public/videos/`
- Update YouTube video IDs in `src/app/art/page.tsx`
- Add images to `/public/art/`

### Music
- Get your SoundCloud track IDs
- Update them in `src/app/music/page.tsx`

### About Page
Customize your bio, skills, and experience in `src/app/about/page.tsx`

### Contact Page
Configure the contact form in `src/app/contact/page.tsx`

## Deployment to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Connect your custom domain (gustavodelprato.com)
4. Deploy!

## OpenSpec

This project uses OpenSpec for organized development:

```bash
# Update OpenSpec instructions
openspec update

# View project documentation
cat openspec/project.md
```

## Performance Optimizations

- Static page generation for fast loading
- Optimized images with Next.js Image component
- Minimal JavaScript for Vercel free tier
- Tailwind CSS for small bundle size

## License

Personal portfolio - All rights reserved
