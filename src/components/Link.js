import React from "react";

export const Link = ({ text }) => {
  return (
    <li>
      <a className="link" href="/">
        {text}
      </a>
    </li>
  );
};
