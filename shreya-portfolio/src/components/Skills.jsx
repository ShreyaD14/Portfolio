import { useEffect, useRef } from "react";
import "./Skills.css";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: "⚡",
    skills: ["C++", "Python", "JavaScript"],
  },
  {
    title: "AI / ML",
    icon: "🤖",
    skills: ["TensorFlow", "Transformers", "OpenCV", "NLP", "Predictive ML"],
  },
  {
    title: "Web Development",
    icon: "🌐",
    skills: ["React.js", "MERN Stack", "HTML", "CSS", "Flask"],
  },
  {
    title: "Databases",
    icon: "🗄️",
    skills: ["MongoDB", "SQL", "Database Design"],
  },
  {
    title: "Core CS",
    icon: "🧠",
    skills: ["DSA", "DBMS", "SDLC", "AWS"],
  },
  {
    title: "Tools & Platforms",
    icon: "🛠️",
    skills: ["Git", "GitHub", "Streamlit", "Figma", "VS Code", "Canva"],
  },
];

export default function Skills() {
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
    <section id="skills" ref={ref}>
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">Tech <span>Stack</span></h2>
          <p className="section-subtitle">Technologies I work with</p>
        </div>
        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.title}
              className="card skill-card reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="skill-cat-header">
                <span className="skill-cat-icon">{cat.icon}</span>
                <h3 className="skill-cat-title">{cat.title}</h3>
              </div>
              <div className="skill-tags">
                {cat.skills.map(s => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
