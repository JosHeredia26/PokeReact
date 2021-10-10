import React from "react";

export const Ul = ({ children }) => {
  const className = ["list"];

  return <ul className={className}>{children}</ul>;
};
