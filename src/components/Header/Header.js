import React, { useState } from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.png";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

import "./Header.scss";

const Header = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search === "") return alert("Please enter search term :)");
    dispatch(fetchAsyncMovies(search));
    dispatch(fetchAsyncShows(search));
    setSearch("");
  };
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Movie App</Link>
      </div>
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={search}
            placeholder="Search Movies or Shows"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
