import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component{
    state = {
        reviews: []
    }

    //https://gist.github.com/codeguy/6684588
    stringParameterize(str) {
        str = str.replace(/^\s+|\s+$/g, ''); // trim
        str = str.toLowerCase();
      
        // remove accents, swap ñ for n, etc
        let from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
        let to   = "aaaaeeeeiiiioooouuuunc------";
        for (let i=0, l=from.length ; i<l ; i++) {
            str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }
    
        str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
            .replace(/\s+/g, '-') // collapse whitespace and replace by -
            .replace(/-+/g, '-'); // collapse dashes
    
        return str;
    };

    handleSubmit = (event) => {
        event.preventDefault()
        let form = event.target
        let searchTerm = document.getElementById('search-value').value
        let slug = this.stringParameterize(searchTerm)
        form.reset()

        fetch(URL+`&query=${slug}`)
        .then(resp => resp.json())
        .then(json => this.setState({reviews: json.results}))
    }

    render(){
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label forhtml="search-value">Search For Movie Reviews:</label><br></br>
                        <input id="search-value" type="text"></input>
                    </div>
                    <button>Submit</button>
                </form>
                <h1>Search Results:</h1>
                <MovieReviews reviews = {this.state.reviews}/>
            </div>
        )
    }
}
