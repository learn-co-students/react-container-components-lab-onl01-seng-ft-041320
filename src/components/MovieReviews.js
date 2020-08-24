// Code MovieReviews Here
import React from 'react';

const MovieReviews = props => {
    
console.log("props", props)

let allReviews = [];
if (props !== ''){
    allReviews += props.reviews.map(review => <Review review={review} />)
}
console.log("review", allReviews)
    return (
        <div className="review-list">
            <ul>
            {allReviews}
            </ul>     
        </div>
    )

}

const Review = (review) => {
    console.log("review", review)
    return ( 
    <div>
        <h1>These are the reviews</h1>
        <li key={review.link.url}><a href={review.link.url}>{review.link.type} {review.link.suggested_link_text}</a></li>
    </div>
    )
}

// {props.reviews.map((review) => console.log(review))}
// {props.map(review => <li key={review.link.url}><a href={review.link.url}>{review.link.type} {review.link.suggested_link_text}</a></li>)}

export default MovieReviews;