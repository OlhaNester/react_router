import React, { Component } from "react";

import Axios from "axios";
import { Route, NavLink, Switch } from "react-router-dom";
import Cast from "../Component/Cast";
import Reviews from "../Component/Reviews";
import routes from "../routes";
import defaultMovie from '../Component/defaultMovie.jpg';

export default class MovieDetails extends Component {
  state = {
    //movie: {},
    id: null,
    title: null,
    poster_path: null,
    release_date: null,
    vote_average: null,
    overview: null,
    genres: null,
    images: {},
    cast: {},
  };
  async componentDidMount() {
    console.log("dddd");
    const response = await Axios.get(`

https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}?api_key=ee059677e8bdbcfa281a4ce6304abcdd&language=en-US`);

    this.setState({ ...response.data });

    const responsePoster = await Axios.get(`
    https://api.themoviedb.org/3/configuration?api_key=ee059677e8bdbcfa281a4ce6304abcdd`);

    this.setState({ ...responsePoster.data });
    console.log(this.state.images.poster_sizes);
  }

  hadleGoBack = () => {
    if (this.props.location.state && this.props.location.state.from) {
      return this.props.history.push(this.props.location.state.from);
    } //в state записано - откуда мы пришли
    // this.props.history.push('/');

    // this.props.history.push(this.props.location?.state?.from|| routes.movies); //можно переписать так с новым оператором ?.
  };

  render() {
    console.log("zzzz");
    console.log(this.state.images.poster_sizes);

    const linkPoster =
      `${this.state.images.secure_base_url}` +
      "w342" +
      `${this.state.poster_path}`;
    return (
      <div>
        <h1> Описание фильма {this.props.match.params.movieId}</h1>
        <button type="button" onClick={this.hadleGoBack}>
          Back
        </button>
        <h2> {this.state.title}</h2>

        {this.state.poster_path ? (<img src={linkPoster} width="300" alt="" />):(<img src={defaultMovie} width="300" alt="" />)}
       {/* <img src={linkPoster} width="300" alt="" /> */}
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
        <div>
          <h3>Additional information</h3>
          <ul>
            <li>
              <NavLink
                className="NavLink"
                activeClassName="NavLink_active"
                to={{ pathname : `/movies/${this.state.id}/cast`, state: {from: this.props.location},}}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                className="NavLink"
                activeClassName="NavLink_active"
                to={{pathname:`/movies/${this.state.id}/review`, state:{from: this.props.location},}}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path={`${this.props.match.path}/cast`} component={Cast} />
          <Route path={`${this.props.match.path}/review`} component={Reviews} />
        </Switch>
      </div>
    );
  }
}

MovieDetails.defaultProps = {
  linkPoster: defaultMovie,
};
