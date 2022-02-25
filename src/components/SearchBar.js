import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();

    onSubmit(term);
  };

  return (
    <div className="search-box-container">
      <form onSubmit={onFormSubmit}>
        <label>Video Search</label>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
