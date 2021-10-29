import React, { Component } from "react";
import Axios from "axios";
import queryString from "query-string"
import MovieList from "../Component/MovieList";
import axios from "axios";

export default class Movies extends Component {
  state = {
    query: "",
    movies: [],
  };

  handleChange = (event) => {
    this.setState({ query: event.currentTarget.value });
  };

  handlSubmit = (event) => {
    event.preventDefault();
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${this.state.query}`
    })
      
    Axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=ee059677e8bdbcfa281a4ce6304abcdd&language=en-US&query=${this.state.query}&page=1&include_adult=false`
    ).then(({ data }) => this.setState({ movies: data.results }))
    
  
  };

  // async componentDidMount() {
  //   const response = await Axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ee059677e8bdbcfa281a4ce6304abcdd&language=en-US&query=${this.state.query}&page=1&include_adult=false`)
  //     .then(({ data }) => this.setState({ movies: data.results }))
          
  // };
  

  
  render() {
    return (
      <header className="Searchmovie">
        <form className="SearchForm" onSubmit={this.handlSubmit}>
          <input
            className="SearchForm-input"
            type="text"
            value={this.state.query}
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          />
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
        </form>

        <ul>
          <MovieList movies={this.state.movies} location={this.props.location} query={ this.state.query}/>
        </ul>
      </header>
    );
  }
}
