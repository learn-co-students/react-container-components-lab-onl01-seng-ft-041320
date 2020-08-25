// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({ reviews }) => {
  return (
    <div className="review-list">
      {reviews.map(({ multimedia, display_title, mpaa_rating, summary_short, link: {url} }) => {
        return (
          <div className="review">
            <a href={url}>
              {multimedia ? <img src={multimedia.src} /> : null}
              <h3>{display_title} {mpaa_rating}</h3>
              <p>{summary_short}</p>
            </a>
          </div>
        )
      })}
    </div>
  )
}

export default MovieReviews