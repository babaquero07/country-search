import React from "react";
import style from "./SearchBar.module.css";
import searchIcon from "../../Assets/Icons/icons8-search.svg";

const SearchBar = () => {
  return (
    <div className={style.wrap}>
      <div className={style.search}>
        <input
          type="text"
          className={style.searchTerm}
          placeholder="What are you looking for?"
        />
        <button type="submit" className={style.searchButton}>
          <img src={searchIcon} alt="main search icon" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
