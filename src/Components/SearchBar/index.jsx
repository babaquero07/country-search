import React from "react";
import style from "./SearchBar.module.css";
import searchIcon from "../../Assets/Icons/icons8-search.svg";

const SearchBar = ({ input, onChange }) => {
  return (
    <div className={style.wrap}>
      <div className={style.search}>
        <input
          type="text"
          value={input}
          className={style.searchTerm}
          placeholder="Search country"
          onChange={({ target }) => onChange(target.value)}
        />
        <button type="submit" className={style.searchButton}>
          <img src={searchIcon} alt="main search icon" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
