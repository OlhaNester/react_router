import React, { Component } from 'react';
import Axios from 'axios';



export default class Movies extends Component {
  state = {
    query: "",
    movies: [],
  }
  handleChange = (event) => { this.setState({ query: event.currentTarget.value }) };

  //  handlSubmit = (event) => {
  //       event.preventDefault();
  //       this.props.onSubmit(this.state.query);
  //       this.setState({ query: '' })

  // };

  async componentDidMount() {
    const response = await Axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=ee059677e8bdbcfa281a4ce6304abcdd&language=en-US&query=${this.state.query}&page=1&include_adult=false`
    );
    this.setState({ movies: response.data.results });
  }
  


  render() {
    return (
      <header className="Searchmovie">
  <form className="SearchForm" onSubmit={this.handlSubmit}>
    

    <input
      className="SearchForm-input"
                        type="text"
                        value={this.state.query} onChange={this.handleChange}
      autoComplete="off"
      autoFocus
      placeholder="Search movies"
          />
          <button type="submit" className="SearchForm-button">
      <span className="SearchForm-button-label">Search</span>
    </button>
        </form>
        {this.state.movies && <ul>
          {this.state.movies.map((movie) => (
            <li key={movie.id}>{ movie.title}</li>
          ))}
        </ul> }
</header>
    )
  }
}


