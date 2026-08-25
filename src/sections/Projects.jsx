import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import { projects } from "../data/projects";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <Reveal>
          <SectionTitle
            eyebrow="Projects"
            title="Selected Work"
            subtitle="A selection of projects I've built while learning, experimenting and solving real problems."
          />
        </Reveal>

        <div className="projects__grid">
          {projects.map((project) => (
            <Reveal
              key={project.id}
              className={
                project.featured ? "projects__grid-item--featured" : ""
              }
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
