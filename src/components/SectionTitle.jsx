import "./SectionTitle.css";

// Reusable heading used at the top of each section.
// eyebrow: small label above the heading (optional)
// title: the main heading text
// subtitle: supporting text below the heading (optional)
// align: "left" or "center"
function SectionTitle({ eyebrow, title, subtitle, align = "left" }) {
  return (
    <div className={`section-title section-title--${align}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {subtitle && <p className="section-title__subtitle">{subtitle}</p>}
    </div>
  );
}

export default SectionTitle;
