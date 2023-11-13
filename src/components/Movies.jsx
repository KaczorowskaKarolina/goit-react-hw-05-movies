import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import MovieDetails from './MovieDetails';
import './movies.css';

const Movies = ({ apiKey }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const { movieId } = useParams();

  const handleSearch = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`
      );
      setSearchResults(response.data.results);
    } catch (error) {
      console.error('Error searching movies:', error.message);
    }
  }, [apiKey, searchTerm]);

  useEffect(() => {
    handleSearch();
  }, [handleSearch]);

  return (
    <div>
      <h2>Movies</h2>
      <input
        type="text"
        placeholder="movie title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
              <p>{movie.overview}</p>
              <p>Genre: {movie.genre_ids.join(', ')}</p>
            </Link>
          </li>
        ))}
      </ul>

      {movieId && <MovieDetails apiKey={apiKey} movieId={movieId} />}
    </div>
  );
};

export default Movies;