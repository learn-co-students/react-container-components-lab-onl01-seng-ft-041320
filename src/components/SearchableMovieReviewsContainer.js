import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()

    this.state = {
      searchTerm: '',
      reviews: []
    }
  }

  handleInput = e => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSearch = e => {
    e.preventDefault()

    fetch(`${URL}&query=${this.state.query}`)
    .then(resp => resp.json())
    .then(json => {
      console.log(json)
      this.setState({
        reviews: json.results
      })
    })
  }

  render() {
    const { searchTerm, reviews } = this.state

    return (
      <div className="searchable-movie-reviews">
        <h2>Search Reviews: </h2>
        <form onSubmit={this.handleSearch}>
          <input type="text" value={searchTerm} onChange={this.handleInput} />
          <input type="submit" value="Search Reviews" />
        </form>
        <MovieReviews reviews={reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer