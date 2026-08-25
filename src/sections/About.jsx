import { Compass, Layers, Workflow } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import Reveal from "../components/Reveal";
import "./About.css";

// What I'm actively focused on right now — kept short and honest,
// not a list of claimed expertise.
const currentFocus = [
  { icon: Layers, label: "React patterns & component architecture" },
  { icon: Workflow, label: "Frontend-to-backend data flow" },
  { icon: Compass, label: "Writing cleaner, more readable code" },
];

function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <Reveal className="about__intro">
          <SectionTitle eyebrow="About" title="A little about me" />

          <div className="about__body">
            <p>
              I'm a junior frontend developer who enjoys turning ideas into
              interfaces people actually like using. I care about the small
              details — spacing, motion, hierarchy — because they're what
              make a website feel considered rather than thrown together.
            </p>
            <p>
              Most of my time goes into building responsive layouts with
              React and working through real frontend problems: state that's
              easy to reason about, components that stay simple to read, and
              interfaces that hold up on any screen size.
            </p>
          </div>
        </Reveal>

        <Reveal className="about__card" as="aside">
          <span className="about__card-label">Currently focused on</span>
          <ul className="about__card-list">
            {currentFocus.map(({ icon: Icon, label }) => (
              <li key={label}>
                <Icon size={17} strokeWidth={2} aria-hidden="true" />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
