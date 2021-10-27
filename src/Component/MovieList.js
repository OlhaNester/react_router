import React from "react";

import { NavLink, withRouter } from "react-router-dom";
import MoviePreview from "./MoviePreview";

const MovieList = ({ movies, match, location }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <NavLink to={`${match.url}movies/${movie.id}`}>
            <MoviePreview
              poster={movie.poster_path}
              title={movie.title}
              vote={movie.vote_average}
            />
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MovieList);
