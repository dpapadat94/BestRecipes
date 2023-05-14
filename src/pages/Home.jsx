import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import Search from "../components/Search";
import Category from "../components/Category";
import React from "react";

function Home() {
  return (
    <div>
      <div className="hero">
        <Search />
        <Category />
      </div>
      <Popular />
      <Veggie />
    </div>
  );
}

export default Home;
