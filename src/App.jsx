import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Home = lazy(() => import('./components/Home'));
const Movies = lazy(() => import('./components/Movies'));
const MovieDetails = lazy(() => import('./components/MovieDetails'));
const Cast = lazy(() => import('./components/Cast'));
const Reviews = lazy(() => import('./components/Reviews'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Route exact path="/" render={(props) => <Home {...props} apiKey="264ec641025fff32d6f5c8134722997b" />} />
        <Route exact path="/movies" render={(props) => <Movies {...props} apiKey="264ec641025fff32d6f5c8134722997b" />} />
        <Route exact path="/movies/:movieId" render={(props) => <MovieDetails {...props} apiKey="264ec641025fff32d6f5c8134722997b" />} />
        <Route exact path="/movies/:movieId/cast" render={(props) => <Cast {...props} apiKey="264ec641025fff32d6f5c8134722997b" />} />
        <Route exact path="/movies/:movieId/reviews" render={(props) => <Reviews {...props} apiKey="264ec641025fff32d6f5c8134722997b" />} />
      </Suspense>
    </Router>
  );
};

export default App;
