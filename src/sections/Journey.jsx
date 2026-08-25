import SectionTitle from "../components/SectionTitle";
import Reveal from "../components/Reveal";
import "./Journey.css";

const steps = [
  "Frontend Fundamentals",
  "React Development",
  "Real-world React Projects",
  "Full-stack Development",
];

function Journey() {
  return (
    <section id="journey" className="section section-secondary journey">
      <div className="container journey__inner">
        <Reveal>
          <SectionTitle
            eyebrow="My Journey"
            title="Still learning, always building"
            subtitle="I'm not claiming years of experience — I'm documenting the path I'm actually on, one project at a time."
            align="center"
          />
        </Reveal>

        <Reveal as="ol" className="journey__steps">
          {steps.map((step, index) => (
            <li key={step} className="journey__step">
              <div className="journey__step-card">
                <span className="journey__step-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="journey__step-label">{step}</span>
              </div>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default Journey;
