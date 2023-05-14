import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Searched() {
  const [searchedReacipes, setsearchedReacipes] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=f447cfb89ae040f9a892a6e7a872e59a&query=${name}`
    );
    const recipes = await data.json();
    setsearchedReacipes(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <div className="grid">
      <div className="card-2">
        <p className="title-text-2">{params.search} Recipes</p>
      </div>
      {searchedReacipes.map((item) => {
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

export default Searched;
