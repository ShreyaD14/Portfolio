import { useEffect, useRef } from "react";
import "./Hero.css";

const roles = ["AI/ML Engineer", "Researcher", "Full-Stack Developer", "Chess Champion"];

export default function Hero() {
  const roleRef = useRef(null);

  useEffect(() => {
    let i = 0, j = 0, deleting = false, timeout;
    const type = () => {
      const word = roles[i % roles.length];
      if (!deleting) {
        if (roleRef.current) roleRef.current.textContent = word.slice(0, j + 1);
        j++;
        if (j === word.length) {
          deleting = true;
          timeout = setTimeout(type, 1800);
          return;
        }
      } else {
        if (roleRef.current) roleRef.current.textContent = word.slice(0, j - 1);
        j--;
        if (j === 0) {
          deleting = false;
          i++;
        }
      }
      timeout = setTimeout(type, deleting ? 60 : 90);
    };
    type();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-container container">
        <div className="hero-content">
          <div className="hero-greeting">Hello, World -_-</div>
          <h1 className="hero-name">
            Hi, I'm <span className="name-glow">Shreya Das</span>
          </h1>
          <div className="hero-role">
            <span ref={roleRef} className="role-text"></span>
            <span className="cursor">|</span>
          </div>
          <p className="hero-description">
            Computer Science undergrad at Chandigarh University with published research in
            ML & Blockchain. Provisional patent holder. International FIDE-rated chess player.
            Building intelligent systems that solve real-world problems.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">3+</span>
              <span className="stat-label">Publications</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">1</span>
              <span className="stat-label">Patent Filed</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">8.32</span>
              <span className="stat-label">CGPA</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">FIDE</span>
              <span className="stat-label">Rated Player</span>
            </div>
          </div>
          <div className="hero-buttons">
            <a href="#projects" className="btn-primary"
              onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}>
              <span>⚡ View Projects</span>
            </a>
            <a href="/resume.pdf" download="ShreyaDas_Resume.pdf" className="btn-primary btn-resume">
              <span>📄 Download Resume</span>
            </a>
            <a href="#contact" className="btn-outline"
              onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}>
              Contact Me
            </a>
            <a
              href="https://linkedin.com/in/shreya-das-2649b5289"
              target="_blank" rel="noreferrer"
              className="btn-outline"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="orbit-ring ring-1" />
          <div className="orbit-ring ring-2" />
          <div className="orbit-ring ring-3" />
          <div className="avatar-container">
            <div className="avatar-glow" />
            <div className="avatar-placeholder">
              <img src="/photo.png" />
            </div>
          </div>
          <div className="floating-badge badge-1">
            <span className="badge-icon">🤖</span>
            <span>AI/ML</span>
          </div>
          <div className="floating-badge badge-2">
            <span className="badge-icon">♟️</span>
            <span>Chess</span>
          </div>
          <div className="floating-badge badge-3">
            <span className="badge-icon">📄</span>
            <span>Patent</span>
          </div>
          <div className="floating-badge badge-4">
            <span className="badge-icon">🔗</span>
            <span>Blockchain</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <span>Scroll to explore</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
