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

  Electric: "#F2CB07",
  Fire: "#B23327",
  Normal: "#cccccc",
  Water: "#5BC7FA",
  Grass: "#64D368",
  Poison: "#E95AC9",
  Ghost: "#012e59",
  Ground: "#765B24",
  Dark: "#595358",
  Psychic: "#fa005a",
  Fairy: "#D1766B",

  pokemon: [
    {
      name: "pachirisu",
      attack: "45",
      defense: "70",
      type: ["Electric"],
    },
    {
      name: "pyroar",
      attack: "68",
      defense: "72",
      type: ["Fire", "Normal"],
    },
    {
      name: "pikachu",
      attack: "55",
      defense: "40",
      type: ["Electric"],
    },
    {
      name: "quilava",
      attack: "64",
      defense: "58",
      type: ["Fire"],
    },
    {
      name: "squirtle",
      attack: "48",
      defense: "65",
      type: ["Water"],
    },
    {
      name: "charizard",
      attack: "84",
      defense: "78",
      type: ["Fire", "Flying"],
    },
    {
      name: "mudkip",
      attack: "70",
      defense: "50",
      type: ["Water"],
    },
    {
      name: "jigglypuff",
      attack: "45",
      defense: "20",
      type: ["Normal", "Fairy"],
    },
    {
      name: "tyranitar",
      attack: "134",
      defense: "110",
      type: ["Ground", "Dark"],
    },
    {
      name: "bulbasaur",
      attack: "40",
      defense: "70",
      type: ["Grass", "Poison"],
    },
    {
      name: "koffing",
      attack: "41",
      defense: "58",
      type: ["Poison"],
    },
    {
      name: "gengar",
      attack: "90",
      defense: "100",
      type: ["Ghost"],
    },
    {
      name: "psyduck",
      attack: "65",
      defense: "70",
      type: ["Water"],
    },
    {
      name: "moltres",
      attack: "150",
      defense: "130",
      type: ["Fire", "Flying"],
    },
    {
      name: "Mr Mime",
      attack: "80",
      defense: "80",
      type: ["Psychic", "Fairy"],
    },
  ],
};
