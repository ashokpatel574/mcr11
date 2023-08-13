import React, { useState } from "react";
import { useData } from "../context/DataContext";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const { dispatch } = useData();
  const navigate = useNavigate();

  const searchInputHandler = (e) => {
    setSearchInput(e.target.value);
    dispatch({ type: "SEARCH_INPUT_KEY", payload: e.target.value });
  };

  function NavLinkStyle({ isActive }) {
    return { color: isActive && "blue" };
  }

  return (
    <header className="header">
      <nav>
        <h3 onClick={() => navigate("/")}>IMDB</h3>
        <div className="searchInput_container">
          <label htmlFor="searchInput"></label>
          <input
            type="text"
            name="searchInput"
            id="searchInput"
            className="searchInput"
            placeholder="Search Movie by title, cast or director..."
            value={searchInput}
            onChange={(e) => searchInputHandler(e)}
          />
        </div>

        <ul className="navLink_container_list">
          <li className="navLink_listItem">
            <NavLink to="/" style={NavLinkStyle}>
              Movies
            </NavLink>
          </li>
          <li className="navLink_listItem">
            <NavLink to="/watchlist" style={NavLinkStyle}>
              Watch List
            </NavLink>
          </li>
          <li className="navLink_listItem">
            <NavLink to="/starred" style={NavLinkStyle}>
              Starred Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
