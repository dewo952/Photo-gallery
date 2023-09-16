import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Comoinents
import SearchResults from "./SearchResults";

// StyleSheet
import "../Styles/Search.css";

const Search = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    axios
      .get(`http://localhost:5000/api/search?term=${searchTerm}`)
      .then((res) => {
        setSearchResults(res.data);
        navigate(`searchresults-${searchTerm}`);
      })
      .catch((err) => {
        console.error("Error searching images:", err);
      });
  };

  return (
    <div className="SearchContainer">
      <h2>Search Images</h2>
      <div>
        <input
          type="text"
          className="SearchInput"
          placeholder="Enter search term"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="SearchButton" onClick={handleSearch}>Search</button>
      </div>

      <SearchResults searchResults={searchResults} />
    </div>
  );
};

export default Search;
