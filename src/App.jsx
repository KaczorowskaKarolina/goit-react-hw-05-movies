import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./components/Home'));
const Movies = lazy(() => import('./components/Movies'));
const MovieDetails = lazy(() => import('./components/MovieDetails'));
const Cast = lazy(() => import('./components/Cast'));
const Reviews = lazy(() => import('./components/Reviews'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<Home apiKey="264ec641025fff32d6f5c8134722997b" />} />
          <Route exact path="/movies" element={<Movies apiKey="264ec641025fff32d6f5c8134722997b" />} />
          <Route exact path="/movies/:movieId" element={<MovieDetails apiKey="264ec641025fff32d6f5c8134722997b" />} />
          <Route exact path="/movies/:movieId/cast" element={<Cast apiKey="264ec641025fff32d6f5c8134722997b" />} />
          <Route exact path="/movies/:movieId/reviews" element={<Reviews apiKey="264ec641025fff32d6f5c8134722997b" />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
