import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./components/Home'));
const Movies = lazy(() => import('./components/Movies'));
const MovieDetails = lazy(() => import('./components/MovieDetails'));
const Cast = lazy(() => import('./components/Cast'));
const Reviews = lazy(() => import('./components/Reviews'));

const App = ({REACT_APP_API_KEY}) => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="*" element={<Home REACT_APP_API_KEY />} />
          <Route exact path="/movies" element={<Movies REACT_APP_API_KEY />} />
          <Route exact path="/movies/:movieId" element={<MovieDetails REACT_APP_API_KEY />} />
          <Route exact path="/movies/:movieId/cast" element={<Cast REACT_APP_API_KEY />} />
          <Route exact path="/movies/:movieId/reviews" element={<Reviews REACT_APP_API_KEY />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
