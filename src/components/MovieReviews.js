// Code MovieReviews Here

import React from 'react'

let Review = ({ headline, byline, link, summary_short }) => {
    return (
        <div key={headline} className="review">
            <header><a className='review-link' href={link.url}>{headline}</a></header>
            <p className="byline">{byline}</p>
            <p className="summary_short">{summary_short}</p>
        </div>
    )
}

const MovieReviews = ({reviews}) => <div className="review-list">{reviews.map(Review)}</div>

export default MovieReviews