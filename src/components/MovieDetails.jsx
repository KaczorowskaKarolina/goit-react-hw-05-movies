import React, { Suspense } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';

const MovieDetails = React.lazy(() => import('./MovieDetails'));
const Cast = React.lazy(() => import('./Cast'));
const Reviews = React.lazy(() => import('./Reviews'));

const MovieDetailsWrapper = ({ apiKey }) => {
  const { movieId } = useParams();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<MovieDetails apiKey={apiKey} movieId={movieId} />} />
        <Route path="/cast" element={<Cast apiKey={apiKey} movieId={movieId} />} />
        <Route path="/reviews" element={<Reviews apiKey={apiKey} movieId={movieId} />} />
      </Routes>
    </Suspense>
  );
};

export default MovieDetailsWrapper;
