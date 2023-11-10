import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Trending = React.lazy(() => import('./Trending'));
const SearchMovies = React.lazy(() => import('./Movies'));
const MovieDetails = React.lazy(() => import('./MovieDetails'));

const apiKey = '264ec641025fff32d6f5c8134722997b';

const Home = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Trending apiKey={apiKey} />} />
        <Route path="/movies" element={<SearchMovies apiKey={apiKey} />} />
        <Route path="/movies/:movieId" element={<MovieDetails apiKey={apiKey} />} />
      </Routes>
    </Suspense>
  );
};

export default Home;
