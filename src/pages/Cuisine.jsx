import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=f447cfb89ae040f9a892a6e7a872e59a&cuisine=${name}`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  };

  useEffect(() => {
    getCuisine(params.type);
    console.log(params.type);
  }, [params.type]);

  return (
    <div className="grid">
      <div className="card-2">
        <p className="title-text-2">Top Rated {params.type}</p>
      </div>
      {cuisine.map((item) => {
        return (
          <div key={item.id} className="card">
            <Link to={"/recipe/" + item.id}>
              <img className="card-img" src={item.image} alt="" />
              <p className="card-p">{item.title}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Cuisine;
