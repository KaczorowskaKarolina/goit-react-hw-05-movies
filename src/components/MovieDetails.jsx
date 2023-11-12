import React, { Suspense } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';

const MovieDetails = React.lazy(() => import('./MovieDetails'));
const Cast = React.lazy(() => import('./Cast'));
const Reviews = React.lazy(() => import('./Reviews'));

const MovieDetailsWrapper = ({ REACT_APP_API_KEY }) => {
  const { movieId } = useParams();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<MovieDetails apiKey={REACT_APP_API_KEY} movieId={movieId} />} />
        <Route path="/cast" element={<Cast apiKey={REACT_APP_API_KEY} movieId={movieId} />} />
        <Route path="/reviews" element={<Reviews apiKey={REACT_APP_API_KEY} movieId={movieId} />} />
      </Routes>
    </Suspense>
  );
};

export default MovieDetailsWrapper;
