import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'r8c0cDbIAyrDMGHgfHE4PMEWHG32pQoT';

const URL = 'To query the search API: https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

  export default class SearchableMovieReviewsContainer extends Component {
    constructor() {
      super()

      this.state = {
        reviews: [],
        searchTerm: ""
      }
    }

    fetchAndSearchReviews = () => {
      fetch(URL + `query=${this.state.searchTerm}`)
        .then(response => response.json())
        .then((data) => {
          this.setState({reviews: data.results})
        })
      }

    handleOnChange = (e) => {
      this.setState({searchTerm: e.target.value})
    }

    handleSubmit = (e) => {
      e.preventDefault()
      this.fetchAndSearchReviews(this.state.searchTerm)
    }

    render() {
      return (
        <div searchable-movie-reviews>
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.searchTerm} onChange={this.handleOnChange}/>
            <input type="Submit" value="Search Reviews" />
          </form>
          <div className="latest-movie-reviews">
            <MovieReviews reviews={this.state.reviews}/>
          </div>
        </div>
      )
    }
  }
