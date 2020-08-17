import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
    constructor(props) {
        super(props)
                        
        this.state = {
            reviews: [],
            searchTerm: ""     
        }
    }

    fetchSearchedReviews = () => {
        fetch(URL + `&query=${this.state.searchTerm}`)
        .then(resp => resp.json())
        .then(json => this.setState({reviews: json.results}))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.fetchSearchedReviews()
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <h3>Searching for a Specific Movie?</h3>
                <form onSubmit={this.handleSubmit}>
                    <input
                    type="text"
                    name="query"
                    value={this.state.searchTerm}
                    onChange={e => this.setState({searchTerm: e.target.value})}
                    />
                </form>

                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
            
}
            
export default SearchableMovieReviewsContainer;
            