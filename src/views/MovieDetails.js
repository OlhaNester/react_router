import React, { Component } from "react";

import Axios from "axios";

export default class MovieDetails extends Component {
  state = {};
  async componentDidMount() {
    const response = await Axios.get(`
https://api.themoviedb.org/3/trending/movie/day?api_key=ee059677e8bdbcfa281a4ce6304abcdd`);
    //console.log(response.data.results);
    this.setState({ movies: response.data.results });
  }
  render() {
    return <div></div>;
  }
}
