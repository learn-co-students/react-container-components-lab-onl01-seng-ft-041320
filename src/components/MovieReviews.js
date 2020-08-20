import React from 'react'

  const MovieReviews = ({ reviews }) => (
    <div className="review-list">
      {reviews.map(review => {
  return <div className="review" key={review.display_title}>
          <h3>{ review.display_title }</h3>
          <h3>{ review.headline }</h3>
          <p>
            { review.summary_short }
          </p>
        </div>
      })}
     </div>
  )

export default MovieReviews

MovieReviews.defaultPropss = {
  reviews: []
}
