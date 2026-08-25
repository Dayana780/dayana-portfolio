// Links that point off-site (GitHub, LinkedIn, live demos) should open in a
// new tab so visitors don't lose the portfolio. Internal anchors (#about)
// and mailto: links behave normally.
export function externalLinkProps(href = "") {
  if (href.startsWith("http")) {
    return { target: "_blank", rel: "noopener noreferrer" };
  }
  return {};
}
