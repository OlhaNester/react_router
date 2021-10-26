import React, { Component } from "react";
import Axios from "axios";

export default class Cast extends Component {
  state = {
    casts: [],
  };
  async componentDidMount() {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}/credits?api_key=ee059677e8bdbcfa281a4ce6304abcdd&language=en-US`
    );
    this.setState({ casts: response.data.cast });
  }

  render() {
    console.log("cast");
    console.log(this.state.casts);
    return (
      <div>
        {this.state.casts && (
          <ul>
            {this.state.casts.map((cast) => (
              <li key={cast.id}>
                <img
                  src={
                    "https://image.tmdb.org/t/p/" +
                    "w185" +
                    `${cast.profile_path}`
                  }
                  width="100"
                  alt=""
                />
                {cast.name}
                {cast.character}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}