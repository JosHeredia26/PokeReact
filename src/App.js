import React from "react";
import { Header } from "./components/Header.js";
import { Ul } from "./components/Ul.js";
import { Link } from "./components/Link.js";
import { Image } from "./components/Image.js";
import { Footer } from "./components/Footer.js";
import { Paragraph } from "./components/Paragraph.js";
import store from "./store.js";

export function App() {
  return (
    <>
      <Header>
        <Image source="./static/images/pokemon.png" />
        <Ul>
          {store.links.map((linkText) => (
            <Link text={linkText.text} />
          ))}
        </Ul>
      </Header>

      <Footer>
        <Paragraph
          className="footer-text"
          text="Make with &#128155; for the Pokepirat team"
        ></Paragraph>
        <Paragraph className="footer-text" text="Pokemon 2021"></Paragraph>
      </Footer>
    </>
  );
}
