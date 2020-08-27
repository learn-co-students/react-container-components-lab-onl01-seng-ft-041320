import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'


const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=3UkJLL5vZxnNopQOeSO1PrrY02gaN7Ga'

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {


    state = {
        reviews: []
    }

    componentDidMount() {
        fetch(URL)
        .then(res => res.json())
        .then(movieData => this.setState({ reviews: movieData.results })
        )
    }

    render() {
        return (
            <div className='latest-movie-reviews'>
                <h3>Movie Reviews here</h3>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }

}

export default LatestMovieReviewsContainer