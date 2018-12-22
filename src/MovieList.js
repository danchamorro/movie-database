import React, { Component } from "react";
import Movie from "./Movie";
import axios from "axios";

class MovieList extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=1c10ecb6e88ca14221c98ce286aa3fab&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
      )
      .then(res => {
        this.setState({
          movies: res.data.results
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        {this.state.movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}

export default MovieList;
