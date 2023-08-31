import classes from "./SearchBox.module.css";
import React, { useState } from "react";

const SearchBox = ({ onSearch }) => {

  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => { 
    setSearchValue(event.target.value);
  }

  const handleSearch = () => { 
    onSearch(searchValue);
  }

  return (
    <div className={classes["has-search"]}>
      <input
        type="text"
        className="form-control"
        placeholder="Search some stocks"
        value={searchValue}
        onChange={handleInputChange}
      />
      <div className="input-group-append">
        <button className="btn btn-secondary" type="button" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
 