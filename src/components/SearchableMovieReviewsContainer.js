import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'


const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=3UkJLL5vZxnNopQOeSO1PrrY02gaN7Ga&query=';

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {

    state = {
        searchTerm: '',
        reviews: []
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(URL.concat(this.state.searchTerm))
        .then(res => res.json())
        .then(word => this.setState({ reviews: word.results }))
    }

    handleSearch = (e) => {
        this.setState({ searchTerm: e.target.value })
    }

    render() {
        return (
            <div className='searchable-movie-reviews'>
                <form onSubmit={this.handleSubmit}>
                    <label className='search-input'>Search Movies</label>
                    <input
                        id='search-input'
                        type='text'
                        onChange={this.handleSearch}
                    />
                    <button type='submit'>Submit</button>
                    <MovieReviews reviews={this.state.reviews} />
                </form>
            </div>
        )
    }

}

export default SearchableMovieReviewsContainer
