import React, { useState } from "react";
import "./styles.css";

const List = {
  NorthIndian: [
    {
      name: "Butter Chicken",
      rating: "4.5/5"
    },

    {
      name: "Aaloo Paratha",
      rating: "4/5"
    },

    {
      name: "Lassi",
      rating: "4.5/5"
    }
  ],

  SouthIndian: [
    {
      name: "Biryani",
      rating: "4.5/5"
    },

    {
      name: "Masala Dosa",
      rating: "4.5/5"
    },

    {
      name: "Idli",
      rating: "3.5/5"
    }
  ],
  Others: [
    {
      name: "Wada Pav",
      rating: "4.5/5"
    },

    {
      name: "Misala Pav",
      rating: "4/5"
    },

    {
      name: "Jalebi",
      rating: "4/5"
    }
  ]
};

export default function App() {
  var [region, setRegion] = useState("NorthIndian");

  function regionHandler(region) {
    setRegion(region);
  }

  return (
    <div className="App">
      <nav className="header">
        <h1>Indian food recommender app</h1>
        <small>A list of recommended Indian dishes sorted by regions.</small>
      </nav>
      <div>
        {Object.keys(List).map((region) => (
          <button onClick={() => regionHandler(region)} className="buttonStyle">
            {region}
          </button>
        ))}
      </div>

      <hr style={{ width: "70%" }}></hr>

      <ul style={{ listStyle: "none" }}>
        {List[region].map((dish) => (
          <li key={dish.name}>
            <div className="container container-center ">
              <h2 style={{ textAlign: "center", fontSize: "x-large" }}>
                {dish.name}
              </h2>
              <h3 style={{ textAlign: "center" }}>Rating: {dish.rating}</h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
