import { ArrowUpRight, Code2 } from "lucide-react";
import { externalLinkProps } from "../utils/links";
import "./ProjectCard.css";

// Displays a single project. When "featured" is true, the card renders
// in a larger, two-column layout to highlight the main project.
function ProjectCard({ project }) {
  const { name, description, image, technologies, liveUrl, githubUrl, featured } =
    project;

  return (
    <article className={`project-card ${featured ? "project-card--featured" : ""}`}>
      <div className="project-card__image-wrap">
        <img
          src={image}
          alt={`Preview of the ${name} project`}
          className="project-card__image"
          loading="lazy"
        />
      </div>

      <div className="project-card__content">
        {featured && <span className="eyebrow">Featured Project</span>}
        <h3 className="project-card__name">{name}</h3>
        <p className="project-card__description">{description}</p>

        <ul className="project-card__tech">
          {technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <div className="project-card__actions">
          <a
            href={liveUrl}
            className="project-card__link"
            aria-label={`View live demo of ${name}`}
            {...externalLinkProps(liveUrl)}
          >
            Live Demo <ArrowUpRight size={15} strokeWidth={2.25} aria-hidden="true" />
          </a>
          <a
            href={githubUrl}
            className="project-card__link"
            aria-label={`View source code of ${name} on GitHub`}
            {...externalLinkProps(githubUrl)}
          >
            GitHub <Code2 size={15} strokeWidth={2.25} aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
