# 🏴‍☠️ One Piece Portfolio

A stunning, animated portfolio website built with Next.js, featuring 3D elements, smooth animations, and a One Piece pirate theme.

## ✨ Features

- **3D Interactive Elements**: Ocean and ship animations using Three.js
- **Smooth Animations**: Framer Motion powered transitions
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **TypeScript**: Full type safety and better development experience
- **Modern Stack**: Next.js 15, React 19, and latest technologies

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/one-piece-portfolio.git
cd one-piece-portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

### Build for Production
```bash
npm run build
```

## 🌐 Deploy to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### 1. Create GitHub Repository
- Create a new public repository named `one-piece-portfolio`
- **Don't** initialize with README (you already have one)

### 2. Push Your Code
```bash
git remote add origin https://github.com/YOUR_USERNAME/one-piece-portfolio.git
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages
- Go to repository Settings → Pages
- Source: Select "GitHub Actions"
- Your site will be available at: `https://YOUR_USERNAME.github.io/one-piece-portfolio`

## 📁 Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/          # React components
│   ├── 3d/            # Three.js 3D components
│   ├── navigation/     # Navigation components
│   ├── sections/       # Main page sections
│   └── ui/            # Reusable UI components
├── lib/                # Utility functions and animations
└── styles/             # Global styles and Tailwind config
```

## 🎨 Customization

### Content Updates
- **Hero Section**: Update name and introduction in `src/components/sections/Hero.tsx`
- **About Section**: Modify timeline and story in `src/components/sections/About.tsx`
- **Skills Section**: Update skills list in `src/components/sections/Skills.tsx`
- **Projects Section**: Add your projects in `src/components/sections/Projects.tsx`
- **Contact Section**: Update social links in `src/components/sections/Contact.tsx`

### Styling
- **Colors**: Modify theme in `tailwind.config.ts`
- **Animations**: Customize in `src/lib/animations.ts`
- **3D Elements**: Adjust in `src/components/3d/` components

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **One Piece** by Eiichiro Oda for the amazing theme inspiration
- **Three.js** for 3D graphics
- **Framer Motion** for smooth animations
- **Tailwind CSS** for utility-first styling

---

**Set sail on your coding adventure! 🏴‍☠️⚓**

For detailed deployment instructions, see [DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md)