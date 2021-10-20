import React, { Component } from "react";

import Axios from "axios";

export default class MovieDetails extends Component {
  state = {
    movie: {},
  };
  async componentDidMount() {
    const response = await Axios.get(`

https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}?api_key=ee059677e8bdbcfa281a4ce6304abcdd&language=en-US`);

    //console.log(response.data);
    this.setState({ movie: response.data });
    console.log(this.state.movie.release_date.slice(0, 4));
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <h1> Описание фильма {this.props.match.params.movieId}</h1>
        <h2> {this.state.movie.title}</h2>
        {this.state.movie.hasOwnProperty("release_date") && (
          <div> {this.state.movie.release_date.slice(0, 4)}</div>
        )}
        <div>User score: {this.state.movie.vote_average}</div>

        <h3> Overview</h3>
        <div>{this.state.movie.overview}</div>
        <h3> Genres</h3>
        {this.state.movie.hasOwnProperty("genres") && (
          <ul>
            {this.state.movie.genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
