import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Searched() {
  const [searchedReacipes, setsearchedReacipes] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=d38b21f96a8440b3abd4acbfccbd6365&query=${name}`
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
