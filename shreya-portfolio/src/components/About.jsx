import { useEffect, useRef } from "react";
import "./About.css";

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref}>
      <div className="container">
        <div className="about-grid">
          <div className="reveal">
            <div className="section-header">
              <h2 className="section-title">About <span>Me</span></h2>
              <p className="section-subtitle">Researcher · Builder · Strategist</p>
            </div>
            <p className="about-text">
              I'm an AI/ML engineer and blockchain researcher with published research and a provisional patent in
              Machine Learning and Blockchain systems. Currently pursuing B.E. in Computer Science Engineering
              at Chandigarh University (CGPA: 8.32), batch of 2027.
            </p>
            <p className="about-text">
              Skilled in DSA and full-stack development, I build scalable, fintech-ready solutions.
              Beyond code, I'm an International FIDE-rated chess player — a discipline that sharpens
              my analytical thinking and strategic problem-solving.
            </p>
            <div className="about-actions">
              <a
                href="https://linkedin.com/in/shreya-das-2649b5289"
                target="_blank" rel="noreferrer"
                className="btn-primary"
              ><span>🔗 LinkedIn</span></a>
              <a
                href="https://github.com/ShreyaD14"
                target="_blank" rel="noreferrer"
                className="btn-outline"
              >GitHub</a>
            </div>
          </div>

          <div className="about-right reveal">
            <div className="info-grid">
              <div className="card info-card">
                <div className="info-icon">🎓</div>
                <div>
                  <div className="info-label">Education</div>
                  <div className="info-value">B.E. CSE, CU</div>
                  <div className="info-sub">2023–2027 · CGPA 8.32</div>
                </div>
              </div>
              <div className="card info-card">
                <div className="info-icon">📍</div>
                <div>
                  <div className="info-label">Location</div>
                  <div className="info-value">India</div>
                  <div className="info-sub">Available Remotely</div>
                </div>
              </div>
              <div className="card info-card">
                <div className="info-icon">📧</div>
                <div>
                  <div className="info-label">Email</div>
                  <div className="info-value">gmshreyadas1445</div>
                  <div className="info-sub">@gmail.com</div>
                </div>
              </div>
              <div className="card info-card">
                <div className="info-icon">♟️</div>
                <div>
                  <div className="info-label">Chess</div>
                  <div className="info-value">FIDE Rated</div>
                  <div className="info-sub">5× District Champion</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
