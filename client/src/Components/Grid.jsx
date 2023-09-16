import React from "react";

const Grid = ({ photos }) => {
  return (
    <>
      <h1>Our Gallery</h1>
      <div className="grid">
        {photos.map(({ photo, name, tag, _id }) => (
          <div key={_id} className="grid__item">
            <img
              src={`http://localhost:5000/uploads/${photo}`}
              alt="grid_image"
            />
            <div className="image-info">
              <p>Tag: {tag}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Grid;
