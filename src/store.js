import {
  faBell,
  faCommentDots,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";

export default {
  links: [
    { text: "Home" },
    { text: "Pokedex" },
    { text: "Legendaries" },
    { text: "Documentation" },
  ],

  selects: [
    { option: "Tipo" },
    { option: "Ataque" },
    { option: "Experiencia" },
  ],

  electric: "#F2CB07",
  fire: "#B23327",
  normal: "#cccccc",
  water: "#5BC7FA",
  grass: "#64D368",
  poison: "#E95AC9",
  ghost: "#012e59",
  ground: "#765B24",
  dark: "#595358",
  psychic: "#fa005a",

  pokemon: [
    {
      name: "pachirisu",
      attack: "45",
      defense: "70",
      type: ["electric"],
    },
    {
      name: "pyroar",
      attack: "68",
      defense: "72",
      type: ["fire", "normal"],
    },
    {
      name: "pikachu",
      attack: "55",
      defense: "40",
      type: ["electric"],
    },
    {
      name: "quilava",
      attack: "64",
      defense: "58",
      type: ["fire"],
    },
    {
      name: "squirtle",
      attack: "48",
      defense: "65",
      type: ["water"],
    },
    {
      name: "charizard",
      attack: "84",
      defense: "78",
      type: ["fire", "flying"],
    },
    {
      name: "mudkip",
      attack: "70",
      defense: "50",
      type: ["water"],
    },
    {
      name: "jigglypuff",
      attack: "45",
      defense: "20",
      type: ["normal", "poison"],
    },
    {
      name: "tyranitar",
      attack: "134",
      defense: "110",
      type: ["ground", "dark"],
    },
    {
      name: "bulbasaur",
      attack: "40",
      defense: "70",
      type: ["grass", "poison"],
    },
    {
      name: "koffing",
      attack: "41",
      defense: "58",
      type: ["poison"],
    },
    {
      name: "gengar",
      attack: "90",
      defense: "100",
      type: ["ghost"],
    },
  ],
};
