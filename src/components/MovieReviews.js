import React from 'react';

const MovieReviews = ({reviews}) => {
    return (
        <div className="review-list">
            {reviews.map(review => {
                return (
                <div key={review.headline} className="review card">
                    { review.multimedia && <img alt={`${review.display_title}-media`}src={review.multimedia.src} ></img> }
                        <div className="container">
                        <h2>{review.display_title}</h2>
                            <h3>by {review.byline}</h3>
                            <p>{review.summary_short}</p>
                            <a href={review.link.url}>{review.display_title}</a>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default MovieReviews; 