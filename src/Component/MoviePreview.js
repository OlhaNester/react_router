import React from "react";
const MoviePreview = ({ poster, title, vote }) => {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w185${poster}`}
        width="200"
        alt=""
      />
      <h5>{title}</h5>
      <p>{vote}</p>
    </div>
  );
};

export default MoviePreview;
