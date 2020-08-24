import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = `AFkKAa6yKFvnLM0dSGGwdyRJDf156TUI`;
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=`
const END =  `&api-key=${NYT_API_KEY}&limit=3`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
state = {
    reviews: [],
    searchTerm: " ",
}

searchMovies = (query = "titanic") => {
    fetch(URL+query+END)
    .then((response) => response.json())
    .then((data) => this.setState({ reviews: data.results }));
}

handleSubmit = event =>{
    event.preventDefault();
    // event.persist()
    // console.log(this.state.searchTerm)
    let query = this.state.searchTerm
    this.searchMovies(query)
}

    render() {
        return(
            <div className="searchable-movie-reviews">
            <form onSubmit={this.handleSubmit}>
               <input type="text" onChange={event => this.setState({searchTerm: event.target.value})} />
            </form>
            </div>
        )
    }

    
}

export default SearchableMovieReviewsContainer;