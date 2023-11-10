import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';

const Trending = React.lazy(() => import('./Trending'));
const SearchMovies = React.lazy(() => import('./Movies'));
const MovieDetails = React.lazy(() => import('./MovieDetails'));

const apiKey = '264ec641025fff32d6f5c8134722997b';

const Home = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Route path="/" exact render={(props) => <Trending {...props} apiKey={apiKey} />} />
      <Route path="/movies" exact render={(props) => <SearchMovies {...props} apiKey={apiKey} />} />
      <Route path="/movies/:movieId" render={(props) => <MovieDetails {...props} apiKey={apiKey} />} />
    </Suspense>
  );
};

export default Home;
