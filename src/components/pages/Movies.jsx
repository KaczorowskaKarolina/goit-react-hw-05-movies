import React, { useState, useEffect, useCallback, Suspense } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import MovieDetails from '../molecules/MovieDetails';
import './movies.css';

const Movies = ({ apiKey }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [genres, setGenres] = useState({});

  const { movieId } = useParams();
  const navigate = useNavigate();

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

    fetchGenres();
    handleSearch();
  }, [apiKey, handleSearch]);

  const getPosterPath = (movie) => {
    return movie.poster_path
      ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
      : `${process.env.PUBLIC_URL}/poster.jpg`; // Zastępczy plakat ze wskazanej ścieżki
  };

  const getGenreNames = (genreIds) => {
    return genreIds.map((genreId) => genres[genreId]).join(', ');
  };

  return (
    <div className='movies_container'>
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
      <div className="movies_container2">
        <h2 className='movies_h2'>Movie:</h2>
        {movieId && (
          <Link to="/home" className="back-link" onClick={() => navigate(-1)}>
            Back
          </Link>
        )}

        <input
          type="text"
          placeholder="Search movie title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>
      <ul className="movies_list">
        {searchResults.map((movie) => (
          <li key={movie.id} className="movies_item">
            <Link to={`/movies/${movie.id}`} className="movies_item">
              <img
                src={getPosterPath(movie)}
                alt={movie.title}
                className="movies_image"
              />
            </Link>
            <Link>
              <p>{movie.title}</p>
            </Link>
            <p className="movies_genres">Genres: {getGenreNames(movie.genre_ids)}</p>
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
