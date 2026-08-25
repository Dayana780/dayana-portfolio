import { useReveal } from "../hooks/useReveal";

// Wraps content and fades/lifts it into place once it enters the viewport.
// If JavaScript is unavailable, the <noscript> rule in index.html keeps
// everything fully visible instead.
function Reveal({ children, className = "", as: Tag = "div" }) {
  const { ref, isVisible } = useReveal();

  return (
    <Tag ref={ref} className={`reveal ${isVisible ? "is-visible" : ""} ${className}`.trim()}>
      {children}
    </Tag>
  );
}

export default Reveal;
