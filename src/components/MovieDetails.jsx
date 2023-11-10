import React, { Suspense } from 'react';
import { Route, useParams } from 'react-router-dom'; 

const MovieDetails = React.lazy(() => import('./MovieDetailsContent'));
const Cast = React.lazy(() => import('./Cast'));
const Reviews = React.lazy(() => import('./Reviews'));

const MovieDetailsWrapper = ({ apiKey }) => {
  const { movieId } = useParams();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Route path={`/movies/${movieId}`} exact render={(props) => <MovieDetails {...props} apiKey={apiKey} />} />
      <Route path={`/movies/${movieId}/cast`} render={(props) => <Cast {...props} apiKey={apiKey} />} />
      <Route path={`/movies/${movieId}/reviews`} render={(props) => <Reviews {...props} apiKey={apiKey} />} />
    </Suspense>
  );
};

export default MovieDetailsWrapper;
