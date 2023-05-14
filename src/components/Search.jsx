import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/searched/${input}`);
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <FaSearch></FaSearch>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="search recipes"
        value={input}
      />
    </form>
  );
}

export default Search;
