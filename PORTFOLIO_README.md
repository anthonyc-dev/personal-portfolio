# Anthony Crausus - Full-Stack Developer Portfolio

A modern, animated portfolio built with Next.js 15, TypeScript, Framer Motion, and Tailwind CSS.

## 🚀 Features

### Design & Animations
- **Smooth scroll navigation** with active section highlighting
- **Framer Motion animations** throughout all sections
- **Gradient backgrounds** with animated blur effects
- **Interactive hover effects** on cards and buttons
- **Responsive design** for all screen sizes
- **Dark mode support** (pre-configured)

### Sections

#### 1. Hero Section
- Animated gradient text for name
- Floating background elements
- Pulsing icons and sparkles
- Smooth scroll indicator
- CTA buttons with hover animations

#### 2. About Me Section
- Icon-based highlights with animation
- Cards with hover effects
- Staggered content reveal
- Clean, centered layout

#### 3. Skills Section
- **React Icons** integration for tech stack
- Animated skill badges with hover effects
- Gradient category headers
- Organized by technology category:
  - Frontend, Backend, Databases, Mobile, Tools, Other

#### 4. Featured Projects Section
- Detailed project cards with:
  - Problem/Goal with lightbulb icon
  - Solution with wrench icon
  - Result/Impact with trending up icon
- Technology badges
- Hover animations (lift effect)
- Links to live demos and GitHub repos

#### 5. Contact Section
- Animated contact buttons
- Email, LinkedIn, Resume download
- Floating animated backgrounds
- Gradient separators

## 🛠️ Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe code
- **Tailwind CSS** - Utility-first styling
- **ShadCN UI** - Component library
- **Framer Motion** - Animation library
- **React Icons** - Icon library (Simple Icons)
- **Lucide React** - Additional icons

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Main portfolio page
│   └── globals.css         # Global styles & animations
├── components/
│   ├── sections/
│   │   ├── hero-section.tsx
│   │   ├── about-section.tsx
│   │   ├── skills-section.tsx
│   │   ├── projects-section.tsx
│   │   └── contact-section.tsx
│   ├── ui/
│   │   ├── section.tsx     # Reusable section wrapper
│   │   ├── badge.tsx       # Badge component
│   │   ├── button.tsx      # Button component
│   │   └── card.tsx        # Card component
│   ├── navigation.tsx      # Fixed nav with smooth scroll
│   ├── project-card.tsx    # Project display component
│   └── skill-category.tsx  # Skill category component
├── data/
│   └── portfolio-data.ts   # Centralized content
└── types/
    └── portfolio.ts        # TypeScript interfaces
```

## 🎨 Customization

### Update Content
Edit `src/data/portfolio-data.ts` to customize:
- Personal information
- Skills and technologies
- Projects
- Contact links

### Change Colors
Modify color scheme in `src/app/globals.css`:
- `--primary` - Main accent color
- `--accent` - Secondary accent color
- `--background` - Background color
- `--foreground` - Text color

### Add More Animations
Import and use Framer Motion in any component:
```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

## 🚀 Getting Started

### Development
```bash
pnpm dev
```
Opens at [http://localhost:3001](http://localhost:3001)

### Build
```bash
pnpm build
```

### Production
```bash
pnpm start
```

## 📝 To-Do

- [ ] Add project screenshots/images
- [ ] Update contact email and LinkedIn URLs
- [ ] Add resume PDF to `/public` folder
- [ ] Add live demo URLs to projects
- [ ] Add GitHub repository URLs to projects
- [ ] Consider adding a blog section
- [ ] Add Google Analytics or tracking

## 💡 Tips

1. **Images**: Add project screenshots to `/public/projects/` and update `imageUrl` in project data
2. **Icons**: Browse [react-icons.github.io/react-icons](https://react-icons.github.io/react-icons/) for more icons
3. **Animations**: Adjust animation duration/delays in component files for desired effect
4. **SEO**: Update metadata in `src/app/layout.tsx`

## 🎯 Performance

- Static generation for fast loading
- Optimized images (when added)
- Minimal JavaScript bundle
- Efficient animations with Framer Motion
- Tree-shaking for unused code

---

Built with ❤️ using Next.js 15 + TypeScript + Framer Motion
