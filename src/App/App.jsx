import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from '../components/Home';
import Movies from '../components/Movies';
import Trending from '../components/Trending';
import MovieDetails from '../components/MovieDetails'
import './app.css';

const App = () => {
  const apiKey = process.env.REACT_APP_API_KEY;

  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="*" element={<Home apiKey={apiKey} />} />
          <Route path="/movies/*" element={<Movies apiKey={apiKey} />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails apiKey={apiKey} />} />
          <Route path="/trending" element={<Trending apiKey={apiKey} />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;