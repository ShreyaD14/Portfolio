# Shreya Das — Portfolio Website

Dark sci-fi themed portfolio built with React + Vite.

## 🚀 Setup & Run

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build
```

## 📁 File Structure

```
shreya-portfolio/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles/
    │   └── globals.css
    └── components/
        ├── ParticleBackground.jsx   ← Animated canvas particles
        ├── Navbar.jsx + .css        ← Fixed responsive navbar
        ├── Hero.jsx + .css          ← Typewriter + orbit rings
        ├── About.jsx + .css         ← Bio + info cards
        ├── Skills.jsx + .css        ← Tech stack grid
        ├── Projects.jsx + .css      ← 3 project cards
        ├── Experience.jsx + .css    ← Timeline layout
        ├── Publications.jsx + .css  ← IEEE / Patent / Journal
        ├── Achievements.jsx + .css  ← Awards & honors
        └── Contact.jsx + .css       ← Links + footer
```

## 🎨 Customization

- **Add your photo**: In `Hero.jsx`, replace the `<span>SD</span>` inside `.avatar-placeholder` with:
  ```jsx
  <img src="/your-photo.jpg" alt="Shreya Das" />
  ```
  Then put `your-photo.jpg` in the `public/` folder.

- **Add resume download**: Upload your PDF to `public/resume.pdf` and add a button:
  ```jsx
  <a href="/resume.pdf" download className="btn-outline">Download Resume</a>
  ```

## 🌐 Deploy

Works perfectly on **Vercel**, **Netlify**, or **GitHub Pages** (with vite build).
