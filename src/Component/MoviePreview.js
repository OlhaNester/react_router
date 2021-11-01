import React from "react";
import defaultMovie from "../Component/defaultMovie.jpg";

const MoviePreview = ({ poster, title, vote }) => {
  return (
    <div>
      {poster !== null ? (
        <img
          src={`https://image.tmdb.org/t/p/w185${poster}`}
          width="200"
          alt=""
        />
      ) : (
        <img src={defaultMovie} width="200" alt="" />
      )}
      <h5>{title}</h5>
      <p>{vote}</p>
    </div>
  );
};

export default MoviePreview;
