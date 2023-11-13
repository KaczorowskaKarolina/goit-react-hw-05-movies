import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Trending = ({ apiKey }) => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch trending movies');
        }

        const data = await response.json();
        setTrendingMovies(data.results);
      } catch (error) {
        console.error('Error fetching trending movies:', error.message);
      }
    };

    fetchTrendingMovies();
  }, [apiKey]);

  return (
    <div>
      <h2>Trending Movies</h2>
      {trendingMovies.map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </div>
  );
};

export default Trending;