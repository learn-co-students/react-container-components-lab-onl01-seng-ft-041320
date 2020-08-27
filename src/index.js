import React from 'react';
import ReactDOM from 'react-dom';

import LatestMovieReviewsContainer from './components/LatestMovieReviewsContainer';
import SearchableMovieReviewsContainer from './components/SearchableMovieReviewsContainer';

ReactDOM.render(
  <div className="app">
    <h1>Search for Movies with Reviews</h1>
    <SearchableMovieReviewsContainer />
    <h1>Latest Movies Reviewed</h1>
    <LatestMovieReviewsContainer />
  </div>,
  document.getElementById('root')
);