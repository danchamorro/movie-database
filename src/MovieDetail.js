import React, { Component } from "react";
import axios from "axios";

// Required for TMDB image path, unique to TMDB
const POSTER_PATH = "http://image.tmdb.org/t/p/w154";
const BACKDROP_PATH = "http://image.tmdb.org/t/p/w1280";

class MovieDetail extends Component {
  state = {
    movie: {}
  };

  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${
          this.props.match.params.id
        }?api_key=1c10ecb6e88ca14221c98ce286aa3fab&language=en-US`
      )
      .then(res => {
        this.setState({
          movie: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    const { movie } = this.state;
    return (
      <div>
        <img src={`${BACKDROP_PATH}${movie.backdrop_path}`} alt={movie.title} />
        <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
        <h1>{movie.title}</h1>
        <h3>{movie.release_date}</h3>
        <p>{movie.overview}</p>
      </div>
    );
  }
}

export default MovieDetail;
