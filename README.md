# eminaliyev.com

A modern, responsive personal portfolio website showcasing my journey as a software developer. Built with performance and user experience in mind.

## 🚀 What's This?

This is my personal website where I share my professional story, experience, and skills that present everything you'd want to know about me as a developer - from my career journey to the technologies I work with.

## ✨ Features

- **Clean, Modern Design**: Minimalist interface focusing on content
- **Fully Responsive**: Looks great on all devices
- **Performance Optimized**: Fast loading with automatic compression and optimization
- **SEO Ready**: Proper meta tags and sitemap generation
- **Interactive Elements**: Smooth animations and a sticky navigation experience
- **CV Download**: Easy access to my latest resume

## 🛠 Built With

- **[Astro](https://astro.build/)** - The web framework for content-driven websites
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety and better developer experience
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Astro Icon](https://github.com/natemoo-re/astro-icon)** - Icon system with thousands of icons
- **Performance Plugins**: Automatic compression, inlining, and optimization

## 🏃‍♂️ Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (version 18 or higher).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/eminaliyev/eminaliyev.com.git
   cd eminaliyev.com
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:4321`

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Hero.astro      # Main introduction section
│   ├── Experience.astro # Work history
│   ├── Education.astro  # Educational background
│   ├── Skills.astro    # Technical skills
│   └── ...
├── layouts/            # Page layouts
├── pages/              # Page routes (just index.astro)
├── styles/             # Global styles
└── types/              # TypeScript type definitions
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run astro` - Run Astro CLI commands

## 🎨 Customization

Want to make this your own? Here's what you'll mainly want to update:

1. **Personal Info**: Edit the content in each component (`Hero.astro`, `Experience.astro`, etc.)
2. **Styling**: Customize colors and styles in the Tailwind classes
3. **Images**: Replace the images in `src/assets/images/` with your own
4. **CV**: Replace `public/CV.pdf` with your resume
5. **SEO**: Update meta information in `src/pages/index.astro`

## 🚀 Deployment

The site is configured for easy deployment to any static hosting service:

1. Build the project:

   ```bash
   npm run build
   ```

2. Deploy the `dist/` folder to your hosting service of choice (Vercel, Netlify, GitHub Pages, etc.)

The site is already configured with proper asset optimization, compression, and SEO settings for production.

## 📄 License

This project is open source. Feel free to use it as inspiration for your own portfolio!
