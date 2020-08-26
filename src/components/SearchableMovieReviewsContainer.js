import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends React.Component {
    constructor(){
        super()
        this.state={
            reviews: [],
            searchTerm: ""
        }
    }
    componentDidMount(){
        fetch(`${URL}&query=${this.state.searchTerm}`)
        .then(response => response.json())
        .then(reviews => this.setState({reviews: reviews}))
    }

    handleSubmit=(event)=>{
        event.preventDefault
        console.log(event.target)
    }
    render(){
        return (
            <div>
                <form onSubmit={event => this.handleSubmit(event)}><input name="searchTerm" type="text" /><input type="submit" /></form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}