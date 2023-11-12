import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Trending = React.lazy(() => import('./Trending'));
const SearchMovies = React.lazy(() => import('./Movies'));
const MovieDetails = React.lazy(() => import('./MovieDetails'));

const Home = ({REACT_APP_API_KEY}) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Trending apiKey={REACT_APP_API_KEY} />} />
        <Route path="/movies" element={<SearchMovies apiKey={REACT_APP_API_KEY} />} />
        <Route path="/movies/:movieId" element={<MovieDetails apiKey={REACT_APP_API_KEY} />} />
      </Routes>
    </Suspense>
  );
};

export default Home;
