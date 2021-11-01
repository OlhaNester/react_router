import React from "react";

import { NavLink, withRouter } from "react-router-dom";
import MoviePreview from "./MoviePreview";
import styles from './MovieList.module.css';
import PropTypes from 'prop-types';
import defaultMovie from './defaultMovie.jpg';

const MovieList = ({ movies, location }) => {
  return (
    <ul className={styles.movie_list}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <NavLink
            to={{
              pathname: `movies/${movie.id}`,
              state: { from: location },
            }}
          >
            {(movie.poster_path)? (<MoviePreview
              poster={movie.poster_path}
              title={movie.title}
              vote={movie.vote_average}
            />):(<MoviePreview
              poster={defaultMovie}
              title={movie.title}
              vote={movie.vote_average}
            />)}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};


// MovieList.PropTypes = {
//   poster: PropTypes.string,
//   title: PropTypes.string.isRequired,
//   vote: PropTypes.string.isRequired,

// }

export default withRouter(MovieList);
