import SectionTitle from "../components/SectionTitle";
import SkillCard from "../components/SkillCard";
import Reveal from "../components/Reveal";
import { skillGroups } from "../data/skills";
import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="section section-secondary skills">
      <div className="container">
        <Reveal>
          <SectionTitle
            eyebrow="Skills"
            title="Tools I build with"
            subtitle="A snapshot of the languages, frameworks and tools I use to design and build frontend interfaces."
          />
        </Reveal>

        <Reveal className="skills__grid">
          {skillGroups.map((group) => (
            <SkillCard
              key={group.category}
              category={group.category}
              items={group.items}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default Skills;
