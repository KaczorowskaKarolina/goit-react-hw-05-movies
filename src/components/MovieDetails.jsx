import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './movieDetails.css';
import Cast from './Cast'; // Import komponentu Cast
import Reviews from './Reviews'; // Import komponentu Reviews

const MovieDetails = ({ apiKey, baseImageUrl }) => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isCastVisible, setIsCastVisible] = useState(false);
  const [isReviewsVisible, setIsReviewsVisible] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
        );

        if (response.status === 200) {
          setMovieDetails(response.data);
        }
      } catch (error) {
        console.error('Error fetching movie details:', error.message);
      }
    };

    fetchMovieDetails();
  }, [apiKey, movieId]);

  const toggleCastVisibility = () => {
    setIsCastVisible(!isCastVisible);
  };

  const toggleReviewsVisibility = () => {
    setIsReviewsVisible(!isReviewsVisible);
  };

  return (
    <div className="MovieDetails_div">
      {movieDetails ? (
        <div className="MovieDetails_content">
          <h2 className="MovieDetails_h2">{movieDetails.title}</h2>
          <img
            className="MovieDetails_img"
            src={`https://image.tmdb.org/t/p/w200${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
          <p className="MovieDetails_p">{movieDetails.overview}</p>
          <p className="MovieDetails_p">{movieDetails.tagline}</p>
          <p className="MovieDetails_p">{movieDetails.video}</p>
          <p className="MovieDetails_p">{movieDetails.vote_average}</p>
          <p className="MovieDetails_p">{movieDetails.vote_count}</p>
          <p className="MovieDetails_p">{movieDetails.status}</p>
          <p className="MovieDetails_p">{movieDetails.runtime}</p>
          <p className="MovieDetails_p">{movieDetails.release_date}</p>
          {/* Dodaj inne informacje o filmie, jeśli są potrzebne */}
          
          {/* Dodaj linki do Cast i Reviews */}
          <Link to="#" onClick={toggleCastVisibility}>Show Cast</Link>
          {isCastVisible && <Cast apiKey={apiKey} movieId={movieId} close={toggleCastVisibility} />}

          <Link to="#" onClick={toggleReviewsVisibility}>Show Reviews</Link>
          {isReviewsVisible && <Reviews apiKey={apiKey} movieId={movieId} close={toggleReviewsVisibility} />}
        </div>
      ) : (
        <div className="MovieDetails_loading">Loading...</div>
      )}
    </div>
  );
};

export default MovieDetails;
