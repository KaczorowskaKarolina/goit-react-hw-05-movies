import React, { useState } from 'react';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=264ec641025fff32d6f5c8134722997b&query=${searchQuery}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch search results');
      }

      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      console.error('Error fetching search results:', error.message);
    }
  };

  return (
    <div>
      <h2>Search Movies</h2>
      <input
        type="text"
        placeholder="Search movies..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {/* Display the search results */}
      {searchResults.map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </div>
  );
};

export default Movies;