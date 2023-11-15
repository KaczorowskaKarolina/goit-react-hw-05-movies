import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieDetails from './MovieDetails';

const Trending = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/trending/movie/week?api_key=apiKey'
        );

        if (response.status === 200) {
          setTrendingMovies(response.data.results);
        }
      } catch (error) {
        console.error('Error fetching trending movies:', error.message);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div>
      {trendingMovies.map((movie) => (
        <MovieDetails
          key={movie.id}
          apiKey="process.env.REACT_APP_API_KEY;"
          baseImageUrl="https://image.tmdb.org/t/p/w200"
          movieId={movie.id}
        />
      ))}
    </div>
  );
};

export default Trending;