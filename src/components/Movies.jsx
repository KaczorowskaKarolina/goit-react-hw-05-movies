import React, { useEffect, useState, Suspense } from 'react';
import { Route, Routes, useParams, Link } from 'react-router-dom';
import axios from 'axios';

const Cast = React.lazy(() => import('./Cast'));
const Reviews = React.lazy(() => import('./Reviews'));

const MovieDetails = ({ REACT_APP_API_KEY }) => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        if (!movieId) {
          throw new Error('Movie ID is not available.');
        }

        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${REACT_APP_API_KEY}`
        );

        if (response.status !== 200) {
          throw new Error('Failed to fetch movie details');
        }

        setMovieDetails(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error.message);
      }
    };

    const fetchGenres = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${REACT_APP_API_KEY}`
        );

        if (response.status !== 200) {
          throw new Error('Failed to fetch genres');
        }

        setGenres(response.data.genres);
      } catch (error) {
        console.error('Error fetching genres:', error.message);
      }
    };

    fetchMovieDetails();
    fetchGenres();
  }, [REACT_APP_API_KEY, movieId]);

  const getGenreName = (genreId) => {
    const genre = genres.find((g) => g.id === genreId);
    return genre ? genre.name : '';
  };

  return (
    <div>
      {movieDetails ? (
        <div>
          <h2>{movieDetails.title}</h2>
          <p>{movieDetails.overview}</p>
          <p>Genre: {getGenreName(movieDetails.genre_ids[0])}</p>
          <Link to={`/movies/${movieId}/cast`}>View Cast</Link>
          <Link to={`/movies/${movieId}/reviews`}>View Reviews</Link>
        </div>
      ) : (
        <div>Loading...</div>
      )}

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="cast" element={<Cast REACT_APP_API_KEY={REACT_APP_API_KEY} movieId={movieId} />} />
          <Route path="reviews" element={<Reviews REACT_APP_API_KEY={REACT_APP_API_KEY} movieId={movieId} />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default MovieDetails;
