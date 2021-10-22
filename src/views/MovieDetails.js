import React, { Component } from "react";

import Axios from "axios";
//import { Route, NavLink, Switch } from "react-router-dom";
//import Cast from "./Cast";
//import Reviews from "./Reviews";

export default class MovieDetails extends Component {
  state = {
    //movie: {},
    id: null,
    title: null,
    release_date: null,
    vote_average: null,
    overview: null,
    genres: null,
  };
  async componentDidMount() {
    const response = await Axios.get(`

https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}?api_key=ee059677e8bdbcfa281a4ce6304abcdd&language=en-US`);

    //console.log(response.data);
    this.setState({ ...response.data });
  }
  render() {
    console.log(this.props.match);
    return (
      <div>
        <h1> Описание фильма {this.props.match.params.movieId}</h1>
        <button type="button">Back</button>
        <h2> {this.state.title}</h2>
        {this.state.release_date && (
          <div> {this.state.release_date.slice(0, 4)}</div>
        )}
        <div>User score: {this.state.vote_average}</div>

        <h3> Overview</h3>
        <div>{this.state.overview}</div>
        <h3> Genres</h3>
        {this.state.genres && (
          <ul>
            {this.state.genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        )}
        {/* <div>
          <h3>Additional information</h3>
          <ul>
            <li>
              <NavLink
                className="NavLink"
                activeClassName="NavLink_active"
                to={`/movies/${this.state.id}/cast`}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                className="NavLink"
                activeClassName="NavLink_active"
                to={`/movies/${this.state.id}/review`}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path="" component={Cast} />
          <Route path="" component={Reviews} />
        </Switch> */}
      </div>
    );
  }
}
