import React from "react";
import "../styles/search.css";
import SearchIcon from "@mui/icons-material/Search";

const Search = ({ setSearch }) => {
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="search">
      <SearchIcon />
      <input onChange={handleChange} type="text" placeholder="Search note..." />
    </div>
  );
};

export default Search;
