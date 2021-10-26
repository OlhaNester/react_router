import React, { Component } from "react";
import Axios from "axios";

export default class Reviews extends Component {
  state = {
    reviews: [],
  };
  async componentDidMount() {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}/reviews?api_key=ee059677e8bdbcfa281a4ce6304abcdd&language=en-US&page=1`
    );
    this.setState({ reviews: response.data.results });
  }
  render() {
    console.log("reviews");
    console.log(this.state.reviews);
    return (
      <div>
        {this.state.reviews && (
          <ul>
            {this.state.reviews.map((review) => (
              <li key={review.author}>
                {review.author}
                {review.content}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
