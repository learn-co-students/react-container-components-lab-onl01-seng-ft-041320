// Code MovieReviews Here
import React from 'react';

const MovieReviews = props => {
    
// console.log("props", props)

// let allReviews = [];
// if (props.reviews !== []){
//     allReviews = props.reviews.map(review => <Review key={review.id} review={review} />)
// }
// console.log("review", allReviews)
    return (
        <div className="review-list">
            <ul>
            {props.reviews.map(Review)}
            </ul>     
        </div>
    )

}

const Review = (review) => {
    // console.log("review", review.link)
    return ( 
    <div className="review">
        <h1>This is the review</h1>
        <li key={review.id}><a href={review.link.url}>{review.link.type} {review.link.suggested_link_text}</a></li>
    </div>
    )
}

// {props.reviews.map((review) => console.log(review))}
// {props.map(review => <li key={review.link.url}><a href={review.link.url}>{review.link.type} {review.link.suggested_link_text}</a></li>)}

export default MovieReviews;