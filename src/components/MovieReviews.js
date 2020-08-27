import React from 'react'

const Reviews = ({
    display_title,
    headline,
    link,
    opening_date
}) => {
    return (
        <div className='review' key={display_title}>
            <h2>{display_title}</h2>
            <h3>{headline}</h3>
            <a>{link.url}</a>
            <p>{opening_date}</p>
        </div>
    )

    
}

const MovieReviews = ({ reviews }) => <div className='review-list'>{reviews.map(Reviews)}</div>

MovieReviews.defaultProps = {
    reviews: []
}
export default MovieReviews 
    