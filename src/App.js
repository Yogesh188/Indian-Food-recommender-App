import React, { useState } from "react";
import "./styles.css";

const List = {
  NorthIndian: [
    {
      name: "Butter Chicken",
      rating: "4.5/5",
      about:
        "Butter chicken, also known as murgh makhani, is a popular Indian dish made with tender pieces of chicken in a creamy tomato-based sauce. It is flavored with a blend of spices and typically served with rice or naan bread. The dish is known for its rich and creamy texture, which is achieved by adding butter and cream to the tomato sauce. It is a delicious and flavorful meal that is enjoyed by many people around the world."
    },

    {
      name: "Aaloo Paratha",
      rating: "4/5",
      about:
        "Aloo paratha is a paratha stuffed with potato, originating from the Punjab region of South Asia. It is traditionally eaten for breakfast. It is made using unleavened dough rolled with a mixture of mashed potato and spices which is cooked on a hot tawa with butter or ghee."
    },

    {
      name: "Lassi",
      rating: "4.5/5",
      about:
        "Lassi is a blended yogurt drink that is very popular in the Northern Parts of India. It is made with blending curd or yogurt with water."
    }
  ],

  SouthIndian: [
    {
      name: "Biryani",
      rating: "4.5/5",
      about:
        "Biryani is a type of rice dish that is popular in South Asian cuisine. It is typically made with rice, spices, and meat, fish, or vegetables. Biryani is a flavorful and aromatic dish that is often served on special occasions or as a festive meal. There are many different variations of biryani, with each region and cultural group having its own unique twist on the dish."
    },

    {
      name: "Masala Dosa",
      rating: "4.5/5",
      about:
        "A staple breakfast of South India, Masala Dosa is basically a delicious masala wrapped in a crispy Dosa crepe and served with a bowl of flavourful Sambar and Chutney."
    },

    {
      name: "Idli",
      rating: "3.5/5",
      about:
        "Idli is a type of savory rice cake that is popular in South Indian cuisine. It is made by steaming a batter made from ground rice and lentils. Idli is traditionally served with a variety of accompaniments, such as coconut chutney, sambar, and vegetable curry"
    }
  ],
  Others: [
    {
      name: "Wada Pav",
      rating: "4.5/5",
      about:
        "Vada pav, also known as wada pav or vadapav, is a popular street food in India. It is made by deep-frying a spicy potato patty and serving it in a bun with various chutneys and condiments. Vada pav is often referred to as the Indian burger."
    },

    {
      name: "Misala Pav",
      rating: "4/5",
      about:
        "Misal pav is a popular dish from the Indian state of Maharashtra. It consists of misal (a spicy curry usually made from moth beans) and pav (a type of Indian bread roll). The final dish is topped with farsan or sev, onions, lemon and coriander (cilantro)."
    },

    {
      name: "Jalebi",
      rating: "4/5",
      about:
        "Jalebi is a popular sweet dish in Indian and Pakistani cuisine. It is made by deep-frying a wheat flour-based batter in a spiral or pretzel shape, and then soaking it in a sugary syrup. The syrup gives the jalebi its distinct sweet and sticky texture, and it is often flavored with cardamom, saffron, or rose water. Jalebi is typically orange or yellow in color"
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
              <p style={{ textAlign: "center" }}>{dish.about}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
