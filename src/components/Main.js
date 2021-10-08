import React from "react";

export const Main = ({ className, children }) => {
  let classes = ["main"];
  if (className) classes = [...classes, className];

  return <main className={classes.join(" ")}>{children}</main>;
};
