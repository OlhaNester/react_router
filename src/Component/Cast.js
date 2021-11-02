import React, { Component } from "react";
import Axios from "axios";
import PropTypes from 'prop-types';
import styles from './Cast.module.css';
import defaultCast from './defaultCast.png';

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
        return (
      <div >
        {(this.state.casts.length>0) ? (
          <ul className={styles.list}>
            {this.state.casts.map((cast) => (
              <li className={styles.item} key={cast.id} >
                {cast.profile_path ? (<img className={styles.img}
                  src={`https://image.tmdb.org/t/p/w185${cast.profile_path}`}
                  width="150"
                  alt=""
                />): (<div className={styles.thumb}><img
                  src={defaultCast}
                  width="150"
                  alt=""
                /></div>)}
                <p className={styles.name}>{cast.name}</p>
                <p className={styles.character}>{cast.character}</p>
              </li>
            ))}
          </ul>
        ): (<p className={styles.character}>"Sorry, we don't have any information"</p>)}
      </div>
    );
  }
}

Cast.defaultProps = {
  
}
