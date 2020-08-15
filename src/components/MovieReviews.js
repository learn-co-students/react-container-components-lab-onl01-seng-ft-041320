// Code MovieReviews Here
import React from 'react'

const Review = ({display_title, link}) => {
  return (
  <div className="review" key={display_title}>
  <h1>Reviews</h1>
  <h3>{display_title}</h3>
  <a href={link.url}>{link.url}</a>
  </div>
)
}

const MovieReviews = ({reviews}) => <div className='review-list'>{reviews.map(Review)}</div>

MovieReviews.defaultProps = {
  reviews: []
}


export default MovieReviews
