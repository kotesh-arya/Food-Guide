import React, { useState } from "react";
import "./styles.css";
import { regions } from "./dataBase";

var regionsArray = Object.keys(regions);

export default function App() {
  const [selectedRegion, setSelectedRegion] = useState("South");
  function onClickHandler(part) {
    setSelectedRegion(part);
  }

  return (
    <div className="App">
      <header>
        <h1>Hello Foodies!</h1>
        <h2>Perfect recipies all over India, to have a try 😋</h2>
      </header>
      <section>
        <ul>
          {regionsArray.map(function (part, index) {
            return (
              <li key={index} onClick={() => onClickHandler(part)}>
                {part}
              </li>
            );
          })}
        </ul>
        {regions[selectedRegion].map(function (part) {
          return (
            <div className="info-card">
              <img className="image-card" src={part.poster} />
              <div className="content-card">
                <div className="part-name">{part.partName}</div>
                <div className="item-name">{part.item}</div>
                <div></div>
                <div></div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
