import { useEffect, useRef } from "react";
import "./Experience.css";

const experiences = [
  {
    role: "DSA Content Developer",
    company: "Freelance",
    period: "Feb 2026 – Present",
    type: "Freelance",
    color: "#00d4ff",
    points: [
      "Designing structured problem sets covering arrays, strings, recursion, linked lists, and sorting",
      "Developing optimized solutions with detailed time and space complexity analysis",
    ],
  },
  {
    role: "UI/UX Intern",
    company: "BrightXR",
    period: "Nov 2025 – Dec 2025",
    type: "Internship",
    color: "#0066ff",
    points: [
      "Designed UI screens and wireframes using Figma and Canva",
      "Collaborated with developers to translate designs into functional interfaces",
    ],
  },
  {
    role: "Summer Intern",
    company: "Intel (On-Campus Program)",
    period: "May 2025 – Jun 2025",
    type: "Internship",
    color: "#4499ff",
    points: [
      "Participated in Intel-led technical sessions and hands-on tasks focused on industry practices",
      "Gained exposure to real-world engineering workflows and industry standards",
    ],
  },
  {
    role: "AI/ML Intern",
    company: "AICTE | MICROSOFT | SAP",
    period: "Jan 2025 – Feb 2025",
    type: "Internship",
    color: "#00d4ff",
    points: [
      "Built an AI health assistant using Python, TensorFlow, Transformers, and Streamlit",
      "Created predictive ML models and NLP chatbot handling real-time user queries",
    ],
  },
];

export default function Experience() {
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
    <section id="experience" ref={ref}>
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">Work <span>Experience</span></h2>
          <p className="section-subtitle">My professional journey</p>
        </div>
        <div className="timeline">
          {experiences.map((exp, i) => (
            <div
              key={exp.role + exp.company}
              className="timeline-item reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="timeline-dot" style={{ background: exp.color, boxShadow: `0 0 12px ${exp.color}` }} />
              <div className="timeline-line" />
              <div className="card timeline-card">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <div className="exp-company">{exp.company}</div>
                  </div>
                  <div className="exp-meta">
                    <span className="exp-period">{exp.period}</span>
                    <span className="exp-type" style={{ borderColor: exp.color, color: exp.color }}>{exp.type}</span>
                  </div>
                </div>
                <ul className="exp-points">
                  {exp.points.map((pt, j) => (
                    <li key={j}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
