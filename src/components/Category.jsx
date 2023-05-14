import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiTacos, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <div className="icon-list">
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "nav-style")}
        to={"/cuisine/Italian"}
      >
        <FaPizzaSlice />
        <h4>Italian</h4>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "nav-style")}
        to={"/cuisine/American"}
      >
        <FaHamburger />
        <h4>American</h4>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "nav-style")}
        to={"/cuisine/Mexican"}
      >
        <GiTacos />
        <h4>Mexican</h4>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "nav-style")}
        to={"/cuisine/Japanese"}
      >
        <GiChopsticks />
        <h4>Japanese</h4>
      </NavLink>
    </div>
  );
}

export default Category;
