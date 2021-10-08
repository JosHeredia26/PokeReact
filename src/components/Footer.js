import React from "react";

export const Footer = ({ className, children }) => {
  let classes = ["footer"];
  if (className) classes = [...classes, className];

  return <footer className={classes.join(" ")}>{children}</footer>;
};
