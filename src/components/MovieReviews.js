// Code MovieReviews Here
import React from 'react' 

const MovieReviews = ({ reviews }) => {
    return (
        <div className="review-list">
            {reviews.map(review => Review(review))}
        </div>
    )
}

const Review = (review) => {
    return (
    <div className="review">
        <div><strong>Name of Movie:</strong> <i>{review.display_title}</i></div>
        <div>Headline: {review.headline}</div>
        <div>Review Link: {review.link.url}</div><br></br>
        <div>Short Summary: {review.summary_short}</div><br></br>
        <br></br>
    </div>
    )


}
export default MovieReviews