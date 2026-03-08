import { useEffect, useRef } from "react";
import "./Achievements.css";

const achievements = [
  { icon: "♟️", title: "International FIDE-Rated Chess Player", desc: "Represented India in international competitions", color: "#ffd700" },
  { icon: "🥇", title: "State Chess Champion", desc: "5× District Champion & National Category Winner", color: "#ffd700" },
  { icon: "🚀", title: "Smart India Hackathon Qualifier", desc: "Selected among top teams nationwide", color: "#00d4ff" },
  { icon: "🏅", title: "AI-Hackmatrix 3rd Runner-Up", desc: "Competed in national-level AI hackathon", color: "#4499ff" },
  { icon: "🏆", title: "Zinnovatio 2.0 Winner", desc: "Innovation competition winner", color: "#ff6b35" },
  { icon: "📄", title: "Provisional Patent Holder", desc: "AI-Powered Emergency Response Drone · 2025", color: "#00c864" },
];

export default function Achievements() {
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
    <section id="achievements" ref={ref}>
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">Achievements & <span>Honors</span></h2>
          <p className="section-subtitle">Milestones along the way</p>
        </div>
        <div className="achievements-grid">
          {achievements.map((a, i) => (
            <div
              key={a.title}
              className="card achievement-card reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="ach-icon" style={{ background: `${a.color}15`, border: `1px solid ${a.color}30` }}>
                {a.icon}
              </div>
              <h3 className="ach-title">{a.title}</h3>
              <p className="ach-desc">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
