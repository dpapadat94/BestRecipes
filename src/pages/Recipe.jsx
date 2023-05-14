import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=f447cfb89ae040f9a892a6e7a872e59a&number=9`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };
  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <div className="detail-wrapper">
      <div>
        <p className="title-text">{details.title}</p>
        <img src={details.image} alt="" />
      </div>
      <div className="info">
        <div>
          <button
            onClick={() => {
              setActiveTab("instructions");
            }}
            className={
              activeTab === "instructions" ? "active button" : "button"
            }
          >
            Instructions
          </button>
          <button
            onClick={() => {
              setActiveTab("ingredients");
            }}
            className={activeTab === "ingredients" ? "active button" : "button"}
          >
            Ingredients
          </button>
        </div>

        {activeTab === "instructions" && (
          <div className="display-box">
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}
        {activeTab === "ingredients" && (
          <div className="display-box">
            <ul>
              {details.extendedIngredients.map((ingredient) => {
                return <li key={ingredient.id}>{ingredient.original}</li>;
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Recipe;
