import { Mail, Code2, Link2 } from "lucide-react";

import Button from "../components/Button";
import Reveal from "../components/Reveal";
import { externalLinkProps } from "../utils/links";

import "./Contact.css";

const contactLinks = [
  {
    label: "Email",
    value: "ehsaniandayana@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=ehsaniandayana@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/Dayana780",
    href: "https://github.com/Dayana780",
    icon: Code2,
  },
  {
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/dayana-ehsanian-18229b2aa/",
    href: "https://www.linkedin.com/in/dayana-ehsanian-18229b2aa/",
    icon: Link2,
  },
];

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container contact__inner">
        <Reveal className="contact__intro">
          <h2 className="contact__heading">Have a project in mind?</h2>

          <p className="contact__subtext">
            Let's build something useful, beautiful and meaningful.
          </p>

          <div className="contact__actions">
            <Button
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ehsaniandayana@gmail.com"
              variant="primary"
            >
              Send Me a Message
            </Button>

            <Button href="https://github.com/Dayana780" variant="secondary">
              View GitHub
            </Button>
          </div>
        </Reveal>

        <Reveal className="contact__links">
          {contactLinks.map(({ label, value, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              className="contact__link"
              {...(href.startsWith("mailto:") ? {} : externalLinkProps(href))}
            >
              <Icon size={17} strokeWidth={2} aria-hidden="true" />

              <span>
                <span className="contact__link-label">{label}</span>

                {value}
              </span>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
