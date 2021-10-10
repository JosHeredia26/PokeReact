import React from "react";
import store from "../store.js";

export const Card = ({ name, attack, defense, type, background }) => {
  const image = `images/${name.toLowerCase()}.svg`;
  const style = { backgroundColor: background };
  const background2 = store[type[1]];
  const style2 = { backgroundColor: background2 };
  return (
    <div className="card">
      <div className="description">
        <p className="name">{name}</p>
        <div className="stats">
          <div className="stat">
            <div className="circle">{attack}</div>
            <p>Attack</p>
          </div>
          <div className="stat">
            <div className="circle">{defense}</div>
            <p>Defense</p>
          </div>
        </div>
        <div className="types">
          <div src={image} className="type" style={style}>
            <p>{type[0]}</p>
          </div>
          <div src={image} className={type[1] ? "type-aux" : ""} style={style2}>
            <p>{type[1]}</p>
          </div>
        </div>
      </div>
      <img src={image} className="avatar" style={style} />
    </div>
  );
};
