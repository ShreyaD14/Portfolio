import { useEffect, useRef } from "react";
import "./Projects.css";

const projects = [
  {
    title: "AI-Powered Emergency Response Drone",
    emoji: "🚁",
    badge: "🏆 Patent Filed 2025",
    badgeColor: "#ff6b35",
    description:
      "Autonomous drone for emergency response and victim detection. Features SOS-triggered auto-launch, live tracking mechanisms, and real-time civilian emergency response capabilities.",
    tags: ["Computer Vision", "OpenCV", "Autonomous Systems", "IoT", "Python"],
    highlight: true,
    links: { github: "https://github.com/ShreyaD14" },
  },
  {
    title: "Farm+ Quality-Based Agricultural Marketplace",
    emoji: "🌾",
    badge: "Full-Stack",
    badgeColor: "#00d4ff",
    description:
      "Full-stack B2B agri-marketplace enabling FPO-level aggregation and grade-based trading. Implements rule-based quality scoring (FPQI) and dynamic pricing using market data & logistics factors.",
    tags: ["MERN Stack", "MongoDB", "React.js", "Node.js", "Market Data"],
    links: { github: "https://github.com/ShreyaD14" },
  },
  {
    title: "AI Health Assistant Chatbot",
    emoji: "🏥",
    badge: "AI/ML",
    badgeColor: "#00d4ff",
    description:
      "ML chatbot providing predictive health insights and real-time guidance. Integrated TensorFlow models and Transformers for improved model reliability and user experience.",
    tags: ["TensorFlow", "Transformers", "Streamlit", "NLP", "Python"],
    links: { github: "https://github.com/ShreyaD14" },
  },
];

export default function Projects() {
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
    <section id="projects" ref={ref}>
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">My <span>Projects</span></h2>
          <p className="section-subtitle">Things I've built</p>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`card project-card reveal ${p.highlight ? "featured" : ""}`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              {p.highlight && <div className="featured-label">⭐ Featured</div>}
              <div className="project-top">
                <span className="project-emoji">{p.emoji}</span>
                <span
                  className="project-badge"
                  style={{ borderColor: p.badgeColor, color: p.badgeColor }}
                >
                  {p.badge}
                </span>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.description}</p>
              <div className="project-tags">
                {p.tags.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={p.links.github} target="_blank" rel="noreferrer" className="project-link">
                  <span>GitHub →</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
