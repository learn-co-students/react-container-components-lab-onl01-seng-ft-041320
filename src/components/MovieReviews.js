// Code MovieReviews Here
import React from 'react'

const reviews = (props) => {
    return (
        <div className="review-list">
            {props.reviews.map( (review) => {
                return <div className="review">{review.headline}</div>
            })}
        </div>
    )
}

export default reviews;