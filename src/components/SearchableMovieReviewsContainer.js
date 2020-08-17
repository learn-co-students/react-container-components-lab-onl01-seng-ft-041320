import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: ''
    }

    findReviews = () => {
        fetch(`${URL}&query=${this.state.searchTerm}`).then(resp => resp.json()).then(obj => this.setState({reviews: obj.results}), () => console.log(this.state.reviews))
    }

    simulate = (e) => {
        e.preventDefault();
        let query = e.target.value;
        this.setState({
            searchTerm: query
        })
        this.findReviews()
    };

    handleChange = (e) => {
        let search = e.target.value;
        this.setState({
            searchTerm: search
        })
    }

    render () {
        return (
            <div className='searchable-movie-reviews'>
                <form onSubmit={this.simulate} >
                    <input onChange={this.handleChange} type='text' name='search' value={this.state.searchTerm} />
                    <input type='submit' value='Search' />
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
            
        )
    }
}
export default SearchableMovieReviewsContainer