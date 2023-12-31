import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import './app.css';

const Home = React.lazy(() => import('../pages/Home'));
const Movies = React.lazy(() => import('../pages/Movies'));
const MovieDetails = React.lazy(() => import('../molecules/MovieDetails'));
const Cast = React.lazy(() => import('../atoms/Cast'));
const Reviews = React.lazy(() => import('../molecules/Reviews'));
const Trending = React.lazy(() => import('../pages/Trending'));

const App = () => {
  const apiKey = process.env.REACT_APP_API_KEY;

  return (
    <Router>
      <header className="app_header">
        <nav className="app_nav">
          <ul className="app_ul">
            <li className="app_li">
              <Link to="/">Home</Link>
            </li>
            <li className="app_li">
              <Link to="/movies">Movies</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home apiKey={apiKey} />} />
          <Route path="/movies" element={<Movies apiKey={apiKey} />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails apiKey={apiKey} />} />
          <Route path="/movies/:movieId/cast" element={<Cast apiKey={apiKey} />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews apiKey={apiKey} />} />
          <Route path="/trending" element={<Trending apiKey={apiKey} />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;