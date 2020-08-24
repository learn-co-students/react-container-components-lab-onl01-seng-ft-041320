import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'zHlO6D5MJUSwowQnrDasCZLLXcY995vg';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
    state = {
        reviews: []
    }
    
    componentDidMount() {
        fetch(URL)
        .then( (r) => r.json() )
        .then( reviewData => this.setState({reviews: reviewData.results}) )
    }

    render() {
        return(
            <div className="latest-movie-reviews">
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}