import { useEffect, useRef } from "react";
import "./Publications.css";

const publications = [
  {
    type: "Patent",
    icon: "🏛️",
    color: "#ff6b35",
    title: "AI-Powered Drone System for Real-Time Civilian Emergency Response",
    meta: "Intellectual Property India · Application No. 202531075200 · 2025",
    authors: "Das, S., & Danish",
    status: "Filed",
  },
  {
    type: "IEEE",
    icon: "📡",
    color: "#00d4ff",
    title: "A Blockchain-Based Architecture for Scalable and Secure Cross-Border Payments",
    meta: "2025 IEEE ICITEICS",
    authors: "Bisht, M. S., & Das, S.",
    status: "Published",
  },
  {
    type: "Journal",
    icon: "🧠",
    color: "#4499ff",
    title: "From Fear to Forecast: ML Solutions for Mass Psychosis in Crisis Scenarios",
    meta: "Cureus Journal Series",
    authors: "Das, S. et al.",
    status: "Under Review",
  },
];

export default function Publications() {
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
    <section id="publications" ref={ref}>
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">Research & <span>Patents</span></h2>
          <p className="section-subtitle">Published work and intellectual property</p>
        </div>
        <div className="pub-list">
          {publications.map((p, i) => (
            <div
              key={p.title}
              className="card pub-card reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="pub-left">
                <div className="pub-type-badge" style={{ background: `${p.color}15`, borderColor: `${p.color}40`, color: p.color }}>
                  {p.icon} {p.type}
                </div>
              </div>
              <div className="pub-body">
                <h3 className="pub-title">{p.title}</h3>
                <div className="pub-authors">{p.authors}</div>
                <div className="pub-meta">{p.meta}</div>
              </div>
              <div className="pub-status">
                <span
                  className={`status-badge status-${p.status.toLowerCase().replace(" ", "-")}`}
                >
                  {p.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
