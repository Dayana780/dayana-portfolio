import { externalLinkProps } from "../utils/links";

// Reusable button.
// Renders an <a> when "href" is passed, otherwise a <button>.
//
// variant: "primary" | "secondary" | "ghost"

function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "",
  icon: Icon,
  type = "button",
}) {
  const className = `btn btn-${variant} ${size ? `btn-${size}` : ""}`.trim();

  if (href) {
    const isMailto = href.startsWith("mailto:");

    return (
      <a
        href={href}
        className={className}
        onClick={onClick}
        {...(!isMailto ? externalLinkProps(href) : {})}
      >
        {children}

        {Icon && <Icon size={16} strokeWidth={2.25} aria-hidden="true" />}
      </a>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      {children}

      {Icon && <Icon size={16} strokeWidth={2.25} aria-hidden="true" />}
    </button>
  );
}

export default Button;
