# One Piece Portfolio - Set Sail for Adventure! 🏴‍☠️

A stunning, interactive portfolio website inspired by the beloved anime One Piece. This project showcases web development skills through cinematic scroll-driven animations, tasteful 3D effects, and playful micro-interactions that make you feel like you're sailing through the Grand Line.

## 🌊 Features

### ⚓ Core Features
- **Cinematic Scroll Animations**: Smooth parallax effects and scene transitions using Framer Motion and GSAP
- **3D Ship Scene**: Interactive Three.js ship bobbing on animated ocean waves
- **Wanted Poster Cards**: Flip cards styled as bounty posters for project showcase
- **Haki Glow Effects**: Purple energy aura animations for skill demonstrations
- **Transponder Snail Contact**: One Piece-themed contact form with sound effects
- **Responsive Design**: Optimized for all devices with mobile-first approach

### 🎨 Visual Design
- **One Piece Color Palette**: Straw Hat Gold, Ocean Blue, Haki Purple, Parchment Cream
- **Authentic Typography**: Bangers font for manga-style headings, Inter for readability
- **Parchment Textures**: Subtle background patterns and map-like aesthetics
- **Smooth Scrolling**: Lenis integration for buttery-smooth navigation

### ♿ Accessibility & Performance
- **Keyboard Navigation**: Full keyboard accessibility support
- **Screen Reader Friendly**: Proper ARIA labels and semantic HTML
- **Reduced Motion Support**: Respects user's motion preferences
- **Performance Optimized**: Lazy loading, code splitting, and optimized assets
- **Lighthouse Score**: Target ≥90 on both mobile and desktop

## 🚀 Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 18** - Component-based architecture
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling

### Animations & 3D
- **Framer Motion** - Declarative animations and gestures
- **React Three Fiber** - 3D graphics with Three.js
- **@react-three/drei** - Useful helpers for R3F
- **Lenis** - Smooth scrolling library

### Development
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Lucide React** - Beautiful icons

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/one-piece-portfolio.git
   cd one-piece-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
```bash
npm run dev
# or
yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
one-piece-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and CSS variables
│   │   ├── layout.tsx           # Root layout with providers
│   │   └── page.tsx             # Main page component
│   ├── components/
│   │   ├── 3d/
│   │   │   ├── Scene.tsx        # 3D canvas wrapper
│   │   │   ├── Ship.tsx         # 3D ship model
│   │   │   └── Ocean.tsx        # Animated ocean shader
│   │   ├── navigation/
│   │   │   └── Navigation.tsx   # Main navigation component
│   │   ├── providers/
│   │   │   └── SmoothScrollProvider.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx         # Landing section
│   │   │   ├── About.tsx        # About section with timeline
│   │   │   ├── Projects.tsx     # Projects showcase
│   │   │   ├── Skills.tsx       # Skills with Haki effects
│   │   │   └── Contact.tsx      # Contact form
│   │   └── ui/
│   │       └── WantedCard.tsx   # Reusable wanted poster card
│   └── lib/
│       └── utils.ts             # Utility functions
├── public/                      # Static assets
├── tailwind.config.ts           # Tailwind configuration
└── package.json
```

## 🎭 Sections Breakdown

### 1. Hero Section - "Set Sail"
- 3D ship scene with parallax mouse movement
- Animated clouds and ocean waves
- Call-to-action buttons with hover effects
- Scroll indicator animation

### 2. About Section - "Crewmate Log"
- Interactive timeline styled as a Grand Line map
- Milestone markers with achievement badges
- Responsive grid layout for desktop/mobile
- Hover effects and smooth animations

### 3. Projects Section - "Wanted Board"
- Flip cards designed as wanted posters
- Filter and search functionality
- Project status indicators (Completed/In Progress/Planned)
- Bounty values representing project impact

### 4. Skills Section - "Dev Haki"
- Category filtering (Frontend/Backend/DevOps/Blockchain)
- Skill level indicators with custom animations
- Haki glow effects on hover
- Project associations for each skill

### 5. Contact Section - "Transponder Snail"
- Themed contact form with validation
- Social media links with hover animations
- Optional sound effects toggle
- Success/error state animations

## 🎨 Customization

### Colors
Update the color palette in `tailwind.config.ts`:

```typescript
colors: {
  'straw-hat': '#F0B90B',     // Main gold
  'ocean-blue': '#0E73B8',    // Primary blue
  'haki-purple': '#6A29FF',   // Accent purple
  'parchment': '#F6F1E4',     // Background cream
  'ink-black': '#0C0C0C',     // Text color
}
```

### Content
Replace placeholder content in each section:

1. **Hero Section**: Update name, tagline, and call-to-action text
2. **About Section**: Replace timeline events with your milestones
3. **Projects Section**: Add your actual projects with real data
4. **Skills Section**: Update skills array with your technologies
5. **Contact Section**: Update social links and contact information

### 3D Models
To replace the ship with a custom model:

1. Export your model as GLB/GLTF format
2. Place it in the `public/models/` directory
3. Update the `Ship.tsx` component to load your model using `useGLTF`

## 🔧 Performance Optimizations

### Implemented Optimizations
- **Code Splitting**: Automatic route-based splitting
- **Lazy Loading**: 3D components load on demand
- **Image Optimization**: Next.js Image component
- **Bundle Analysis**: Use `npm run analyze` to check bundle size
- **Performance Monitoring**: React Three Fiber performance monitoring

### Recommended Optimizations
- **CDN**: Deploy static assets to a CDN
- **Compression**: Enable gzip/brotli compression
- **Caching**: Implement proper caching headers
- **Service Worker**: Add for offline functionality

## 📱 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

WebGL support required for 3D features. Fallback images provided for unsupported browsers.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Eiichiro Oda** - Creator of One Piece manga/anime
- **React Three Fiber Community** - Amazing 3D React ecosystem
- **Framer Motion Team** - Incredible animation library
- **Tailwind CSS** - Utility-first CSS framework

## 🚢 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in Vercel dashboard
3. Deploy with zero configuration

### Other Platforms
- **Netlify**: Add build command `npm run build`
- **AWS Amplify**: Configure build settings
- **GitHub Pages**: Use `next export` for static deployment

---

**Ready to set sail? Let's conquer the Grand Line of web development together! 🏴‍☠️**

For questions or support, feel free to reach out through the transponder snail contact form or create an issue in this repository.