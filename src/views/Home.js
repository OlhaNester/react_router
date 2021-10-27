import Axios from "axios";
import React, { Component } from "react";

import MovieList from "../Component/MovieList";

export default class Home extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await Axios.get(`
https://api.themoviedb.org/3/trending/movie/day?api_key=ee059677e8bdbcfa281a4ce6304abcdd`);
    this.setState({ movies: response.data.results });
  }
  render() {
    console.log(this.props.match.url);
    return (
      <div>
        <h1>Trending today</h1>

        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}
