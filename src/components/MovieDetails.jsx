import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './movieDetails.css'; 

const MovieDetails = ({ apiKey, baseImageUrl }) => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

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

  return (
    <div className="MovieDetails_div">
      {movieDetails ? (
        <div className="MovieDetails_content">
          <h2 className="MovieDetails_h2">{movieDetails.title}</h2>
          <img className="MovieDetails_img" src={`${baseImageUrl}${movieDetails.poster_path}`} alt={movieDetails.title} />
          <p className="MovieDetails_p">{movieDetails.overview}</p>
          {/* Dodaj inne informacje o filmie, jeśli są potrzebne */}
        </div>
      ) : (
        <div className="MovieDetails_loading">Loading...</div>
      )}
    </div>
  );
};

export default MovieDetails;
