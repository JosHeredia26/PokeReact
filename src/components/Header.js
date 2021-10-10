import React from "react";

export const Header = ({ className, children }) => {
  let classes = ["header"];
  if (className) classes = [...classes, className];

  return <header className={classes.join(" ")}>{children}</header>;
};
