import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`
            //  + `&query=${this.state.searchTerm}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
    
    state = {
        searchTerm: '',
        reviews: []
    }

    handleSearchInputUpdate = e => this.setState({searchTerm: e.target.value})

    handleSearch = e => {
        e.preventDefault()
        fetch(`${URL}` + `${this.state.searchTerm}`)
            .then(response => response.json())
            .then(json => this.setState({ reviews: json.results }))
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSearch}>
                    <label htmlFor="search-input">Search Movie Reviews</label>
                    <input id='search-input' type='text' onChange={this.handleSearchInputUpdate}/>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}