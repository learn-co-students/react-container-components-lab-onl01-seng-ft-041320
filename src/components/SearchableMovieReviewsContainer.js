import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'zHlO6D5MJUSwowQnrDasCZLLXcY995vg';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: ""
    }

    search = (e) => {
        e.preventDefault()
        fetch(URL + `&query=${this.state.searchTerm}`)
        .then( r => r.json() )
        .then( reviewData => this.setState({reviews: reviewData.results}) )
        console.log(this.state.reviews)
    }

    updateSearchTerm = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.search}>
                    <input value={this.state.searchTerm} onChange={ this.updateSearchTerm } type="text"></input>
                    <button type="submit">Search</button>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}