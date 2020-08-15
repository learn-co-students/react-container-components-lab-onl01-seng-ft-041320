import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
     + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

    constructor(){
        super(); 
        this.state = {
            searchTerm: '',
            reviews: []
        }
    }
 
     mySubmitHandler = (event) => {
         event.preventDefault()
         fetch(URL.concat(this.state.searchTerm))
         .then(response => response.json())
         .then(data => this.setState({
             reviews: data.results
         }))
     }
 
     handleChange = (event) => {
         this.setState({searchTerm: event.target.value})
     }
 
     render() {
         const style = {
             float: "right"  
         }
         return (
             <div style={style} className="searchable-movie-reviews">
 
                 <form onSubmit={this.mySubmitHandler}>
                 <p>Enter a Search Term</p>
                 <input type="text" value={this.state.searchTerm} onChange={this.handleChange}></input><br></br>
                 <button type="submit">Find Movies</button>
                 </form>
                 {typeof this.state.reviews === 'object' &&
                 this.state.reviews.length > 0 && <h3>Movie Reviews by Search:</h3>}
                 <MovieReviews reviews={this.state.reviews} />
             </div>
         )
     }
 
 
 
 }
 export default SearchableMovieReviewsContainer