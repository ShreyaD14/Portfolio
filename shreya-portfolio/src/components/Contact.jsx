import { useEffect, useRef, useState } from "react";
import "./Contact.css";

export default function Contact() {
  const ref = useRef(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("gmshreyadas1445@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" ref={ref}>
      <div className="container">
        <div className="section-header reveal" style={{ textAlign: "center" }}>
          <h2 className="section-title">Let's <span>Connect</span></h2>
          <p className="section-subtitle">Open to collaborations, research, and opportunities</p>
        </div>

        <div className="contact-grid reveal">
          <div className="card contact-info">
            <h3 className="contact-heading">Get In Touch</h3>
            <p className="contact-text">
              Whether you're looking to collaborate on AI/ML research, build a project together,
              or just have a conversation about technology — I'd love to hear from you!
            </p>

            <div className="contact-links">
              <button className="contact-item" onClick={copyEmail}>
                <span className="contact-icon">📧</span>
                <div>
                  <div className="contact-label">Email</div>
                  <div className="contact-value">gmshreyadas1445@gmail.com</div>
                </div>
                <span className="copy-hint">{copied ? "✓ Copied!" : "Click to copy"}</span>
              </button>

              <a
                href="tel:+919798439656"
                className="contact-item"
              >
                <span className="contact-icon">📱</span>
                <div>
                  <div className="contact-label">Phone</div>
                  <div className="contact-value">+91 97984 39656</div>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/shreya-das-2649b5289"
                target="_blank" rel="noreferrer"
                className="contact-item"
              >
                <span className="contact-icon">💼</span>
                <div>
                  <div className="contact-label">LinkedIn</div>
                  <div className="contact-value">shreya-das-2649b5289</div>
                </div>
              </a>

              <a
                href="https://github.com/ShreyaD14"
                target="_blank" rel="noreferrer"
                className="contact-item"
              >
                <span className="contact-icon">🐙</span>
                <div>
                  <div className="contact-label">GitHub</div>
                  <div className="contact-value">ShreyaD14</div>
                </div>
              </a>
            </div>
          </div>

          <div className="card contact-cta">
            <div className="cta-glow" />
            <div className="cta-content">
              <div className="cta-emoji">🚀</div>
              <h3 className="cta-title">Open to Opportunities</h3>
              <p className="cta-text">Research Collaborations · AI/ML Projects · Internships · Full-time Roles</p>
              <div className="cta-badges">
                <span className="cta-badge">AI/ML</span>
                <span className="cta-badge">Full Stack</span>
                <span className="cta-badge">Research</span>
                <span className="cta-badge">Blockchain</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">&lt;SD/&gt;</div>
            <p className="footer-text">
              © 2025 Shreya Das · Built with React · Designed with ❤️ & ☕
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
