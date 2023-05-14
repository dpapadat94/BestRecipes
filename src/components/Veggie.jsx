import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

function Veggie() {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    const check = localStorage.getItem("veggie");
    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(
        "https://api.spoonacular.com/recipes/random?apiKey=d38b21f96a8440b3abd4acbfccbd6365&number=9&tags=vegetarian"
      );
      const data = await api.json();
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setVeggie(data.recipes);
      console.log(data);
    }
  };

  return (
    <div>
      <div className="wrapper">
        <h3 className="title-text">Veggie Picks</h3>
        <Splide
          options={{
            perPage: 5,
            pagination: false,
            drag: "free",
            gap: "3rem",
          }}
        >
          {veggie.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <div className="card">
                  <Link to={"/recipe/" + recipe.id}>
                    <p className="card-p">{recipe.title}</p>
                    <img
                      className="card-img"
                      src={recipe.image}
                      alt="recipe image"
                    />
                  </Link>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
}

export default Veggie;
