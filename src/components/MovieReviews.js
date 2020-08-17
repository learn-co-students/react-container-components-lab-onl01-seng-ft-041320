import React from 'react';

const MovieReveiws = (props) => {
    return (
        <ul className='review-list'>
            {props.reviews.map(review => {return <li data-title={review.display_title} className='review'>{review.display_title}</li>})}
        </ul>
    )
}

export default MovieReveiws;