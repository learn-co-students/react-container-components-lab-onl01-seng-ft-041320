// Code MovieReviews Here
import React from 'react';

const MovieReviews = props => {
    // console.log(this.reviews)

    return (
        <div className="review-list">
            <ul>
            {console.log(props)}
            </ul>     
        </div>
    )
}
// {props.reviews.map((review) => console.log(review))}
// {props.map(review => <li key={review.link.url}><a href={review.link.url}>{review.link.type} {review.link.suggested_link_text}</a></li>)}

export default MovieReviews;