import React from "react";

const JsonLinkLoader = ({ children: container }) => {
  // The link information is passed down as a
  // jsx container containing two spans,
  // the first for the link and the second for display text
  const linkSrc = container[0].props.children;
  const linkText = container[1].props.children;

  return <a href={linkSrc}>{linkText}</a>;
};

export default JsonLinkLoader;
