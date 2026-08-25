import { ArrowRight } from "lucide-react";
import Button from "../components/Button";
import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__background" aria-hidden="true">
        <div className="hero__grid" />
        <div className="hero__glow" />
      </div>

      <div className="container hero__content">
        <span className="eyebrow">Frontend Developer</span>

        <h1 className="hero__heading">
          Building digital experiences
          <br />
          that feel as good as they work.
        </h1>

        <p className="hero__subtext">
          I'm Dayana, a frontend developer focused on building responsive,
          user-friendly and modern web experiences with React.
        </p>

        <div className="hero__actions">
          <Button href="#projects" variant="primary" icon={ArrowRight}>
            View My Work
          </Button>
          <Button href="#contact" variant="secondary">
            Let's Talk
          </Button>
        </div>

        <div className="hero__status">
          <span className="hero__status-dot" aria-hidden="true" />
          Open to opportunities
        </div>
      </div>
    </section>
  );
}

export default Hero;
