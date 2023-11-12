// import React, { useState } from 'react';

// const Movies = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearch = async () => {
//     try {
//       const response = await fetch(
//         `https://api.themoviedb.org/3/search/movie?REACT_APP_API_KEY=${searchQuery}`
//       );

//       if (!response.ok) {
//         throw new Error('Failed to fetch search results');
//       }

//       const data = await response.json();
//       setSearchResults(data.results);
//     } catch (error) {
//       console.error('Error fetching search results:', error.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Search Movies</h2>
//       <input
//         type="text"
//         placeholder="Search movies..."
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>
//       {/* Display the search results */}
//       {searchResults.map((movie) => (
//         <div key={movie.id}>{movie.title}</div>
//       ))}
//     </div>
//   );
// };

// export default Movies;

import React, { useState } from 'react';
import axios from 'axios';

const Movies = ({ apiKey }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`
      );
      setSearchResults(response.data.results);
    } catch (error) {
      console.error('Error searching movies:', error.message);
    }
  };

  return (
    <div>
      <h2>Movies</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map((movie) => (
          <li key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
            <p>{movie.overview}</p>
            <p>Genre: {movie.genre_ids.join(', ')}</p>
            {/* Additional Information */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
