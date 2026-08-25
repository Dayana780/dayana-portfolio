import { externalLinkProps } from "../utils/links";

import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">
            DAYANA<span className="footer__logo-dot">.DEV</span>
          </span>

          <p className="footer__tagline">Designed &amp; built with React.</p>
        </div>

        <nav className="footer__links" aria-label="Footer">
          <a
            href="https://github.com/Dayana780"
            {...externalLinkProps("https://github.com/Dayana780")}
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/dayana-ehsanian-18229b2aa/"
            {...externalLinkProps(
              "https:///www.linkedin.com/in/dayana-ehsanian-18229b2aa/",
            )}
          >
            LinkedIn
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ehsaniandayana@gmail.com"
            variant="primary"
          >
            Email
          </a>
        </nav>

        <p className="footer__copyright">
          &copy; {year} Dayana. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
