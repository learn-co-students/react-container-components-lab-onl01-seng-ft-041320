// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({reviews}) => {
  return (
    <div className='review-list'>
        {reviews.map(review =>
      <ul className="review">
        <li>{review.headline}</li>
        <li>{review.byline}</li>
        <li>{review.summary_short}</li>
      </ul>
    )}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;