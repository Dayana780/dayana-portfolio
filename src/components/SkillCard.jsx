import "./SkillCard.css";

// Displays one skill category with its list of tags.
// category: the group name, e.g. "Frontend"
// items: array of skill name strings
function SkillCard({ category, items }) {
  return (
    <div className="skill-card">
      <h3 className="skill-card__title">{category}</h3>
      <ul className="skill-card__list">
        {items.map((item) => (
          <li key={item} className="skill-card__tag">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillCard;
