import React from "react";

const SearchResults = ({ searchResults }) => {
  return (
    <>
    <h1></h1>
      <div className="grid">
        {searchResults.map((image) => (
          <div key={image._id} className="grid__item">
            <img
              src={`http://localhost:5000/uploads/${image.photo}`}
              alt={image.name}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchResults;
