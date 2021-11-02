import React from "react";
import defaultMovie from "../Component/defaultMovie.jpg";
import styles from './MovieList.module.css';

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
        <div className={styles.thumb}><img src={defaultMovie} width="200" alt="" /></div>
      )}
      <h5>{title}</h5>
      <p>{vote}</p>
    </div>
  );
};

export default MoviePreview;
