# Portfolio Website - Project Instructions

This is a modern Next.js portfolio website project configured and ready for development.

## Project Overview

- **Framework**: Next.js 16.2.3 with TypeScript
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript 5
- **Linting**: ESLint 9

## Setup Checklist

- [x] Verify that the copilot-instructions.md file in the .github directory is created.
- [x] Get Next.js project setup info
- [x] Scaffold the Next.js project
- [x] Customize portfolio components (Header, Hero, About, Projects, Contact, Footer)
- [x] Install required extensions (optional)
- [x] Compile and verify project
- [x] Create dev server task (use Webpack to avoid Turbopack issues on Windows)
- [x] Finalize documentation

## Available Scripts

### Development
```bash
npm run dev
```
Starts the development server at http://localhost:3000

### Build
```bash
npm run build -- --webpack
```
Creates an optimized production build (uses Webpack due to Windows platform)

### Start Production Server
```bash
npm start
```
Runs the production server

### Lint
```bash
npm run lint
```
Runs ESLint to check code quality

## Project Structure

```
app/
├── components/
│   ├── Header.tsx      - Navigation header with site branding
│   ├── Hero.tsx        - Hero section with call-to-action
│   ├── About.tsx       - About section with skills
│   ├── Projects.tsx    - Projects showcase with sample projects
│   ├── ProjectCard.tsx - Reusable project card component
│   ├── Contact.tsx     - Contact section with social links
│   └── Footer.tsx      - Footer component
├── layout.tsx          - Root layout with metadata
├── page.tsx            - Main portfolio page
├── globals.css         - Global styles
└── favicon.ico         - Site favicon
```

## Customization Guide

### Update Personal Information
1. **Hero Section**: Edit `app/components/Hero.tsx` - Change the intro text and description
2. **About Section**: Edit `app/components/About.tsx` - Update your bio and skills
3. **Projects**: Edit `app/components/Projects.tsx` - Add your own projects
4. **Contact**: Edit `app/components/Contact.tsx` - Update email and social links
5. **Header**: Edit `app/components/Header.tsx` - Customize navigation links

### Styling
- All components use Tailwind CSS utility classes
- Customize colors in individual component files
- Modify global styles in `app/globals.css`
- Configure Tailwind in `tailwind.config.ts`

### Dark Mode
The portfolio supports both light and dark modes with Tailwind CSS `dark:` variants

## Running the Project

1. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Then open http://localhost:3000 in your browser

2. **Build for Production**:
   ```bash
   npm run build -- --webpack
   ```

3. **Start Production Server**:
   ```bash
   npm start
   ```

## Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Other Platforms
- **Netlify**: Connect your Git repository directly to Netlify
- **Railway**: Push to GitHub and deploy from Railway dashboard
- **Self-hosted**: Build the project and run `npm start`

## Known Issues

- **Windows Platform**: The project uses Webpack instead of Turbopack due to Application Control policy restrictions. This is configured in `tasks.json`.

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
