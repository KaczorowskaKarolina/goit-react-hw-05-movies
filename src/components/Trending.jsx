import React, { useEffect, useState } from 'react';

const Trending = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/all/day?api_key=264ec641025fff32d6f5c8134722997b`
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
  }, []);

  return (
    <div>
      <h2>Trending Movies</h2>
      {/* Display the list of trending movies */}
      {trendingMovies.map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </div>
  );
};

export default Trending;