import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dZLuCUmYzlpoUxeNr4NnPzsirqSvJmGe';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

  constructor(){
    super()

    this.state= {
      searchTerm: "",
      reviews: []
    }
  }

  fetchSearch = (searchTerm = "girl") => {
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=dZLuCUmYzlpoUxeNr4NnPzsirqSvJmGe&query=${searchTerm}`)
    .then(response => response.json())
    .then(data => {this.setState({reviews: data.results})})
  }

  componentDidMount(){
    this.fetchSearch()
  }

  searchSubmit= event => {
    event.preventDefault()
    this.fetchSearch(this.state.searchTerm)
  }

  render() {
    return(
      <div>
      <form onSubmit={this.searchSubmit}>
      <input type="text" value={this.state.searchTerm} onChange={event => this.setState({searchTerm: event.target.value})}/>
      </form>
      <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
