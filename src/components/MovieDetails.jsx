import React, { useEffect, useState } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import './movieDetails.css';
import Cast from './Cast';
import Reviews from './Reviews';

const MovieDetails = ({ apiKey, baseImageUrl }) => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isCastVisible, setIsCastVisible] = useState(false);
  const [isReviewsVisible, setIsReviewsVisible] = useState(false);
  const history = useHistory(); // Poprawione

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

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className="MovieDetails_container">
      {movieDetails ? (
        <div className="MovieDetails_content">
          <h2 className="MovieDetails_h2">
            {movieDetails.title} ({movieDetails.release_date})
          </h2>
          <img
            className="MovieDetails_img"
            src={`https://image.tmdb.org/t/p/w200${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />

          <p className="MovieDetails_title">
            <strong>Overview:</strong>
          </p>
          <p className="MovieDetails_overview">{movieDetails.overview}</p>

          <p className="MovieDetails_runtime">Runtime: {movieDetails.runtime} min</p>
          <p className="MovieDetails_info">Additional information:</p>
          <Link to="#" onClick={toggleCastVisibility}>
            Cast
          </Link>
          {isCastVisible && <Cast apiKey={apiKey} movieId={movieId} close={toggleCastVisibility} />}
          <p></p>
          <Link to="#" onClick={toggleReviewsVisibility}>
            Reviews
          </Link>
          {isReviewsVisible && (
            <Reviews apiKey={apiKey} movieId={movieId} close={toggleReviewsVisibility} />
          )}

          {/* Link "go back" */}
          <button className="MovieDetails_goBack" onClick={goBack}>
            Go Back
          </button>
        </div>
      ) : (
        <div className="MovieDetails_loading">Loading...</div>
      )}
    </div>
  );
};

export default MovieDetails;
