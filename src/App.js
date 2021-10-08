import React from "react";
import { Header } from "./components/Header.js";
import { Ul } from "./components/Ul.js";
import { Link } from "./components/Link.js";
import { Image } from "./components/Image.js";
import { Footer } from "./components/Footer.js";
import { Paragraph } from "./components/Paragraph.js";
import { Main } from "./components/Main.js";
import { Input } from "./components/Input.js";
import { Container } from "./components/Container.js";
import { Select } from "./components/Select.js";
import { Card } from "./components/Card.js";
import store from "./store.js";

export function App() {
  return (
    <>
      <Header>
        <Image source="images/pokemon.png" />
        <Ul>
          {store.links.map((linkText) => (
            <Link text={linkText.text} />
          ))}
        </Ul>
      </Header>

      <Main>
        <Paragraph
          className="title-search"
          text="800 Pokemons for you to choose your favorite"
        ></Paragraph>
        <Input placeholder="Encuentra tu pokémon" />
        <Container className="selects">
          {store.selects.map((select) => (
            <Select firstOption={select.option} />
          ))}
        </Container>
        <Container className="cards">
          {store.pokemon.map((attr) => (
            <Card
              name={
                attr.name[0].toUpperCase() + attr.name.slice(1).toLowerCase()
              }
              attack={attr.attack}
              defense={attr.defense}
              type={attr.type}
              background={store[attr.type[0]]}
            />
          ))}
        </Container>
      </Main>

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
