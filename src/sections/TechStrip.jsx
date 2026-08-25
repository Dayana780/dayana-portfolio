import { techStrip } from "../data/skills";
import "./TechStrip.css";

function TechStrip() {
  return (
    <section className="tech-strip" aria-label="Technologies I work with">
      <div className="container tech-strip__inner">
        {techStrip.map((tech) => (
          <span key={tech} className="tech-strip__item">
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}

export default TechStrip;
