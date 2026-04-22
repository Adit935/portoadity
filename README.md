# My Portfolio Website

A modern, responsive portfolio website built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- 🎯 Modern, minimal design with dark mode support
- ⚡ Fast performance with Next.js 16+
- 📱 Fully responsive on all devices
- 🎨 Beautiful UI components with Tailwind CSS
- ♿ Accessible and SEO-friendly
- 📊 Project showcase section
- 💬 Contact section

## Tech Stack

- **Framework**: Next.js 16+
- **UI Library**: React 19+
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript 5
- **Linting**: ESLint 9

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building

Build for production:

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

### Production

Start the production server:

```bash
npm start
# or
yarn start
# or
pnpm start
# or
bun start
```

## Project Structure

```
app/
├── components/          # Reusable React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Projects.tsx    # Projects showcase
│   ├── ProjectCard.tsx # Individual project card
│   ├── Contact.tsx     # Contact section
│   └── Footer.tsx      # Footer
├── layout.tsx          # Root layout
├── page.tsx            # Home page
├── globals.css         # Global styles
└── favicon.ico         # Site favicon
```

## Customization

### Edit Content
- **Hero Section**: Update hero text in `components/Hero.tsx`
- **About Section**: Modify content in `components/About.tsx`
- **Projects**: Add/edit projects in `components/Projects.tsx`
- **Contact Links**: Update contact info in `components/Contact.tsx`
- **Header Navigation**: Modify links in `components/Header.tsx`

### Styling
All styling uses Tailwind CSS. Customize colors and styles in `tailwind.config.js` or directly in component files.

## Deploy

The easiest way to deploy is to use [Vercel](https://vercel.com):

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## License

MIT License - feel free to use this project for your own portfolio!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
