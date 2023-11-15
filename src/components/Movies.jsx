import React, { useState, useEffect, useCallback, Suspense } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import MovieDetails from './MovieDetails';
import './movies.css';

const Movies = ({ apiKey }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [genres, setGenres] = useState({}); // Define genres state

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
    const fetchGenres = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
        );
        const genresMap = {};
        response.data.genres.forEach((genre) => {
          genresMap[genre.id] = genre.name;
        });
        setGenres(genresMap);
      } catch (error) {
        console.error('Error fetching genres:', error.message);
      }
    };

    fetchGenres(); // Move fetchGenres inside the useEffect callback
    handleSearch();
  }, [apiKey, handleSearch]); // Use correct dependency array

  const getGenreNames = (genreIds) => {
    return genreIds.map((genreId) => genres[genreId]).join(', ');
  };

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
            <p>Genres: {getGenreNames(movie.genre_ids)}</p>
          </Link>
        </li>
      ))}
    </ul>

    {movieId && (
      <Suspense fallback={<div>Loading...</div>}>
        <MovieDetails apiKey={apiKey} movieId={movieId} />
      </Suspense>
    )}
  </div>
);
};

export default Movies;
