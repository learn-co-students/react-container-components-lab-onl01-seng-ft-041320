// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) => {
    return(
        <div className='review-list'>
            { props.reviews.map( review => <div key={review.movie_title} className='review'><h1>{review.movie_title}</h1><p>{review.summary}</p></div>)}
        </div>
    )
}

export default MovieReviews